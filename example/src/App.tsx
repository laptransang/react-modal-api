import React, { useState } from 'react'

import { Modal } from 'react-modal-api'
import 'react-modal-api/dist/index.css'

const App = () => {
  const [visible, setVisible] = useState(false);

  function handleOnClose() {
    setVisible(false);
  }

  return (
    <>
      {visible ? 'TRUE' : 'FALSE'}
      <button onClick={() => { setVisible((!visible)) }}>Toggle Modal</button>
      <Modal visible={visible} destroyOnClose={false} onClose={handleOnClose}>
        <h1>Hello world 1</h1>
        <input type="password" />
      </Modal>

      {/*<Modal visible={visible}>*/}
      {/*  <h1>Hello world 2</h1>*/}
      {/*</Modal>*/}
    </>
  )
}

export default App
