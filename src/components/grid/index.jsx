import { useState } from "react";
import Scoreboard from "../scoreboard";

function Grid() {
    let turn = "X";
    let turnNumber = 0;
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);

    function disableButtons() {
        for (let i = 1; i <= 9; i++) {
            const valueAsString = i.toString();
            const button = document.getElementById(valueAsString);
            button.disabled = true;
        }
    }

    function checkForWin() {
        const winner = document.getElementById("winner");
        const space1 = document.getElementById("1").textContent;
        const space2 = document.getElementById("2").textContent;
        const space3 = document.getElementById("3").textContent;
        const space4 = document.getElementById("4").textContent;
        const space5 = document.getElementById("5").textContent;
        const space6 = document.getElementById("6").textContent;
        const space7 = document.getElementById("7").textContent;
        const space8 = document.getElementById("8").textContent;
        const space9 = document.getElementById("9").textContent;

        if (space1 === "X" && space2 === "X" && space3 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space1 === "X" && space5 === "X" && space9 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space4 === "X" && space5 === "X" && space6 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space7 === "X" && space8 === "X" && space9 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space3 === "X" && space5 === "X" && space7 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space1 === "X" && space4 === "X" && space7 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space2 === "X" && space5 === "X" && space8 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space3 === "X" && space6 === "X" && space9 === "X") {
            winner.textContent = "X's win!!";
            setXWins(xWins + 1);
            localStorage.setItem("xScore", xWins + 1);
            disableButtons();
        } else if (space1 === "O" && space2 === "O" && space3 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space1 === "O" && space5 === "O" && space9 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space4 === "O" && space5 === "O" && space6 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space7 === "O" && space8 === "O" && space9 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space3 === "O" && space5 === "O" && space7 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space1 === "O" && space4 === "O" && space7 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space2 === "O" && space5 === "O" && space8 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (space3 === "O" && space6 === "O" && space9 === "O") {
            winner.textContent = "O's win!!";
            setOWins(oWins + 1);
            localStorage.setItem("oScore", oWins + 1);
            disableButtons();
        } else if (turnNumber === 9) {
            winner.textContent = "Tie game!";
        }
    };

    function handleInput(e, id) {
        e.preventDefault();
        const space = document.getElementById(id);
        if (turn === "X") {
            space.textContent = "X";
            turn = "O";
        } else if (turn === "O") {
            space.textContent = "O";
            turn = "X";
        } 
        space.disabled = true;
        turnNumber++;
        checkForWin();
    }

    return (
        <>
            <section id="grid">
                <section id="top">
                    <button id="1" className="button" onClick={() => handleInput(event, "1")}>_</button>
                    <button id="2" className="button" onClick={() => handleInput(event, "2")}>_</button>
                    <button id="3" className="button" onClick={() => handleInput(event, "3")}>_</button>
                </section>
                <section id="middle">
                    <button id="4" className="button" onClick={() => handleInput(event, "4")}>_</button>
                    <button id="5" className="button" onClick={() => handleInput(event, "5")}>_</button>
                    <button id="6" className="button" onClick={() => handleInput(event, "6")}>_</button>
                </section>
                <section id="bottom">
                    <button id="7" className="button" onClick={() => handleInput(event, "7")}>_</button>
                    <button id="8" className="button" onClick={() => handleInput(event, "8")}>_</button>
                    <button id="9" className="button" onClick={() => handleInput(event, "9")}>_</button>
                </section>
                <p id="winner"></p>
            </section>
            <Scoreboard
            xWins={xWins}
            oWins={oWins}
            setOWins={setOWins}
            setXWins={setXWins}/>
        </>
    )
}

export default Grid;