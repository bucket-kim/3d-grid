export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "/textures/environmentMap/px.jpg",
      "/textures/environmentMap/nx.jpg",
      "/textures/environmentMap/py.jpg",
      "/textures/environmentMap/ny.jpg",
      "/textures/environmentMap/pz.jpg",
      "/textures/environmentMap/nz.jpg",
    ],
  },
  {
    name: "model",
    type: "gltfModel",
    path: "models/scene.glb",
  },
  {
    name: "modelTexture",
    type: "texture",
    path: "textures/texture.png",
  },
];
