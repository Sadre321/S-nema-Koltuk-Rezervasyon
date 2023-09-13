const amount = document.getElementById("amount");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const selectMovie = document.getElementById("movie");

const seats = document.querySelectorAll(".seat");
for (let i = 1; i < seats.length; i++) {
    seats[i].id = i;
}

let selectedSeats = [];
getSelectedSeats();

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("reserved")) {
        window.alert("Rezerve olani secemezsiniz!!!!");
    } else {
        e.target.classList.toggle("selected");
        calculateTo();
    }
});

selectMovie.addEventListener("change", (e) => {
    calculateTo();
    console.log("degisti");
});

function calculateTo() {
    let seats = container.querySelectorAll(".seat.selected");
    let seatNums = seats.length;
    count.textContent = seatNums;
    amount.textContent = seatNums * selectMovie.value;

    seats.forEach((seat) => {
        selectedSeats.push(seat.id);
    });
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}

function getSelectedSeats() {
    let s = JSON.parse(localStorage.getItem("selectedSeats"));

    if (s !== null && s.length > 0) {
        s.forEach((x) => {
            console.log(x);
            document.getElementById(x).classList.toggle("selected");
        });
    }
}
