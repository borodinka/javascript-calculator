const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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
		
	if (event.target !== equalsSymbol) {
		expression.innerText += event.target.textContent;
	} else {
		const separators = ['+', '-', '×', '÷'];
		for (i of separators) {
			if (!expression.innerText.includes(i)) continue;
				let elements = expression.innerText.split(i);

			switch (i) {
				case '+':
					expression.innerText = add(Number(elements[0]), Number(elements[1]));
					break;
				case '-':
					expression.innerText = substract(Number(elements[0]), Number(elements[1]));
					break;
				case '×':
					expression.innerText = multipl(Number(elements[0]), Number(elements[1]));
					break;
				case '÷':
					expression.innerText = (divide(Number(elements[0]), Number(elements[1]))).toFixed(3);
					break;
				default:
					alert('Invalid value!');
			}
		}
	}
});

