
import './Square.css'

export default function Square({color, name, pieceImage}){
    console.log(pieceImage)
    return(
        <div className={`${color} ${name} square` }>
            <img className='piece' src={pieceImage}/>
        </div>
    )
}
