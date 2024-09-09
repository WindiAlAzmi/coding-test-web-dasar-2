const getLengthLetter = (data) => {
  
   let getData = data.split("");
   let newArray = {};
     
   getData.forEach(element => {
        if(newArray[element]) {
            newArray[element]++
        }else{
            newArray[element]  = 1
        }
    });
   return newArray;
}


const getResult1  = getLengthLetter("hello");
const getResult2 = getLengthLetter("aabbbcc");

console.log(getResult1, 'ini result 1')
console.log(getResult2, "ini result 2");


