import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './EffectsBackground.css'
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
        shape: { type: "triangle" },
        background: { color: "transparent" }, 
        particles: {
        number: { value: 120 },
        size: { value: 2, random: true },
        color: { value: "#834673ff" },
        move: { enable: true, speed: 0.5, out_mode: "out" },
        interactivity: {
            events: {
            onHover: { enable: true, mode: "grab" },
            onclick: { enable: false },
            },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } } },
        },
        retina_detect: true,
        },
    }}
    />

    );
};

export default EffectsBackground;
