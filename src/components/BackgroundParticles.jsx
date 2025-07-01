import { useCallback, useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("✨ Particles Loaded:", container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="magic-particles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false, zIndex: -1 },
            background: { color: "transparent" },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              color: { value: ["#00f0ff", "#ffffff", "#aa00ff"] },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: { min: 2, max: 4 }, random: true },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}
    </>
  );
};

export default memo(BackgroundParticles);
