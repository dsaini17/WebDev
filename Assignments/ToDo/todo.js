window.onload = function () {
    "use strict";

    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');
    let value = "";
    btn.onclick = function () {
        //value += `<li> ${inp.value} </li>`;
        //result.innerHTML = value;   // Removes all the values, then adds the previous+updated values

        var abc = document.createElement("li");        // Create a <li> element
        var t = document.createTextNode(`${input.value}`);       // Create a text node
        abc.appendChild(t);
        result.appendChild(abc);
    }

    // FUNCTION UPDATE
    // FUNCTION DELETE
    // Optimize this method using CreateNode
};