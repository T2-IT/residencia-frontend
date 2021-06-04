(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

var cadastroSenha = document.getElementById("cadastroSenha");
var confirmarSenha = document.getElementById("confirmarSenha");

function validatePassword() {
  if (cadastroSenha.value != confirmarSenha.value) {
    confirmarSenha.setCustomValidity("Senha incompatível");
  } else {
    confirmarSenha.setCustomValidity("");
  }
}

cadastroSenha.onchange = validatePassword;
confirmarSenha.onkeyup = validatePassword;

var cadastroEmail = document.getElementById("cadastroEmail");
var cconfirmarEmail = document.getElementById("confirmarEmail");

function validateEmail() {
  if (cadastroEmail.value != confirmarEmail.value) {
    confirmarEmail.setCustomValidity("Senha incompatível");
  } else {
    confirmarEmail.setCustomValidity("");
  }
}

cadastroEmail.onchange = validateEmail;
confirmarSenha.onkeyup = validateEmail;

function Carousel(config) {
  this.container =
    typeof config.container === "string"
      ? document.querySelector(config.container)
      : config.container;

  this.itens =
    typeof config.itens === "string"
      ? this.container.querySelectorAll(config.itens)
      : config.itens;

  this.btnPrev =
    typeof config.btnPrev === "string"
      ? this.container.querySelector(config.btnPrev)
      : config.btnPrev;

  this.btnNext =
    typeof config.btnNext === "string"
      ? this.container.querySelector(config.btnNext)
      : config.btnNext;

  var _this = this;
  var _currentSlide = 0;

  init();

  function init() {
    var _show = _this.container.querySelectorAll(".show");

    Array.prototype.forEach.call(_show, function (sh) {
      sh.classList.remove("show");
    });
    _this.itens[0].classList.add("show");
    _this.btnNext.removeAttribute("style");
    _this.btnPrev.removeAttribute("style");

    addListeners();
  }

  function addListeners() {
    _this.btnNext.addEventListener("click", showNextSlide);
    _this.btnPrev.addEventListener("click", showPrevSlide);
  }

  function showNextSlide() {
    _currentSlide++;
    showSlide();
  }

  function showPrevSlide() {
    _currentSlide--;
    showSlide();
  }

  function showSlide() {
    var qtd = _this.itens.length;
    var slide = _currentSlide % qtd;
    slide = Math.abs(slide);

    _this.container.querySelector(".show").classList.remove("show");
    _this.itens[slide].classList.add("show");
  }
}
(function () {
  var $body = document.querySelector("body");

  $body.classList.add("js");

  var carouselImgs = new Carousel({
    container: ".laptop-slider .slideshow",
    itens: "figure",
    btnPrev: ".prev",
    btnNext: ".next",
  });

  var carouselQuotes = new Carousel({
    container: ".quote-slideshow",
    itens: "figure",
    btnPrev: ".prev",
    btnNext: ".next",
  });
})();
