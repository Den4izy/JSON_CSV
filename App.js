const fs = require('fs');
const path = require('path');
const arrJson = require('./file2.json');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


fs.writeFile('file1.txt', 'some text', (err) => {
    if (err) console.log(err);
})

const arr1 = {
    name: 'Denys',
    surName: 'Demydenko',
    age: 28,
    country: 'Ukraine'
};

//записуємо в JSON file

fs.writeFile('file2.json', JSON.stringify(arr1), (err) => {
    if (err) console.log(err);
});

//читаємо JSON file

console.log(arrJson);

//читаємо CSV file
// потрібно підключить модуль npm i csv-parser

const csv = require('csv-parser');
const results = [];

fs.createReadStream('file3.csv')
    // вказуєм розділювач, за умовчуванням стоїть кома
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);

    });

// записуємо CSV
const csvWriter = createCsvWriter({
    //щлях
    path: 'file4.csv',
    // параметри імен колонки
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'}
    ]
});
    // данні
const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
];
    //записуємо
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });





