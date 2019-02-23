
AFRAME.registerComponent('rotator', {

    tick: function (a, b) {
        // console.log('tick...', a, b,  !this.mouseDown, this.mouseUpTime.getTime(), new Date().getTime(), this.mouseUpTime.getTime() > new Date().getTime() + 4000)
        this.el.object3D.rotation.y -= Math.PI / 10000 / 3;
    },

});

/**
 * Copy contents of one array to another without allocating new array.
 */
function copyArray(a, b) {
    var i;
    a.length = b.length;
    for (i = 0; i < b.length; i++) {
        a[i] = b[i];
    }
}
