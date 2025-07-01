import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { getRandomPath, getRandom } from "../utils";

const ThunderBall = memo(function ({ attack, onAnimationComplete }){
  const path = useMemo(getRandomPath, []);
  const duration = useMemo(() => getRandom(4, 5),[]); 
  const top = useMemo(() => getRandom(20, 80), []);    
  const delay = useMemo(() => getRandom(0, 1), []);    
 
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        x: path.map(p => `${p.x}vw`),
        y: path.map(p => `${p.y}vh`),
      }}
      transition={{
        duration,
        delay,
        times: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.75, 1],
        ease: 'easeInOut',
        rotate: { duration: 1}
      }}
      className="absolute w-10 h-10 rounded-full pointer-events-none shadow-[0_0_15px_#3c00ff,0_0_30px_#3c00ff] bg-[radial-gradient(circle,_#3c00ff,_#220077)] animate-thunder-move"
      style={{
        top: `${top}vh`,
        left: 100
      }}
      onAnimationComplete={() => onAnimationComplete(attack.id)}
    >
      <span className="absolute top-full text-sm text-white mt-1 whitespace-nowrap">
        {attack.text}
      </span>
    </motion.div>
  );
})

export default ThunderBall;
