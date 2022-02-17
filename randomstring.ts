function randomString(num:number):string{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(randomString(28));
console.log(randomString(28).length); 
