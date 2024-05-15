import { Field, Form, Formik } from "formik";
import css from "../../components/ContactForm/ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
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
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <h2>Login</h2>
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
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
