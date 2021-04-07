'use strict'

console.log('hola nerdos');

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 151));