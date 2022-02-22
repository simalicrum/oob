import Button from './Button';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string('Enter your email')
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    }),
  });
  return (
    <div className="mx-auto max-w-md px-4 pt-32 sm:pt-48">
      <h1 className="pb-16 text-4xl font-black text-gray-900 sm:text-4xl">
        Login
      </h1>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <FormLabel forVar="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            placeholder="name@gmail.com"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          {formik.errors.email ? (
            <div className="text-sm text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4 flex flex-col">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          {formik.errors.password ? (
            <div className="text-sm text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
