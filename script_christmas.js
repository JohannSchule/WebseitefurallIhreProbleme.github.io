const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();


if (day === 24 && month === 12) {
    const yes = document.createElement("h1");
    yes.textContent = "Yippie ja yeah";
    yes.classList.add("yeiner");
    ISso.appendChild(yes);
} else {
    const no = document.createElement("h1");
    no.textContent = "Nein.";
    no.classList.add("neiner");
    ISso.appendChild(no);
}

