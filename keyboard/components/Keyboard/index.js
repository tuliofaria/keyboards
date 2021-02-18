import styles from './styles.module.css'

const Keyboard = ({ setDisplay }) => {
  const lines = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  const onClick = (evt) => {
    evt.persist()
    const value = evt.target.innerText
    setDisplay((old) => old + value)
  }
  const clear = () => {
    setDisplay('')
  }
  return (
    <div>
      {lines.map((line) => {
        const keys = line.split('')
        return (
          <div key={line}>
            {keys.map((key) => {
              return (
                <button
                  key={key}
                  className={'anotherClassForKey ' + styles.key}
                  onClick={onClick}
                >
                  {key}
                </button>
              )
            })}
          </div>
        )
      })}
      <button className={styles.keyClear} onClick={clear}>
        Clear
      </button>
    </div>
  )
}
export default Keyboard
