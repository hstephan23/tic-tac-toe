import { useEffect } from "react";

function Scoreboard(props) {
    useEffect(() => {
        const xScore = localStorage.getItem("xScore");
        const oScore = localStorage.getItem("oScore");
        if (xScore) {
            props.setXWins(parseInt(xScore));
        }
        if (oScore) {
            props.setOWins(parseInt(oScore));
        }
    }, []);


    function newGame () {
        const buttons = document.querySelectorAll(".button");
        const winner = document.querySelector("#winner");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].textContent = "_";
        }
        winner.textContent = "";
    }

    function clearScore () {
        localStorage.setItem("xScore", "0");
        localStorage.setItem("oScore", "0");
        props.setXWins(0);
        props.setOWins(0);
    }

    return (
        <section>
            <ul>
                <li className="list-item" id="xWin">X's win total: {props.xWins}</li>
                <li className="list-item" id="oWin">O's win total: {props.oWins}</li>
            </ul>
            <button onClick={() => newGame()}>NEW GAME</button>
            <button onClick={() => clearScore()}>CLEAR SCORE</button>
            
        </section>
    );
};

export default Scoreboard;