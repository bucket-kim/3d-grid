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
];
