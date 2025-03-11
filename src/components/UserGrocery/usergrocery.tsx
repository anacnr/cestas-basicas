//Esse arquivo servirá para que o componente receba da página de registro do supermercado o nome do mercado

import { ReactNode } from "react"

interface userGrocery{
    //Faz a tipagem do que vai receber
    company: string
    
}

const UserGrocery = ({company} : userGrocery) =>{
        return(
            <div><p>Nome da compania: {company}</p>
             
            </div>
        )
}

export default UserGrocery