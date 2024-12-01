"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useMemo, useState } from "react";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  //   const particlesLoaded = (container) => {
  //     console.log("load Panicles", container);
  //   };

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "grab",
          },
          resize: false,
        },
        modes: {
          grab: {
            distance: 100,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 200,
            size: 80,
            duration: 0.4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: true,
          distance: 100,
          color: "#ffffff",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
          bounce: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 300,
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      {init && (
        <Particles
          options={particlesOptions}
          className="relative -z-[1] h-full w-full"
        />
      )}
    </>
  );
};

export default ParticlesBackground;
