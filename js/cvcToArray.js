const fs = require('fs');
const iconv = require('iconv-lite');

exports.csvToArray = (csvFilePath) => {
    const array = [];

    const csv = fs.readFileSync(csvFilePath);
    const csvData = iconv.decode(csv, 'ms932');

    let str = '';
    let flag = 0;

    for(let i = 0; i < 100000; i++) {
        if (`${csvData[i - 1]}${csvData[i]}` === ',"') {
            flag = 1;
        } else if (`${csvData[i - 1]}${csvData[i]}` === '",') {
            array.push(str.slice(1).slice(0, -1));

            str = '';
            flag = 0;
        }

        if (flag === 1) {
            str += csvData[i];
        }
    }

    return array;
}
