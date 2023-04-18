import Square from '../Square/Square'
import { horizontalAxis, verticalAxis } from '../../utilities/squareNaming'
import { fenToSquares } from '../../utilities/chessPieces'
import './Chessboard.css'
import { openingPosition } from '../../utilities/openingPosition'

export default function Chessboard(){
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
    const position = fenToSquares("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
    console.log(position)
    return (
    <div id='chessboard'>
        {board}
    </div>
    )
}
