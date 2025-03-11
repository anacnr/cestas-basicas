//Cria função da página de cadastro do supermercado

const register = () =>{
    return (
        <div>
            <h1>Tela de cadastro</h1>
            <form action="#" method="post" encType="multitype/image" >
                <label htmlFor="img-register">Cadastre sua imagem</label>
                <input type="file" src="#" alt="Cadastro da imagem" id="img-register" accept="image/*"/>
                <button type="submit">Enviar</button>
        </form>
        </div>
    )
}

export default register