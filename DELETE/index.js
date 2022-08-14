
// PUT and DELETE are usually very similar, because for DELETE you're still changing something, you're just changing it to not exist

// the thing with PUT and DELETE is, the mechanism by which we change information or delete information is just regular old javascript. If we want to change something in a PUT request, we just use javascript logic, if we want to delete something in a DELETE request, we just delete the variable using javascript logic
// PUT and DELETE are just ways of telling the user as well as developers what is happening, and we use fetch() in the front-end and send PUT and DELETE requests so that developers know what's happening

// in the example we use for DELETE, you aren't seeing anything special to the DELETE request, it's just using javascript logic to get rid of a variable



// there are many ways of deleting something inside the DELETE callback function
// you can use filter() to basically remove elements in an array that don't satisfy a certain condition
// if you wanted to delete an object property, you can use the delete operator https://stackoverflow.com/questions/1596782/how-can-i-unset-a-javascript-variable

// there is no point writing code here as an example
// bottom line - A user on the front-end clicks a button or does something that triggers fetch() to send a DELETE request, whatever code is inside that DELETE request will be executed. Simple.
