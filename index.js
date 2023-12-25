import data from "./data.js";
// importing the data.json file to our js file to use the data

function changeButtonColor(buttonId) {
  $(".toggle-views").removeClass("button-press");
  $("#" + buttonId).addClass("button-press");
}

function valueFill(activityCardTitle, current, previous, viewType) {
  let initialStatement;
  switch (viewType) {
    case "daily":
      initialStatement = "Yesterday - ";
      break;
    case "weekly":
      initialStatement = "Last week - ";
      break;
    case "monthly":
      initialStatement = "Last month - ";
      break;
    default:
      break;
  }

  console.log(initialStatement);

  $("#" + activityCardTitle + ".activities")
    .children()
    .children(".activity-card-row-2")
    .children(".activity-duration")
    .children(".curr")
    .text(current);

  $("#" + activityCardTitle + ".activities")
    .children()
    .children(".activity-card-row-2")
    .children(".activity-last-weekly-score")
    .text(initialStatement + previous + "hrs");
}

function getData(dataType) {
  data.forEach((typeOfActivity) => {
    let activityTitle = typeOfActivity.title.toLowerCase();
    let activityHoursToSendCurrent =
      typeOfActivity.timeframes[dataType].current;
    let activityHoursToSendPrevious =
      typeOfActivity.timeframes[dataType].previous;

    valueFill(
      activityTitle,
      activityHoursToSendCurrent,
      activityHoursToSendPrevious,
      dataType
    );
  });
}

$(".toggle-views").on("click", function (event) {
  let currentButtonView = event.target.id;
  changeButtonColor(currentButtonView);
  getData(currentButtonView);
});
