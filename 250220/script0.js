const eyeIcon = document.querySelector(".main i");
const input = document.querySelector("input");

eyeIcon.addEventListener("click", () => {
  input.classList.toggle("active");

  if (input.classList.contains("active")) {
    input.type = "text";
    eyeIcon.classList = "fas fa-eye-slash";
  } else {
    input.type = "password";
    eyeIcon.classList = "fas fa-eye";
  }
});
