import { IonIcon } from "@ionic/react"
import WhatsIcon from '../../assets/images/Whatsapp.svg'

import './styles.css'
export const ButtonFloat: React.FC = ()=>{
    return(
        <div className="btn-Whatsapp">
            <img src={WhatsIcon} alt="button whatsapp"/>
        </div>
    )
}