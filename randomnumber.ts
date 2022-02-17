function randomNumber(num:number):number{
    var text = "";
    var possible = "0123456789";

    for(var i =0;i<num-1;i++){

        text += possible.charAt(Math.floor(Math.random() * possible.length));

    }

    return parseInt("7"+text);

}

console.log(randomNumber(11));
console.log(randomNumber(11).toString().length);
 