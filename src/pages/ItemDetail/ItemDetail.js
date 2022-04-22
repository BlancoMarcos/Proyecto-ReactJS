//Firebase
import { doc, getDoc } from "firebase/firestore";

//Services
import database from "../../services/FirebaseConfig";

//React
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Context
import CartContext from "../../Context/CartContext";

//Components
import ItemCount from "../../components/Main/ItemCount/ItemCount";

//Biblioteca
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { useContext } from "react";

//Estilos
import './ItemDetail.css'

const DetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const getProduct = async() => {
        const docRef = doc(database, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let data = docSnap.data()
            data.id = docSnap.id
            setData(data)
          } else {
            console.log("No such document!");
            navigate('/error')
          }
    }

    useEffect( () => {
        getProduct()
    }, [id])


    const [productQuantity, setProductQuantity] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const {addProductToCart} = useContext(CartContext);
    
    const onAdd = (e, count) => {
        if(!!e & productQuantity<1){
            setProductQuantity(count);
        }
    }
    useEffect(()=>{
        if(productQuantity>0){
            setMostrarItemCount(false);
            addProductToCart(data, productQuantity);
        }
    },[productQuantity]) 
    
    return(
        <Container> 
            <div className="cardDetail">
                <div className="btnCard">
                    <img className="imgCard" src={`../${data.image}`} alt={data.title}></img>
                </div>
                <div className="mainItemDetail__details">
                    <Box>
                        <CardContent>
                            <Typography className="titleCard" component="div" variant="h4">
                                {data.title}
                            </Typography>
                            <Typography className="priceCard" variant="h6" color="text.primary" component="div">
                                $ {data.price}
                            </Typography>
                            <Typography className="textCard" variant="h6" color="text.primary" component="div">
                                {data.description}
                            </Typography>
                            <Typography className="stockCard" variant="p" color="text.secundary" component="div">
                                Artículos disponibles: {data.stock}
                            </Typography>
                            {mostrarItemCount ?(
                                <ItemCount stock={data.stock} initial={1} action={onAdd}/>
                                    ):( <Link className="btnBuy" to="/cart">
                                            <div className="buttonBuy">
                                                <Button variant="contained" color="success">Finalizar Compra</Button>
                                            </div> 
                                        </Link>
                                    )
                            }
                        </CardContent>
                    </Box>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage