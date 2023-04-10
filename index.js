//Рандомное число от ... до ...
function RandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min
}

//Рандомная строка из массива
function RandomArrayElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function RandomPassword(len){
    let password;
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
    for (var i = 0; i < len; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return password;
          }

module.exports = {
  RandomInt,
  RandomArrayElement,
  RandomPassword
}