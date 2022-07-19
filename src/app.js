/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const arrayPalo = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const arrayFami = ["♦", "♥", "♠", "♣"];
var card = [];

function cardGen() {
  const objCarta = {};

  card[0] = Math.floor(Math.random() * arrayPalo.length);
  card[1] = Math.floor(Math.random() * arrayFami.length);

  if (card[1] == 0 || card[1] == 1) {
    card[2] = "red";
  } else {
    card[2] = "black";
  }

  objCarta.color = card[2];
  objCarta.valor = arrayPalo[card[0]];
  objCarta.pinta = arrayFami[card[1]];

  return objCarta;
}

window.onload = function() {
  let carta = cardGen();
  let pintaUp = document.querySelector("#pintaUp");
  let pintaDown = document.querySelector("#pintaDown");
  let valor = document.querySelector("#valor");
  pintaUp.innerText = carta.pinta;
  pintaDown.innerText = carta.pinta;
  valor.innerText = carta.valor;
  valor.style.color = carta.color;
  pintaUp.style.color = carta.color;
  pintaDown.style.color = carta.color;
};
