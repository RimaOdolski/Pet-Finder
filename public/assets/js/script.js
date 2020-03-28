$(document).ready(function() {
  var isOwner;
 //var currentInfo =[];
// When the user clicks on Found a pet, direct them to fill a form
$("#foundbtn").click(function(){
  isOwner= false;
  location.replace("/petInfo");    
  });



 // When user clicks on lost a pet, direct them to fill a form 
 $("#lostbtn").click(function(){
  isOwner = true;
  location.replace("/petInfo");
  });
   

 $("#saveBtn").click(function() {

    console.log("save button clicked");

   var userInfo = { 
     microchip: $("#microchip").val().trim(),
     email: $("#email").val().trim(),
     breed: $("#breed").val().trim(),
     color: $("#color").val().trim(),
     address: $("#address").val().trim(),
     city: $("#city").val().trim()
    }
    console.log(userInfo);

    $.ajax("/petInfo", {
      type: "POST",
      data: userInfo
    }).then(
      function() {
        console.log("user info added");
      }
    );
  


 });


   
});