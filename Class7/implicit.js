var fruit = {
    name: 'apple',
    getName: function () {
        return this;
    }
};

console.log(fruit.name);
console.log(fruit.getName());   // Implicit


function getName() {
    return fruit;   // this -> global
}

console.log(getName());
console.log(window.getName());
console.log(this.getName());