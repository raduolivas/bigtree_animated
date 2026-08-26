export function TreeLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Cinematic Key Light */}
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={2} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
      />
      {/* Subtle Rim Light */}
      <directionalLight 
        position={[-5, 2, -5]} 
        intensity={1} 
        color="#3b82f6" 
      />
    </>
  );
}
