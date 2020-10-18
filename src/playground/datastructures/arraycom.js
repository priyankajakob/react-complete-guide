const arr1= [1,2,3]
const arr2 = [1,2,1]

arrayCompare = (array1,array2)=>{
    if(array1.length==array2.length){
        for(let i=0;i<=array1.length;i++){ //complexity is n+n = 2n = 0(n)
            if(array1[i]!==array2[i])
            return false
        }
        return true
    }
    return false
}

console.log(arrayCompare(arr1,arr2))

