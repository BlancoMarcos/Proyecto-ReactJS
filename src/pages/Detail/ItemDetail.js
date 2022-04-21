import { Container, Link } from "@mui/material"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import database from "../../FirebaseConfig"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import ItemCount from "../../components/Main/ItemCount/ItemCount"
import { Button } from "@mui/material"
import { CardContent } from "@mui/material"

const DetailPage = (action) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const getProduct = async() => {
        const docRef = doc(database, "productos", id);
        const docSnap = await getDoc(docRef)
        
        if(docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
        } else {
            navigate(`./error`)
        }
    }

    useEffect( () => {
        getProduct()
    }, [id])

    return(
            
        <Container>
        <div className="cardDetail">
            <div className="btnCard">
                <img className="imgCard" src={`../${product.image}`} alt={product.title}></img>
            </div>
            <div className="mainItemDetail__details">
                <Box>
                    <CardContent>
                        <Typography className="titleCard" component="div" variant="h4">
                            {product.title}
                        </Typography>
                        <Typography className="priceCard" variant="h6" color="text.primary" component="div">
                            $ {product.price}
                        </Typography>
                        <Typography className="textCard" variant="h6" color="text.primary" component="div">
                            {product.description}
                        </Typography>
                        <Typography className="stockCard" variant="p" color="text.secundary" component="div">
                            Artículos disponibles: {product.stock}
                        </Typography>
                    </CardContent>
                </Box>
                
                {mostrarItemCount ?(
                    <ItemCount stock={product.stock} initial={1} className="itemCount"/>
                    ):(
                        <div className="spacebtn">
                            <Link className="btnBuy" to="/">
                                <Button variant="contained" color="success">Seguir Comprando</Button>
                            </Link>
                            <Link className="btnBuy" to="/cart">
                                <Button variant="contained" color="success">Finalizar Compra</Button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    </Container>


    )
}

export default DetailPage