let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greeting = "Hey there!";
result = firstName + space + lastName;

//Concatanation
result = greeting + space + 'My name is' + space + firstName + ' ' + lastName + ". I'm " + age + " years old.";

//Escaping
result = 'I\'m 34 years old';
result = "I like \"Star wars\" movie";

//Properties and method
result = 'Hello!'.length;
result = firstName.length;

// concat

result = firstName.concat(space, lastName);
result = greeting.concat(space, 'My name is ', firstName, space, lastName);

//toUpperCase()
result = result.toLocaleUpperCase();
result = result.toLowerCase();

//index
result = firstName[1];
result = 'Hello'.indexOf('l');
result = 'Hello lol'.indexOf('lo');
result = firstName.indexOf('b');

//charAt
result = firstName.charAt(1);
const longString = 'Hi,I\'m, a long sting';
result = longString.charAt(longString.length - 1);

//substring()
result = greeting.substring(4, 9);

//slice()
result = greeting.slice(-5);

//split ()
result = longString.split(' ');
const colors = 'red, orange, green, blue';
result = colors.split(',');

//replace ()

result = colors.replace('blue', 'yellow');

//includes ()
result = colors.includes ('blue');
console.log(result);
