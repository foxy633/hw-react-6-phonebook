// import React from "react";
// import PropTypes from "prop-types";
// import {connect} from 'react-redux'
import styles from "./filter.module.css";
import { useSelector, useDispatch} from "react-redux";
import { getFilter } from "../../redux/selectors";
import * as actions from "../../redux/actions";

//TOOLKIT
function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (event) =>
    dispatch(actions.changeFilter(event.target.value));
  return (
    <div className={styles.filter_text}>
      Find contacts by name:
      <input
        className={styles.filter_input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Filter;

//REDUX
// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });
// const mapToDispatchProps = (dispatch) => ({
//   onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
// });
// export default connect(mapStateToProps, mapToDispatchProps)(Filter);
