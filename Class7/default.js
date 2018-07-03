
function original() {
    fake();

}

function fake() {
    console.log(this);
}

original();