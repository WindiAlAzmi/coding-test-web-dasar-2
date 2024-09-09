const getLengthLetter = (data) => {
  
    let newData = [];
    let getData =  data.split("");
    console.log(getData, 'ini get data');
    let prevData = data[0];
    console.log(prevData, 'ini prev data')
    for(let i=0; i < data.length; i++){
        let dataBaru = `${data[i]} : ${i}`
        if(prevData !== data[i]) newData.push(dataBaru)
    }

    console.log()
}


const getResult1  = getLengthLetter("hello");
const getResult2 = getLengthLetter("aabbbcc");

console.log(getResult1, 'ini result 1')
console.log(getResult2, "ini result 2");


