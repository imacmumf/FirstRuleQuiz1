$(document).ready(function() {

const TOTALQUESTIONS = $(".rad").length;
  //jquery quiz function
  $(".submit").click(function() {
    let totalScore = 0;


    // Add each checked radio button to total Score

    for (i = 1; i <= TOTALQUESTIONS; i++) {
      if ($("#ans" + [i]).is(':checked')) {
        // totalScore.push($("#ans"+[i]).prop("value"));
        totalScore += +($("#ans" + [i]).prop("value"));
      }
    }
    // Display total score sum
    $(".totalScore").text(totalScore);


    // Display result pargraph
    if (totalScore <= 3) {
      $(".result").text("You got result 1!");
    } else if (totalScore > 3 && totalScore <= 6) {
      $(".result").text("You got result 2");
    } else if (totalScore > 6) {
      $(".result").text("You got result 3!");
    };


  });

  

// Add css class depending on even or odd
    // Get number from class substring

for (i=1;i<=TOTALQUESTIONS;i++){
    let num = $(".q"+[i]).prop('class').substring(1, 3);
    if(num%2===0){
      $(".q"+[i]).addClass("even");
    } else{
      $(".q"+[i]).addClass("odd");
    }
}


// End
});







// function finish() {
//   if ($(".form-check-input").prop("checked") == true) {
//     $("#submitButton").prop("disabled", false);
//   }
// }
