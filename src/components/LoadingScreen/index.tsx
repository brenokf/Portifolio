// import { useEffect, useState } from 'react';

import {
  AtomContainer,
  AtomCore,
  Orbit3D,
  Electron,
  GridBackground,
  LoadingContainer,
  LoadingContent,
  LoadingText,
  ProgressBar,
  ProgressBarContainer
} from './styles';

const AtomLoadingScreen = ({ progress }: { progress: number }) => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <LoadingContainer>
      <LoadingContent>
        <GridBackground />

        <AtomContainer>
          {/* Núcleo atômico pulsante */}
          <AtomCore
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Órbitas em 3D */}
          {[
            { size: 180, rotationDuration: 8, electronDuration: 3, rotateX: 70, rotateY: 0, color: "#FF2A6D" },
            { size: 120, rotationDuration: 6, electronDuration: 2.5, rotateX: 0, rotateY: 20, color: "#8A2BE2" },
            { size: 80, rotationDuration: 10, electronDuration: 4, rotateX: 40, rotateY: 60, color: "#00C4CC" },
          ].map((orbital, i) => (
            <Orbit3D
              key={i}
              style={{
                width: `${orbital.size}px`,
                height: `${orbital.size}px`,
                transform: `translate(-50%, -50%) rotateX(${orbital.rotateX}deg) rotateY(${orbital.rotateY}deg)`,
              }}
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: orbital.rotationDuration,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            >
              <Electron
                style={{ backgroundColor: orbital.color, boxShadow: `0 0 10px ${orbital.color}` }}
                animate={{
                  rotateX: 360,
                  rotateY: 360,
                }}
                transition={{
                  duration: orbital.electronDuration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Orbit3D>
          ))}
        </AtomContainer>

        <LoadingText
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Carregando criatividade e inovação...
        </LoadingText>

        <ProgressBarContainer>
          <ProgressBar
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </ProgressBarContainer>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default AtomLoadingScreen;