const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


// Write a while loop that prints out the contents of ingredients:
let i=0;
let whileingredients=[];
while(i<ingredients.length){
	whileingredients.push(ingredients[i]);
	i++;
}
console.log("Ingredients list using while loop : \n" +whileingredients)


// Write a for loop that prints out the contents of ingredients:
let foringredients=[];
for(var j=0; j<ingredients.length; j++){
	foringredients.push(ingredients[j]);
}
console.log("Ingredients list using for loop : \n" +foringredients)


// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reverseingredients=[];
for(var k=ingredients.length-1; k>=0; k--){
reverseingredients.push(ingredients[k]);
}
console.log("Reversed ingredients list using for loop : \n"+reverseingredients);