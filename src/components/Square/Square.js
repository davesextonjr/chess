import './Square.css'

export default function Square({color, name}){
    return(
        <div className={`${color} ${name} square` }>
            <img className='piece' src='images/black-bishop.svg'/>
        </div>
    )
}
