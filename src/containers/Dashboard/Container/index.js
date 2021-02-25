import styles from './container.module.css'
import Menu from '../Menu';
import Main from '../Main';
import Users from '../Users';
import { useHashtagDispatch } from '../../../context/hashtag/HashtagContext';
import { default as hashtags } from '../../../data/hashtag.json';
import * as constants from '../../../context/hashtag/meta/constants';
import { useEffect } from 'react';

function Container() {
  
  const dispatch = useHashtagDispatch();
  
  useEffect(() => {
      dispatch({
        type: constants.GET_HASHTAGS_LIST_SUCCESS,
        payload: hashtags
      });
  }, []);

  return (
    <div className={styles.container}>
      <Menu/>
      <Main/>
      <Users/>
    </div>
  )

}

export default Container;