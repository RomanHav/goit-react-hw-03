import css from "./Contact.module.css";

export default function Contact({ info: { id, name, number }, deleteItem }) {
  return (
    <div className={css.contactblock}>
      <div className={css.infoblock}>
        <p className={css.info}>{name}</p>
        <p className={css.info}>{number}</p>
      </div>
      <div className={css.btnblock}>
        <button onClick={() => deleteItem(id)} className={css.deletebtn}>
          Delete
        </button>
      </div>
    </div>
  );
}
