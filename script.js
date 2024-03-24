
let result = document.querySelector(".result");
console.log(result);



let numbers = document.querySelectorAll(".num");


numbers.forEach(element => {

    element.addEventListener("click", () => {

        result.value += element.value;

    })

});


let operators = document.querySelectorAll(".op");


operators.forEach(element => {

    element.addEventListener("click", () => {

        result.value = result.value + element.value;

    })

});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {

    let plus = document.querySelector(".plus")
    result.value = eval(result.value)
});




let cut = document.querySelector(".cut");
cut.addEventListener("click", () => {

    result.value = result.value.substring(0, result.value.length - 1)
});

