import React, {useState} from 'react'
import Link from 'next/link'
import api from '../lib/api'
import Layout from '../components/layout'
import { useCookies } from 'react-cookie'
import { Formik, Form, Field, FieldArray } from 'formik'
import WhiteBox from '../components/WhiteBox'
import * as Yup from 'yup';

const Page = () => {
  /*Gets the value of the user cookie and assigns it to the variable user*/
  const [ cookies ] = useCookies([ 'user' ]);
  const { user } = cookies
  const [registerPage, setRegisterPage] = useState(true)

  /*If the user cookie does not exist it will return the login form*/
  if(!user && process.browser){
    if(!registerPage){
      return(
        <Layout>
          <LoginForm/>
        </Layout>
      )
    }else{
      return(
        <Layout>
          <RegisterForm setRegisterPage={setRegisterPage}/>
        </Layout>
      )
    }
  }
  return(
  <Layout>
    <Homepage/>
  </Layout>
)}

/*Validation for the register form*/
const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be longer than 6 characters')
    .required('Required'),
  password_verify: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Required'),
})

const RegisterForm = ({setRegisterPage}) => (
    <WhiteBox login form>
      <div>
        {/*Register form -- styles inside WhiteBox component*/}
        <h2>Register</h2>

        <Formik initialValues={{ username: '',
                                 email_address: '',
                                 password: '',
                                 password_verify: ''
                               }}
                onSubmit={async (values) => {
                  const register = await api('user', {
                    method: 'post',
                    body: JSON.stringify(values),
                    headers: {
                      "content-type": "application/json"
                    }
                  })
                  if(register.res.ok){
                    console.log("I should change to the sign in page now")
                  }
                }}
                validationSchema={registerSchema}
                render={({ values, handleSubmit, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    <Field type="text"
                           name="username"
                           placeholder="Username"
                           className={`${errors.username && touched.username ? 'error' : ''}`}/>
                    {errors.username && touched.username ? (
                      <h6>{errors.username}</h6>
                    ): null}
                    <Field type="email"
                           name="email_address"
                           placeholder="Email address"
                           className={`${errors.email_address && touched.email_address ? 'error' : ''}`}/>
                    {errors.email_address && touched.email_address ? (
                      <h6>{errors.email_address}</h6>
                    ): null}
                    <Field type="password"
                           name="password"
                           placeholder="Password"
                           className={`${errors.password && touched.password ? 'error' : ''}`}/>
                    {errors.password && touched.password ? (
                      <h6>{errors.password}</h6>
                    ): null}
                    <Field type="password"
                           name="password_verify"
                           placeholder="Repeat password"
                           className={`${errors.password_verify && touched.password_verify ? 'error' : ''}`}/>
                    {errors.password_verify && touched.password_verify ? (
                      <h6>{errors.password_verify}</h6>
                    ): null}

                    <button type="submit">Sign up</button>
                  </Form>
                )}
        />

        <h5>Already have an account?</h5>
        <a onClick={() => setRegisterPage(false)}>
          <h4>Sign in</h4>
        </a>
      </div>
    </WhiteBox>
)

const LoginForm = () => (
  <>
    <WhiteBox signIn form>
    SDFGHJKL;KJHGFHJKL;;KKKDSAJFGHJKLO;IUYTRDEFCGVHBJK
    </WhiteBox>
  </>
)

const Homepage = () => (
  <div>
  </div>
)



export default Page
