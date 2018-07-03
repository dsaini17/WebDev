

var y  =(function () {

    function marks(maths,science) { // Private Function
        return maths+science;
    }

    function student(m,s) { // Public Function
        return marks(m,s);
    }

    return student;
})();

console.log(y);
console.log(y(10,15));