import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './EffectsBackground.css';
const EffectsBackground = () => {

const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
}, []);

return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: ["#ffffff", "#DA7C25", "#B923E1"] },
          shape: { type: ["circle", "star", "triangle"] },
          opacity: { value: 0.8, random: true },
          size: { value: 2, random: true },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out"
          }
        },
        detectRetina: true
      }}
    />

    );
};

export default EffectsBackground;
