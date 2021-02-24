import styles from './container.module.css'
import Menu from '../Menu';
import Main from '../Main';
import Users from '../Users';
import { HashtagContextProvider } from '../../../context/hashtag/HashtagContext';

function Container() {

  return (

    <div className={styles.container}>
      <HashtagContextProvider>
        <Menu/>
      </HashtagContextProvider>
      <Main/>
      <Users/>
    </div>
  )

}

export default Container;