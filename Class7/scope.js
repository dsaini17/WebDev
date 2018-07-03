var y =6;
var z;

function main() {
    var x = 2;
    console.log(y);
    if (true) {
        let y = 3;
    }

    function  get() {   // Scope is main()
        return x;
    }

    function set() {

    }

    z = get; // get() can be used globally
}

main();
console.log('value from z = ' + z());