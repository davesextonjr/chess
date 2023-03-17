import './Square.css'

export default function Square({color, name}){
    return(
        <div className={`${color} ${name}`}>
            {name}
        </div>
    )
}
