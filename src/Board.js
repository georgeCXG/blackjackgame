import React,{useState,useEffect} from 'react';
import Stats from './Stats';

const Board = ({user}) => {

    const [deckPack,setDeckPack] = useState({
        "A♠️":1 , "A♣️":1 , "A♥️":1 , "A♦️":1,
        "2♠️":2 , "2♣️":2 , "2♥️":2 , "2♦️":2,
        "3♠️":3 , "3♣️":3 , "3♥️":3 , "3♦️":3,
        "4♠️":4 , "4♣️":4 , "4♥️":4 , "4♦️":4,
        "5♠️":5 , "5♣️":5 , "5♥️":5 , "5♦️":5,
        "6♠️":6 , "6♣️":6 , "6♥️":6 , "6♦️":6,
        "7♠️":7 , "7♣️":7 , "7♥️":7 , "7♦️":7,
        "8♠️":8 , "8♣️":8 , "8♥️":8 , "8♦️":8,
        "9♠️":9 , "9♣️":9 , "9♥️":9 , "9♦️":9,
        "10♠️":10 , "10♣️":10 , "10♥️":10 , "10♦️":10,
        "J♠️":10 , "J♣️":10 , "J♥️":10 , "J♦️":10,
        "Q♠️":10 , "Q♣️":10 , "Q♥️":10 , "Q♦️":10,
        "K♠️":10 , "K♣️":10 , "K♥️":10 , "K♦️":10,
    });

    const [p1Hand,setP1Hand] = useState([]);
    const [p2Hand,setP2Hand] = useState([]);

    const [p1Points,setP1Points] = useState(0);
    const [p2Points,setP2Points] = useState(0);

    const [displayBtns,setDisplayBtns] = useState(true);
    const [backCardDisplay,setBackCardDisplay] = useState(false);

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const [money,setMoney] = useState(2500);


    useEffect(()=>{
        let counter = count1;
        const interval = setInterval(() => {
            if(counter >= p1Hand.length){
                clearInterval(interval);
            } else {
                setCount1(count1 => count1 + 1);
                counter++;
            }
        }, 100);
        return () => clearInterval(interval);

    },[p1Hand]);



    useEffect(()=>{
        let counter = count2;
        const interval = setInterval(() => {
            if(counter >= p2Hand.length){
                clearInterval(interval);
            } else {
                setCount2(count2 => count2 + 1);
                counter++;
            }
        }, 400);
        if(p2Hand.length >= 2){
            setBackCardDisplay(false);
        }
        return () => clearInterval(interval);

    },[p2Hand]);




    const outputP1Hand = p1Hand.slice(0,count1).map((i) => { return <img key={i} src={`../pack/${i}.png`} alt={i}/>});
    const outputP2Hand = p2Hand.slice(0,count2).map((i) => { return <img key={i} src={`../pack/${i}.png`} alt={i} />});
    

    return (
        <div className="container-board">
            <div className="board-player1">
                <div className="player1-outputs">
                    <h2>{user}</h2>
                    <h1><span>{p1Points}</span></h1>
                    <h3>Your money : {money} $</h3>
                </div>
                <div className="player1-pack">
                    {outputP1Hand}
                </div>
            </div>
            <hr/>
            <div className="board-player2">
                <h1>Dealer : <span>{p2Points}</span></h1>
                <div className="player2-pack">
                    {outputP2Hand}
                    {backCardDisplay && <img src="./pack/packback.png" alt="packback"/>}
                </div>
            </div>
            <Stats setMoney={setMoney} money={money} setBackCardDisplay={setBackCardDisplay} displayBtns={displayBtns} setDisplayBtns={setDisplayBtns} p2Hand={p2Hand} setP2Hand={setP2Hand} p2Points={p2Points} setP2Points={setP2Points} p1Points={p1Points} setP1Points={setP1Points} setP1Hand={setP1Hand} p1Hand={p1Hand} deckPack={deckPack}  setDeckPack={setDeckPack}/>
        </div>
    )
}

export default Board
