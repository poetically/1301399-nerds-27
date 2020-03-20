var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us-pop-up");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameApplicant = popup.querySelector("[name=name");
var emailApplicant = popup.querySelector("[name=email]");
var commentApplicant = popup.querySelector("[name=comment]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.remove("write-us-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameApplicant.value || !emailApplicant.value || !commentApplicant.value) {
    evt.preventDefault();
    popup.classList.add("write-us-error");
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    }
  }
});
