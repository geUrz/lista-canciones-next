import { useState } from "react"
import { Form, FormButton, FormGroup, FormInput, FormTextArea, } from "semantic-ui-react"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "@/components/SongForm"
import { Addsong } from "@/api"
import { useAuth } from "@/hooks"

const addSongCtrl = new Addsong();

export function SongForm(props) {

  const { onClose, addStatus, onReload } = props;

  const {user} = useAuth()

  //const [timeout, setTimeout] = useState()

  const countDown = () => {
    setTimeout(() => {
      addStatus()
    }, 1000*5)
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await addSongCtrl.create(formValue, user.id)
        formik.handleReset();
        onClose()
        addStatus()
        countDown()
        onReload()
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormInput
        name="titlesong"
        placeholder="Nombre de la canción"
        value={formik.values.titlesong}
        onChange={formik.handleChange}
        error={formik.errors.titlesong}
      />
      <FormInput
        name="name"
        placeholder="Tu nombre (opcional)"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <FormTextArea
        name="message"
        placeholder="Escribe una dedicatoria (opcional)"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.errors.message}
      />
      <FormGroup>
        <FormButton size="small" onClick={onClose}>
          Cancelar
        </FormButton>
        <FormButton
          type="submit"
          size="small"
          primary
          loading={formik.isSubmitting}
        >
          Añadir
        </FormButton>
      </FormGroup>
    </Form>
  );
}
