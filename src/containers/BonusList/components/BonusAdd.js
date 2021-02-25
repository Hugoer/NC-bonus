import { useEffect, useState } from 'react';
import { useHashtagState } from '../../../context/hashtag/HashtagContext';
import styles from './bonusadd.module.css';

function BonusAdd(){
  
  const { hasthtagsList } = useHashtagState();
  
  const initialBonus = {
    description: '',
    amount: 0,
    hashtags:[],
  };
  
  const [bonus, setBonus]  = useState(initialBonus);
  const [list, setList] = useState()

  useEffect(()=>{
    const hashtags = Object.keys(hasthtagsList).map((item)=>{
      return (<option value={item}>{hasthtagsList[item]}</option>);
    });
    setList(hashtags);
  }, [hasthtagsList]);

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
          { list }
        </select>

        <input type="submit" value="Submit" />

      </form>
    </>
  );
}

export default BonusAdd;