// {
//     "name": {
//         "first": "Robert",
//         "middle": "",
//         "last": "Smith"
//     },
//     "age": 25,
//     "DOB": "-",
//     "hobbies": [
//         "running",
//         "coding",
//         "-"
//     ],
//     "education": {
//         "highschool": "N/A",
//         "college": "Yale"
//     }
// }

// {
//     "name":
//     {
//         "first":"Robert",
//         "last":"Smith"
//     },
//     "age":25,
//     "hobbies":["running","coding"],
//     "education":{
//         "college":"Yale"
//     }
import fetch from "node-fetch";

const getData = async () => {
  const res = await fetch(
    "https://coderbyte.com/api/challenges/json/json-cleaning"
  );

  const data = await res.json();

  for (let property in data) {
    console.log("==================data======================>", data[property]);
    if (Array.isArray(data[property])) {
      console.log("-------------Type is ARRAY--------------");
      let arr = data[property];
      let arr1 = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "-") {
          arr1.push(arr[i]);
        }
      }
      data[property] = arr1;
    } else if (typeof data[property] === "object") {
      console.log("-------------Type Is  OBJECT------------:");

      for (let value in data[property]) {
        if (
          data[property][value] === "" ||
          data[property][value] === "-" ||
          data[property][value] === "N/A"
        ) {
          delete data[property][value];
        }
      }
    } else if (data[property] === "-") {
      console.log("--------------Type is String-----------");
      delete data[property];
    }
  }
  console.log(data);
  console.log(JSON.stringify(data));
};

getData();
