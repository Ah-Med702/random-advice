let span = document.querySelector(".container span");
let result = document.querySelector(".container .result");
let btn = document.querySelector(".container .btn");

function fetchData() {
    let proId = Math.floor(Math.random() * 200);
    fetch(`https://api.adviceslip.com/advice/${proId}`).then((response) => {
        response.json().then((data) => {
            span.innerHTML = `ADVICE #${data.slip.id}`;
            result.innerHTML = `❝ ${data.slip.advice} ❞`;
        });
    });
}fetchData();

btn.addEventListener("click", () => {
    fetchData()
});