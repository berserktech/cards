AFRAME.registerComponent('cardbackmaterial', {
    schema: {
      // Add properties.
    },
  
    init: function () {
      this.el.getOrCreateObject3D('mesh').material = new THREE.MeshStandardMaterial({
        // map: new THREE.TextureLoader().load("/resources/cube/color.jpg"),
        map: new THREE.TextureLoader().load( "cardBackBlack.png" ),
        normalScale: new THREE.Vector2( 0.1, 0.1 ),
        transparent: true,
        // roughness: 1,
        // normalMap: new THREE.TextureLoader().load("nrm.jpg"),
        roughnessMap: new THREE.TextureLoader().load("cardBackBlackGray.jpg")
      });
    },
  
    // update: function () {
    //   // Update `this.material`.
    // }
  });