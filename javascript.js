const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

document.addEventListener('click', function(event) {
	const isButton = event.target.nodeName === 'BUTTON';

	if (!isButton) 
		return;

	const equalsSymbol = document.getElementById('equals');
	let expression = document.getElementById('input-line');
	const expressionLength = expression.innerText.length;

	if (expressionLength < 10) {
		if (event.target !== equalsSymbol) {
			expression.innerText += event.target.textContent;
		} else {
			const separators = ['+', '-', '×', '÷'];
			for (i of separators) {
				if (expression.innerText.includes(i)) {
					let elements = expression.innerText.split(i);
	
					switch (i) {
						case '+':
							expression.innerText = addition(Number(elements[0]), Number(elements[1]));
							break;
						case '-':
							expression.innerText = subtraction(Number(elements[0]), Number(elements[1]));
							break;
						case '×':
							expression.innerText = multiplication(Number(elements[0]), Number(elements[1]));
							break;
						case '÷':
							expression.innerText = (division(Number(elements[0]), Number(elements[1]))).toFixed(3);
							break;
						default:
							alert('Invalid value!');
					}
				}
			}
		}
	} else {
		alert('Number is too large!');
	}
});



