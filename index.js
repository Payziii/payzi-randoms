//Рандомное число от ... до ...
function RandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min
}

module.exports = {
  RandomInt
}