const Xspieler = "x";
const Ospieler = "o";
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const box = document.querySelectorAll(".feld");
const spielfeld = document.getElementById("board");
const restart = document.getElementById("buttonreset");
let circleTurn;

starten();

restart.addEventListener("click", starten);

function starten() {
    circleTurn = false;
    box.forEach(cell => {
        cell.classList.remove(Xspieler);
        cell.classList.remove(Ospieler);
        cell.removeEventListener("click", Click);
        cell.addEventListener("click", Click, { once: true });
    });
    setBoardHoverClass();
}

function Click(e) {
    const cell = e.target;
    const currentClass = circleTurn ? Ospieler : Xspieler;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        setTimeout(() => endGame(false), 100);
    } else if (isDraw()) {
        setTimeout(() => endGame(true), 100);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        const meldung = document.getElementById("Winner");
        meldung.innerHTML = "Unentschieden";
        meldung.style.display = "block";
        setTimeout(function() {
            meldung.style.display = 'none';
        }, 3000);
    } else {
        const meldung = document.getElementById("Winner");
        meldung.innerHTML = (circleTurn ? "O" : "X") + ' hat gewonnen!';
        meldung.style.display = "block";
        setTimeout(function() {
            meldung.style.display = 'none';
        }, 3000);
    }
    starten();
}

function isDraw() {
    return [...box].every(cell => {
        return cell.classList.contains(Xspieler) || cell.classList.contains(Ospieler);
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    spielfeld.classList.remove(Xspieler);
    spielfeld.classList.remove(Ospieler);
    if (circleTurn) {
        spielfeld.classList.add(Ospieler);
    } else {
        spielfeld.classList.add(Xspieler);
    }
}

function checkWin(currentClass) {
    return win.some(combination => {
        return combination.every(index => {
            return box[index].classList.contains(currentClass);
        });
    });
}
