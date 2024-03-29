let c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0,
  c5 = 0,
  c6 = 0;
document.getElementById("card-button1").onclick = function () {
  if (c1 == 0) {
    if (window.innerWidth <= 700) {
      document.querySelector(".card1").style.height = "60vw";
      document.getElementById("card1").innerHTML =
        "Используйте надежные пароли и не используйте их повторно. Создайте сложные пароли, состоящие из комбинации букв, цифр и символов. Не используйте один и тот же пароль для нескольких аккаунтов. Лучше использовать менеджер паролей для хранения и генерации надежных паролей.";
      c1++;
      document.getElementById("card-button1").innerHTML = "Свернуть ->";
    } else {
      document.querySelector(".card1").style.height = "18vw";
      document.getElementById("card1").innerHTML =
        "Используйте надежные пароли и не используйте их повторно. Создайте сложные пароли, состоящие из комбинации букв, цифр и символов. Не используйте один и тот же пароль для нескольких аккаунтов. Лучше использовать менеджер паролей для хранения и генерации надежных паролей.";
      c1++;
      document.getElementById("card-button1").innerHTML = "Свернуть ->";
    }
  } else {
    if (window.innerWidth <= 700) {
      document.querySelector(".card1").style.height = "43vw";
      document.getElementById("card1").innerHTML =
        "Используйте надежные пароли и не используйте их повторно. Создайте сложные пароли, состоящие из комбинации букв, цифр и символов...";
      document.getElementById("card-button1").innerHTML = "Смотреть Далее ->";
      c1 = 0;
    } else {
      document.querySelector(".card1").style.height = "14vw";
      document.getElementById("card1").innerHTML =
        "Используйте надежные пароли и не используйте их повторно. Создайте сложные пароли, состоящие из комбинации букв, цифр и символов...";
      document.getElementById("card-button1").innerHTML = "Смотреть Далее ->";
      c1 = 0;
    }
  }
};
document.getElementById("card-button2").onclick = function () {
  if (c2 == 0) {
    if (window.innerWidth <= 700) {
      document.querySelector(".card2").style.height = "60vw";
      document.getElementById("card2").innerHTML =
        "Обновляйте программное обеспечение и антивирусное ПО. Периодически проверяйте наличие обновлений для всех установленных программ и операционной системы. Установите антивирусное программное обеспечение и регулярно сканируйте компьютер.";
      document.getElementById("card-button2").innerHTML = "Свернуть ->";
      c2++;
    } else {
      document.querySelector(".card2").style.height = "18vw";
      document.getElementById("card2").innerHTML =
        "Обновляйте программное обеспечение и антивирусное ПО. Периодически проверяйте наличие обновлений для всех установленных программ и операционной системы. Установите антивирусное программное обеспечение и регулярно сканируйте компьютер.";
      document.getElementById("card-button2").innerHTML = "Свернуть ->";
      c2++;
    }
  } else {
    if (window.innerWidth <= 700) {
      document.querySelector(".card2").style.height = "43vw";
      document.getElementById("card2").innerHTML =
        "Обновляйте программное обеспечение и антивирусное ПО. Периодически проверяйте наличие обновлений для всех установленных программ и операционной системы...";
      document.getElementById("card-button2").innerHTML = "Смотреть Далее ->";
      c2 = 0;
    } else {
      document.querySelector(".card2").style.height = "14vw";
      document.getElementById("card2").innerHTML =
        "Обновляйте программное обеспечение и антивирусное ПО. Периодически проверяйте наличие обновлений для всех установленных программ и операционной системы...";
      document.getElementById("card-button2").innerHTML = "Смотреть Далее ->";
      c2 = 0;
    }
  }
};
document.getElementById("card-button3").onclick = function () {
  if (c3 == 0) {
    if (window.innerWidth <= 700) {
      document.querySelector(".card3").style.height = "60vw";
      document.getElementById("card3").innerHTML =
        "Будьте осторожны при открытии вложений и ссылок. Не открывайте непонятные письма с вложениями или подозрительные ссылки. Особенно аккуратно относитесь к письмам от неизвестных отправителей, содержащих просьбы о предоставлении личной информации.";
      document.getElementById("card-button3").innerHTML = "Свернуть ->";
      c3++;
    } else {
      document.querySelector(".card3").style.height = "18vw";
      document.getElementById("card3").innerHTML =
        "Будьте осторожны при открытии вложений и ссылок. Не открывайте непонятные письма с вложениями или подозрительные ссылки. Особенно аккуратно относитесь к письмам от неизвестных отправителей, содержащих просьбы о предоставлении личной информации.";
      document.getElementById("card-button3").innerHTML = "Свернуть ->";
      c3++;
    }
  } else {
    if (window.innerWidth <= 700) {
      document.querySelector(".card3").style.height = "43vw";
      document.getElementById("card3").innerHTML =
        "Будьте осторожны при открытии вложений и ссылок. Не открывайте непонятные письма с вложениями или подозрительные ссылки...";
      document.getElementById("card-button3").innerHTML = "Смотреть Далее ->";
      c3 = 0;
    } else {
      document.querySelector(".card3").style.height = "14vw";
      document.getElementById("card3").innerHTML =
        "Будьте осторожны при открытии вложений и ссылок. Не открывайте непонятные письма с вложениями или подозрительные ссылки...";
      document.getElementById("card-button3").innerHTML = "Смотреть Далее ->";
      c3 = 0;
    }
  }
};
document.getElementById("card-button4").onclick = function () {
  if (c4 == 0) {
    if (window.innerWidth <= 700) {
      document.querySelector(".card4").style.height = "60vw";
      document.getElementById("card4").innerHTML =
        "Не передавайте личные данные по незащищенным каналам связи. Избегайте передачи личной информации через незащищенные Wi-Fi сети или открытые публичные сети. Лучше использовать VPN (виртуальную частную сеть) для обеспечения безопасности во время отправки конфиденциальной информации.";
      document.getElementById("card-button4").innerHTML = "Свернуть ->";
      c4++;
    } else {
      document.querySelector(".card4").style.height = "18vw";
      document.getElementById("card4").innerHTML =
        "Не передавайте личные данные по незащищенным каналам связи. Избегайте передачи личной информации через незащищенные Wi-Fi сети или открытые публичные сети. Лучше использовать VPN (виртуальную частную сеть) для обеспечения безопасности во время отправки конфиденциальной информации.";
      document.getElementById("card-button4").innerHTML = "Свернуть ->";
      c4++;
    }
  } else {
    if (window.innerWidth <= 700) {
      document.querySelector(".card4").style.height = "43vw";
      document.getElementById("card4").innerHTML =
        "Не передавайте личные данные по незащищенным каналам связи. Избегайте передачи личной информации через незащищенные Wi-Fi сети или открытые публичные сети...";
      document.getElementById("card-button4").innerHTML = "Смотреть Далее ->";
      c4 = 0;
    } else {
      document.querySelector(".card4").style.height = "14vw";
      document.getElementById("card4").innerHTML =
        "Не передавайте личные данные по незащищенным каналам связи. Избегайте передачи личной информации через незащищенные Wi-Fi сети или открытые публичные сети...";
      document.getElementById("card-button4").innerHTML = "Смотреть Далее ->";
      c4 = 0;
    }
  }
};
document.getElementById("card-button5").onclick = function () {
  if (c5 == 0) {
    if (window.innerWidth <= 700) {
      document.querySelector(".card5").style.height = "60vw";
      document.getElementById("card5").innerHTML =
        "Включите двухфакторную аутентификацию. Двухфакторная аутентификация добавляет дополнительный уровень безопасности к вашему аккаунту, требуя второй метод проверки вашей личности, помимо пароля. Это может быть код, отправленный на ваш мобильный телефон или электронную почту.";
      document.getElementById("card-button5").innerHTML = "Свернуть ->";
      c5++;
    } else {
      document.querySelector(".card5").style.height = "18vw";
      document.getElementById("card5").innerHTML =
        "Включите двухфакторную аутентификацию. Двухфакторная аутентификация добавляет дополнительный уровень безопасности к вашему аккаунту, требуя второй метод проверки вашей личности, помимо пароля. Это может быть код, отправленный на ваш мобильный телефон или электронную почту.";
      document.getElementById("card-button5").innerHTML = "Свернуть ->";
      c5++;
    }
  } else {
    if (window.innerWidth <= 700) {
      document.querySelector(".card5").style.height = "43vw";
      document.getElementById("card5").innerHTML =
        "Включите двухфакторную аутентификацию. Двухфакторная аутентификация добавляет дополнительный уровень безопасности к вашему аккаунту...";
      document.getElementById("card-button5").innerHTML = "Смотреть Далее ->";
      c5 = 0;
    } else {
      document.querySelector(".card5").style.height = "14vw";
      document.getElementById("card5").innerHTML =
        "Включите двухфакторную аутентификацию. Двухфакторная аутентификация добавляет дополнительный уровень безопасности к вашему аккаунту...";
      document.getElementById("card-button5").innerHTML = "Смотреть Далее ->";
      c5 = 0;
    }
  }
};
document.getElementById("card-button6").onclick = function () {
  if (c6 == 0) {
    if (window.innerWidth <= 700) {
      document.querySelector(".card6").style.height = "60vw";
      document.getElementById("card6").innerHTML =
        "Постоянно следите за безопасностью своих аккаунтов. Проверяйте активность входа в свои аккаунты, отслеживайте подозрительную активность и периодически меняйте пароли для обеспечения максимальной безопасности ваших личных данных.";
      document.getElementById("card-button6").innerHTML = "Свернуть ->";
      c6++;
    } else {
      document.querySelector(".card6").style.height = "18vw";
      document.getElementById("card6").innerHTML =
        "Постоянно следите за безопасностью своих аккаунтов. Проверяйте активность входа в свои аккаунты, отслеживайте подозрительную активность и периодически меняйте пароли для обеспечения максимальной безопасности ваших личных данных.";
      document.getElementById("card-button6").innerHTML = "Свернуть ->";
      c6++;
    }
  } else {
    if (window.innerWidth <= 700) {
      document.querySelector(".card6").style.height = "43vw";
      document.getElementById("card6").innerHTML =
        "Постоянно следите за безопасностью своих аккаунтов. Проверяйте активность входа в свои аккаунты, отслеживайте подозрительную активность...";
      document.getElementById("card-button6").innerHTML = "Смотреть Далее ->";
      c6 = 0;
    } else {
      document.querySelector(".card6").style.height = "14vw";
      document.getElementById("card6").innerHTML =
        "Постоянно следите за безопасностью своих аккаунтов. Проверяйте активность входа в свои аккаунты, отслеживайте подозрительную активность...";
      document.getElementById("card-button6").innerHTML = "Смотреть Далее ->";
      c6 = 0;
    }
  }
};

const advisestyle = document.getElementById("advise");
advisestyle.addEventListener("click", function () {
  if (window.innerWidth <= 700) {
    if (c1 == 1 || c2 == 1 || c3 == 1 || c4 == 1 || c5 == 1 || c6 == 1) {
      advisestyle.style.height = "215vw";
    } else {
      advisestyle.style.height = "160vw";
    }
  } else {
    if (c1 == 1 || c2 == 1 || c3 == 1 || c4 == 1 || c5 == 1 || c6 == 1) {
      advisestyle.style.height = "47vw";
    } else {
      advisestyle.style.height = "42vw";
    }
  }
});

if (localStorage.getItem("login") != null) {
  document.getElementById("user").innerHTML = localStorage.getItem("login");
} else {
  document.getElementById("user").innerHTML = "Войти / Зарегистрироваться";
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

// btn.onclick = fadeIn(block, 1000);
// let flag = true;
// btn.addEventListener("click", (e) => {
//   if (flag) {
//     fadeOut(block, 400);
//   }
// });
