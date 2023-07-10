let spanResultSpan = document.querySelector(".container span");
let spanPlaceholder = document.querySelector(
    ".container .span-placeholder"
);
let divResultSpan = document.querySelector(".container .result-div");
let divPlaceholder = document.querySelector(
    ".container .div-placeholder"
);
let btn = document.querySelector(".container .btn");

function fetchData() {
    let proId = Math.floor(Math.random() * 200);

    fetch(`https://api.adviceslip.com/advice/${proId}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            spanPlaceholder.style.display = "none";
            spanResultSpan.innerHTML = `ADVICE #${data.slip.id}`;

            divPlaceholder.style.display = "none";
            divResultSpan.innerHTML = data.slip.advice;
        });
}
fetchData();

btn.addEventListener("click", () => {
    spanPlaceholder.style.display = "block";
    spanResultSpan.innerHTML = "";

    divPlaceholder.style.display = "block";
    divResultSpan.innerHTML = "";
    fetchData();
});
