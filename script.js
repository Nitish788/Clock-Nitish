"use stict";

//                                                   Analog

const analog = document.querySelector(".clockday");
const hr = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");
const btnDark = document.querySelector(".dark");
setInterval(function() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hrRotation = 30 * hour + minute / 2 + second / 120;
    const minRotation = 6 * minute + second / 10;
    const secRotation = 6 * second;
    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}, 1000);

//                                                  Digital

const digital = document.querySelector(".clocknight");
const hou = document.querySelector("#hour");
const mint = document.querySelector("#minute");
const seco = document.querySelector("#second");
const dot = document.querySelector("#dot");
const btnLight = document.querySelector(".light");
const body = document.querySelector("body");
const labelDay = document.querySelector(".day");
const am_pm = document.querySelector(".ampm");

const option = {
    day: "numeric",
    weekday: "long",
    month: "short",
    year: "numeric",
};

setInterval(function() {
    const date = new Date();
    const hour = `${date.getHours()}`.padStart(2, 0);
    const minute = `${date.getMinutes()}`.padStart(2, 0);
    const second = `${date.getSeconds()}`.padStart(2, 0);

    hou.textContent = hour;
    mint.textContent = minute;
    seco.textContent = second;
    if (second % 2 === 0) {
        dot.style.opacity = 0;
    } else {
        dot.style.opacity = 100;
    }
    if (hour == 12) {
        am_pm.textContent = "PM";
    } else if (hour > 12) {
        am_pm.textContent = "PM";
        hou.textContent = String(hour - 12).padStart(2, 0);
    } else {
        am_pm.textContent = "AM";
    }
    labelDay.textContent = new Intl.DateTimeFormat(
        navigator.language,
        option
    ).format(date);
}, 1000);

btnDark.addEventListener("click", function() {
    analog.classList.add("hidden");
    digital.classList.remove("hidden");
    body.style.background = "#061116";
});

btnLight.addEventListener("click", function() {
    digital.classList.add("hidden");
    analog.classList.remove("hidden");
    body.style.background = "#eeeeee";
});