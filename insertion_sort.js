//InsertionSort
//Create an empty array for sorted elements 
//Iterate over the original array, placing each element in its correct place in the sorted array 
function insertionSort(arr){
    let sorted = []; 
    //add the first element of the array to sorted
    sorted.push(arr[0]);

    //iterate over the rest of the array 
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i]; 
        let index = 0; 

        //find the correct place to insert the curr element in sorted
        while(index < sorted.length){
            if(curr < sorted[index]){
                sorted.splice(index, 0, curr);
                break;
            }
            index++;
        }

        //if curr element belongs at the end of sorted, push to the end
        if(index === sorted.length){
            sorted.push(curr);
        }
    }
    return sorted;
}