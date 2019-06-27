const gel = element => document.querySelector(element);

const random = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

const createRandomBall = () => {
  const getRandomColor = () => {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  }

  gel('body').innerHTML += `<div class="ball" style="background-color: ${getRandomColor()}"></div>`;
}

const moveBall = (element) => {
  element.style.top = `${+getComputedStyle(element).top.split('px').join('') + random(-3, 3)}px`;
  element.style.left = `${+getComputedStyle(element).left.split('px').join('') + random(-3, 3)}px`;
}

setInterval(() => {
  [...document.querySelectorAll('.ball')].forEach((ball) => {
    moveBall(ball);
  });
}, 1);


setInterval(() => {
  createRandomBall();
}, 500);
