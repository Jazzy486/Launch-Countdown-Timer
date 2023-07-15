function updateCountdown() {
    var now = new Date();
    const targetDate = new Date("2023-12-31T20:59:59"); 
  
    var timeRemaining = targetDate - now;
  
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    
    var daysElement = document.getElementById("days");
    var daysBottomElement = document.getElementById("days-bottom");

    // Check if a day has ended
    if (hours === 23 && days > 0) {
        daysElement.classList.add("rotate");
        daysBottomElement.classList.add("rotate");
    } else {
        daysElement.classList.remove("rotate");
        daysBottomElement.classList.remove("rotate");
    }
    
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("days-bottom").textContent = days;
    
    var hoursElement = document.getElementById("hours");
    var hoursBottomElement = document.getElementById("hours-bottom");
    
    // Check if an hour has ended
    if (minutes === 59 && hours < 23) {
        hoursElement.classList.add("rotate");
        hoursBottomElement.classList.add("rotate");
    } else {
        hoursElement.classList.remove("rotate");
        hoursBottomElement.classList.remove("rotate");
    }
   
    document.getElementById("hours").textContent = hours;
    document.getElementById("hours-bottom").textContent = hours;

    
    var minutesElement = document.getElementById("minutes");
    var minutesBottomElement = document.getElementById("minutes-bottom");

    // Check if a minute has ended
    if (seconds === 59 && minutes < 59) {
        minutesElement.classList.add("countdown");
        minutesBottomElement.classList.add("countdown");
    } else {
        minutesElement.classList.remove("countdown");
        minutesBottomElement.classList.remove("countdown");
    }
    
    
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("minutes-bottom").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;
    document.getElementById("seconds-bottom").textContent = seconds;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);