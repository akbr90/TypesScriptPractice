function randomAlphanumeric(num) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < num; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
console.log(randomAlphanumeric(28));
console.log(randomAlphanumeric(28).length);
