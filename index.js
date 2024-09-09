const getLengthLetter = (data) => {
  
   let getData = data.split("");
   let newArray = {};


       
     
   getData.forEach(element => {
        if(newArray[element]) {
            console.log(getData[element])
        }else{
            console.log('bukan')
            n
        }
    });
   console.log(newArray, 'ini new array');
    // let newData = [];
    // let getData =  data.split("");
    // console.log(getData, 'ini get data');
    // let prevData = data[0];
    // console.log(prevData, 'ini prev data')
    // for(let i=0; i < data.length; i++){
    //     let dataBaru = `${data[i]} : ${1}`
    //     let dataDuplicate = `${data[i]} : ${1}`

    //     if(prevData !== data[i]) newData.push(dataBaru)
    //     // else newData.push(dataDuplicate)
    // }

    // console.log(newData, 'ini new data');
}


const getResult1  = getLengthLetter("hello");
const getResult2 = getLengthLetter("aabbbcc");

console.log(getResult1, 'ini result 1')
console.log(getResult2, "ini result 2");


