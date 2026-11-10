import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

/**
 * The fixed shader background. Kept in its own module so three.js, react-three-fiber and
 * shadergradient load as a separate chunk that doesn't block hydration of the page.
 *
 * Environment maps are self-hosted from /hdr/ (default is a GitHub Pages URL). The library
 * requests city, dawn AND lobby on every mount although only `city` is used, so dawn.hdr and
 * lobby.hdr are 4-pixel stand-ins; city.hdr is the original downsampled to 512x256.
 */
export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{ width: "100%", height: "100%" }}
      lazyLoad={undefined}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
      envBasePath="/hdr/"
    >
      <ShaderGradient
        animate="on"
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={0.3}
        uStrength={0.3}
        uDensity={0.8}
        uFrequency={5.5}
        uAmplitude={3.2}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        color1="#73bfc4"
        color2="#ff810a"
        color3="#8da0ce"
        reflection={0.4}
        cAzimuthAngle={270}
        cPolarAngle={180}
        cDistance={0.5}
        cameraZoom={15.1}
        lightType="env"
        brightness={0.8}
        envPreset="city"
        grain="on"
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
}
