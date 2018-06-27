var global = {};

(function () {
    "use strict";

    function main() {
        var z;
        var a = 7;
        if (true) {
            var b = 3;
        }
        console.log(b);

        function mainx() {
            console.log(a + b);

            function zeroToOne(c) {
                console.log(a + b + c);
            }

            z = zeroToOne; //  To use zeroToOne outside its scope
        }

        mainx();
        z(3);
    }

    main();

     var x = 9;
    function check() {

        return function overwrite() {
            return 'This also works';
        };

        // function overwrite() {
        //
        //     console.log(x);
        // }
        // overwrite();
        // return 'Works';
    }
    global.m = check;
    check();

})();

console.log('Global = ' + global.m());
console.log('Global = ' + global.m()());

