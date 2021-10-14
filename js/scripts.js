const userOperation = prompt('Какую операцию вы желаете совершить?', '+, -, *, /')
const num1 = prompt(`Введите количество своих зубов`);
const num2 = prompt(`Введите количество зубов своей собаки`);
let result;
switch (userOperation) {
    case '+':
        result = Number(num1) + Number(num2);
    break;
    case '-':
        result = Number(num1) - Number(num2);
    break;
    case '*':
        result = Number(num1) * Number(num2);
    break;
    case '/':
        result = Number(num1) / Number(num2);
    break;
}
alert(`${num1} ${userOperation} ${num2} = ${result}`);