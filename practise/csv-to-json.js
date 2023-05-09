import  axios from 'axios'

const csvToJson = async () => {
    const data = await axios.get('https://coderbyte.com/api/challenges/logs/user-info-csv')
   
    const Arr = data.data.split('\n')
    const headers = Arr[0].toLowerCase().split(',')
    // console.log(Arr , headers)
const json =[]

for(let i=1 ; i<Arr.length ; i++){
    const Line = Arr[i].split(',')
    // console.log(Line)
    const obj ={}
    for(let j=0 ; j<headers.length ; j++){
        obj[headers[j]]=Line[j]
    }
    // console.log(obj)
    json.push(obj)
}
console.log(json)
const sortedJson =json.sort((a,b)=>{
  return  (a.email>b.email)? 1:(a.email<b.email)? -1:0
    
})

console.log(sortedJson)

}

csvToJson()
