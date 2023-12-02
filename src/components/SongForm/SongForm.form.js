import * as Yup from 'yup'

export function initialValues(){
  return {
    titlesong: '',
    name: '',
    message: ''
  }
}

export function validationSchema(){
  return Yup.object({
    titlesong: Yup.string().required(true),
    name: Yup.string(),
    message: Yup.string()
  })
}