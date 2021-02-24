import { useState } from 'react';
import { useHashtagState, useHashtagDispatch } from '../../../context/hashtag/HashtagContext';
import styles from './bonusadd.module.css';

function BonusAdd(){
  
  const { hasthtagsList } = useHashtagState();
  const dispatch = useHashtagDispatch();

  console.log(hasthtagsList);
  const initialBonus = {
    description: '',
    amount: 0,
    hashtags:[],
  };
  
  const [bonus, setBonus]  = useState(initialBonus);
  
  const list = hasthtagsList?.map((item)=>{
    return (<option value={item}>item</option>);
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setBonus((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      alert('Your registration was successfully submitted! ' + JSON.stringify(bonus));
      console.log(bonus);
      setBonus(initialBonus);
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  }

  const addHashtag = () =>{
    dispatch({
      type: 'GET_HASHTAGS_LIST_SUCCESS',
      payload: [1,2,3]
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>

        <label htmlFor="description">Add bonus:</label>
        <input type="text" id="description" name="description" required
              minLength="4" size="10" value={bonus.description} onChange={set('description')}></input>

        <label htmlFor="amount">Netcoins:</label>
        <input type="number" id="amount" name="amount" required
              min="1" value={bonus.amount} onChange={set('amount')}></input>

        <label>Color*:</label>
        <select>
          <option value="">Select color</option>
          {list}
        </select>
        <button type="button" onClick={addHashtag}>Add hashtag</button>
        <input type="submit" value="Submit" />

      </form>
    </>
  );
}

export default BonusAdd;