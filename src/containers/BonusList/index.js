import { connect } from "react-redux";
import { BonusList } from "./components/BonusList";
import { bonusListSelector } from "./meta/selectors";

const matStateToProps = state => ({
  bonusList: bonusListSelector(state)
});

const mapDispatchToProps = ({
  getBonusList,
});

const BonusListContainer = connect(
  matStateToProps,
  mapDispatchToProps,
)(BonusList);

export default BonusListContainer;
