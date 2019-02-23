var physics = false;

console.log("members", members);

var profiles = {};

members.forEach(function(member) {
  profiles[
    member.metadata.card.value.toLowerCase() + member.metadata.card.type
  ] = member;
});
console.log("profiles", profiles);

var colors = {
  one: "#123",
  two: "#aaccbb", // 415d8d
  twoBorder: "#000",
  oneBorder: "#fce",
  sky: "#383F4B",
  wood: "#312",
  woodBorder: "#323"
};

var materials = {
  one: {
    color: colors.one,
    emissive: colors.one,
    emissiveIntensity: 1,
    metalness: 1
  },
  two: {
    color: colors.two,
    emissive: colors.two,
    emissiveIntensity: 0.5,
    metalness: 1
  },
  wood: { color: colors.wood, emissive: colors.wood, emissiveIntensity: 1 },
  borderWood: {
    color: colors.woodBorder,
    emissive: colors.woodBorder,
    emissiveIntensity: 1
  },
  black: { color: "black", emissive: "black", emissiveIntensity: 1 },
  white: { color: "white", emissive: "white", emissiveIntensity: 1 },
  borderOne: {
    color: colors.oneBorder,
    emissive: colors.oneBorder,
    emissiveIntensity: 1
  },
  borderTwo: {
    color: colors.twoBorder,
    emissive: colors.twoBorder,
    emissiveIntensity: 1
  }
};

var scene = {
  assets: {
    _type: "a-assets",
    children: {
      pawn: {
        type: "a-asset-item",
        id: "world",
        src: "resources/world.gltf"
      },
      worldMap: { id: "worldmap", src: "resources/Albedo.jpg" },
      clouds: { id: "clouds", src: "resources/transparent-clouds2.png" },
      mountains: { id: "mountains", src: "resources/bump-small.jpg" },
      cubetexture: {
        id: "cubetexture",
        type: "img",
        src: "resources/cube/color.jpg"
      },
      cubenormal: {
        id: "cubenormal",
        type: "img",
        src: "resources/cube/normal.jpg"
      },
      cubereflex: {
        id: "cubereflex",
        type: "img",
        src: "resources/cube/reflex.jpg"
      },
      right: { id: "rightCard", _type: "img", src: "card.png" },
      cardBack: { id: "cardBack", _type: "img", src: "cardBackRed.png" },
      cardBackBlack: {
        id: "cardBackBlack",
        _type: "img",
        src: "cardBackBlack.png"
      },
      cardBackBlue: {
        id: "cardBackBlue",
        _type: "img",
        src: "cardBackBlue.png"
      },
      cardBackRed: { id: "cardBackRed", _type: "img", src: "cardBackRed.png" }
    }
  },
  skydome: {
    _type: "a-sky",
    src: "#sky"
  },
  light1: {
    _type: "a-light",
    type: "point",
    intensity: "3",
    position: { x: -10, y: 0, z: -10 },
    color: "#fff"
  },
  light2: {
    _type: "a-light",
    type: "point",
    intensity: "6",
    position: { x: 17, y: 10, z: 18 },
    color: "#999"
  },
  cameraRig: {
    _type: "a-entity",
    id: "rig",
    position: { x: 4, y: 4, z: 14 },
    rotation: { x: 0, y: 0, z: 0 },
    "raycaster-mouse": "objects: .selectable",
    // 'look-at': { x: 4, y: 4, z: 8 },
    children: {
      camera: {
        id: "camera",
        _type: "a-camera",
        position: { x: 0, y: 0, z: 0 },
        // 'look-at': '#board_4_4',
        // 'id': 'camera',
        // camera: {zoom:1, fov:90, spectator:true},
        camera: { zoom: 1, fov: 60 },
        // 'wasd-controls': '',
        // 'position': '',
        // 'rotation': '',
        "look-controls": "enabled: false;",
        // 'scale': '',
        // 'visible': '',
        // children: {
        //   handLeft: {
        //     _type: "a-entity",
        //     "leap-hand": "hand: left"
        //   },
        //   handRight: {
        //     _type: "a-entity",
        //     "leap-hand": "hand: right"
        //   }
        // }
      }
    }
  }
};

scene["table"] = {
  _type: "a-plane",
  "static-body": "",
  tablematerial: "",
  rotation: { x: -90, y: 0, z: 0 },
  position: { x: 0, y: -5, z: 0 },
  scale: { x: 100, y: 100, z: 10 }
};


var suitsSymbols = { hearts: "♥", clubs: "♣", spades: "♠", diamonds: "♦" };
var suits = Object.keys(suitsSymbols)

