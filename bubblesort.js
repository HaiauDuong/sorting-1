function swap(a, b, array) { // a = array[j], b = array[j + 1]
	let left = array[b]; //array[j+1]
	let right = array[a]; //array[j]
	array[a] = left;
	array[b] = right;
}


function bubbleSort(array) {
	let swapCounter = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				swap(j, j + 1, array);
				swapCounter++;
			}
		}
	}
	// console.log(swapCounter)
	return array;
}