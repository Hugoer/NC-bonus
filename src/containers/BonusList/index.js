import { connect } from "react-redux";
import BonusList from "./components/BonusList";
import { bonusListSelector } from "./meta/selectors";
import { getBonusList, addBonus } from './meta/actions';

const matStateToProps = state => ({
  bonusList: bonusListSelector(state),
});

const mapDispatchToProps = ({
  getBonusList,
  addBonus,
});

const BonusListContainer = connect(
  matStateToProps,
  mapDispatchToProps,
)(BonusList);

export default BonusListContainer;
