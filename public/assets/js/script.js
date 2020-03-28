$(document).ready(function() {

// When the user clicks on Found a pet, direct them to fill a form
$("#foundbtn").click(function(){
    $.ajax({
        method: "GET",
        url: "/foundPets"
      })
        .then(function() {
            location.reload();
    
        });
    
  });



// When user clicks on lost a pet, direct them to fill a form 
$("#lostbtn").click(function(){
   

});

})