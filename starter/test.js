function foo()
{
    let a = 5;
    var b = 4;
    function foo2()
    {
        return a+b;
    }
    return foo2();
}
console.log(foo());