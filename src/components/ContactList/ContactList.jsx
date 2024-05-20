import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ info, deleteItem }) {
  return (
    <ul className={css.contactlist}>
      {info.map((contact) => (
        <li className={css.contactpart} key={contact.id}>
          <Contact info={contact} deleteItem={deleteItem} />
        </li>
      ))}
    </ul>
  );
}
