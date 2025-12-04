import type { ButtonHTMLAttributes } from "react";

interface PropsButton extends ButtonHTMLAttributes <HTMLButtonElement>{}

const Button = (props : PropsButton) =>{
    return(
        <button {...props}></button>
    )
}

export { Button }