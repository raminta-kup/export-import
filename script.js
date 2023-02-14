// import default (be riestiniu skliaustu)
// dynamic imports (su await import)

import { squaredNumber as squared, sum } from "./maths.js";

// import * as matematika from "./maths.js"

document.querySelector("button").addEventListener("click", () => {
    let number = document.getElementById("number-input").value
    alert(squared(number))
})

// matematika.squaredNumber()
// matematika.sum()

import multiplication from "./multi.js";

console.log(multiplication(2, 3))