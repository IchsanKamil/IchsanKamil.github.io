let warna = generateRandomColor(6);
// try to input font awesome expression
let cobaLagi = [
    "Try again :)",
    "C'mon XD",
    "One more time :(",
    "Arrgggghhhhhh +_+",
    "Okay last -,-"
];
let kotak = document.querySelectorAll(".kotak");
let guess = document.querySelector("#guess");
let chosen = randomChosen();
let alert1 = document.querySelector("#alert1");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");
let x = 0;
let h1h2 = document.getElementById("h1h2");

// console.log(chosen);
guess.textContent = chosen;

for (let i = 0; i < kotak.length; i++) {
    kotak[i].style.backgroundColor = warna[i];
    kotak[i].addEventListener("click", function() {
        // alert(this.style.backgroundColor);
        let click = this.style.backgroundColor;
        if (click === chosen) {
            // alert("True");
            alert1.textContent = "Correct ^^";
            alert1.style.color = "green";
            correctColor(click);
            h1h2.style.background = chosen;
            x = 0
            // h2.style.color = chosen;

        } else {
            // alert("False");
            this.style.backgroundColor = "rgb(4, 7, 47)";
            alert1.textContent = cobaLagi[x];
            alert1.style.color = "red";
            x++;
        }
    });
}

function correctColor(chosen) {
    for (let i = 0; i < kotak.length; i++) {
        kotak[i].style.backgroundColor = chosen;
    }
}
function randomChosen() {
    return warna[Math.floor(Math.random()*warna.length)];
}
function generateRandomColor(num) {
    // add array
    let arr = [];
    // generate 256 colors
    for (let i = 0; i < num; i++) {
        let random = randomColor();
        arr.push(random);
        random = '';
    }
    return arr;
}
function randomColor() {
    // "rgb(r, g, b)"
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
button.addEventListener("click", function() {
    h1h2.style.background = "rgb(4, 7, 47)";
    alert1.textContent = "";
    warna = generateRandomColor(6);
    chosen = randomChosen();
    guess.textContent = chosen;
    for (let i = 0; i < kotak.length; i++) {
        kotak[i].style.backgroundColor = warna[i];
    };
});
