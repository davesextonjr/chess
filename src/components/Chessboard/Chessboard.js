import Square from '../Square/Square'
import './Chessboard.css'

export default function Chessboard(){
    const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const verticalAxis = ['8', '7', '6', '5', '4', '3', '2', '1']
    const board = []

    //combine the arrays to make the chess board
    for(let i = 0; i < verticalAxis.length; i++){
        for(let j = 0; j< horizontalAxis.length; j++){

            //logic to determine whether the square is light or dark
            const number = i + j + 2
            const color = number % 2 !== 0 ? "dark-square" : "light-square"
            const name = horizontalAxis[j] + verticalAxis[i]

            //add each square to the board with its color and name
            board.push(<Square color={color} name={name}/>)
        }
    }

    return (
    <div id='chessboard'>
        {board}
    </div>
    )
}
