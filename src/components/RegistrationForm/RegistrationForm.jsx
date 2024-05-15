import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../../components/ContactForm/ContactForm.module.css";
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is required!"),
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Email address is required!"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required!"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.form}>
        <h2>Register User</h2>
        <label className={css.label}>
          <span>User name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          <span>Email</span>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </label>
        <button className={css.button} type="submit">
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
