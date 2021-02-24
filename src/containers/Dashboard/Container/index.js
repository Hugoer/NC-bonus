import styles from './container.module.css'
import Menu from '../Menu';
import Main from '../Main';
import Users from '../Users';

function Container() {

  return (
    <div className={styles.container}>
      <Menu/>
      <Main/>
      <Users/>
    </div>
  )

}

export default Container;