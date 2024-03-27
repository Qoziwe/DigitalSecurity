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

if (localStorage.getItem("login") != null) {
  document.getElementById("user").innerHTML = localStorage.getItem("login");
} else {
  document.getElementById("user").innerHTML = "Войти / Зарегистрироваться";
}

let inputrange = document.getElementById("inputrange");
inputrange.addEventListener("mousemove", function () {
  document.getElementById("strlen").innerHTML = inputrange.value;
});

let upcase = document.getElementById("upcase");
let lowcase = document.getElementById("lowcase");
let numbers = document.getElementById("numbers");
let spsymbols = document.getElementById("spsymbols");

function generatePassword() {
  document.getElementById("passwordoutput").value = "";
  var password = "";
  let choosenconditions = [];
  if (
    upcase.checked == false &&
    lowcase.checked == false &&
    numbers.checked == false &&
    spsymbols.checked == false
  ) {
    alert("Введите хотя бы одну характеристику");
  } else {
    if (upcase.checked == true) {
      choosenconditions[0] = 1;
    } else {
      choosenconditions[0] = "";
    }
    if (lowcase.checked == true) {
      choosenconditions[1] = 2;
    } else {
      choosenconditions[1] = "";
    }
    if (numbers.checked == true) {
      choosenconditions[2] = 3;
    } else {
      choosenconditions[2] = "";
    }
    if (spsymbols.checked == true) {
      choosenconditions[3] = 4;
    } else {
      choosenconditions[3] = "";
    }

    let choosenconditionsfilter = [];

    for (let i = 0; i < 4; i++) {
      if (choosenconditions[i] != "") {
        choosenconditionsfilter.push(choosenconditions[i]);
      }
    }
    // console.log(choosenconditionsfilter[random]);
    if (choosenconditionsfilter.length == 1) {
      document.querySelector(".inputform").style.borderBottom =
        "0.2vw solid red";
      document.getElementById("passwordstat").value = "Плохой пароль";
      document.getElementById("passwordstat").style.color = "red";
      localStorage.setItem("conditionstat", 1);
    }
    if (choosenconditionsfilter.length == 2) {
      document.querySelector(".inputform").style.borderBottom =
        "0.2vw solid orange";
      document.getElementById("passwordstat").value = "Ненадежный пароль";
      document.getElementById("passwordstat").style.color = "orange";
      localStorage.setItem("conditionstat", 2);
    }
    if (choosenconditionsfilter.length == 3) {
      document.querySelector(".inputform").style.borderBottom =
        "0.2vw solid yellow";
      document.getElementById("passwordstat").value = "Надежный пароль";
      document.getElementById("passwordstat").style.color = "yellow";
      localStorage.setItem("conditionstat", 3);
    }
    if (choosenconditionsfilter.length == 4) {
      document.querySelector(".inputform").style.borderBottom =
        "0.2vw solid lime";
      document.getElementById("passwordstat").value = "Отличный пароль";
      document.getElementById("passwordstat").style.color = "lime";
      localStorage.setItem("conditionstat", 4);
    }
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i < inputrange.value; i++) {
      const random = Math.floor(Math.random() * choosenconditionsfilter.length);
      var choose = choosenconditionsfilter[random];
      if (choose == 1) {
        const randomelement = getRandomInt(65, 90);
        // password.push(String.fromCharCode(randomelement));
        password = password + String.fromCharCode(randomelement);
        document.getElementById("passwordoutput").value =
          document.getElementById("passwordoutput").value +
          String.fromCharCode(randomelement);
      }
      if (choose == 2) {
        const randomelement = getRandomInt(97, 122);
        // password.push(String.fromCharCode(randomelement));
        password = password + String.fromCharCode(randomelement);
        document.getElementById("passwordoutput").value =
          document.getElementById("passwordoutput").value +
          String.fromCharCode(randomelement);
      }
      if (choose == 3) {
        const randomelement = getRandomInt(48, 57);
        // password.push(String.fromCharCode(randomelement));
        password = password + String.fromCharCode(randomelement);
        document.getElementById("passwordoutput").value =
          document.getElementById("passwordoutput").value +
          String.fromCharCode(randomelement);
      }
      if (choose == 4) {
        const randomelement = getRandomInt(33, 47);
        // password.push(String.fromCharCode(randomelement));
        password = password + String.fromCharCode(randomelement);
        document.getElementById("passwordoutput").value =
          document.getElementById("passwordoutput").value +
          String.fromCharCode(randomelement);
      }
    }
    // console.log(password);
    // console.log(choosenconditionsfilter[1]);
    // document.getElementById("passwordoutput").value = password;
    localStorage.setItem("randompassword", password);
    password = [];
  }
}
if (localStorage.getItem("randompassword") != null) {
  document.getElementById("passwordoutput").value =
    localStorage.getItem("randompassword");
  if (localStorage.getItem("conditionstat") == 1) {
    document.querySelector(".inputform").style.borderBottom = "0.2vw solid red";
    document.getElementById("passwordstat").value = "Плохой пароль";
    document.getElementById("passwordstat").style.color = "red";
  }
  if (localStorage.getItem("conditionstat") == 2) {
    document.querySelector(".inputform").style.borderBottom =
      "0.2vw solid orange";
    document.getElementById("passwordstat").value = "Ненадежный пароль";
    document.getElementById("passwordstat").style.color = "orange";
  }
  if (localStorage.getItem("conditionstat") == 3) {
    document.querySelector(".inputform").style.borderBottom =
      "0.2vw solid yellow";
    document.getElementById("passwordstat").value = "Надежный пароль";
    document.getElementById("passwordstat").style.color = "yellow";
  }
  if (localStorage.getItem("conditionstat") == 4) {
    document.querySelector(".inputform").style.borderBottom =
      "0.2vw solid lime";
    document.getElementById("passwordstat").value = "Отличный пароль";
    document.getElementById("passwordstat").style.color = "lime";
  }
} else {
  document.getElementById("passwordoutput").value = "";
}

function copyPassword() {
  var content = document.getElementById("passwordoutput").value;
  navigator.clipboard.writeText(content);
  document.getElementById("passwordstat").value = "Скопировано";
}
