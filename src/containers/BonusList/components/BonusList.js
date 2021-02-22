import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function BonusList({ getBonusList, bonusList}) {
  const [items, setItems] = React.useState([]);

  useEffect(()=> {
    getBonusList();
  }, []);

  useEffect(()=>{
    const bonusItems = bonusList.map(bonus => (
      <p>`${bonus.from} - ${bonus.to}: ${bonus.amount}`</p>)
    );
    setItems(bonusItems);
  }, [bonusList]);

  return <div>
    {items}
  </div>;

}

BonusList.propTypes = {
  getBonusList: PropTypes.func,
  bonusList: PropTypes.array,
};

export default BonusList;
