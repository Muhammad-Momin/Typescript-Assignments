#! /usr/bin/env/ node
//task 1:Install Node.js, TypeScript and VS Code on your computer.
//already Done:)
//task 2: store a person's name in a variable, and print a message to that person.
let personName = "John Doe";
console.log(`hello ${personName}, would you like to learn some python today?`);
//task 3: Store a person's name in a variable, and then print that person's name in lowercase,uppercase and title case
//in lowercase
console.log(`${personName.toLowerCase()}`);
//in uppercase
console.log(`${personName.toUpperCase()}`);
//title case
console.log(personName.replace(/\b\w/g, c => c.toUpperCase()));
//Task 4: Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}" `);
//Task 5: Famous Quote 2: Repeat Exercise 4, 
//but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message.
// Print your message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said "${quote}"`;
console.log(message);
//Task 6: Stripping Names: Store a person’s name,
// and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let person_name = "\t\n John Doe \n\t";
console.log("original:", person_name);
console.log("Stripped:", person_name.trim());
//Task 7: Number Eight: Write addition, subtraction, multiplication, and division operations 
//that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
//Task 8: You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//Task 9: Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number. 
//Print that message.
let Favourite_Number = 7;
console.log(`My Favourite number is ${Favourite_Number}`);
//Task 10: Adding Comments: Choose two of the programs you’ve written,
//and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple 
//at this point, just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.
//adding comments
//My name is Muhammad Momin and today is 3rd March
//Task 11:Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
let names = ["Ali", "Arslan", "Azhar",];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//Task 12:Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, 
//but each message should be personalized with the person’s name.
let messages = "how are you?";
console.log(names[0] + " " + messages);
console.log(names[1] + " " + messages);
console.log(names[2] + " " + messages);
//Task 13:Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let vehicle = ["Honda Motorcycle", "Supra", "Audi"];
vehicle.map((items) => console.log(`I would like to own a ${items}`));
//Task 14:Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["Ali", "Arslan", "Azhar", "Usama"];
Guest.map((items) => console.log(`hello ${items}, you are invited to the dinner.`));
//Task 15:Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list. 
let can_not_attend = "Ali";
console.log(can_not_attend + " can not attend the dinner.");
let new_Guest = "muzamil";
Guest[Guest.indexOf(can_not_attend)] = new_Guest;
Guest.map((items) => console.log(`hello ${items}, you are invited to the dinner.`));
//Task 16:More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
Guest.map((items) => console.log(`Dear ${items}, I found a bigger table so I invited more guests`));
//adding guest at the beginning of array
let Guest_beginning = "Moiz";
Guest.unshift(Guest_beginning);
//adding guest at the middle of array
let middle_guest = "Ayan";
let middleIndex = Guest.length / 1.5;
Guest.splice(middleIndex, 0, middle_guest);
////adding guest at the end of array
Guest.push("Fatah");
//printing messages.
Guest.map((items) => console.log(`Dear ${items}, you are invited to the dinner`));
//Task 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Due to limited space only two people can be invited to the dinner.");
while (Guest.length > 2) {
    const removedGuest = Guest.pop(); //remove the last guest from list
    console.log(`Sorry ${removedGuest}, you are no longer invited to dinner.`);
}
Guest.forEach((Guest) => {
    console.log(`Dear ${Guest}, you are still invited to the dinner.`); //inviting the remaing two
});
//Removing the last two from the list 
Guest.pop();
Guest.pop();
//printing the final list to confirm its empty
console.log("final Guest list:", Guest);
//Task:18Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let placeToVisit = ["Germany", "Japan", "Canada", "Brazil", "India"];
//• Print your array in its original order.
console.log("Original Order:", placeToVisit);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...placeToVisit].sort());
//• Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placeToVisit);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Original order after reverse", placeToVisit);
//• Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reversed:", placeToVisit);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Reversing again:", placeToVisit);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Sorting Alphabetically:", placeToVisit);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.sort().reverse();
console.log("Sorting in reverse Alphabetical Order:", placeToVisit);
//Task 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
let invitations = ["Moiz", "muzamil"];
let count_invitation = invitations.length;
console.log(`${count_invitation} people are still invited to the dinner`);
//Task 20:Think of something you could store in a array. For example, 
// you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
let countries = ["Pakistan", "India", "Afghanistan", "France", "Japan", "China"];
console.log(`list of countries:"${countries}"`);
//Task 21:They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.
let object = { name: "Ali", age: 20 };
console.log(object);
// TAsk 22:Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error
// . Make sure you correct the error before closing the program.
let days = ["Monday", "tuesday", "Wednesday", "thursday", "Friday", "Saturday", "Sunday"];
//intentional error:
// console.log(days{7})
//correcting the error
console.log(days[6]);
// Task 23: Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "Subaru";
//1: Equality comparison 
console.log("is car == 'Subaru'? I predict true");
console.log(car == 'Subaru'); //true
//2: strict Equality comparison 
console.log("is car === 'Subaru'? I predict true");
console.log(car === 'Subaru'); //true
//3: inequality comparison
console.log("is car != 'Subaru'? I predict false");
console.log(car != 'Subaru'); //false
//4:Strict inequality comparison
console.log("is car !== 'Subaru'? I predict false");
console.log(car !== 'Subaru'); //false
//5: less than comparison
console.log("is car < 'Subaru'? I predict false");
console.log(car < 'Subaru'); //false 
//6: greater than comparison
console.log("is car > 'Subaru'? I predict false");
console.log(car > 'Subaru'); //false 
//7: less than or equal comparison
console.log("is car <= 'Subaru'? I predict True");
console.log(car <= 'Subaru'); //True
//8: greater than or equal comparison
console.log("is car >= 'Subaru'? I predict True");
console.log(car >= 'Subaru'); //True
//9: checking falseiness
console.log("is !car? I predict false");
console.log(!car); //false
//10: checking length
console.log("is car.length = 6? I predict true");
console.log(car.length == 6); //True
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let name1 = "Ali";
let name2 = "Usama";
//equality 
console.log('is name1 == name2? I predict false');
console.log(name1 == name2); //False
//inequality 
console.log('is name1 != name2? I predict True');
console.log(name1 != name2); //True
// • Tests using the lower case function
console.log('is name1 in lowercase? I predict False');
console.log(name1.toLowerCase() == true); //false
let num1 = 100;
let num2 = 90;
//Equality
console.log('is num1 == num2?I predict false');
console.log(num1 == num2); //false
//InEquality
console.log('is num1 != num2?I predict True');
console.log(num1 != num2); //true
//greater than
console.log('is num1 > num2?I predict True');
console.log(num1 > num2); //true
// less than
console.log('is num1 < num2?I predict False');
console.log(num1 < num2); //false
//greater than and equal to
console.log('is num1 >= num2?I predict True');
console.log(num1 >= num2); //true
//less than and equal to
console.log('is num1 <= num2?I predict false');
console.log(num1 <= num2); //false
// logicaa operator 
// AND 
console.log('is num1 >10 && num1< 10000? I predict True');
console.log(num1 > 10 && num1 < 10000); //True(both condition met)
//OR 
console.log('is num1 >10000 || num1< 10? I predict False');
console.log(num1 > 10000 || num1 < 10); //false(neither condition met)
//array test
// In array 
let numbers = [1, 2, 4, 6, 7, 9, 11];
console.log('is 4 in numbers? I predict True');
console.log(4 in numbers); //True (checks for array existance)
//Not in array
console.log('is 13 in numbers? I predict False');
console.log(13 in numbers); //false (Not in array) 
//task 25: Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
//first version
let alien_color = "green";
if (alien_color == "green") {
    console.log("you earn 5 poitns");
}
//second version
alien_color = "red";
if (alien_color == "green") {
    console.log("no output");
}
//Task 2:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
//task 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
alien_color = "green";
if (alien_color == "green") {
    console.log("player earned 5 points ");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points.");
}
else if (alien_color == "red") {
    console.log(" player earned 15 points");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("player earned 5 points ");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points.");
}
else if (alien_color == "red") {
    console.log(" player earned 15 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("player earned 5 points ");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points.");
}
else if (alien_color == "red") {
    console.log(" player earned 15 points");
}
//task 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 1;
if (age < 2) {
    console.log("the person is a baby.");
}
age = 3;
if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
age = 4;
if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
age = 16;
if (age >= 13 && age < 20) {
    console.log("the person is a teenager");
}
age = 25;
if (age >= 20 && age < 65) {
    console.log("the person is an adult");
}
age = 70;
if (age >= 65) {
    console.log("the person is an elder");
}
//task 29:Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("I really like bananas");
}
else {
    console.log("banana is not in this array");
}
if (favorite_fruits.includes("apple")) {
    console.log("I really like apples");
}
else {
    console.log("apple is not in this array");
}
if (favorite_fruits.includes("mango")) {
    console.log("I really like mango");
}
else {
    console.log("mango is not in this array");
}
if (favorite_fruits.includes("kivi")) {
    console.log("I really like kivi");
}
else {
    console.log("kivi is not in this array");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("I really like watermelon");
}
else {
    console.log("watermelon is not in this array");
}
//task 30:Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["admin", "Eric", "ali", "usama", "hamzah"];
for (let user of users) {
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}
//task 31:No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
users = ["admin", "Eric", "ali", "usama", "hamzah"];
if (users.length === 0) {
    console.log("we need to find some users");
}
//Remove all of the usernames from your array
else {
    console.log("the list of users is not empty ");
}
//• Remove all of the usernames from your array
if (users.length > 0) {
    users = [];
    console.log(`users list : ${users.length} we need to find some users`);
}
//task 32:Checking Usernames: Do the following to create a program that simulates how websites ensure 
//that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username. If a username has not been used,
// print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Eric", "Ali", "usama", "hamzah", "ayan"];
let new_users = ["usama", "hamzah", "azan", "momin", "razique"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken you will need to enter a new username`);
    }
    else {
        console.log(`${new_user} that username is available.`);
    }
}
//task 33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let position of positions)
    if (position === 1) {
        console.log(`${position}st`);
    }
    else if (position === 2) {
        console.log(`${position}nd`);
    }
    else if (position === 3) {
        console.log(`${position}rd`);
    }
    else {
        console.log(`${position}th`);
    }
//task34:Pizzas: Think of at least three kinds of your favorite pizza.
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name 
//of the pizza. For each pizza you should have one line of output containing a simple statement like
// I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop,
// that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza
// you like and then an additional sentence, such as I really love pizza!
let pizza_names = ["pepperoni pizza", "hawaiian pizza", "Margherita pizza"];
for (let pizza of pizza_names) {
    console.log(pizza);
}
for (let pizza of pizza_names) {
    console.log(`I really like ${pizza}`);
}
console.log(` I really like to eat pizza. pizza comes in  variety of flavours and topping allowing individual to customize it to their liking`);
console.log("I really love pizzas");
// task 35:Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!
let animals = ["cat", "dog", "rabbit"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet`);
}
console.log("these are are social and playful animals thus making them the greaat pets");
//task 36:T-Shirt: Write a function called make_shirt()
// that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, text) {
    console.log(`making a ${size} t-shirt that says \n ${text}`);
}
make_shirt("large", '"coding is life"');
//task 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.
function makeShirt(size = "large", text = "I love typescript") {
    console.log(`you ordered a ${size} shirt that says \n ${text}`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "I love coding");
//task 38:Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("paris", "france");
describe_city("lahore");
//task 39:City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("NewYork", "USA"));
console.log(city_country("Mumbai", "India"));
//task 40:Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums.
//
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, album_title) {
    return { artist, album_title };
}
let album1 = make_album("Talha yunus", "open letter");
let album2 = make_album("young stunners", "Rebirth");
let album3 = make_album("Ayaz", "Mausan-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//number of tracks 
function myalbum(artist, album_title, Number_of_tracks) {
    return { artist, album_title, Number_of_tracks };
}
let album4 = myalbum("Talha yunus", "open letter", 12);
let album5 = myalbum("young stunners", "Rebirth", 15);
let album6 = myalbum("Ayaz", "Mausan-e-Dil", 36);
console.log(album4);
console.log(album5);
console.log(album6);
//task 41:Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician_name) {
    for (const magician of magician_name) {
        console.log(magician);
    }
}
const magician = [`\n`, "Harry Houdini", "David Copperfield", "Criss Angel"];
show_magicians(magician);
//task 42:Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great
// to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 1; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The great";
    }
}
const magician2 = [`\n`, "Harry Houdini", "David Copperfield", "Criss Angel"];
make_great(magician2);
show_magicians(magician2);
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 1; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + `The Great`);
    }
    return greatMagicians;
}
const magician3 = [`\n`, "Harry Houdini", "David Copperfield", "Criss Angel"];
const greatMagicians2 = make_great2(magician3);
show_magicians(magician3);
console.log(`\n`);
show_magicians(greatMagicians2);
//task44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.
function sandwich(...items) {
    console.log(`\nsandwich Order:\nyour sandiwich details:`);
    for (let i = 0; i < items.length; i++) {
        console.log(` -${items[i]}`);
    }
}
sandwich("Capcicon", "tomato", "chicken");
sandwich("beef", "cheese");
sandwich("sausage", "mayo sauce");
function createCar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const mycar = createCar("bugatti", "Chiron", { color: "Black", year: 2018 });
console.log(mycar);
export {};
