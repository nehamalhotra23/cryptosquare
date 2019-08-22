$(document).ready(function(){
$(".formOne").submit(function(event){
  event.preventDefault();
var userInput = $("#field").val();
var sliceUp = userInput.slice("");
var trimmer = sliceUp.replace(/\s/g,"");
var sentence = []
var square = Math.sqrt(trimmer.length)
console.log(square);
var roundSquare = Math.round(square);
console.log(roundSquare);

for(i=0;i<trimmer.length;i+=roundSquare){
  sentence.push(i);
  $(".formOne").append("<li>" + sentence + "</li>");

 }
 if(sentence.includes(12) ) {
   console.log('working');
 }

});
});
