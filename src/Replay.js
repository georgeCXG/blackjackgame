import React from 'react'

const Replay = ({setDeckPack,setDisplayPlay,setDisplayReplay,setOutputPlay,setP2Hand,setP1Hand,setP1Points,setP2Points}) => {

    const test = () =>{
        setDisplayPlay(false);
        setDisplayReplay(false);
        setOutputPlay('');
        setP1Hand([]);
        setP2Hand([]);
        setP1Points(0);
        setP2Points(0);
        setDeckPack({
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
    }

    return (
        <div className="container-replay">
            <button className="replay-btn" onClick={test}>Replay</button>
        </div>
    )
}

export default Replay
