var foo = "bar";

function bar(){
    var  foo = "baz";

    function baz(foo){
        foo="bam";
        bam = "Yam";
    }
baz();


}
bar ();
foo;
bam;
baz();