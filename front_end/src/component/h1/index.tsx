import type { ReactNode } from "react";
import './css/mobile.css'

const H1 = ( {children } : {children : ReactNode} ) =>{
    return( 
    <h1>{children}</h1> 
)
}

export {H1}