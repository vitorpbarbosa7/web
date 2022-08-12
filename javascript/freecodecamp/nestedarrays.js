var arr = [["foo", 01000], ["bar", "FFFFF"]]

// accessing elements
console.log(arr[0][1])

arr[0][1] = 0101010

console.log(arr[0][1])

//push
arr.push(["elliot","alderson"])

console.log(arr)

//pop
var removedFromArray = arr.pop();

console.log(removedFromArray)
console.log(arr)


//shift - remove first element 
var removeFirstElement = arr.shift()

console.log(removeFirstElement)
console.log(arr)

//unshift - add element to the beginning of the arry
arr.unshift(["vertical","monitor"])
console.log(arr)
