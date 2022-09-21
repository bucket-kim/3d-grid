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
    path: "textures/mask texture/mask_BaseColor.png",
  },
  {
    name: "spidermanMaskRoughness",
    type: "texture",
    path: "textures/mask texture/mask_Roughness.png",
  },
  {
    name: "spidermanMaskMetal",
    type: "texture",
    path: "textures/mask texture/mask_Metalness.png",
  },
  {
    name: "spidermanMaskNormal",
    type: "texture",
    path: "textures/mask texture/mask_Normal.png",
  },
  {
    name: "spidermanMaskHeight",
    type: "texture",
    path: "textures/mask texture/mask_Height.png",
  },
];
