import React,{useState} from 'react';
import Play from './Play';
import Place from './Place';

const Stats = ({money,setMoney,setBackCardDisplay,setDisplayBtns,displayBtns,p2Hand,setP2Hand,p2Points,setP2Points,p1Points,setP1Points,p1Hand,setP1Hand,deckPack,setDeckPack}) => {

    const [outputPlay,setOutputPlay] = useState('');
    const [displayOutput,setDisplayOutput] = useState(false);
    const [betValue,setBetValue] = useState();
    const [displayPlay,setDisplayPlay] = useState(false);
    const [displayReplay,setDisplayReplay] = useState(false);

    if(outputPlay.length > 1){
        setTimeout(() => {
            setTimeout(() => {
                setDisplayOutput(true);
                setDisplayReplay(true);
            }, 1000);
            setDisplayBtns(true);
        }, [p1Hand],[p2Hand]);
    }
    
    
    return (
        <div className="container-stats">
            <h1>{displayOutput && outputPlay}</h1>
            {(displayPlay && outputPlay.length < 1) && <h1>Playing on: {betValue}$ </h1>}
            <div className="stats-display">
                    {displayPlay && <Play betValue={betValue} setMoney={setMoney} money={money} setDisplayReplay={setDisplayReplay} setBackCardDisplay={setBackCardDisplay} displayBtns={displayBtns} setDisplayBtns={setDisplayBtns} setOutputPlay={setOutputPlay} outputPlay={outputPlay} p2Hand={p2Hand} setP2Hand={setP2Hand} p2Points={p2Points} setP2Points={setP2Points} p1Points={p1Points} setP1Points={setP1Points} p1Hand={p1Hand} setP1Hand={setP1Hand} deckPack={deckPack} setDeckPack={setDeckPack} displayReplay={displayReplay} setDisplayPlay={setDisplayPlay}/>}
                    {!displayPlay && <Place setDisplayReplay={setDisplayReplay} setBetValue={setBetValue} setDisplayPlay={setDisplayPlay}/>}
            </div>
        </div>
    )
}

export default Stats
