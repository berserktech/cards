var table = 'table7'

AFRAME.registerComponent('tablematerial', {
    schema: {
      // Add properties.
    },
  
    init: function () {
      this.el.getOrCreateObject3D('mesh').material = new THREE.MeshStandardMaterial({
        // map: new THREE.TextureLoader().load("/resources/cube/color.jpg"),
        // metalness: 1.0,
        // color: '0x000000',
        map: new THREE.TextureLoader().load( `/resources/${table}/col.jpg` ),
        // normalScale: new THREE.Vector2( 0.1, 0.1 ),
        // transparent: true,
        // roughness: 1,
        // normalMap: new THREE.TextureLoader().load("nrm.jpg"),
        roughnessMap: new THREE.TextureLoader().load(`/resources/${table}/refl.jpg`),
        normalMap: new THREE.TextureLoader().load(`/resources/${table}/nrm.jpg`)
      });
    },
  
    // update: function () {
    //   // Update `this.material`.
    // }
  });