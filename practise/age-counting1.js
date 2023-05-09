// https://coderbyte.com/api/challenges/json/age-counting

// data: "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W,..." 

//128 objects are greater than 50

import axios from "axios";

const getData = async () => {
  const data = await axios.get(
    "https://coderbyte.com/api/challenges/json/age-counting"
  );


  const arr = data.data.data.split(',')
console.log(arr[1])
let count =0
  for(let i=1;i<arr.length ; i=i+2){
    const age = arr[i].split('=')[1]
   if(age>=50){count++}
  }
  
  console.log(count)
};

getData();
