import { motion } from 'motion/react';

export default function CoffeeMolecule() {
  const atoms = [
    { x: 50, y: 30, color: '#3B82F6', label: 'N' },
    { x: 80, y: 50, color: '#EF4444', label: 'O' },
    { x: 50, y: 70, color: '#10B981', label: 'C' },
    { x: 20, y: 50, color: '#3B82F6', label: 'N' },
    { x: 35, y: 35, color: '#10B981', label: 'C' },
    { x: 65, y: 35, color: '#10B981', label: 'C' },
    { x: 65, y: 65, color: '#10B981', label: 'C' },
    { x: 35, y: 65, color: '#10B981', label: 'C' },
  ];

  const bonds = [
    { x1: 50, y1: 30, x2: 35, y2: 35 },
    { x1: 50, y1: 30, x2: 65, y2: 35 },
    { x1: 65, y1: 35, x2: 80, y2: 50 },
    { x1: 80, y1: 50, x2: 65, y2: 65 },
    { x1: 65, y1: 65, x2: 50, y2: 70 },
    { x1: 50, y1: 70, x2: 35, y2: 65 },
    { x1: 35, y1: 65, x2: 20, y2: 50 },
    { x1: 20, y1: 50, x2: 35, y2: 35 },
  ];

  return (
    <motion.div
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="w-full h-full"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Bonds */}
        {bonds.map((bond, index) => (
          <motion.line
            key={`bond-${index}`}
            x1={bond.x1}
            y1={bond.y1}
            x2={bond.x2}
            y2={bond.y2}
            stroke="#94A3B8"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: index * 0.1 }}
          />
        ))}

        {/* Atoms */}
        {atoms.map((atom, index) => (
          <g key={`atom-${index}`}>
            <motion.circle
              cx={atom.x}
              cy={atom.y}
              r="8"
              fill={atom.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
            <text
              x={atom.x}
              y={atom.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              {atom.label}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
