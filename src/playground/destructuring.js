const arr = [1,2,3,4]
const [firstNum,,thirdNum] = arr
console.log(firstNum,thirdNum) //1 3

const user = {
    userName : "Priyank123",
    email :"priya@gmail.com",
    password : "12345"
}

printUserName=({userName : user})=>{
    console.log(user)//Priyank123
    // console.log(userName)//ReferenceError: userName is not defined
}
printUserName(user)
