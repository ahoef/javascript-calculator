// This calculator works by using click listeners to store data in string variables, convert data types, and calculate and display values.

$(document).ready(function(){
  var testNumLength = function(number) {
        // Set a nine-digit max on the display
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            // Display an error message if a decimal number is too long
            if (number.length > 15) {
                totaldiv.text("too long!");
            }
        }
    };

  var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $(".total");
  totaldiv.text("0");

  // Store the number button's input in the number variable, make sure the number isn't too long, and display the string on the total bar.
  $(".numbers a").click(function(){
    number = $(this).text();
    totaldiv.text(number);
    testNumLength(number);
  });

  // Store the operator button's input in the operator variable, move the value of the first digit clicked from the number variable to the newnumber variable, and set the number variable back to an empty string to get ready for another input on click of the second number button.
  $(".operators a").click(function(){
    operator = $(this).text();
    newnumber = number;
    number = "";
    totaldiv.text(number);
  });

  // Assign number and newnumber variables empty strings and set the total bar display to 0.
  $("#clear").click(function(){
    number = "";
    totaldiv.text("0");
    if ($(this).attr("id") === "clear") {
      newnumber = "";
    }
  });

  // Detect the value of the operator variable, turn strings into numbers, and perform math
  $("#equals").click(function(){
    if (operator === "+"){
      number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
    }
    else if (operator === "-"){
      number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
    }
    else if (operator === "/"){
      number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
    }
    else if (operator === "*"){
      number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
    }

    // Convert the math result to text in the total bar, make sure the number is not too many digits long, and reset variables back to empty strings
    totaldiv.text(number);
    testNumLength(number);
    number = "";
    newnumber = "";
  });
});