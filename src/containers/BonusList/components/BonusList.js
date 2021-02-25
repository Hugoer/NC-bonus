import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { Bonus } from './Bonus';
import bonusListStyles from './bonuslist.module.css';
import BonusAdd from './BonusAdd';
function BonusList({ getBonusList, bonusList}) {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    getBonusList();
  }, []);

  useEffect(()=>{
    const bonusItems = bonusList.map((bonus,idx) => (
        <Bonus bonus={bonus} key={idx}/>
      )
    );
    setItems(bonusItems);
  }, [bonusList]);

  return (
    <>
      <BonusAdd/>
      <div className={bonusListStyles.bonuslist}>
        {items}
      </div>
    </>
  );

}

BonusList.propTypes = {
  getBonusList: PropTypes.func,
  bonusList: PropTypes.array,
};

export default BonusList;
