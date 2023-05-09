// "https://coderbyte.com/api/challenges/json/age-counting"



// hashed data =10ba357166ffdf70d3977c3bfce06e7c592b261f
// str to write on new created file 'output.txt' ={
// XZbHV
// OO2Mc
// uumoL
// cUS5f
// A5gR0
// GIDFA}


import axios from 'axios'
import crypto from 'crypto'
import fs from 'fs'

const question = async () => {
  const data = await axios("https://coderbyte.com/api/challenges/json/age-counting")

  let arr = data.data.data.split(',')

  let str=''
  for(let i=1 ; i<arr.length ; i=i+2){
    let age = arr[i].split('=')[1]
    if(age==='32'){
      
      str = str + arr[i-1].split('=')[1] +'\n'
    }
  }

  const hashedstr = crypto.createHash('SHA1').update(JSON.stringify(str)).digest('hex')
  console.log(hashedstr)

   fs.writeFileSync('output.txt', str)


}

question()