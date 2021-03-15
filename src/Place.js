import React from 'react';

const Place = ({setDisplayPlay,setBetValue,setDisplayReplay}) => {

    const placeBets = bet =>{
        switch(bet){
            case 100:
                setBetValue(100);
                setDisplayPlay(true);
                setDisplayReplay(false);
                break;
            case 250:
                setBetValue(250);
                setDisplayPlay(true);
                setDisplayReplay(false);
                break;
            case 500:
                setBetValue(500);
                setDisplayPlay(true);
                setDisplayReplay(false);
                break;
            case 1000:
                setBetValue(1000);
                setDisplayPlay(true);
                setDisplayReplay(false);
                break;
            default:
                console.log("Error");
        }
    }

    return (
        <div className="place1-container">
            <h2>Place your bets: </h2>
            <div className="sections">
                <div className="section1">
                    <button onClick={()=> placeBets(100)}>100$</button>
                    <button onClick={()=> placeBets(250)}>250$</button>
                    </div>
                <div className="section2">
                    <button onClick={()=> placeBets(500)}>500$</button>
                    <button onClick={()=> placeBets(1000)}>1000$</button>
                </div>
            </div> 
        </div>
    )
}

export default Place
