
const arr1= [1,2,3,4,5,6]

const arr2=arr1
console.log("array direct = assignment comparision : "+(arr1==arr2))//true

//Shallow copy methods-------------------------------------------

console.log("------------------")
console.log("SHALLOW COPY OUTPUTS : I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work")
console.log("------------------")
//--------1-----------------
const arr3 = [].concat(arr1)
console.log("array concat comparision : "+ (arr1==arr3))//false
// arr3[0]=5
// console.log(arr1) //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr3) //[ 5, 2, 3, 4, 5, 6 ]

//-------2------------------
const arr4=Object.assign([],arr1)
console.log("array object.assign comparision : "+(arr1==arr4)) //false
// arr4[0]=6
// console.log(arr1) //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr4) //[ 6, 2, 3, 4, 5, 6 ]

//-------3-------------------
const arr5 = arr1.map(ele=>ele)
console.log("array map copy comparision : " + (arr5==arr1)) //false
// arr5[0]=7
// console.log(arr1) //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr5) //[ 7, 2, 3, 4, 5, 6 ]

//-------4--------------------
const arr6 = [...arr5]
console.log("Spread comparision : "+(arr5==arr6)) //false

console.log("--------")
console.log("shallow copy problem explained below")
//Deep Clone exploration
const personsList1 = [
    {
        name:"preethy",
        age:50,
        hobbies : ["dancing","art"]
    },
    {
        name:"priyanka",
        age:40,
        hobbies : ["coding","sleeping"]
    }
] 

const personsList2 = Object.assign([],personsList1)

personsList2[0].hobbies[0]="drawing"

console.log("personsList1[0] : ",personsList1[0])
console.log("personsList2[0] : ",personsList2[0])
console.log("personsList1 == personsList2 : " + (personsList1==personsList2))//says 'false' but this is not deep clone, hobby got changed in both
console.log("personsList1[0] == personsList2[0] : " + (personsList1[0]==personsList2[0])) // "true"


//------Deep Clone---------------

console.log("--------------------")
console.log("DEEP CLONE")
console.group()
console.log("1 : JSON.parse(JSON.stringify(value))")
console.log("2 : loadash deep clone method")
console.groupEnd()


console.log("")
const deepCloneArr1 = [
    {
        name:"priyanka",
        age:20,
        marks:{
            science:50,
            art:20
            
        },
        getDetails : function (){
            console.log(this.name)
        }
    },
    {
        name:"preethy",
        age:29,
        marks:{
            science:20,
            art:50
            
        },
        getDetails : function (){
            console.log(this.age)
        }
    }
]

const shallowCloneArr2 = [...deepCloneArr1]
shallowCloneArr2[1].marks.science = 100

console.log(shallowCloneArr2[1].marks.science) //got changed
console.log(deepCloneArr1[1].marks.science) //got changed
console.log("In nested object the value got changed even when shallow copy therefore we need deep copy")

//------------1-------------------
console.log("")
const actualDeepClone1 = JSON.parse(JSON.stringify(deepCloneArr1))
actualDeepClone1[1].marks.science = 200
console.log(actualDeepClone1[1].marks.science) //got changed
console.log(deepCloneArr1[1].marks.science) //didn't get changed
console.log(actualDeepClone1[1]) //{ name: 'preethy', age: 29, marks: { science: 200, art: 50 } }
console.log(shallowCloneArr2[1]) //{name: 'preethy',age: 29,marks: { science: 100, art: 50 },getDetails: [Function: getDetails]}
console.log("when JSON.stringify(JSON.parse(value)) is used we loose functions and symbols, that is why now actualDeepClone1 object doesn't have the functions anymore")
console.log("JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties")

//----------------2---------------
console.log("")
console.log("-----------------method 2 of deep clone------------------")
const _ = require('lodash');

const arrOfFunction = [() => 2, {
    test: () => 3,
}, Symbol('4')];

// deepClone copy by refence function and Symbol
console.log(_.cloneDeep(arrOfFunction));
// JSON replace function with null and function in object with undefined
console.log(JSON.parse(JSON.stringify(arrOfFunction)));

// function and symbol are copied by reference in deepClone
console.log(_.cloneDeep(arrOfFunction)[0] === _.cloneDeep(arrOfFunction)[0]);
console.log(_.cloneDeep(arrOfFunction)[2] === _.cloneDeep(arrOfFunction)[2]);

const lodashCloneDeepArr = _.cloneDeep(deepCloneArr1)
lodashCloneDeepArr[1].marks.science = 300
console.log(lodashCloneDeepArr[1].marks.science) //got changed
console.log(deepCloneArr1[1].marks.science) //didn't get changed
console.log(lodashCloneDeepArr) //functions & symbols are copied by reference and not lost
   




