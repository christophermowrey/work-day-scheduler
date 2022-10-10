var currentDay = "#currentDay";
var currentTime = moment().format("LT");
var hour = document.querySelector(".hour");
var today = moment().format("H");
var timeBlock = $(".time-block");
var container = $(".container");
var textAreas = [
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#13"),
  $("#14"),
  $("#15"),
  $("#16"),
  $("#17"),
];
var textAreaNum = [9, 10, 11, 12, 13, 14, 15, 16, 17];



$(currentDay).text(moment().format("MMMM Do YYYY"));

container.on("click", ".btn", function (event) {
  var activity = $(event.target).siblings("textarea").val();
  var hour = $(event.target).siblings("div").text();

  localStorage.setItem(hour, activity);
});

for (i = 0; i < textAreas.length; i++) {
if (today === textAreaNum[i]) {
    textAreas[i].removeClass("past future").addClass("present");
} else if (today > textAreaNum[i]) {
    textAreas[i].removeClass("present future").addClass("past");
} else {
    textAreas[i].removeClass("past present").addClass("future");
};
}

var time9 = localStorage.getItem('9am');
var time10 = localStorage.getItem('10am');
var time11 = localStorage.getItem('11am');
var time12 = localStorage.getItem('12pm');
var time13 = localStorage.getItem('1pm');
var time14 = localStorage.getItem('2pm');
var time15 = localStorage.getItem('3pm');
var time16 = localStorage.getItem('4pm');
var time17 = localStorage.getItem('5pm');

textAreas[0].html(time9);
textAreas[1].html(time10);
textAreas[2].html(time11);
textAreas[3].html(time12);
textAreas[4].html(time13);
textAreas[5].html(time14);
textAreas[6].html(time15);
textAreas[7].html(time16);
textAreas[8].html(time17);

