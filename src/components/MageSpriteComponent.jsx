import { SpriteAnimator } from 'react-sprite-animator'
const MageSpriteComponent = ({resetKey, shouldStartAnimation, onEndAnimation}) => {
  return (
    <div className='z-10 scale-150'>
      <SpriteAnimator
        key={resetKey}
        sprite="/assets/sprite/Attack_1.png"
        width={128}
        scale={1}
        height={128}
        fps={14}
        frameCount={7}
        shouldAnimate={shouldStartAnimation}
        stopLastFrame
        frame
        onEnd={onEndAnimation}
      />
    </div>
  )
}

export default MageSpriteComponent
