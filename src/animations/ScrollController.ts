export interface CameraKeyframe {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export const cameraKeyframes: Record<string, CameraKeyframe> = {
  seed: {
    position: [0, 1, 8],
    lookAt: [0, 0, 0],
  },
  roots: {
    position: [0, -0.5, 10],
    lookAt: [0, -1, 0],
  },
  trunk: {
    position: [1, 2, 9],
    lookAt: [0, 2, 0],
  },
  branches: {
    position: [2, 4, 10],
    lookAt: [0, 3, 0],
  },
  fruits: {
    position: [-1, 5, 9],
    lookAt: [0, 4, 0],
  },
  mature: {
    position: [0, 3, 12],
    lookAt: [0, 3, 0],
  },
  network: {
    position: [-2, 4, 14],
    lookAt: [0, 3, 0],
  },
  ecosystem: {
    position: [0, 3, 15],
    lookAt: [0, 3, 0],
  },
};
