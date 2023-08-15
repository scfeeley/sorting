//Selection Sort In place 
//Finds the minimum value in unsorted side of the list
//shifts values to the left of the min of unsorted lest to the right 
//inserts min at the end of the sorted side of the list 
function selectionSortInPlace(arr){
    let divider = 0; 
    while(divider < arr.length){
        let min = arr[divider];
        let minInd = divider;
        //find the minimum value of the unsorted side
        for(let i = divider; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
                minInd = i;
            }
        }
        //shift all unsorted elements to the left of minInd to the right
        for(let i = minInd - 1; i >= divider; i--){
            arr[i + 1] = arr[i];
        }
        arr[divider] = min;
        divider++;
    }
    return arr;
}
