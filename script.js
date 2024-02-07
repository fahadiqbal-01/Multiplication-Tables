let input = document.querySelector("input")
let btn = document.querySelector("button")
let h1 = document.querySelector('h1')

btn.addEventListener("click", function() {
    h1.innerHTML = ''
    let ivalue = input.value;
    if(ivalue == "") {
    alert("Blank space error.");
} else {
    for (let i = 1; i <= 10; i++) {
        h1.innerHTML += (`${ivalue} x ${i} = ${ivalue * i} <br>`);
    }
}
})