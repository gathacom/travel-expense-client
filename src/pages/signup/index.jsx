import FormSignUp from '@/components/Fragments/FormSignUp'
import AuthLayout from '@/components/Layouts/AuthLayout'
import React from 'react'

const SignUpPage = () => {
  return (
    <>
      <AuthLayout type="signup">
        <FormSignUp />
      </AuthLayout>
    </>
  )
}

export default SignUpPage