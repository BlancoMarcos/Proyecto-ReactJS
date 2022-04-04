import Container from '@mui/material/Container'

const ContactPage = () => {
    return(
        <Container>
            <form action="" name="client_info" method="GET">
                    <div>
                        <div>
                            <label for="name">Nombre: </label>
                        </div>
                        <div>
                            <input type="text" id="name" name="name" placeholder="Escriba su nombre"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="surname">Apellido: </label>
                        </div>
                        <div>
                            <input type="text" id="surname" name="surname" placeholder="Escriba su apellido"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="email">E-Mail: </label>
                        </div>
                        <div>
                            <input placeholder="correo@ejemplo.com"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea name="query" id="query" rows="10"
                                placeholder="Por favor, escriba su consulta."></textarea>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label class="text-white" for="update_works">¿Le gustaría recibir actualizaciones por correo electrónico sobre mis últimos trabajos?</label>
                            <input type="checkbox" id="update_works" name="update_works" value="1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="reset" value="Borrar"/>
                            <input type="submit" value="Enviar"/>
                        </div>
                    </div>
                </form>
        </Container>
    )
}

export default ContactPage