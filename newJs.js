function myFunction(message) {
    document.getElementById("message").innerHTML += message + '<br>';
}
 function newParagraph(){
    myFunction("");
 }
// var characters = "abcd".charAt(2);
//      myFunction("the third character is  "+ characters);
//  myFunction("type of character is "+ typeof characters);
// newParagraph();
//
//  var index = "abcd".indexOf("c");
//      myFunction("the index of c is "+index);
//
//
//  index = "abcd".search(/c/);
//  myFunction("the search index of c "+index);
//  newParagraph();
//
// var lyric =  "3 oh 3 is a magic number";
// myFunction('lyric.replace of ("3","4") is '+ lyric.replace("3","4"));
// myFunction('lyric. is '+lyric);
// myFunction('lyric.replace(/3/,"4") '+lyric.replace(/3/,"4"));
// myFunction('lyric.replace(/3/g,"4") '+lyric.replace(/3/g,"4"));
//
// var letters = "abcd"
// myFunction("the slicing of 1,3 is "+letters.slice(1,3));
//
// var words = "my name is priya ,im a developer".split(" ");
// for(var i =0;i<=words.length;i++){
//     myFunction(words[i]);
// }
// newParagraph();
//
//
// var name ="Priya";
// myFunction("toUpper case method of priya is "+name.toUpperCase());
// myFunction("tolower case method of priya is "+name.toLowerCase());
//
// myFunction("typeOf of 1 is "+typeof 1);
// myFunction("1+1 "+(1+1));
// myFunction("10-1 "+ (10-1));
// myFunction("2*2 "+(2*2));
// myFunction("2%3"+(2%3));
// myFunction((0.1+0.2).toFixed(1));
//
//
//
//
//
//
// var empty =[];
// myFunction("length of an array is "+empty.length);
// newParagraph();
//
//
// var letters1 = ['a','b','c','d'];
// for(i=0;i<letters1.length;i++){
//     myFunction(letters1[i]);
// }
// newParagraph();
//
// letters1.push('e');
// myFunction("letters1 .push is "+letters1);
// myFunction("letters1.pop is "+letters1.pop());
// myFunction("reverse is "+letters1.reverse());
// myFunction(['a','b','c','d'].slice(1,3));
//
// myFunction("sorting of['c','d','a','b'] is "+['c','d','a','b'].sort());
// myFunction("sorting of[9,8,5,4,3,2,1,7,6]"+[9,8,5,4,3,2,1,7,6].sort());
// newParagraph();
//
//
//
// var result = "abcd".search(/c/);
// myFunction("the search method for c is "+result);
//
//
//
//
//
// function foo(b){
//     a=a*2;
//     a=a+b;
// }
// var a = 10;
// myFunction(foo(5));
// myFunction(foo(25));
//
// myFunction(foo(100));
//
//
// myFunction(a);

var phone = 99.99;
var spending_threshold = 200;
var tax = 0.08;
var access = 9.99;
var bank = 300;
var amount = 0;
function calculateTax(){
    return amount*tax;
}

function formatAmount (){
    return "$"+ amount.toFixed(2);
}

while (amount <bank){
    amount = amount+ phone;
    if(amount<spending_threshold)
    {
        amount = amount+access;
    }


}
amount = amount+calculateTax(amount);


console.log("your purchasing amount is "+formatAmount(amount));
if(amount >bank){
    console.log("you cant afford this purchase");

}
myFunction();