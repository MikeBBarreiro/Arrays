var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log(chalk.blue('this is blue text'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.green('I am a green line' + chalk.blue(' with a blue substring')));

var evens = [2,4,6,8];
console.log( evens );
console.log(chalk.red( evens[1]));

for(var i = 0;i < 10; i++){
  if(i%2 === 0){
    //even
   console.log(chalk.red(i));
  }else{
    //odd
    console.log(chalk.cyan(i));
 }
}
//loop array

for (var j = 0;j < evens.length; j++){
  console.log( 'Evens -> ' + evens[j]  );
}


var numbers = [];
var response = prompt('Enter a number or (q)uit: ' );
while(response !== 'q' ) {
  response = parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit: ' );
  
}
console.log(numbers);

// Sum of Array 

var indexNumbers =[]
var question = prompt('Enter in a number or (q)uit: ');
while(question !== 'q' ) {
  question = parseInt(question);
  indexNumbers.push(question);
  question = prompt('Enter in a number or (q)uit: ');
}

console.log(indexNumbers);

var sum = indexNumbers[0]
for( var j = 1; j < indexNumbers.length; j++);{
   sum += indexNumbers[j];
}

console.log( 'Your numbers equals to',  sum);





