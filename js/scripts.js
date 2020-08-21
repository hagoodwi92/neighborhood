//business
function displayNumbers (input) {
  
  let output = 0;
  let numberArray = [];
  //const numberArray = input.toString().split('');
  for (let i = 0; i <= input; i++) {
    output = i;
    numberArray.push(output);
    
  }
  return containsTwo(numberArray);

}
  

function containsOne (input) {
  const numberArray = input.toString().split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "1")  {
      output = numberArray[i].replace("1", "Beep!");
      return output;
      //break;
    }
    else {
      return numberArray;
    }
  }
}

function containsTwo (input) {
  let numberArray = input.toString().split(' ');
  
  for(let i = 0; i <numberArray.length;i++){
    if(numberArray[i] === "2"){
      numberArray[i] = "Boop!";
      return numberArray;
    }
    else{
      return numberArray;
    }
  }
}


function containsThree (input) {
  const numberArray = input.split('');

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "3")  {
      output = numberArray[i].replace("3", "Won't you be my neighbor?");
      return output;
      break;
    }
    else {
      return numberArray;
    }
  }
}




//ui
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let userInput = [($("input#input1").val())];

    userInput = displayNumbers(userInput);
    //userInput = containsThree(userInput);
    
    $("#output1").text(userInput);

    
    


  });
});