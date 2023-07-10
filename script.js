let spanResultSpan = document.querySelector(".container span .result");
let spanPlaceholder = document.querySelector(
    ".container span .span-placeholder"
);
let divResultSpan = document.querySelector(".container .result-div .result");
let divPlaceholder = document.querySelector(
    ".container .result-div .div-placeholder"
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
