let arrayA = [29,20,13,22,24,20,27,17,19,14];
let arrayB = [24,29,23,11,15,17,29,14,16,13];
let arrayC = [];
let index = 0;


const numberCommon = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
                arrayC[index] = array1[i];
                index++;
                j = array2.length;
            }
            
        }
        
    }
    return console.table(arrayC);
}

numberCommon(arrayA, arrayB);