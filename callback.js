function asyncMethod (message){
    return new Promise(function (fullfil,reject) {
        setTimeout(function(){
            console.log(message);
            fullfil();
        },500)
    });
}

asyncMethod("hello");