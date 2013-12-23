function hashIt(text) {
    var url = "http://" + CryptoJS.SHA1(text) + ".com";
    return url;
}
