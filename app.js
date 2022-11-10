const board = document.querySelector('.container');

const SQUARES_COUNT = 500;
const HEX_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

for (let i = 0; i < SQUARES_COUNT; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setRandomColor(square));
	square.addEventListener('mouseleave', () => setDefaultColor(square));

	board.append(square);
}

function setRandomColor(element) {
	let hex = '#';

	for (let i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * HEX_VALUES.length);
		hex += HEX_VALUES[index];
	}
	element.style.backgroundColor = hex;
	element.style.boxShadow = `0 0 2px ${hex}, 0 0 10px ${hex}`
}

function setDefaultColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}
