# Tree and Texture Assets

The production tree is stored at `public/model/tree/tree-v2.glb`.

The root system is modeled directly into the GLB so it shares the tree's bark
material and moves naturally with the trunk. The former procedural tube roots
and colored service spheres are intentionally not rendered.

It is optimized for web delivery with Meshopt geometry compression and embedded
2048px WebP textures. The original source remains recoverable from Git history.

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
