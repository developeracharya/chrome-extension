const counter = document.getElementById("counter");
const startBtn = document.getElementById("start-btn");
let time = 0;
let second = 00;
let minute = 00;
let hour = 00;
let intervalId;
let isCounting = false;
let isTabActive = false;
const timeCalc = (inputTime, factor) => {
  reqTime = (inputTime - (inputTime % factor)) / factor;
  if (reqTime % factor < 10) {
    return `0${reqTime % factor}`;
  } else {
    return reqTime % factor;
  }
};

const startCount = () => {
  time++;
  if (time % 60 < 10) {
    second = `0${time % 60}`;
  } else {
    second = time % 60;
  }
  minute = timeCalc(time, 60);
  hour = timeCalc(time, 3600);
  counter.innerText = `${hour}:${minute}:${second}`;
  if (time % 10800 == 0) {
    alert("PLEASE TAKE WATER");
  }
};

// chrome.tabs.query({}, () => {

// })

// console.log(window.isTabActive);
startBtn.addEventListener("click", () => {
  if (!isCounting) {
    intervalId = setInterval(startCount, 1000);
    isCounting = true;
  }
});

// const retrive = (hour, minute, second) => {
//   counter.innerText = `${hour % 24}:${minute % 60}:${second % 60}`;
// };
