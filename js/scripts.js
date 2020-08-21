//business
function displayNumbers (input) {
  let output = 0;
  for (let i = input; i >= 0; i--) {
    alert(output);
    output++;
    }


  }

function containsOne (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "1")  {
      output = numberArray[i].replace("1", "Beep!");
      alert(output);
      break;
    }
  }
}

function containsTwo (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "2")  {
      output = numberArray[i].replace("2", "Boop!");
      alert(output);
      break;
    }
  }
}


function containsThree (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "3")  {
      output = numberArray[i].replace("3", "Won't you be my neighbor?");
      alert(output);
      break;
    }
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