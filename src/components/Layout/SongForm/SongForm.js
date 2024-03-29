import { Form, FormButton, FormGroup, FormInput, FormTextArea } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "@/components/SongForm";
import { Addsong } from "@/api";
import { useAuth } from "@/hooks";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { AppSocketContext } from "@/contexts/AppSocket";

const addSongCtrl = new Addsong();

export function SongForm(props) {
  const { socket } = useContext(AppSocketContext);
  const { onClose, addStatus, onReload } = props;

  const { user } = useAuth();

  const countDown = () => {
    //guardar el tiempo actual en el localstorage.
    //restarlo el nuevo tiempo acutal con el guardado, comprobar si tiene mas de 10min.
    localStorage.setItem("countdown", Date.now().toString());
    const tiempoDeEspera = 1;
    setTimeout(() => {
      addStatus();
    }, 1000 * 60 * tiempoDeEspera);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await addSongCtrl.create(formValue, user.id);
        socket.emit("songs", "new song added");
        formik.handleReset();
        onClose();
        addStatus();
        countDown();
        onReload();
        toast.success(" ¡ Canción agregada correctamente ! ");
      } catch (error) {
        toast.error(" ¡ Error al agregar canción ! ");
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormInput name="titlesong" placeholder="Nombre de la canción" value={formik.values.titlesong} onChange={formik.handleChange} error={formik.errors.titlesong} />
      <FormInput name="name" placeholder="Tu nombre (opcional)" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name} />
      <FormTextArea name="message" placeholder="Escribe una dedicatoria (opcional)" value={formik.values.message} onChange={formik.handleChange} error={formik.errors.message} />
      <FormGroup>
        <FormButton type="submit" size="small" primary loading={formik.isSubmitting}>
          Añadir
        </FormButton>
        <FormButton size="small" onClick={onClose}>
          Cancelar
        </FormButton>
      </FormGroup>
      <Toaster theme="dark" position="bottom-center" duration={8000} visibleToasts={1} richColors />
    </Form>
  );
}
