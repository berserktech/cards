AFRAME.registerComponent("impulse", {
  schema: {},

  play: function() {
    setTimeout(() => {
        this.el.body.applyImpulse(
          /* impulse */ new CANNON.Vec3(10, 10, 10),
          /* world position */ new CANNON.Vec3().copy(
            this.el.getComputedAttribute("position")
          )
        );
    }, 100);
  }
});
