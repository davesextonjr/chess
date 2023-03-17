import './Chessboard.css'



export default function Chessboard(){
    const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const verticalAxis = ['8', '7', '6', '5', '4', '3', '2', '1']
    const board = []

    for(let i = 0; i < verticalAxis.length; i++){
        for(let j = 0; j< horizontalAxis.length; j++){
            const number = i + j + 2
            const lightOrDark = number % 2 !== 0 ? "dark-square" : "light-square"
            board.push(<div className={lightOrDark}>{horizontalAxis[j]}{verticalAxis[i]}</div>)
        }
    }

    return (
    <div id='chessboard'>
        {board}
    </div>
    )
}
