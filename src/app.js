/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoidx = Math.floor(Math.random() * who.length);
  let actionidx = Math.floor(Math.random() * action.length);
  let whatidx = Math.floor(Math.random() * what.length);
  let whenidx = Math.floor(Math.random() * when.length);

  return (
    who[whoidx] +
    " " +
    action[actionidx] +
    " " +
    what[whatidx] +
    " " +
    when[whenidx]
  );
};
