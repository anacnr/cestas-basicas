import type { InputHTMLAttributes } from "react";
import './css/mobile.css'

interface PropsInput extends InputHTMLAttributes <HTMLInputElement> {}

const Input = ( props : PropsInput) =>{
    return(
        <input {...props} />
    )
}

export { Input }