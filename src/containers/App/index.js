import { default as users} from '../../data/users.json';
import { default as hashtags } from '../../data/hashtag.json';
import BonusListContainer from '../BonusList';

function App() {

  return (
    <>
      <BonusListContainer />
      <h1>
        Users: {users.length}
      </h1>
      <ol>
        {
          users.map((user, index) => {
            const displayNameAndNC = `${user.name} - ${user.currentCoins} NC`;
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
      <h2>Hashtag: {Object.keys(hashtags).length}</h2>
      <ul>
        {
          Object.keys(hashtags).map((item, index) => {
            return (
              <li key={index}>
                #{hashtags[item]}
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;
