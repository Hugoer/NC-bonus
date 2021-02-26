import { useEffect, useState } from 'react';
import { useHashtagState } from '../../../context/hashtag/HashtagContext';
import { default as users} from '../../../data/users.json';
import styles from './users.module.css';

function Users() {
  
  const { hasthtagsList } = useHashtagState();

  const [list, setList] = useState();

  useEffect(()=>{
    const hashtags = Object.keys(hasthtagsList).map((item,idx)=>{
      return (
        <li key={idx}>
          {hasthtagsList[item]}
        </li>
      );
    });
    setList(hashtags);
  }, [hasthtagsList]);

  return (
    <div className={styles.users}>
      <h1>
      Users: {users.length}
      </h1>
      <ul>
        { list }
      </ul>
      <ol>
      {
        users.map((user, index) => {
          const displayNameAndNC = `${user.name} - ${user.currentCoins} NetCoins`;
          user = {
            ...user,
            displayNameAndNC,
          };
        return (
          <li key={index}>
            {user.displayNameAndNC}
          </li>
        )})
      }
      </ol>    
    </div>
  );

}

export default Users;