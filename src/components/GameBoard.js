import Square from './Square';
import {useState} from 'react';
const GameBoard = ()=>{
     
    // 2 states = current player, GameState
      const [currentPlayer,setCurrentPlayer] = useState("X");
      const [moves,setMoves] = useState(0);
      const [finalresult ,setFinalResult] = useState("t");
      const emptyGame = [
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
    ]
      const[gameState,setGameState] = useState(emptyGame)

     
      const executeMove = (index )=> {
          console.log(index);
           // set current mark
           // check new move;
        let newGameState = gameState;
        if( newGameState[index].value === null){
            newGameState[index].value = currentPlayer;
            setGameState(newGameState);
         // change current player
         let nextPlayerBe = currentPlayer === "X"? "O":"X";
         setCurrentPlayer(nextPlayerBe);
         console.table(gameState);
         let result = checkWinOrDraw();
         if(result !== false && result !== null){
            //  alert(`${result} wins..`);
            setFinalResult(result);
         };
        }
        
        let moveNumber = moves+1;
        setMoves(moveNumber);
        if(moveNumber === 9){
            alert("game draw");
        }
      }

     
      // check winning condition

      const checkWinOrDraw = ()=>{
        let win = false;

        if(gameState[0].value === gameState[1].value &&
            gameState[1].value === gameState[2].value){
                win = gameState[0].value;
            }
        else if(gameState[3].value === gameState[4].value &&
            gameState[5].value === gameState[5].value){
                win = gameState[3].value;
            }
        else if(gameState[6].value === gameState[7].value &&
            gameState[7].value === gameState[8].value){
                win = gameState[6].value;
            }
        else if(gameState[0].value === gameState[3].value &&
            gameState[3].value === gameState[6].value){
                win = gameState[0].value;
            }
        else if(gameState[1].value === gameState[4].value &&
            gameState[4].value === gameState[7].value){
                win = gameState[1].value;
            }
        else if(gameState[2].value === gameState[5].value &&
            gameState[5].value === gameState[8].value){
                win = gameState[2].value;
            }
        else if(gameState[0].value === gameState[4].value &&
            gameState[4].value === gameState[8].value){
                win = gameState[0].value;
            }
        else if(gameState[2].value === gameState[4].value &&
            gameState[4].value === gameState[6].value){
                win = gameState[2].value;
            }
                //if full draw
        
             return win;
              

      }
  
    

 
     if(finalresult === "t"){
        return (
        <>
        <div className ="col-md-12 col-12 text-center mb-3">
            <h2>Current Player:{currentPlayer}</h2>
            <button onClick = {e=>{setGameState(emptyGame)}}>Restart</button>
        </div>
        <div className ="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
            {gameState.map((singleP , key)=>(
                <Square key = {key} index = {key} gameState={gameState} executor = {executeMove}/>// here key is given to differentiate between 
                               // same repeating element key is the index number hear  
           ))}
        </div>
     </>);
     }
     else{
        return (<>
        <div className="text-center ress">
            <h2 className="winner" >
            {`${finalresult} win..`}
            </h2>
            <img src="https://previews.123rf.com/images/macrovector/macrovector1509/macrovector150900030/45163760-holiday-celebration-emblem-with-party-symbols-and-ribbon-vector-illustration.jpg" height="400px" width="400px" ></img>
        </div>
        </>)
     }
}
export default GameBoard;