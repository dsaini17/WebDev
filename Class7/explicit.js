function read(...arr) {
    console.log(arr);
    // console.log(x,y);
    console.log(this.file);
}

var file = {
    name : 'index',
    content : 'xyz abc',
    file : 'new file'
};

list = ['c','d','e'];

//var binder = read.bind(file,list);   // Creates new function
//console.log("Binder output = " + binder());


read.apply(file,list);

// read(); // Default Window Binding
//read.call(file, list); // Explicit Binding
