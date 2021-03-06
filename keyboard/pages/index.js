import { useState } from 'react'
import Keyboard from '../components/Keyboard'
import Display from '../components/Display'
import { useFormik } from 'formik'

const Index = () => {
  const [display, setDisplay] = useState('')
  const [name, setName] = useState('')
  const form = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      setName(values.name)
    },
  })
  const reset = () => {
    setName('')
    form.resetForm()
  }
  return (
    <>
      <Display display={display} />
      <Keyboard setDisplay={setDisplay} />
      <h3>Type something:</h3>
      <form onSubmit={form.handleSubmit}>
        <input type='text' name='name' onChange={form.handleChange} />
        <button type='submit'>say hi!</button>
        <button type='reset' onClick={reset}>
          Clear
        </button>
      </form>
      {name && <p>Hi {name}!</p>}
    </>
  )
}
export default Index
