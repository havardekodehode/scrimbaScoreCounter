let homeScoreEl = document.getElementById("homeScore");
let awayScoreEl = document.getElementById("awayScore");
let homeScore = 0;
let awayScore = 0;

function homeScorePlus() {
  homeScore++;
  homeScoreEl.innerText = homeScore;
}

function homeScoreMinus() {
  if (homeScore <= 0) {
  } else {
    homeScore--;
    homeScoreEl.innerText = homeScore;
  }
}

function awayScorePlus() {
  awayScore++;
  awayScoreEl.innerText = awayScore;
}

function awayScoreMinus() {
  if (awayScore <= 0) {
  } else {
    awayScore--;
    awayScoreEl.innerText = awayScore;
  }
}

function newGame() {
  homeScore = 0;
  awayScore = 0;
  timer = true;
  stopWatch();
}

let count = 00;
let hour = 00;
let minute = 00;
let second = 00;

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    //document.getElementById("min").innerHTML = secString;

    setTimeout(stopWatch, 10);
  }
}
