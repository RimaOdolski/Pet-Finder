$(document).ready(function() {

// When the user clicks on Found a pet, direct them to fill a form
$("#foundbtn").click(function(){
  location.replace("/foundPets");

    /*$.ajax({
        method: "GET",
        url: "/foundPets"
      })
        .then(function(response) {
            console.log(response);
            console.log("button clicked!");

        });*/
    
  });



 // When user clicks on lost a pet, direct them to fill a form 
 $("#lostbtn").click(function(){
    location.replace("/lostPets");
  });
   

});