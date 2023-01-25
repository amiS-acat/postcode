exports.createSample = (array, inputText) => {
    const sample = [];
    let index = 0;

    while (index !== -1) {
        index = array.indexOf(inputText, index + 1);

        if (index !== -1) {
            let result = {}

            result.postcode = inputText;
            result.address1 = array[index + 1];
            result.address2 = array[index + 2];
            result.address3 = array[index + 3];
            result.address4 = array[index + 4];
            result.address5 = array[index + 5];
            result.address6 = array[index + 6];

            sample.push(result);
        }
    }

    return sample;
}
