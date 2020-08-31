import React, { useState } from 'react'

import { Modal } from 'react-modal-api'
// import 'test/dist/index.css'

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible ? 'TRUE' : 'FALSE'}
      <button onClick={() => { setVisible((!visible)) }}>Toggle Modal</button>
      <Modal visible={visible} destroyOnClose={false}>
        <h1>Hello world 1</h1>
      </Modal>

      {/*<Modal visible={visible}>*/}
      {/*  <h1>Hello world 2</h1>*/}
      {/*</Modal>*/}
    </>
  )
}

export default App
