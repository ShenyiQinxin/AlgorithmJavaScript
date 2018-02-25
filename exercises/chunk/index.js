// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*create empty arrays to hold chunks -- chunked
for each element in the unchunked array
	retrieve the last element in chunked
	if last element does not exist, or its length is equal to chunk size
		push a new chunk into chunked with the current element
	else add the current element into the chunk
*/
function chunk(array, size) {
	const chunked = [];
	let index = 0;
	while(index < array.length){
		chunked.push(array.slice(index, index+size));
		index +=size;
	}
	return chunked;
}

/*function chunk(array, size){
	//chunked holds chunks
	const chunked = [];
	//unchunked array
	for(let element of array){
		//the last element in chunked
		const last = chunked[chunked.length-1];
		//no last element or last length is the little chunk size
		if(!last || last.length ===size){

			chunked.push([element]);
		} else {
			//add the current element into the chunk
			last.push(element);
		}
	}
	return chunked;
}*/
module.exports = chunk;
