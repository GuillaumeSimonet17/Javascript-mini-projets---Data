//---------
// LE MIEN ==>
//---------

let tab = [45, 65, 2, 589, 23];
let i = 0;

while(tab[i]){
    if(tab[i] > tab[i+1]){
        [tab[i], tab[i+1]] = [tab[i+1], tab[i]];
        i = 0;
    } else i++;
}


function bubbleSort(array) {
    let i;
    let j;
    for(i = 0; i<array.length; i++){
        for(j = 0; j<array.length-1-i; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

bubbleSort([45, 65, 2, 589, 23]);


//----------
// INVERSE ==>
//----------


// function selectionSort(array) { 
//     for(let i=0; i<array.length -1; i++) {
//         let minI = i;
//         for(let j = i+1; j<array.length; j++){
//             if(array[j] < array[minI]){
//                 minI = j;
//                 console.log(minI);
//             }
//         }
//         [[array[i], array[minI]] = [array[minI], array[i]]];
//     }
// }

// selectionSort([45, 65, 2, 589, 23]);


//----------
// PIVOT ==>
//----------


// function quickSort(array){

    
//     if(array.length === 1){
//         return array;
//     }
//     const pivot = array[array.length-1];
//     let arrLeft = [];
//     let arrRight = [];
    
//     for(let i=0; i<array.length-1; i++){
//         array[i]<pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
//     }
//     if(arrLeft.length > 0 && arrRight.length > 0){
//         console.log(arrLeft, pivot, arrRight);
//         return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)]
//     } else if (arrLeft.length > 0) {
//         return [...quickSort(arrLeft), pivot];
//     } else {
//        return [pivot, ...quickSort(arrRight)];
//     }
// } 


// console.log(quickSort([1, 4, 2, 5, 56, 65, 3, 32, 765, 767, 345, 1, 354, 98]));