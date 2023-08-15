//Selection Sort 
//select the smallest value in the array and move it to the sorted list 
//continue until all elements added to the sorted list 
function selectionSort(arr){
    let cpy = arr.slice(); 
    let sorted = []; 
    while(cpy.length !== 0){
        let min = cpy[0]; 
        let minIndex = 0; 
        for(let i = 0; i < cpy.length; i++){
            if(cpy[i] < min){
                min = cpy[i];
                minIndex = i;
            }
        }
        cpy.splice(minIndex, 1);
        sorted.push(min);
    }
    return sorted;
}