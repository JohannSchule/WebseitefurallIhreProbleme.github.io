let burger = 0;
let cheese = 0;
let macbig = 0;
let chef = 0;

function Burger() {
    burger += 1;
    document.getElementById("burger").innerHTML = burger + " Burger";
}

function Cheese() {
    if (burger < 10) {
        document.getElementById("Knoopf").disable = true;
    } else {
        cheese += 1;
        burger -= 10;
        document.getElementById("burger").innerHTML = burger + " Burger";
    }
    document.getElementById("cheese").innerHTML = cheese + "/10";
}

function BigMac() {
    if (cheese < 10) {
        document.getElementById("beton").disable = true;
    } else {
        macbig += 1;
        cheese -= 10;
        document.getElementById("cheese").innerHTML = cheese + "/10";
    }
    document.getElementById("big").innerHTML = macbig + "/1";
}

function auto() {
    if (macbig < 10) {
        alert("Du hast nicht genug Big Macs. Click weiter!");
    } else {
        macbig -= 10;
        document.getElementById("big").innerHTML = macbig + "/1";
        startAutoClicker();
    }
}

function test() {
    macbig = 10;
    document.getElementById("big").innerHTML = macbig + "/1";
}

function startAutoClicker() {
    const Menge = 10;
    const dauer = 7500; 
    const clicker = document.getElementById('burgerbutton');

    function autoClick() {
        clicker.click();
    }

    const autoClickInterval = setInterval(autoClick, Menge);

    setTimeout(function() {
        clearInterval(autoClickInterval);
    }, dauer);
}

function earn(Amount) {
    burger += Amount;
    document.getElementById("burger").innerHTML = burger + " Burger"
}

function earncheese(Amount) {
    cheese += Amount;
    document.getElementById("cheese").innerHTML = cheese + "/10"
}

function earnbigmac(Amount) {
    macbig += Amount;
    document.getElementById("big").innerHTML = macbig + "/1"
}

function earnchefkoch(Amount) {
    chef += Amount;
    document.getElementById("chefkochcounter").innerHTML = chef;
    chefkochkochen()
}

function kiffen() {
    if (macbig < 1) {
        alert("Du hast nicht genug Big Macs. Click weiter!")
    } else {
        macbig -= 1;
        chef += 1;
        document.getElementById("clicker").innerHTML = chef + " Chefköche";
        chefkochkochen()
    }
    document.getElementById("big").innerHTML = macbig + "/1";
}

function chefkochkochen() {
    const menge = chef;
    setInterval(function() {
        burger += 1;
        document.getElementById("burger").innerHTML = burger + " Burger"
    }, 1000)
}