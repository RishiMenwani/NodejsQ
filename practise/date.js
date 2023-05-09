
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