var letters = { 1: "A", 10: "J", 11: "Q", 12: "K" };
var suitsBuilder = {
  suitTop: { rotation: 0, left: true },
  suitBottom: { rotation: 180, left: false }
};
var leftSpace = 0.15;
var topSpace = 0.65;
var topSpace2 = topSpace + 0.25;
for (var i = 1; i < 13; i++) {
  for (var j = 0; j < 4; j++) {
    scene[`${suits[j]}${i}`] = {
      _type: "a-entity",
      rotation: { x: profiles[i+suits[j]]?-90:90, y: 0, z: Math.random() * 10 },
      "collider-check": "",
      position: {
        x: -9 + 4.5 * (j) + -4 * Math.random(),
        y: -4.5 + 0.5 * (i + j * 12)/52, //10 + 3 * (i + j * 12), // / 52 + 2 * (i + j * 12),
        z: -25 + 3 * (i)
      },
      children: {
        plastic: {
          _type: "a-entity",
          geometry: { primitive: "plane", width: 1 },
          class: 'selectable',
          material: {
            src: "#rightCard",
            transparent: true,
            repeat: { x: 1, y: 1 }
          },
          scale: { x: 2.5, y: 3.5, z: 0.001 }
        },
        plasticBack: {
          _type: "a-entity",
          geometry: { primitive: "plane", width: 1 },
          cardbackmaterial: "true",
          // material: {
          //   src: "#cardBackBlue",
          //   roughnessMap: "#cardBackBlack",
          //   transparent: true,
          //   repeat: { x: 1, y: 1 }
          // },
          scale: { x: 2.5, y: 3.5, z: 0.001 },
          rotation: { x: 0, y: 180, z: 0 }
        },

      }
    };

    if(profiles[i+suits[j]]) {
      scene[`${suits[j]}${i}`].children['plasticPhoto'] = {
        _type: "a-entity",
        geometry: { primitive: "plane", width: 1 },
        material: {
          src: profiles[i+suits[j]].github.avatar_url,
          roughness: 1,
          metalness: 0,
          shader: 'flat',
        },
        position: {x: 0, y:0, z: 0.01},
        scale: { x: 1.4, y: 1.4, z: 0.001 }
      }
    } 

    if (physics) {
      scene[`${suits[j]}${i}`]["dynamic-body"] = { shape: "box" };
    }

    Object.keys(suitsBuilder).forEach(function(suitKey) {
      scene[`${suits[j]}${i}`].children[suitKey + "number"] = {
        position: {
          x:
            (suitsBuilder[suitKey].left ? 1 : -1) *
            -(2.5 / 2 - leftSpace + 0.05),
          y:
            (3.5 - topSpace) / 2 -
            (suitsBuilder[suitKey].left ? 0 : 1) * (3.5 - topSpace),
          z: -0.1
        },
        _type: "a-entity",
        color: "red",
        rotation: { x: 0, y: 0, z: suitsBuilder[suitKey].rotation },
        text: {
          value: letters[i] ? letters[i] : i,
          color: j < 2 ? "red" : "black",
          anchor: "left",
          zOffset: 0.11,
          width: 10,
          font: "https://cdn.aframe.io/fonts/Roboto-msdf.json"
        }
      };
      scene[`${suits[j]}${i}`].children[suitKey + "suit"] = {
        position: {
          x: (suitsBuilder[suitKey].left ? 1 : -1) * -(2.5 / 2 - leftSpace),
          y:
            (3.5 - topSpace - topSpace2) / 2 -
            (suitsBuilder[suitKey].left ? 0 : 1) * (3.5 - topSpace - topSpace2),
          z: -0.1
        },
        _type: "a-entity",
        color: "red",
        rotation: { x: 0, y: 0, z: suitsBuilder[suitKey].rotation },
        text: {
          value: suitsSymbols[suits[j]], //'♥',//suits[j],//i,
          color: j < 2 ? "red" : "black",
          anchor: "left",
          zOffset: 0.11,
          width: 10,
          font: "resources/Times New Roman-msdf.json"
        }
      };
    });
  }
}

///>> Scene building mechanism
function buildElements(piece) {
  var elements = [];
  for (element in piece) {
    var el = document.createElement(piece[element]._type || "a-entity");

    for (key in piece[element]) {
      if (["_type", "children"].indexOf(key) === -1) {
        el.setAttribute(key, piece[element][key]);
      }
    }

    if (piece[element].children) {
      buildElements(piece[element].children).forEach(function(childrenEl) {
        el.appendChild(childrenEl);
      });
    }

    elements.push(el);
  }
  return elements;
}

var sceneElements = buildElements(scene);

var sceneEl = document.querySelector("#mainScene");
sceneElements.forEach(function(children) {
  sceneEl.appendChild(children);
});
