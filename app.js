const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');

function getTimeDifference(start, end) {
  // console.log(new Date().getTime());
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds,
  };
}

let timer = setInterval(() => {
  const startDate = new Date();
  const endDate = new Date('October 29, 2022 07:30:00 ');

  let timeDifferenceObj = getTimeDifference(startDate, endDate);

  timerDayEl.textContent = timeDifferenceObj.rDays;
  timerHourEl.textContent = timeDifferenceObj.rHours;
  timerMinEl.textContent = timeDifferenceObj.rMinutes;
  timerSecEl.textContent = timeDifferenceObj.rSeconds;
}, 1000);
