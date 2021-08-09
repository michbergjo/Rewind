//Get String from the page
//controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");

   let userString = document.getElementById("userString").value;

   let revString = reverseString(userString);

   displayString(revString);
}

//Reverse String
//logic function
function reverseString(userString){

    let revString = [];
    
    //reverse a String using a for loop
    for (let index = userString.length-1; index >= 0; index--) {
      revString += userString[index];
        
    }

    return revString;
}

//Display reversed String to the user 
//view function 
function displayString(revString){

    //write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //turn on the alert box 
    document.getElementById("alert").classList.remove("invisible");
}