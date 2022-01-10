import { Card } from "../Card"
import './styles.css'

import HeartIcon from '../../assets/images/Heart.svg'
import ExamIcon from '../../assets/images/Quimic.svg'
import FinanceIcon from '../../assets/images/Money.svg'
import SthetoscopeIcon from '../../assets/images/Sthetoscope.svg'
import BandAidIcon from '../../assets/images/BandAid.svg'
import { ButtonFloat } from "../ButtonFloat"

const InfoCard = [
    {
        title: "Consultas",
        descriptionImg: "icon of stethoscope",
        img: SthetoscopeIcon
    },
    {
        title: "Exames Elaboratoriais",
        descriptionImg: "icon of quimic",
        img: ExamIcon
    },
    {
        title: "Procedimentos",
        descriptionImg: "icon of stethoscope",
        img: BandAidIcon
    },
    {
        title: "Exames Elaboratoriais",
        descriptionImg: "icon of stethoscope",
        img: HeartIcon
    },
    {
        title: "Consultas",
        descriptionImg: "Financiamento",
        img: FinanceIcon
    },
]
export const ListCard: React.FC = ()=>{
    return(
        <div className="Container-Card">
           {InfoCard.map(card=>(
               <Card img={card.img} descriptionImg={card.descriptionImg} title={card.title}/>

           ))}
           <ButtonFloat/>
        </div>
    )
}