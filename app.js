

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


