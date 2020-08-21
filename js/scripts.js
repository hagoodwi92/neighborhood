//business
function displayNumbers (input) {
  let output = 0;
  for (let i = input; i >= 0; i--) {
    return output;
    output++;
    }


  }

function containsOne (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "1")  {
      output = numberArray[i].replace("1", "Beep!");
      return output;
      break;
    }
  }
}

function containsTwo (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "2")  {
      output = numberArray[i].replace("2", "Boop!");
      return output;
      break;
    }
  }
}


function containsThree (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "3")  {
      output = numberArray[i].replace("3", "Won't you be my neighbor?");
      return output;
      break;
    }
  }
}




//ui
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const userInput = $("input#input1").val();
    
    //let output = containsOne(userInput);
    //output = containsTwo(userInput);
    //output = containsThree(userInput);
    output = displayNumbers(userInput);
    //let output2 = containsOne(userInput);
    output = $("#output1").text(output);

    //$("#output2").text(userInput);
    //$("#output3").text(userInput);
    
    


  });
});