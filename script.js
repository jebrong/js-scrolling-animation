const boxes = document.querySelectorAll(".box");

const action = () => {
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().bottom < window.innerHeight) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
};

action();

window.addEventListener("scroll", () => {
  action();
});
