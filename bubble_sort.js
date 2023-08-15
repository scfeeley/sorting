//BubbleSort
//Iterates over entire array, comparing adjacent values
//If left value > right value, swaps values 
//Continues until no swaps are made for entire array
function bubbleSort(arr){
    //use swapped keep track of if elements were swapped 
    let swapped = true;

    //if there was a swap, continue to sort, else array is sorted 
    while(swapped){
        //set swapped to false, no swaps have occurred in this pass 
        swapped = false;
        //iterate over array and swap if elements are out of order
        for(let i = 0; i < arr.length - 1; i++){
            let left = arr[i];
            let right = arr[i+1];
            if(left > right){
                arr[i] = right;
                arr[i+1] = left;
                swapped = true;
            }
        }
    }
    //return sorted array
    return arr;
}