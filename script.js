let op1 = '';
let op2 = '';
let operator = '';

function calculate(op1, operator, op2) {
    if (operator === '+') {
        return +op1 + +op2;
    } else if (operator === '-') {
        return op1 - op2;
    } else if (operator === '÷') {
        return op1 / op2;
    } else if (operator === '×') {
        return op1 * op2;
    }
}


let td = document.getElementsByTagName('td');
let display = document.getElementById('work');
for (let i = 1; i < td.length; i ++) {
    td[i].addEventListener('click', function () {
        let value = td[i].innerText;

        if (value === 'del') {
            display.innerText = display.innerText.slice(0, -1);
            value = '';

            if (op2) {
                op2 = op2.slice(0, -1);
            } else if (operator) {
                operator = '';
            } else if (op1) {
                op1 = op1.slice(0, -1);
            }
        } else if (value === 'c') {
            display.innerHTML = '';
            op1 = '';
            op2 = '';
            operator = '';
            value = '';
        } else if (!op2 && value !== '-' && value !== '+' && value !== '÷' && value !== '×' && !operator) {
            op1 += value;
        } else if (op1 && !op2 && (value === '-' || value === '+' || value === '÷' || value === '×')) {
            operator = value;
        } else if (op1 && operator && value !== '=') {
            op2 += value;
        } else if (value === '=' && op1 && operator && op2) {
            display.innerText = calculate(op1, operator, op2);
            op1 = display.innerText;
            op2 = '';
            value = '';
        }

        display.innerText += value;

    });
}




