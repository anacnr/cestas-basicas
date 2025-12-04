import type { FormHTMLAttributes } from "react";
import './css/mobile.css'

interface PropsForm extends FormHTMLAttributes<HTMLFormElement> {}

const Form = (props : PropsForm) =>{
    return(
        <form {...props}>{props.children}</form> //Atributos + nó(props.children)
    )
}

export {Form}