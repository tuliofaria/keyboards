import { useState } from 'react'
import Keyboard from '../components/KeyboardIds'
import Display from '../components/DisplayIds'
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
        <input
          type='text'
          name='name'
          onChange={form.handleChange}
          data-testid='name'
        />
        <button type='submit' data-testid='say-hi'>
          say hi!
        </button>
        <button type='reset' onClick={reset} data-testid='reset'>
          Clear
        </button>
      </form>
      {name && <p data-testid='hi-display'>Hi {name}!</p>}
    </>
  )
}
export default Index
