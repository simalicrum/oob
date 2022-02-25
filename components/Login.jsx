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
    },
    validationSchema: Yup.object({
      email: Yup.string('Enter your email')
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      setIsSubmitting(true);
      signIn('email', { email: values.email, callbackUrl: '/dashboard' });
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
        <Button type="submit">
          {isSubmitting ? <Spinner /> : 'Login with Email'}
        </Button>
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
