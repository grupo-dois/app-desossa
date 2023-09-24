import * as Yup from 'yup';
import { useFormik } from 'formik';
import logo from '../resources/logo.png';
import { TextField, Button } from '@mui/material'
import './Login.css';

function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Campo de usuário é obrigatório'),
    password: Yup.string()
      .required('Campo de senha é obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="h-screen flex">
      <div className="w-1/3">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto my-12"
              src={logo}
              alt="Pedra Moura"
            />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <TextField
                fullWidth={true}
                id="username"
                name="username"
                label="Usuário"
                variant="outlined"
                margin="normal"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </div>
            <div className="mb-2">
              <TextField
                fullWidth={true}
                id="password"
                name="password"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!formik.isValid}
                fullWidth={true}
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div id="barbecue-bg" className="w-2/3" />
    </div>
  );
}

export default Login;
