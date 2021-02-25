/* import { default as users} from '../../data/users.json';
import { default as hashtags } from '../../data/hashtag.json'; */
import Container from '../Dashboard/Container';
import { HashtagContextProvider } from '../../context/hashtag/HashtagContext';

function App() {

  return (
    <HashtagContextProvider>
      <Container />
    </HashtagContextProvider>
  );
}

export default App;