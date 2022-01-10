import { IonButton, IonHeader, IonIcon, IonImg, IonText, IonTitle, IonToolbar } from "@ionic/react"

import './styles.css'
import IconOpen from '../../assets/images/open.svg'
import Logo from '../../assets/images/Logo.png'

export const Header: React.FC = ()=>{
    return(
        <IonHeader className="Header">
                <IonImg src={Logo} />
                    
             
            <IonButton size="default" color="primary" type="button" className="btn-lgn">    
                     Entrar
            <img src={IconOpen} className="icon-open" alt="Icon Open" />     
            </IonButton>
          
        </IonHeader>
    )
}