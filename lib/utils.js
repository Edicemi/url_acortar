const isValidURL = urlString => {
    const urlRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    const url = new RegExp(urlRegex, 'i');

    return url.test(urlString);
};
module.exports = isValidURL;