export interface CameraKeyframe {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export const cameraKeyframes: Record<string, CameraKeyframe> = {
  seed: {
    position: [0.4, 2.4, 11.5],
    lookAt: [0, 2.5, 0],
  },
  roots: {
    position: [-0.8, 0.3, 9.5],
    lookAt: [0, -0.4, 0],
  },
  trunk: {
    position: [1.4, 2.2, 9.2],
    lookAt: [0, 2.2, 0],
  },
  branches: {
    position: [2.2, 4.2, 10.2],
    lookAt: [0, 3.7, 0],
  },
  fruits: {
    position: [-1.8, 4.8, 9.6],
    lookAt: [0, 4.1, 0],
  },
  mature: {
    position: [0.4, 3.4, 11.8],
    lookAt: [0, 3.2, 0],
  },
  network: {
    position: [-2.4, 4.1, 12.6],
    lookAt: [0, 3.2, 0],
  },
  ecosystem: {
    position: [0, 3.2, 14],
    lookAt: [0, 3, 0],
  },
};
