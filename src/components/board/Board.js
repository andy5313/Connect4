import React, { useState, useEffect } from "react";
import Square from '../square/Square';
import { traverse } from "@babel/core";
import Scoreboard from "../scoreboard/Scoreboard";

const Board = () => {
    const [name, setNickname] = useState("Andy");
    const [squares, setSquares] = useState(Array(42).fill(""));
    const [time, setTime] = useState({minutes : 0, seconds: 0});
    const [scoreboard, setScoreboard] = useState([]);
    const [win, setWin] = useState(false);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime((prev) => {
                const newSecond = prev.seconds + 1;
                if (newSecond ===  60){
                    return {
                        minutes: prev.minutes + 1,
                        seconds: 0
                    }
                } else {
                    return  {
                        minutes: prev.minutes,
                        seconds: prev.seconds + 1
                    }
                }
            })
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if (win){
            setScoreboard([...scoreboard, {name, moves, time}])
        }
    }, [win])

    const renderScoreboard = () => {
        return scoreboard.map((item) => {
            <Scoreboard name={item.name} score={item.moves} time={item.time}/>
        });
    };
    
    const renderSquares = () => {
        return squares.map((square, i) => {
            if (i % 7 === 0) {
                return (
                    <React.Fragment>
                        <div></div>
                        <Square handleClick={handleClick} key={i} index={i} status={square[i]} />
                    </React.Fragment> 
                )
            } 
            return <Square handleClick={handleClick} key={i} index={i} status={square[i]} />
        });
    }

    const handleClick = (index) => {
        if (squares[index % 7] === ''){
            const newArray = [...squares];
            while (index < 35){
                index += 7;
            }
            while (index >= 0 && squares[index] !== '') {
                index -= 7;
            }
            newArray[index] = 'red'
            setSquares(newArray)
        } 
    }

    return (
        <div>
            <h1>{time.minutes} : {time.seconds < 10 && 0}{time.seconds}</h1>
            {renderSquares()}
        </div>
    )
}

export default Board;
