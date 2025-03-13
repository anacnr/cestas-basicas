//Formulário para cadastrar o supermercado

const GroceyRegister = () =>{
    console.log("Pág.");
    
    return(
        <div>
            <form>      
                <label htmlFor="input-t">Coloque seu nome:</label>
                <input type="text" id="input-t"/>
                <input type="submit" value="Salvar" />
            </form>
        </div>
    )
}

export default GroceyRegister