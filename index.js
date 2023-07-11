// bai1
let arr=[1,2,3,4,5,6,7,8,9];
let max =arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
       
    }
}
console.log('giá trị lớn nhất của hàm là :'+max);

//bài 2


let string= " heLLo riKKei academy "
console.log(typeof string.trim());
let stringArr= string.trim().toLowerCase().split(' ')

console.log(stringArr);
for(let i = 0; i < stringArr.length; i++) {

    let trString = stringArr[i];
  let trStringUppercase = trString.charAt(0).toUpperCase() + trString.slice(1);
  stringArr[i] = trStringUppercase
  
}
let stringFix = stringArr.join(' ');
console.log('chữ cái được sửa lại là:'+stringFix);

//bài 3
let month = +prompt('nhập vào tháng');
let year = +prompt('nhập vào năm');
 
if(month >= 1 && month <=12)  {
    if(month === 2) {
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            console.log('tháng hai có 29 ngày');
        } else {
            console.log('tháng hai 28 ngày');
        }
        

    }else if( month % 2 === 0) {
        console.log('tháng' + month + 'có 30 ngày');
    } else {
        console.log('tháng' + month + 'có 31 ngày');
    }

} else  {
    console.log('xin vui lòng bạn nhập lại');
}
//bài 4
//hamf sort
let newArr=[3, 25, 38, 49, 12]
newArr.sort(
    function(a,b){
        return -(+a) - -(+b); }
      
    );

console.log(newArr);
//cách 2:
let newArr1=[3, 25, 38, 49, 12];
for (let i = 0; i <= newArr1.length ; i++) {
    for (let j = i + 1; j < newArr1.length; j++) {
      if (newArr1[j] > newArr1[i]) {
        let arrSmall = newArr1[i];
        newArr1[i] = newArr1[j];
        newArr1[j] = arrSmall;
      }
    }
  }
  console.log(newArr1);





