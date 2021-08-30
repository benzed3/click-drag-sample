//for white rook

var whiterook = document.getElementById("rook");

whiterook.addEventListener("touchmove", function (ev) {

    var touchLocation = ev.targetTouches[0];

    whiterook.style.left = touchLocation.pageX + "px";
    whiterook.style.top = touchLocation.pageY + "px";

})

whiterook.addEventListener("touchend", function (ev) {

    var x = parseInt(whiterook.style.left);
    var y = parseInt(whiterook.style.top);

})

//for black rook

var blackrook = document.getElementById("rook2");

blackrook.addEventListener("touchmove", function (ev) {

    var touchLocation = ev.targetTouches[0];

    blackrook.style.left = touchLocation.pageX + "px";
    blackrook.style.top = touchLocation.pageY + "px";

})

blackrook.addEventListener("touchend", function (ev) {

    var x = parseInt(blackrook.style.left);
    var y = parseInt(blackrook.style.top);

})

//drag and drop for kenshin image//

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}