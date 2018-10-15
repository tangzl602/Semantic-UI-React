import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleDatalist = () => (
  <div>
    <Input list='languages' placeholder='Choose language...' />
    <datalist id='languages'>
      <option value='' />
      <option value='' />
      <option value='' />
    </datalist>
  </div>
)

export default InputExampleDatalist
