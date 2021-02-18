import { useState } from 'react'
import Keyboard from '../components/Keyboard'
import Display from '../components/Display'

const Index = () => {
  const [display, setDisplay] = useState('')

  return (
    <>
      <Display display={display} />
      <Keyboard setDisplay={setDisplay} />
    </>
  )
}
export default Index
