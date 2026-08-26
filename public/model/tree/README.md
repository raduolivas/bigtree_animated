# Tree and Texture Assets

Place your realistic GLB/GLTF tree model at:
`public/models/tree/tree.glb`

If your model uses external PBR textures (bark and leaves), place them under:
`public/textures/tree/`

## Expected Texture Maps (PBR)
- Bark:
  - Base Color / Albedo (`bark_diffuse.jpg` or similar)
  - Roughness (`bark_roughness.jpg`)
  - Normal (`bark_normal.jpg`)
- Leaves:
  - Base Color / Albedo (`leaf_diffuse.jpg`)
  - Alpha / Mask (`leaf_alpha.jpg` or embedded in alpha channel)
  - Normal (`leaf_normal.jpg`)
  - Roughness (`leaf_roughness.jpg`)
