(function (m,s) {

    function marks(m,s) {
        return m+s;
    }

    function student() {
        return marks(m,s);
    }

    console.log("Passing values to IIFE = " + student());
})(10,20);