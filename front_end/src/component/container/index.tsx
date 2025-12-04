import type { ReactNode } from "react"
import './css/mobile.css'

const Container = ({children} : {children: ReactNode}) =>{
    return(
        <div className="form_div">{children}</div>
    )
}

export { Container }