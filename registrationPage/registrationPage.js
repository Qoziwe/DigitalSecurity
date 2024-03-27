let login = document.getElementById("login");
let password = document.getElementById("password");
document.getElementById("signin").onclick = function () {
  if (login.value == "" || password.value == "") {
    alert("Пожалуйста введите логин или пароль");
  } else {
    if (login.value == localStorage.getItem("login")) {
      alert("Такое имя пользователя уже использовано");
    } else {
      localStorage.setItem("login", login.value);
      localStorage.setItem("password", password.value);
      fadeOut(block, 400, "../index.html");
    }
  }
};

if (localStorage.getItem("login") != "") {
  login.value = localStorage.getItem("login");
  password.value = localStorage.getItem("password");
}

const fadeIn = (el, timeout) => {
  // el.style.opacity = 0;
  el.style.opacity = 0;
  // el.style.display = display || "block";
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout, href) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = "none";
    window.location.href = href;
  }, timeout);
};

const block = document.querySelector("body");
const btn = document.getElementById("user");

window.addEventListener("load", function () {
  fadeIn(block, 1000);
});
