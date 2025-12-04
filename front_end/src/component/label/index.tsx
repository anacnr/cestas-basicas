import type { LabelHTMLAttributes } from "react";
import './css/mobile.css'

interface PropsLabel extends LabelHTMLAttributes <HTMLLabelElement>{}

const Label = (props : PropsLabel) =>{
return(
    <label {...props}></label>
)
}

export { Label }
