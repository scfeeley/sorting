//Sort an array by dividing it in half, sorting those halves,
// then merging the sorted lists
function mergeSort(arr){
    //base case: if length is 1, return 
    if(arr.length === 1){
        return arr;
    }else{
        //divide array in half and mergeSort
        let half = Math.floor(arr.length / 2)
        let arr1 = mergeSort(arr.slice(0, half))
        let arr2 = mergeSort(arr.slice(half));
        return merge(arr1, arr2);
    }
}

//merge two sorted arrays
//return an array with values from arr1 and arr2 smallest to largest
function merge(arr1, arr2){
    let merged = []; 
    let point1 = 0; 
    let point2 = 0; 

    //while there are values in both arrays 
    while(point1 < arr1.length && point2 < arr2.length){
        let arr1Val = arr1[point1];
        let arr2Val = arr2[point2];
         //compare the first value in each array 
        if(arr1Val < arr2Val){
           merged.push(arr1Val);
           point1++;
        }else{
            merged.push(arr2Val);
            point2++;
        }
    }
    //Add the remaining values from the arr that hasn't reached the end 
    if(point2 === arr2.length){
        for(let i = point1; i < arr1.length; i++){
            merged.push(arr1[i]);
        }
    }else{
        for(let i = point2; i < arr2.length; i++){
            merged.push(arr2[i]);
        }
    }
    //return the merged array
    return merged;
}
