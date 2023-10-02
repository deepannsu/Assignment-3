// Method for $.getJSON request
function getTeamDataWithGetJSON() {
  $.getJSON("team.json", function(data) {
    // Loop through the array of team members
    $.each(data.team, function(index, member) {
      // Create HTML elements for name, position, and bio
      var nameElement = $("<h2>").text(member.name);
      var positionElement = $("<h5>").text(member.position);
      var bioElement = $("<p>").text(member.bio);

      // Append the elements to the #team div
      $("#team").append(nameElement, positionElement, bioElement);
    });
  });
}

// Method for $.ajax request
function getTeamDataWithAjax() {
  $.ajax({
    url: "team.json",
    dataType: "json",
    success: function(data) {
      // Loop through the array of team members
      $.each(data.team, function(index, member) {
        // Create HTML elements for name, position, and bio
        var nameElement = $("<h2>").text(member.name);
        var positionElement = $("<h5>").text(member.position);
        var bioElement = $("<p>").text(member.bio);

        // Append the elements to the #team div
        $("#team").append(nameElement, positionElement, bioElement);
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Error loading team data: " + textStatus, errorThrown);
    }
  });
}

  