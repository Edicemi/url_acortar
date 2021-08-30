const isValidURL = urlString => {
    const urlRegex = /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
    const result = urlString.match(urlRegex);
    return result !== null;
};
module.exports = isValidURL;