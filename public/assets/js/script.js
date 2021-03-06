$(document).ready(function() {

  var isOwner_temp;
  // Put the object into storage

  if (localStorage.getItem("isOwner") === null) {
    localStorage.setItem('isOwner', isOwner_temp);
  }

  
 //var currentInfo =[];
// When the user clicks on Found a pet, direct them to fill a form
$("#foundbtn").click(function(){
  var isOwner_current = localStorage.getItem('isOwner');
  isOwner_current = false;
  console.log(isOwner_current);
  localStorage.setItem('isOwner', isOwner_current);
  location.replace("/petInfo");    
  });



 // When user clicks on lost a pet, direct them to fill a form 
 $("#lostbtn").click(function(){
  var isOwner_current = localStorage.getItem('isOwner');
  isOwner_current = true;
  console.log(isOwner_current);
  localStorage.setItem('isOwner', isOwner_current);
  location.replace("/petInfo");
  });
   

 $("#saveBtn").click(function(event) {
   event.preventDefault();

    console.log("save button clicked");

    var isOwner_final = localStorage.getItem('isOwner');
    console.log(isOwner_final);

    //console.log(isOwner_temp);

   var userInfo = { 
     microchip: $("#microchip").val().trim(),
     email: $("#email").val().trim(),
     breed: $("#breed").val().trim(),
     color: $("#color").val().trim(),
     address: $("#address").val().trim(),
     city: $("#city").val().trim(),
     isOwner: isOwner_final
    }
    console.log(userInfo);

    $.ajax("/petInfo", {
      type: "POST",
      data: userInfo
    }).then(
      function(response) {
        console.log("user info added", response);
        if (response == "/petFound") {
         
          var handleBarInfo = {
            email: $("#email").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim()
          };

          console.log(handleBarInfo);

          $.ajax("/petFound", {
            type: "PUT",
            data: handleBarInfo
          }).then(function(res){
            console.log("response received");
            location.replace("/petFound/" + $("#microchip").val().trim());
          });
        } else {
          location.replace(response);
        }
      });
  


 });


   
});