let spanResultSpan = document.querySelector(".container span .result");
let spanPlaceholder = document.querySelector(".container span .span-placeholder");
let divResultSpan = document.querySelector(".container .result-div .result");
let divPlaceholder = document.querySelector(".container .result-div .div-placeholder");
let btn = document.querySelector(".container .btn");

function fetchData() {

    divResultSpan.insertAdjacentElement("afterend", divPlaceholder);
    spanResultSpan.insertAdjacentElement("afterend", spanPlaceholder);

    let proId = Math.floor(Math.random() * 200);

    fetch(`https://api.adviceslip.com/advice/${proId}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const mySpan = document.createElement("div");
            mySpan.innerHTML = `ADVICE #${data.slip.id}`;

            const myElement = document.createElement("div");
            myElement.innerHTML = data.slip.advice;

            spanPlaceholder.replaceWith(mySpan);
            divPlaceholder.replaceWith(myElement);
        });
}
fetchData();

btn.addEventListener("click", () => {
    fetchData();
});
