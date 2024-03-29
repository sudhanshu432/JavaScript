function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // var timeString = hours + ":" + minutes + ":" + seconds;
    var timeString = `${hours} : ${minutes} : ${seconds}`;
    console.log(timeString);
  }
  
  const timeInterval = setInterval(displayTime, 3000);

// Output
//   "12:3:55"
//   "12:3:59"
//   "12:4:2"
//   "12:4:5"
//   "12:4:7"
//   "12:4:10"
