//Insertion Sort In Place
//Sort the array in place using insertion sort 
//Left side of the divider index is considered sorted 
function insertionSortInPlace(arr){
    //first element of arr is already sorted, start at index 1
    let divider = 1; 
    //iterate over the array placing each element in the correct place on the sorted side
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i];
        let index = divider - 1;
        while(index >= 0 ){
            //if found correct index break out of loop
            if(curr > arr[index]){
                //increment index, so it is the index we want curr ele to be at in arr
                index++;
                break;
            }
            index--;
        }
        //shift all sorted elements to the right of index to the right one
        //then insert curr elemnet at index
        let shifter = divider;
        while (shifter > index && shifter > 0) {
            arr[shifter] = arr[shifter - 1];
            shifter--;
        }
        arr[shifter] = curr;

        //increase the divider of the sorted list 
        divider++;
    }
    return arr;
}