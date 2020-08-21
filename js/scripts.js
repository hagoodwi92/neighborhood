//business
function displayNumbers (input) {
  let output = 0;
  for (let i = input; i >= 0; i--) {
    alert(output);
    output++;
    }


  }
  

//ui
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    
    let userInput = $("input1#input").val();
    const numberArray = userInput.split('');




  });
});