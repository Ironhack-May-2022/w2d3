/*
function greet() {
	console.log('hello 👋')
}

// setTimeout(greet, 2000)
console.log('timout triggered')
const id = setTimeout(function () {
	console.log('hello 👋')
}, 2000)

console.log('timout canceled')
clearTimeout(id)
*/

let counter = 1;
let timeoutId;
function callback() {
	console.log(counter)
	timeoutId = setTimeout(callback, 1000)
	counter++
	// stop the counter if it is higher than 3
	if (counter > 3) {
		clearTimeout(timeoutId)
		console.log('timer stopped 😱')
	}
}

// callback()

// a better way to do this is using setInterval

let i = 1;

setInterval(function () {
	console.log(i)
	i++
}, 1000)