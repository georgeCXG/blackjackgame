import React from 'react';
import Replay from './Replay';

const Play = ({betValue,money,setMoney,setDisplayPlay,outputPlay,setBackCardDisplay,setDisplayBtns,displayBtns,setOutputPlay,p2Hand,setP2Hand,p2Points,setP2Points,setP1Points,setP1Hand,p1Hand,deckPack,p1Points,displayReplay,setDisplayReplay,setDeckPack}) => {

    
    const setHands = () =>{
        // Keys and values of objects
        const packName = Object.keys(deckPack);
        const packValue = Object.values(deckPack);

        // Generate randoms
        const randomize1 = parseInt(Math.random() * packName.length);
        const randomize2 = parseInt(Math.random() * packName.length);
        const randomize3 = parseInt(Math.random() * packName.length);

        // Array of hands & delete
        const randomsP1 = [packName[randomize1],packName[randomize2]];
        const randomsP2 = [packName[randomize3]];

        setP1Hand(packName.filter((deck)=> randomsP1.includes(deck)));
        delete deckPack[packName[randomize1]];
        delete deckPack[packName[randomize2]];

        setP2Hand(packName.filter((deck)=> randomsP2.includes(deck)));
        delete deckPack[packName[randomize3]];
        

        // Points 
        let pointsCardsP1 = [packValue[randomize1],packValue[randomize2]];
        const pointsCardsP2 = [packValue[randomize3]];

        if((packValue[randomize1] === 1) && (packValue[randomize2] === 10)){
            setP1Points(21);
            setOutputPlay("You Win!");
            setMoney(money + betValue);
            if(packValue[randomize3] === 1){
                setP2Points(11);
            } else {
                setP2Points(pointsCardsP2.reduce((t,i)=> t + i));
            }
        } else if ((packValue[randomize1] === 10) && (packValue[randomize2] === 1)){
            setP1Points(21);
            setOutputPlay("You Win!");
            setMoney(money + betValue);
            if(packValue[randomize3] === 1){
                setP2Points(11);
            } else {
                setP2Points(pointsCardsP2.reduce((t,i)=> t + i));
            }
        } else if ((packValue[randomize1] === 1) && (packValue[randomize2] === 1)){
            setP1Points(12);
            if(packValue[randomize3] === 1){
                setP2Points(11);
            } else {
                setP2Points(pointsCardsP2.reduce((t,i)=> t + i));
            }
        } else if ((packValue[randomize1] === 1) && (packValue[randomize2] !== 1)){
            setP1Points(11 + packValue[randomize2]);
            if(packValue[randomize3] === 1){
                setP2Points(11);
            } else {
                setP2Points(pointsCardsP2.reduce((t,i)=> t + i));
            }
        } else if ((packValue[randomize1] !== 1) && (packValue[randomize2] === 1)) {
            setP1Points(11 + packValue[randomize1]);
            if(packValue[randomize3] === 1){
                setP2Points(11);
            } else {
                setP2Points(pointsCardsP2.reduce((t,i)=> t + i));
            }
        } else {
            setP1Points(pointsCardsP1.reduce((t,i)=> t + i));
            if(packValue[randomize3] === 1){
                setP2Points(11);
            } else {
                setP2Points(pointsCardsP2.reduce((t,i)=> t + i));
            }
        }

        setDisplayBtns(false);
        setBackCardDisplay(true);
    }




    const setHit = () =>{
        // Keys and Values Objects
        const packName = Object.keys(deckPack);
        const packValue = Object.values(deckPack);

        // Randomize 
        const randomize = parseInt(Math.random() * packName.length);
        const randoms = [packName[randomize]];
        
        // Concat arrays and delete
        setP1Hand(p1Hand.concat(randoms));
        delete deckPack[packName[randomize]];
        

        // Points
        const pointsCards = packValue[randomize];

        if((p1Points === 10) && (packValue[randomize] === 1)){
            setP1Points(21);
            setOutputPlay("You win!");
            setMoney(money + betValue);
        } else if(((p1Hand[0].slice(0,1) === "A") && (p1Hand[1].slice(0,1) === "A")) && (packValue[randomize] < 9)){
            setP1Points(12 + packValue[randomize]);
        } else if(((p1Hand[0].slice(0,1) === "A") && (p1Hand[1].slice(0,1) === "A")) && (packValue[randomize] > 9)){
            setP1Points(2 + packValue[randomize]);
        } else if((p1Hand[0].slice(0,1) === "A") && (p1Hand[1].slice(0,1) !== "A")){
            if((p1Points + pointsCards) > 21){
                setP1Points((p1Points+pointsCards) - 10);
            }
            setP1Points(2 + packValue[randomize]);
        } else if((p1Hand[0].slice(0,1) !== "A") && (p1Hand[1].slice(0,1) === "A")){
            if((p1Points + pointsCards) > 21){
                setP1Points((p1Points+pointsCards) - 10);
            }
            setP1Points(2 + packValue[randomize]);
        } else {
            setP1Points(p1Points + pointsCards);
            if(p1Points+pointsCards > 21){
                setOutputPlay("You lost!");
                setMoney(money - betValue);
            } else if((p1Points + pointsCards) === 21){
                setOutputPlay("You win!");
                setMoney(money + betValue);
            }
        }
    }


    const generateHand = (random) =>{
        const packName = Object.keys(deckPack);
        const packValue = Object.values(deckPack);

        const newArray = [packName[random]];
        const newPoints = packValue[random];

        setP2Hand(p2Hand.concat(newArray));
        delete deckPack[packName[random]];
        
        if((p2Hand[1] === 1) && (p2Points !== 11)){
            setP2Points(11 + p2Points);
        } else if((p2Points === 10) && (p2Hand[2] === 1)){
            setP2Points(21);
            setOutputPlay("You lost!");
            setMoney(money - betValue);
        } else if((p2Points === 10) && (p2Hand[3] === 1)){
            setP2Points(21);
            setOutputPlay("You lost!");
            setMoney(money - betValue);
        } else if((p2Points === 10) && (p2Hand[4] === 1)){
            setP2Points(21);
            setOutputPlay("You lost!");
            setMoney(money - betValue);
        } else {
            setP2Points(p2Points + newPoints);
        }


        p2Points = p2Points + newPoints;
        p2Hand = p2Hand.concat(newArray);
    }


    const setStand = () =>{
        while(p2Points <= 17){
            const packName = Object.keys(deckPack);
            const randomGenerate = parseInt(Math.random() * packName.length);
            generateHand(randomGenerate);
        }

        if(p2Points > 21){
            setOutputPlay("You win!");
            setMoney(money + betValue);
        } else if (p1Points > p2Points){
            setOutputPlay("You win!");
            setMoney(money + betValue);
        } else if (p1Points === p2Points){
            setOutputPlay("Push!");
        } else if (p2Points > p1Points){
            setOutputPlay("You lost!");
            setMoney(money - betValue);
        }
    }



    
    return (
        <>
            {outputPlay < 1 && (displayBtns && <button onClick={setHands} className="deal">Deal</button>)}
            {!displayBtns && <button onClick={setHit}>Hit</button>}
            {!displayBtns && <button onClick={setStand}>Stand</button>}
            {outputPlay.length > 1 && (displayReplay && <Replay setDeckPack={setDeckPack} setDisplayPlay={setDisplayPlay} setDisplayReplay={setDisplayReplay} setOutputPlay={setOutputPlay} setP2Hand={setP2Hand} setP1Hand={setP1Hand} setP1Points={setP1Points} setP2Points={setP2Points}/>)}
        </>
    )
}

export default Play
