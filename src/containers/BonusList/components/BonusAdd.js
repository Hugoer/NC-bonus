import { useEffect, useState } from 'react';
import { useHashtagState } from '../../../context/hashtag/HashtagContext';
import PropTypes from 'prop-types';
import { Select } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styles from './bonusadd.module.css';
function BonusAdd({ addBonus }) {
  
  const { hasthtagsList } = useHashtagState();
  
  const initialBonus = {
    description: 'sdfdsffsdfds',
    amount: 12,
    hashtags:[],
  };
  
  const [bonus, setBonus]  = useState(initialBonus);
  const [list, setList] = useState([]);

  useEffect(()=>{
    const hashtags = Object.keys(hasthtagsList).map((item,idx)=>{
      return {
        value: item, 
        label: hasthtagsList[item],
      }
/*       return (
          <MenuItem key={idx} value={item}>
            <Checkbox checked={this.state.selectedItems.indexOf(index) > -1} />
            <ListItemText primary={item.name} />
          </MenuItem>    
      ) */
    });
    console.log(hashtags);
    setList(hashtags || []);
  }, [hasthtagsList]);

  const set = (name) => {
    return (field) => {
      const value = field?.target?.value || field;
      setBonus((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      console.log(bonus);
      addBonus({
        from: 0, 
        to: 1,
        text: bonus.description,
        amount: bonus.amount,
        hashtags: [bonus.hashtags]
      });
      setBonus(initialBonus);
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>

        <label htmlFor="description">Descrription *</label>
        <input type="text" id="description" name="description" required
              minLength="4" size="10" value={bonus.description} onChange={set('description')}></input>

        <label htmlFor="amount">Netcoins *</label>
        <input type="number" id="amount" name="amount" required
              min="1" value={bonus.amount} onChange={set('amount')}></input>

        <FormControl >
          <InputLabel id="hashtags">Hashtags *</InputLabel>
          <Select
            labelId="hashtags"
            id="hashtags"
            multiple
            value={bonus['hashtags']}
            onChange={set('hashtags')}
            input={<Input />}
            validators={["required"]}
          >
            {list?.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
          </Select>
        </FormControl>

        <input type="submit" value="Submit" />

      </form>
    </>
  );
}

BonusAdd.propTypes = {
  addBonus: PropTypes.func,
}

export default BonusAdd;