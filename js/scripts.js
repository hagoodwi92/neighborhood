//business
function displayNumbers (input) {
  
  let output = 0;
  let numberArray = [];
  
  for (let i = 0; i <= input; i++) {
    output = i;
    numberArray.push(output);
    
  }
  
  
  return numberArray;

}
function containsOne(array) {
  for(let i = 0; i < array.length; i++)  {
    if(array [i] == 1 ){
      array[i] = "Beep!";
    }
    
    //if ( array[i] === "1"){
    //array [i] = "Beep!";
   }
   return array;
    
  }

function containsTwo(array) {
  for(let i = 0; i < array.length; i++)  {
    if(array [i] == 2){
      array[i] = "Boop!";
    }
    
    //if ( array[i] === "1"){
    //array [i] = "Beep!";
    }
    return array;
    
  }

function containsThree(array) {
  for(let i = 0; i < array.length; i++)  {
    if(array [i] == 3){
      array[i] = "Won't you be my neighbor!";
    }
    
    //if ( array[i] === "1"){
    //array [i] = "Beep!";
    }
    return array;
    
  }






// function containsOne (input) {
//   const array = [input];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "1")  {
//       output = array[i].replace("1", "Beep!");
//       return output;
//       break;
//     }
//     else {
//       return array;
//     }
//   }
// }

// function containsTwo (input) {
//   let numberArray = input.toString().split(' ');
  
//   for(let i = 0; i <numberArray.length;i++){
//     if(numberArray[i] === "2"){
//       numberArray[i] = "Boop!";
//       return numberArray;
//     }
//     else{
//       return numberArray;
//     }
//   }
// }


// function containsThree (input) {
//   const numberArray = input.split('');

//   for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] === "3")  {
//       output = numberArray[i].replace("3", "Won't you be my neighbor?");
//       return output;
//       break;
//     }
//     else {
//       return numberArray;
//     }
//   }
// }




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