const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const separators = ['+', '-', '×', '÷'];

document.addEventListener('click', function(event) {
	const isButton = event.target.nodeName === 'BUTTON';

	if (!isButton) return;

	const equalsSymbol = document.getElementById('equals');
	let expression = document.getElementById('input-line');
	const expressionLength = expression.innerText.length;

	if (expressionLength >= 10) {
		alert('Number is too large!');
		return;
	}

	if((separators.some((sep) => expression.innerText.includes(sep))) && 
		(separators.includes(event.target.textContent))) {
		expression.innerText = calculateExpression(expression);
	}
		
	if (event.target !== equalsSymbol) {
		expression.innerText += event.target.textContent;
	} else {
		expression.innerText = calculateExpression(expression);
	}
});

function calculateExpression(expression) {
	for (let separator of separators) {
		if (!expression.innerText.includes(separator)) continue;

		let elements = expression.innerText.split(separator);

		switch (separator) {
			case '+':
				return add(Number(elements[0]), Number(elements[1]));
			case '-':
				return substract(Number(elements[0]), Number(elements[1]));
			case '×':
				return multiply(Number(elements[0]), Number(elements[1]));
			case '÷':
				return (divide(Number(elements[0]), Number(elements[1]))).toFixed(3);
			default:
				alert('Invalid value!');
		}
	}
}
