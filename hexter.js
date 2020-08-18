const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const button = document.getElementById("=");
const solution = document.getElementById("solution");

A.value = 1;
B.value = 1;
C.value = 0;

button.addEventListener("click", () => {
    let a, b, c, x1, x2;
    a = A.value;
    b = B.value;
    c = C.value;

    if (b ** 2 - 4 * a * c < 0) {
        alert('There is no solution')
    } else {
        x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
        x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    
        solution.innerHTML = `x = ${x1}, ${x2}`
    }
});
