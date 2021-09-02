//These are the variables that connect with the elements in HTML by using querySelector
let reminder1 = document.querySelector("#textin1");
let reminder2 = document.querySelector("#textin2");
let reminder3 = document.querySelector("#textin3");
let reminder4 = document.querySelector("#textin4");
let reminder5 = document.querySelector("#textin5");
let reminder6 = document.querySelector("#textin6");
let reminder7 = document.querySelector("#textin7");
let reminder8 = document.querySelector("#textin8");
let btn1 = document.querySelector("#saveButton1");
let btn2 = document.querySelector("#saveButton2");
let btn3 = document.querySelector("#saveButton3");
let btn4 = document.querySelector("#saveButton4");
let btn5 = document.querySelector("#saveButton5");
let btn6 = document.querySelector("#saveButton6");
let btn7 = document.querySelector("#saveButton7");
let btn8 = document.querySelector("#saveButton8");
 let reminder1Get = localStorage.getItem("theReminder1");
 let reminder2Get = localStorage.getItem("theReminder2");
 let reminder3Get = localStorage.getItem("theReminder3");
 let reminder4Get = localStorage.getItem("theReminder4");
 let reminder5Get = localStorage.getItem("theReminder5");
 let reminder6Get = localStorage.getItem("theReminder6");
 let reminder7Get = localStorage.getItem("theReminder7");
 let reminder8Get = localStorage.getItem("theReminder8");

 let today = moment()
 
 //This sintax displays the date into the header jumbotron by using moment method
 let dateDisplay = document.querySelector("#currentDay")
dateDisplay.textContent = moment().format('MMMM Do YYYY');

//The if statements below tells JS to change the color of the textarea background 
//depending on the hour
if (today.hour() === 8) {
    reminder1.style.background = "red"
} else if (today.hour() < 8) {
    reminder1.style.background = "green"
}

if (today.hour() === 9) {
    reminder2.style.background = "red"
} else if (today.hour() < 9) {
    reminder2.style.background = "green"
}

if (today.hour() === 10) {
    reminder3.style.background = "red"
} else if (today.hour() < 10) {
    reminder3.style.background = "green"
}

if (today.hour() === 11) {
    reminder4.style.background = "red"
} else if (today.hour() < 11) {
    reminder4.style.background = "green"
}

if (today.hour() === 12) {
    reminder5.style.background = "red"
} else if (today.hour() < 12) {
    reminder5.style.background = "green"
}

if (today.hour() === 13) {
    reminder6.style.background = "red"
} else if (today.hour() < 13) {
    reminder6.style.background = "green"
}

if (today.hour() === 14) {
    reminder7.style.background = "red"
} else if (today.hour() < 14) {
    reminder7.style.background = "green"
}

if (today.hour() === 15) {
    reminder8.style.background = "red"
} else if (today.hour() < 15) {
    reminder8.style.background = "green"
}

//The following eventListeners tell the functions to save the textarea value
//into local storage and also pulling the data creating it into a reminder for the user
 btn1.addEventListener("click", function(){
    let reminderText1 = reminder1.value;
    localStorage.setItem("theReminder1", reminderText1);
  
})
if (reminder1Get) {
     reminder1.textContent = reminder1Get
  }

  btn2.addEventListener("click", function(){
    let reminderText2 = reminder2.value;
    localStorage.setItem("theReminder2", reminderText2);
  
})
if (reminder2Get) {
     reminder2.textContent = reminder2Get
  }

  btn3.addEventListener("click", function(){
    let reminderText3 = reminder3.value;
    localStorage.setItem("theReminder3", reminderText3);
  
})
if (reminder3Get) {
     reminder3.textContent = reminder3Get
  }

  btn4.addEventListener("click", function(){
    let reminderText4 = reminder4.value;
    localStorage.setItem("theReminder4", reminderText4);
  
})
if (reminder4Get) {
     reminder4.textContent = reminder4Get
  }

  btn5.addEventListener("click", function(){
    let reminderText5 = reminder5.value;
    localStorage.setItem("theReminder5", reminderText5);
  
})
if (reminder5Get) {
     reminder5.textContent = reminder5Get
  }

  btn6.addEventListener("click", function(){
    let reminderText6 = reminder6.value;
    localStorage.setItem("theReminder6", reminderText6);
  
})
if (reminder6Get) {
     reminder6.textContent = reminder6Get
  }

  btn7.addEventListener("click", function(){
    let reminderText7 = reminder7.value;
    localStorage.setItem("theReminder7", reminderText7);
  
})
if (reminder7Get) {
     reminder7.textContent = reminder7Get
  }

  btn8.addEventListener("click", function(){
    let reminderText8 = reminder8.value;
    localStorage.setItem("theReminder8", reminderText8);
  
})
if (reminder8Get) {
     reminder8.textContent = reminder8Get
  }
