//1. The difference between interpolation and concatenation is that concatenation allows you to combine to //strings together and it only works on two strings. Concatenation should be used when working with string //instances only. Interpolation is the process of evaluating a string literal containing one or more //placeholders. 
//Example of interpolation


const color = "blue";
console log(`I like ${color} balloons`);

//concatenation
const greeting = "hola";
const name = "juan";
console.log(greeting + name);


//2. DRY stands for Don't Repeat Yourself.  We have learned for loops to write DRY code, among others.

//3. Declaring a variable means to tell compiler what kind of value it will store(like int,float,char) while defining a variable means to assign the declared variable a value that has to be stored in it. 

//4. We should use const as a starting variable and we should use let when we want to redefine the variable.

//5. Parent directory refers to the directory above another directory. Every directory but the root directory lies beneath another directory.

//6. When we're unsure of a unix command, we can use the manual.  It is accessed with man i.e. man mv

//7. Tab completion allows you to hit the tab key when a few letters are entered, thus entering the rest of the filepath, command, directory etc.  It is awesome because it saves us heaps of time and reads our mind

//Part 2
// a < b
// c > d
// 'Name' === 'Name'
// a < b < c. ------------ help
// a === a < d
// e != 'Kevin'
// 48 = '48'

//Part 3
//1. Yes, infinite loop.  There is no command telling the loop to stop, only a console log
//2. No, not infinite.  As soon as the program hits false, the loop stops. Only one console log will be made.

//allows redefining of the variable to "A"
let letters = "A";
//allows redefining of the variable i to 0
let i = 0;

//the loop will run over and over as long as variable (i) is less than 20
while (i < 20) {
//	letters get assigned the addition of its own value and the "A" value
	letters += "A";
// variable (i) will increase by 1 every time the loop is run	
	i++;
}
//console will log letters less than 20 , 1 through 19
console.log(letters);
// RESPOND!!

//Part 4
//1. In While loop, condition is tested at the beginning of the loop and if the condition is True then only statements inside the loop will be executed. So, While loop executes the code block only if the condition is True.
// The for loop is the most commonly used loop. Any part of for can be skipped.
// The difference is the condition is tested at the beginning of the loop in while loop.  Similarities are that they both are repeated if statements
//2.
for (i=0;i<=999;i++){
	console.log(i);
}

//3. The first part of the control statement is: let i=0
//The second part of the control statement is: i < 100
//The third part of the control statement is: i++
//4. 
for (i=999;i>=0;i--);
//Part 5
for (let i=1; i<=10; i++){
	console.log(`the value of i is: ${i} of 10`);
}