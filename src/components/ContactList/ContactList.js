// import React from "react";
// import PropTypes from "prop-types";
// import {connect} from 'react-redux'
import styles from "./contactList.module.css";
import { useSelector, useDispatch} from "react-redux";
import * as actions from "../../redux/actions";
import { getVisibleContacts } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.list_item} key={id}>
          {`${name} : ${number}`}
          {
            <button
              className={styles.list_button}
              type="button"
              name="delete"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}

//REDUX
// const getVisibleContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLowerCase();
//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizeFilter)
//   );
// };
// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });
// const mapToDispatchProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
// });
// export default connect (mapStateToProps,mapToDispatchProps)(ContactList)