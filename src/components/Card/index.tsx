import './styles.css'
interface Icard{
    img: string,
    descriptionImg: string,
    title: string
}



export const Card: React.FC<Icard> = ({descriptionImg,img,title})=>{
    return(
        
        <div className="Card">
            <div className='bg-img'>
                <img src={img} alt={descriptionImg} />

            </div>
            <strong>{title}</strong>
        </div>
    )
}