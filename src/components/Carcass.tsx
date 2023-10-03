import { FormControl, InputLabel, Select, TextField, MenuItem, FormHelperText } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addCattle } from '../services/cattle';
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Props {
}

const initialValues = {
  nome: "",
  data_abate: new Date(),
  data_desossa: new Date(),
  raca: "",
  peso_carcaca: "",
  responsavel_desossa: "",
}

const Carcass: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    nome: Yup.string()
      .required('Campo de Nome é obrigatório'),
    data_abate: Yup.date()
      .required('Campo de Data do abate é obrigatório'),
    data_desossa: Yup.date()
      .required('Campo de Data da desossa é obrigatório'),
    raca: Yup.string()
      .required('Campo de Raça é obrigatório'),
    peso_carcaca: Yup.number()
      .required('Campo de Peso da carcaça é obrigatório'),
    responsavel_desossa: Yup.string()
      .required('Campo de Responsável pela desossa é obrigatório'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true)

        await addCattle({
          ...values,
          data_abate: Number(format(values.data_abate, 'yyyyMMdd', { locale: ptBR })),
          data_desossa: Number(format(values.data_desossa, 'yyyyMMdd', { locale: ptBR })),
          peso_carcaca: Number(values.peso_carcaca)
        })

        formik.setValues(initialValues)
        formik.setTouched({})
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    },
  });

  return (
    <form className='flex flex-col gap-y-4 max-w-5xl mx-auto py-16' onSubmit={formik.handleSubmit}>
      <h1 className="text-lg">Adicionar Carcaça</h1>
      <TextField
        label="Nome"
        id="nome"
        name="nome"
        value={formik.values.nome}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nome && Boolean(formik.errors.nome)}
        helperText={formik.touched.nome && formik.errors.nome}
        defaultValue=""
      />
      <DateField
        label="Data do abate"
        id="data_abate"
        name="data_abate"
        format='dd/MM/yyyy'
        value={formik.values.data_abate}
        onChange={(newValue) => formik.setFieldValue('data_abate', newValue)}
        onBlur={formik.handleBlur}
        helperText={formik.touched.data_abate && formik.errors.data_abate && ''}
      />
      <DateField
        label="Data da desossa"
        id="data_desossa"
        name="data_desossa"
        format='dd/MM/yyyy'
        value={formik.values.data_desossa}
        onChange={(newValue) => formik.setFieldValue('data_desossa', newValue)}
        onBlur={formik.handleBlur}
        InputProps={{ error: formik.touched.data_desossa && Boolean(formik.errors.data_desossa) }}
        helperText={formik.touched.data_desossa && formik.errors.data_desossa && ''}
      />
      <FormControl fullWidth>
        <InputLabel id="select-id">Raça</InputLabel>
        <Select
          labelId="select-id"
          value={formik.values.raca}
          label="Raça"
          id="raca"
          name="raca"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.raca && Boolean(formik.errors.raca)}
        >
          <MenuItem value="Angus">Angus</MenuItem>
          <MenuItem value="Nelore">Nelore</MenuItem>
          <MenuItem value="Brahman">Brahman</MenuItem>
          <MenuItem value="Heredord">Heredord</MenuItem>
          <MenuItem value="Caracu">Caracu</MenuItem>
        </Select>
        <FormHelperText>{formik.touched.raca && formik.errors.raca}</FormHelperText>
      </FormControl>
      <TextField
        label="Peso da carcaça"
        id="peso_carcaca"
        name="peso_carcaca"
        type='number'
        value={formik.values.peso_carcaca}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.peso_carcaca && Boolean(formik.errors.peso_carcaca)}
        helperText={formik.touched.peso_carcaca && formik.errors.peso_carcaca}
      />
      <FormControl fullWidth>
        <InputLabel id="select-id">Responsável pela desossa</InputLabel>
        <Select
          labelId="select-id"
          label="Responsável pela desossa"
          id="responsavel_desossa"
          name="responsavel_desossa"
          value={formik.values.responsavel_desossa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.responsavel_desossa && Boolean(formik.errors.responsavel_desossa)}
        >
          <MenuItem value="Renan">Renan</MenuItem>
          <MenuItem value="Maximiliano">Maximiliano</MenuItem>
          <MenuItem value="Lucas">Lucas</MenuItem>
          <MenuItem value="Adriana">Adriana</MenuItem>
          <MenuItem value="Henrique">Henrique</MenuItem>
        </Select>
        <FormHelperText>{formik.touched.responsavel_desossa && formik.errors.responsavel_desossa}</FormHelperText>
      </FormControl>
      <LoadingButton
        className="self-start"
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        loading={isLoading}
        disabled={!formik.isValid}
      >Adicionar</LoadingButton>
    </form>
  )
}

export default Carcass;
