import { useEffect, useState } from 'react';
import styles from './bonusadd.module.css';

function BonusAdd(){
  const initialBonus = {
    description: '',
    amount: 0,
    hashtags:[],
  };
  const [bonus, setBonus]  = useState(initialBonus);
  
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
          <input type="submit" value="Submit" />

        <label htmlFor="amount">Netcoins:</label>
        <input type="number" id="amount" name="amount" required
              min="0" value={bonus.amount} onChange={set('amount')}></input>

        <input type="submit" value="Submit" />

      </form>
    </>
  );
}

export default BonusAdd;