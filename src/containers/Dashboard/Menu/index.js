import { useHashtagDispatch, useHashtagState } from '../../../context/hashtag/HashtagContext';
import styles from './menu.module.css';

function Menu() {
  const { hasthtagsList } = useHashtagState();
  const dispatch = useHashtagDispatch();
  const addHashtag = () =>{
    console.log(hasthtagsList);
    dispatch({
      type: 'GET_HASHTAGS_LIST_SUCCESS',
      payload: [4,5,6]
    });
  };
  return (
      <div className={styles.menu}>
        <button type="button" onClick={addHashtag}>Add hashtag</button>
      </div>
  );
}

export default Menu;