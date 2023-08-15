//Sort an array by selecting a pivot value
//put all values smaller than the pivot to the left 
//put all values larger than pivot to the right
function quickSort(arr){
    //base case: arr is length 1
    if(arr.length <= 1){
        return arr;
    }else{
        //pick a pivot 
        let pivot = arr[0];
        let left = []; 
        let right = [];
        for(let i = 1; i < arr.length; i++){
            let val = arr[i];
            //put all values less than pivot in left
            if(val < pivot){
                left.push(val);
            //put all values greater than pivot in right
            }else{
                right.push(val);
            }
        }
        //quickSort left and right 
        let leftSort = quickSort(left);
        let rightSort = quickSort(right);
        return [...leftSort, pivot, ...rightSort];  
    }
}
