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
  return (
    <LoadingContainer>
      <LoadingContent>
        <GridBackground />

        <AtomContainer>
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

          {/* Órbitas no mesmo plano com brilho intenso */}
          {[
            { size: 180, rotationDuration: 4, electronDuration: 2, color: "#FF2A6D" },
            { size: 120, rotationDuration: 3, electronDuration: 1.5, color: "#8A2BE2" },
            { size: 80, rotationDuration: 2, electronDuration: 1, color: "#00C4CC" },
          ].map((orbital, i) => (
            <Orbit3D
              key={i}
              style={{
                width: `${orbital.size}px`,
                height: `${orbital.size}px`,
                transform: `translate(-50%, -50%)`,
              }}
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: orbital.rotationDuration,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            >
              <Electron
                style={{ backgroundColor: orbital.color, boxShadow: `0 0 20px 5px ${orbital.color}` }}
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
