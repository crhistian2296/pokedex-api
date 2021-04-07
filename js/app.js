'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1, 150);
    fetchData(random);
})

//returns a integer wich values is between max and min parameters
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//prints card
const printCard = (pokemon) => {
    const flex = document.querySelectorAll('.flex');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);

    fragment.appendChild(clone);
    flex.appendChild(fragment);
}

//get petition => pokemon.json
const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
        printCard(data)
    } catch (error) {
        console.log(error);
    }
}