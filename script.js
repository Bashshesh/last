const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Тыыыы моя кошечка! 😘";
  gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

  if (!document.querySelector('.extra-btn')) {
    const newButton = document.createElement('button');
    newButton.textContent = "Дальше!";
    newButton.className = 'extra-btn'; // Apply any specific class if needed
    newButton.onclick = function() {
      window.location.href = 'index2.html'; 
    };
    btnGroup.appendChild(newButton);
  }
});

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute'; // Ensure the button can move around
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
