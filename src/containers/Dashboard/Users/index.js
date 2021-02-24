import { default as users} from '../../../data/users.json';
import styles from './users.module.css';

function Users() {

  return (
    <div className={styles.users}>
      <h1>
      Users: {users.length}
      </h1>
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