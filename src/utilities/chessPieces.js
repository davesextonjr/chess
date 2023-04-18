import { horizontalAxis, verticalAxis } from "./squareNaming"


export const chessPieceImages = {
    b: "images/black-bishop.svg",
    k: "images/black-king.svg",
    n: "images/black-knight.svg",
    p: "images/black-pawn.svg",
    q: "images/black-queen.svg",
    r: "images/black-rook.svg",
    B: "images/white-bishop.svg",
    K: "images/white-king.svg",
    N: "images/white-knight.svg",
    P: "images/white-pawn.svg",
    Q: "images/white-queen.svg",
    R: "images/white-rook.svg"
}

export function fenToSquares(fen) {
    const validPieces ="bknpqrBKNPQR"
    const occupiedSquares = {}

    const pieceArray = fen.split('/')
    let indexSub = 0
    for (let i = 0; i < verticalAxis.length; i++) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            let piece = pieceArray[i][j-indexSub]
            if(validPieces.includes(piece)){
                const name = horizontalAxis[j] + verticalAxis[i]
                occupiedSquares[name] = {piece, src:chessPieceImages[piece]}
            } else {
                indexSub++
            }
        }
        indexSub = 0
    }
    return occupiedSquares

}
