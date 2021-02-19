import styles from './styles.module.css'

const Display = ({ display }) => {
  return <div className={styles.display + ' display'}>{display}</div>
}
export default Display
