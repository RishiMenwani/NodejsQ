// ====================================================

//Age counting
const fetch = require("node-fetch");
const q1 = async () => {
  const data = await fetch(
    "https://coderbyte.com/api/challenges/json/age-counting"
  );
  const jsonData = await data.json();
  const arr = jsonData.data.split(", ");
  let count = 0;
  for (let i = 1; i < arr.length; i = i + 2) {
    let age = arr[i].split("=")[1];
    if (age >= 50) count++;
  }
  console.log(count);
};
q1();
// =================================================

//json-cleaning

const fetch = require("node-fetch");
const q2 = async () => {
  const data = await fetch(
    "https://coderbyte.com/api/challenges/json/json-cleaning"
  );
  let jsonData = await data.json();
  for (key in jsonData) {
    if (typeof jsonData[key] === "object") {
      if (Array.isArray(jsonData[key])) {
        let arr = jsonData[key];
        let arr1 = [];
        for (let i = 0; i < arr.length; i++) {
          if (jsonData[key][i] !== "-") {
            arr1.push(arr[i]);
          }
        }
        jsonData[key] = arr1;
      } else {
        for (k in jsonData[key]) {
          if (jsonData[key][k] === "" || jsonData[key][k] === "N/A") {
            delete jsonData[key][k];
          }
        }
      }
    }
    if (jsonData[key] === "-") {
      delete jsonData[key];
    }
  }
  console.log(JSON.stringify(jsonData));
};
q2();
// ==========================================================

//Age Counting

const axios = require("axios");
const fs = require("fs");
const crypto = require("crypto");
const q3 = async () => {
  const data = await axios.get(
    "https://coderbyte.com/api/challenges/json/age-counting"
  );
  let jsonData = await data.data;
  const arr = jsonData.data.split(", ");
  let str = "";
  for (let i = 1; i < arr.length; i = i + 2) {
    let age = +arr[i].split("=")[1];
    if (age === 32) {
      const temp = arr[i - 1].split("=")[1];
      str = str + temp + "\n";
    }
  }
  fs.writeFileSync("output.txt", str);
  const hashedData = crypto
    .createHash("SHA1")
    .update(JSON.stringify(str))
    .digest("hex");
  console.log(hashedData);
};
q3();
// ====================================================================
const jsonData = {
  name: "abc",
  age: 22,
  hobbies: ["reading", "writting", "cricket"],
};
const arr1 = jsonData.hobbies;
console.log(arr1.join(", "));
// ==================================================================
const fs = require("fs");

const str = "hello world i am Chirag";
fs.writeFileSync("newfile.txt", str);
const arr = fs.readdirSync(__dirname); // console.log(arr); console.log(arr.join(', ')) // main.txt, newfile.txt

//==========================================CSV to JSON======================================

const axios = require("axios");

const csvToJson = async () => {
  const data = await axios.get(
    "https://coderbyte.com/api/challenges/logs/user-info-csv"
  );

  //   console.log(data.data);
  const Arr = data.data.split("\n");
  //   console.log(Arr);

  let result = [];
  const headers = Arr[0].toLowerCase().split(",");
  //   console.log(headers);

  for (let i = 1; i < Arr.length; i++) {
    let obj = {};
    const Line = Arr[i].split(",");
    // console.log(Line);
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = Line[j];
    }
    result.push(obj);
    // for (let i = 0; i < result.length; i++) {
    //   for (let j = 1; j < result.length; j++) {
    //     if (result[j].email < result[j - 1].email) {
    //       const temp = result[j];
    //       result[j] = result[j - 1];
    //       result[j - 1] = temp;
    //     }
    //   }
    // }
    result.sort((a, b) => a.phone.localeCompare(b.phone));
  }
  console.log(result);
};
 //====================================Date ============================

 const dateData =
  '[{"date":"2023-04-01T00:00:00.000Z","value":5},{"date":"2023-04-06T00:00:00.000Z","value":8},{"date":"2023-04-07T00:00:00.000Z","value":3},{"date":"2023-04-08T00:00:00.000Z","value":6},{"date":"2023-04-09T00:00:00.000Z","value":7}]';
const data = JSON.parse(dateData);
// console.log(data);
let minDate = data[0].date;
let maxDate = data[0].date;

for (let i = 1; i < data.length; i++) {
  const currentDate = data[i].date;

  if (currentDate < minDate) {0
    minDate = currentDate;
  }

  if (currentDate > maxDate) {
    maxDate = currentDate;
  }
}

const currentDate = new Date(minDate);
const lastDate = new Date(maxDate);

while (currentDate <= lastDate) {
  const dateString = currentDate.toISOString();

  if (!data.some((item) => item.date === dateString)) {
    data.push({ date: dateString, value: 0 });
  }

  currentDate.setDate(currentDate.getDate() + 1);
}

// sort the data array by date in ascending order
data.sort((a, b) => (a.date > b.date ? 1 : -1));

console.log(data);