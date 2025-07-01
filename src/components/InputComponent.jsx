
const InputComponent = ({attack, setAttackHandler, onClickHandler}) => {

  return (
      <input 
        value={attack}
        placeholder='Enter spell name'
        onChange={(e) => setAttackHandler(e.target.value)}
        className='p-2 px-3 focus:outline-1 outline-zinc-800 rounded-sm'
      />
  )
}

export default InputComponent
