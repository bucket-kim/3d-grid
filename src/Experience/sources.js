export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "/textures/environmentMap/px.png",
      "/textures/environmentMap/nx.png",
      "/textures/environmentMap/py.png",
      "/textures/environmentMap/ny.png",
      "/textures/environmentMap/pz.png",
      "/textures/environmentMap/nz.png",
    ],
  },
  {
    name: "museumEnvTexture",
    type: "cubeTexture",
    path: [
      "/textures/museumEnv/px.png",
      "/textures/museumEnv/nx.png",
      "/textures/museumEnv/py.png",
      "/textures/museumEnv/ny.png",
      "/textures/museumEnv/pz.png",
      "/textures/museumEnv/nz.png",
    ],
  },
  {
    name: "spidermanMask",
    type: "gltfModel",
    path: "models/mask.glb",
  },
  {
    name: "spidermanMaskBaseColor",
    type: "texture",
    path: "textures/mask texture/mask_BaseColor.jpg",
  },
  {
    name: "spidermanMaskRoughness",
    type: "texture",
    path: "textures/mask texture/mask_Roughness.jpg",
  },
  {
    name: "spidermanMaskMetal",
    type: "texture",
    path: "textures/mask texture/mask_Metalness.jpg",
  },
  {
    name: "spidermanMaskNormal",
    type: "texture",
    path: "textures/mask texture/mask_Normal.jpg",
  },
  {
    name: "spidermanMaskHeight",
    type: "texture",
    path: "textures/mask texture/mask_Height.jpg",
  },

  // cover mask
  {
    name: "coverMask",
    type: "gltfModel",
    path: "models/coverSculpture.glb",
  },
  {
    name: "coverMaskMetalness",
    type: "texture",
    path: "textures/cover sculpture/metalness.jpg",
  },
  {
    name: "coverMaskRoughness",
    type: "texture",
    path: "textures/cover sculpture/roughness.jpg",
  },
  {
    name: "coverMaskNormal",
    type: "texture",
    path: "textures/cover sculpture/normal.jpg",
  },
  // sculpture
  {
    name: "sculpture",
    type: "gltfModel",
    path: "models/sculpture.glb",
  },

  // shoes
  {
    name: "shoe",
    type: "gltfModel",
    path: "models/shoe.glb",
  },
  {
    name: "shoeColor",
    type: "texture",
    path: "textures/shoes_Base_Color.png",
  },

  // glasses
  {
    name: "glasses",
    type: "gltfModel",
    path: "models/glasses.glb",
  },
];
