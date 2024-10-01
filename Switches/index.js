let grade = window.prompt("Enter the grade");

grade= grade.toUpperCase();

console.log(grade);

switch(true){
   case "A":
      console.log("you did great");
      break;
   case "B":
      console.log("better work hard");
      break;
   case "C":
      console.log("don't give up, try agian");
      break;
   default:
      console.log("invalid input");

}