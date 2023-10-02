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
// Method for $.ajax request
function getTeamDataWithAjax() {
  // Display "Loading..." message in the #team div
  $("#team").text("Loading...");

  $.ajax({
    url: "team.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
      // Clear the "Loading..." message
      $("#team").empty();

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
      // Display an error message in the #team div
      $("#team").text("Error: Could not retrieve content.");
      console.error("Error loading team data: " + textStatus, errorThrown);
    }
  });
}
    
  $(document).ready(function() {
    // Call the getTeamDataWithAjax method
    getTeamDataWithAjaxDelayed();
  });
  
  // Method for $.ajax request with a 3-second delay
  function getTeamDataWithAjaxDelayed() {
    // Display "Loading..." message in the #team div
    $("#team").text("Loading...");
  
    $.ajax({
      url: "team.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        // Simulate a 3-second delay before displaying the content
        setTimeout(function() {
          // Clear the "Loading..." message
          $("#team").empty();
  
          // Loop through the array of team members
          $.each(data.team, function(index, member) {
            // Create HTML elements for name, position, and bio
            var nameElement = $("<h2>").text(member.name);
            var positionElement = $("<h5>").text(member.position);
            var bioElement = $("<p>").text(member.bio);
  
            // Append the elements to the #team div
            $("#team").append(nameElement, positionElement, bioElement);
          });
        }, 3000); // 3-second delay
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Display an error message in the #team div
        $("#team").text("Error: Could not retrieve content.");
        console.error("Error loading team data: " + textStatus, errorThrown);
      }
    });
  }
  


     



  