const span = document.getElementById("please-dont");

const fader = () => {
  title.innerHTML = "Aurelio Voltaire";
  button.style.display = "none";
};

const numberShow = () => {
  span.innerHTML = "Please Don't";
};

const fadeName = () => {
  const name = document.getElementById("name-text");
  name.classList.add("animate__animated", "animate__fadeIn");
};
