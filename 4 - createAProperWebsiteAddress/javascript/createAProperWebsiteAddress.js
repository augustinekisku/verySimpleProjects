let userInputUrl = prompt("Enter A Website URL");

let geth1 = document.getElementById("validWebsiteUrl");

let websiteName = null;

if (userInputUrl.indexOf("http") === -1 && userInputUrl.indexOf("www") === -1) {

    websiteName = userInputUrl.slice(0, userInputUrl.lastIndexOf("."));

    userInputUrl = ("http://www.").concat(userInputUrl);

} else if (userInputUrl.indexOf("http") === -1 && userInputUrl.indexOf("www") !== -1) {

    websiteName = userInputUrl.slice(userInputUrl.indexOf(".") + 1, userInputUrl.lastIndexOf("."));

    userInputUrl = "http://".concat(userInputUrl);

} else {

    websiteName = userInputUrl.slice(userInputUrl.indexOf(".") + 1, userInputUrl.lastIndexOf("."));

}

geth1.innerHTML = `You Entered <a target="_blank" href="${userInputUrl}">${websiteName}</a> Website's URL.`;
