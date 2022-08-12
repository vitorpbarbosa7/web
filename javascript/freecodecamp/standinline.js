//queue
/**
Adds element to last position of array and  
*/
function nextInLine(arr, item) {
	
	arr.push(item);
	
	first = arr.shift();
	return first;
}

var arr = [1,2,3,4,5]; 

console.log("Before: " + JSON.stringify(arr));
console.log("Shifted item: " + nextInLine(arr, 777));
console.log("After: " + JSON.stringify(arr));
