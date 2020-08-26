//business
function displayNumbers (input) {
  
  let output = 0;
  let numberArray = [];
  
  for (let i = 0; i <= input; i++)  {
    output = i;
    numberArray.push(output);
  }
  return numberArray;

}
function containsOne(array) {
  for(let i = 0; i < array.length; i++)  {
    if(array[i].toString().includes(1)){
      array[i] = "Beep!";
    }
  }
   return array;
    
  }

function containsTwo(array) {
  for(let i = 0; i < array.length; i++)  {
    if(array[i].toString().includes(2)){
      array[i] = "Boop!";
    }
    }
    return array; 
  }

function containsThree(array) {
  for(let i = 0; i < array.length; i++)  {
    if(array[i].toString().includes(3)){
      array[i] = "Won't you be my neighbor?";
    }
  }
  return array;
}

//ui
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let userInput = [($("input#input1").val())];

    
    
    userInput = displayNumbers(userInput);
    userInput = containsThree(userInput);
    userInput = containsTwo(userInput);
    userInput = containsOne(userInput);
    
    
    $("#output1").text(userInput);

    
    


  });
});