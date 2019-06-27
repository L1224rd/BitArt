const gel = element => document.querySelector(element);
const ballsArray = [];

const getColor = () => {
  const randomRGB = () => Math.floor(Math.random() * 256);
  return `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
}

const createBall = () => {
  const ballId = `ball${Math.floor(Math.random() * 2 ** 32)}${new Date().getTime()}`;
  ballsArray.push(ballId);
  gel('#balls').innerHTML += `<div ball-id="${ballId}" class="ball" style="background-color: ${getColor()};"></div>`;
  gel(`[ball-id=${ballId}]`).style.top = '300px';
  gel(`[ball-id=${ballId}]`).style.left = '700px';
}

const createBallInterval = setInterval(() => {
  createBall();
}, 500);

const ballInterval = setInterval(() => {
  ballsArray.forEach((ball) => {
    gel(`[ball-id=${ball}]`).style.top = `${+gel(`[ball-id=${ball}]`).style.top.split('px').join('') + Math.floor(Math.random() * 3) - 1}px`;
    gel(`[ball-id=${ball}]`).style.left = `${+gel(`[ball-id=${ball}]`).style.left.split('px').join('') + Math.floor(Math.random() * 3) - 1}px`;
  });
}, 1);