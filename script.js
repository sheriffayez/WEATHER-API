$(document).ready(function() {
  //---------------------------
  $("#catbug_2").hide();
  $("#catbug_1").hide();


  $("button").on("click", function() {
    $("#catbug_1").show();
    $("#input1").hide();
    $("#input2").hide();
    $("#button").hide();
    var city = $("#input1").val();
    var state = $("#input2").val();
    console.log(city, state);
    $.get("http://api.wunderground.com/api/7c6349f418d35f65/conditions/q/" + state + "/" + city + ".json")
    .done(function(response) {
      console.log(response);
      $(".container").append(("<h1>" + response.current_observation.display_location.city + "</h1>"));
      $(".container").append(("<h2>" + response.current_observation.display_location.state_name + "</h2>"));
      $(".container").append(("<h3>Feels like " + response.current_observation.feelslike_f + "\xB0F (" + (response.current_observation.feelslike_c) + "\xB0C)</h3>"));

      if (response.current_observation.feelslike_f <= 50) {
        $(".container").addClass("cold");
      } else if (response.current_observation.feelslike_f >= 70) {
        $(".container").addClass("hot");
      } else if (response.current_observation.feelslike_f < 70 && response.current_observation.feelslike_f > 50) {
        $(".container").addClass("average");
      }
    });
  });

  $("#catbug_1").on("click", function() {
    $("#catbug_1").hide();
    $("#catbug_2").show();
    setTimeout(function(){
      $("#catbug_2").hide();
      $("#catbug_1").show();
    }, 400);
  });

  //-------------------------
});