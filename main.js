let warna = [
    'rgb(255, 0, 0)',
    'rgb(255, 165, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 128, 0)',
    'rgb(0, 0, 255)',
    'rgb(75, 0, 130)'
];
let cobaLagi = [
    "Try again",
    "Cmon",
    "One more time",
    "Arrgggghhhhhh",
    "Ganbatte",
    "coba lagi"
];
let kotak = document.querySelectorAll(".kotak");
let guess = document.querySelector("#guess");
let chosen = warna[Math.floor(Math.random()*6)];
let alert1 = document.querySelector("#alert1");
let h2 = document.querySelector("h2");
// console.log(chosen);

guess.textContent = chosen;

for (let i = 0; i < kotak.length; i++) {
    kotak[i].style.backgroundColor = warna[i];
    kotak[i].addEventListener("click", function() {
        // alert(this.style.backgroundColor);
        let click = this.style.backgroundColor;
        if (click === chosen) {
            // alert("True");
            alert1.textContent = "Correct";
            alert1.style.color = "green";
            correctColor(click);
            h2.style.color = chosen;
        } else {
            // alert("False");
            this.style.backgroundColor = "rgb(4, 7, 47)";
            alert1.textContent = cobaLagi[i];
            alert1.style.color = "red";
        }
    });
}

function correctColor(chosen) {
    for (let i = 0; i < kotak.length; i++) {
        kotak[i].style.backgroundColor = chosen;
    }
}