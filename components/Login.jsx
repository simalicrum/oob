import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import FormError from './FormError';
import Spinner from './Spinner';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);
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
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log('Form sumbit successful: ', values);
    },
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
            <FormError>{formik.errors.email}</FormError>
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
            <FormError>{formik.errors.password}</FormError>
          ) : null}
        </div>
        <Button type="submit">{isSubmitting ? <Spinner /> : 'Login'}</Button>
      </form>
      <div className="mt-6 flex flex-col ">
        <Button
          onClick={() => {
            setIsSubmittingGoogle(true);
            signIn('google', { callbackUrl: '/dashboard' });
          }}
        >
          {isSubmittingGoogle ? <Spinner /> : 'Login with Google'}
        </Button>
      </div>
    </div>
  );
}
