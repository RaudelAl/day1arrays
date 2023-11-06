
let myString = "hello WORLD!"

let int = 50;

let bool = true;

let myIntArray = [1, 2, 3, 4, 5,];

let myStrArray = ["pizza", "tacos", "chinease", "ccc", "bagels"];
let myMixedArray = ["tacos", 3, "hotdog", 6.13];
console.log(myIntArray);

myIntArray[0] = 98;
myIntArray[2] = false;
myIntArray[4] = "Arrays are cool";
console.log(myIntArray);

let twoDeeArray = [["kenneth", "Martinez", 3], ["jacob", "jacoozi", 5], ["jessie", "lamzon", 5]]

console.log(twoDeeArray);

console.log(twoDeeArray[0][0]);
console.log(twoDeeArray[1][1]);

const items = [[[]]];
items[0][0][0] = 5;
console.log(items);

let injectHere = document.getElementById("injectHere");
let btnshoe = document.getElementById("btnshoe");

btnshoe.addEventListener("click", function(e){
    injectHere.innerText = twoDeeArray[2][0];
})