import React from 'react'
import {Flex,Box,Heading,FormControl,FormLabel, Input,Button,Alert} from '@chakra-ui/react'
import {useFormik} from "formik";
import validationSchema from './Validations';
import {fetchRegister} from '../../../api'
import { useAuth } from '../../../context/AuthContext';


function Signup() {

  const {login}=useAuth();

  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
      passwordConfirm:"",
    },
    validationSchema,
    onSubmit:async(values,bag)=>{//values: formdaki datalar,bag dorm üzerinde yapabileceğimiz işmeler
      try{
        const registerResponse=await fetchRegister({email:values.email,password:values.password})
        console.log(registerResponse);
        login(registerResponse)
        console.log(registerResponse);
      }
      catch(e){
        bag.setErrors({general:e.response.data.message})
      }
    }
  })



  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">

        <Box pt={10}>
          <Box textAlign="center">
          <Heading>Kayıt Ol</Heading>
          </Box>
          <Box my={5}>
            {formik.errors.general&&(
              <Alert status='error'>{formik.errors.general}</Alert>
            )}
          </Box>
        <Box my={5} textAlign="left">
          <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email} //Email alanında İlk etapda değilde Email'e touch olunmuşsa ve hatada var ise inputu kırmızı yap
                
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Şifre</FormLabel>
                <Input
                name="password"
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Şifre Tekrar</FormLabel>
                <Input
                name="passwordConfirm"
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirm}
                isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                />
              </FormControl>
              <Button mt="4" width="full" type='submit'>
                Kayıt Ol
              </Button>
          </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup