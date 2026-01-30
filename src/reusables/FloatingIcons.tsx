interface FloatingIcon {
  color: string;
  size: number; // in rem
  top: string;
  left: string;
  animation?: string;
}

interface FloatingIconsProps {
  icons?: FloatingIcon[];
}

export default function FloatingIcons({ icons }: FloatingIconsProps) {
  // Default icons if none provided
  const defaultIcons: FloatingIcon[] = [
    {
      color: '#FFD700',
      size: 4,
      top: '10%',
      left: '20%',
      animation: 'floatCoin 5s infinite ease-in-out',
    },
    {
      color: '#00C776',
      size: 3,
      top: '70%',
      left: '10%',
      animation: 'floatCoin 4s infinite ease-in-out',
    },
    {
      color: '#FFE066',
      size: 2,
      top: '30%',
      left: '80%',
      animation: 'floatSparkle 6s infinite ease-in-out',
    },
    {
      color: '#00A86B',
      size: 2.5,
      top: '50%',
      left: '60%',
      animation: 'floatSparkle 4.5s infinite ease-in-out',
    },
  ];

  const iconList = icons || defaultIcons;

  return (
    <>
      {iconList.map((icon, index) => (
        <div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${icon.size}rem`,
            height: `${icon.size}rem`,
            top: icon.top,
            left: icon.left,
            backgroundColor: icon.color,
            animation: icon.animation,
          }}
        />
      ))}

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes floatCoin {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-15px) rotate(15deg); opacity: 0.8; }
          }

          @keyframes floatSparkle {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
          }
        `}
      </style>
    </>
  );
}
