import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ handleSubmit }) {
  const id = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        id: nanoid(),
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={`${id}-name`}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={`${id}-name`}
            className={css.formInput}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={`${id}-number`}>Number</label>
          <Field
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            name="number"
            id={`${id}-number`}
            className={css.formInput}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
