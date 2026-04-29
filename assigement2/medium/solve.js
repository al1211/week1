const objArr={"food":[10,20,30],"travel":[5,15],"bills":[40,60]};
let result={};

// for(let key in objArr){
//     let sum=0;
//     for(let num of objArr[key]){
//         sum=sum+num
//     }

//     result[key]=sum;

   
// }

for(let key in objArr){
    result[key]=objArr[key].reduce((acc,val)=>acc+val,0)
}

console.log(result)


const arr=["apple", "banana", "apple", "orange", "banana", "apple"];

let results={};
results={"arr":1};
results["arr"]++;


for (let item of arr) {
  if (results[item]) {
    results[item]++;
  } else {
    results[item] = 1;
  }
}

console.log(results);
