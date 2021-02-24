import styles from './main.module.css';
import BonusListContainer from '../../BonusList';

function Main(){
  return (
    <main className={styles.main}>
      <BonusListContainer />
    </main>
  )
}

export default Main;