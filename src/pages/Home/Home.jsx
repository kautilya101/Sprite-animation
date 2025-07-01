import { useState } from 'react'
import InputComponent from '../../components/InputComponent'
import MageSpriteComponent from '../../components/MageSpriteComponent';
import ThunderBall from '../../components/ThunderBall';
import { demoAnimationsData } from '../../data';
import BackgroundParticles from '../../components/BackgroundParticles';

const Home = () => {
  //input state
  const [attack, setAttack] = useState('');
  // sprite states
  const [startSpriteAnimation, setStartSpriteAnimation] = useState(false)
  const [spriteResetKey, setSpriteResetKey] = useState(0)
  //animations
  const [attackAnimations, setAttackAnimations] = useState([]);
  //thunderBall animations


  const setAttackHandler = (value) => {
    setAttack(value);
  }

  const onClickHandler = () => {
    if(attack == "") return
    setStartSpriteAnimation(true);
    setAttack('')
    setTimeout(() => {
      setStartSpriteAnimation(false);
      setSpriteResetKey(prev => prev + 1);
    },500)
    if (attackAnimations.length < 5) {
      const id = crypto.randomUUID();
      setTimeout(() => {
        setAttackAnimations((prev) => [...prev, {id, text: attack}]);
      },500)
    }
  }

  const startDemoAnimationHandler = () => {
    setAttack('')
    setAttackAnimations([]);
    setStartSpriteAnimation(true);
    setTimeout(() => {
      setStartSpriteAnimation(false);
      setSpriteResetKey(prev => prev + 1);
    },500)
    setTimeout(() => {
      setAttackAnimations(demoAnimationsData)
    }, 500)
  }

  const onAnimationCompleteHandler = (id) => {
    setAttackAnimations(prev => prev.filter(atk => atk.id !== id))
  }

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
  <div className="relative aspect-[4/3] w-full max-w-screen-lg  overflow-hidden">
    <BackgroundParticles />
    <div className='h-screen w-full flex flex-col relative overflow-hidden backdrop:blur-md'>
      <div className="flex justify-center items-center">
        <div className="flex max-w-fit mt-2 p-8 gap-4 backdrop-blur-lg shadow-md shadow-black z-50">
          <InputComponent attack={attack} setAttackHandler={setAttackHandler} />
          <button className="px-3 py-0 cursor-pointer bg-zinc-700 hover:bg-zinc-700/70 transition-colors duration-300 rounded-lg" 
          onClick={onClickHandler}>
            Attack
          </button>
          <button className="px-3 py-0 cursor-pointer bg-zinc-700 hover:bg-zinc-700/70 transition-colors duration-300 rounded-lg" 
            onClick={startDemoAnimationHandler}>
              Simulate Demo
          </button>
        </div>
      </div>
      <div className="h-full flex items-center pl-8">
        <MageSpriteComponent resetKey={spriteResetKey} onEndAnimation={() => {}} shouldStartAnimation={startSpriteAnimation} />
        <div className="flex flex-1 h-full overflow-x-hidden">
            {attackAnimations.map((atk, i) => (
              <ThunderBall key={atk.id} attack={atk} onAnimationComplete={(id) => onAnimationCompleteHandler(id)} />
            ))}
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Home
