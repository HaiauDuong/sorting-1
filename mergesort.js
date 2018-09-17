function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length / 2);

  let firstHalf = wholeArray.slice(0, middle);

  let secondHalf = wholeArray.slice(middle, wholeArray.length);
  console.log(firstHalf);
  console.log(secondHalf);


  return [firstHalf, secondHalf];
}



// split([1, 2, 3, 4, 5]);


function merge(left, right) {
	let result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
}


function mergeSort(array) {
	// debugger;

	let left = split(array)[0];
	let right = split(array)[1];

	console.log(left);
	console.log(right);

	if (array.length < 2) {
		return array;
	} 

	return merge(mergeSort(left), mergeSort(right));
}


