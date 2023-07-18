function calculateCalories() {
  var gender = document.getElementById("gender").value;
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseInt(document.getElementById("height").value);
  var activity = document.getElementById("activity").value;

  // Perform calculation based on gender
  var bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "female") {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Adjust BMR based on activity level
  var activityFactor;
  if (activity === "low") {
    activityFactor = 1.2;
  } else if (activity === "moderate") {
    activityFactor = 1.55;
  } else if (activity === "high") {
    activityFactor = 1.725;
  }

  var maintenanceCalories = Math.round(bmr * activityFactor);
  var weightLossCalories = Math.round(maintenanceCalories - 500); // 500 calorie deficit for weight loss
  var weightGainCalories = Math.round(maintenanceCalories + 500); // 500 calorie surplus for weight gain

  document.getElementById("maintenance-calories").innerText =
    "Maintenance Calories: " + maintenanceCalories;
  document.getElementById("weight-loss-calories").innerText =
    "Weight Loss Calories: " + weightLossCalories;
  document.getElementById("weight-gain-calories").innerText =
    "Weight Gain Calories: " + weightGainCalories;
}
