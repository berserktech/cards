AFRAME.registerComponent("my-material", {
  init: function() {
    this.color = new THREE.TextureLoader().load("resources/cube/color.jpg")
    this.material = new THREE.MeshStandardMaterial({
      // map: new THREE.TextureLoader().load("/resources/cube/color.jpg"),
      normalMap: new THREE.TextureLoader().load( "resources/cube/normal.jpg" ),
      // normalScale: new THREE.Vector2( 0.1, 0.1 ),
      roughnessMap: new THREE.TextureLoader().load("resources/cube/reflex.jpg")
    });

    this.el.addEventListener("model-loaded", () => this.update());

    // this.el.addEventListener('model-loaded', function (e) {
    //   e.detail.model.traverse(function(node) {
    //     if (node.isMesh) node.material = new THREE.MeshStandardMaterial({
    //       map: new THREE.TextureLoader().load("/resources/cube/color.jpg"),
    //       // normalMap: new THREE.TextureLoader().load( "/resources/cube/normal.jpg" ),
    //       // normalScale: new THREE.Vector2( 0.1, 0.1 ),
    //       roughnessMap: new THREE.TextureLoader().load("/resources/cube/reflex.jpg")
    //     }); //new THREE.TextureLoader().load("/resources/cube/color.jpg");
    //   });
    // });
  },

  // update: function() {
  //   const object = this.el.getObject3D("mesh");
  //   // if (mesh) {
  //   //   mesh.material = this.material;
  //   // }
  //   if (!object) return;
  //   console.log('object', object)

  //   // object.material.map = new THREE.TextureLoader().load("/resources/cube/color.jpg")
  //   // object.material.needsUpdate = true

  //   if (object) {
  //     object.traverse(function(node) {
  //       console.log('node', node)
  //       if (node.isMesh) {
  //         node.material.color = this.color;
  //         node.material.needsUpdate = true
  //       }
  //     });
  //   }
  // }
});
