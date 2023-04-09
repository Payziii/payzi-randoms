//Рандомное число от ... до ...
function RandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min
}

//Рандомная строка из массива
function RandomArrayElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

module.exports = {
  RandomInt,
  RandomArrayElement
}