import React,{useState} from 'react'
import './ShowWetModal.css'


import {CButton,CModal,CModalHeader,CModalBody,CModalFooter,CForm,CFormGroup,CLabel,CInput,CFormText} from '@coreui/react'

const ShowWetModal = () => {
const [modal, setModal] = useState(false);
const toggle = ()=>{
  setModal(!modal);
}

return (
  <>
    <CButton color="info" shape="square" size="large"
     onClick={toggle}
      className="l-2"
    >Show Wet Loads</CButton>
    <CModal
      show={modal}
      onClose={toggle}
    >
      <CModalHeader closeButton>265 (Wet Loads)</CModalHeader>
      <CModalBody>
        <h3>265 (Wet Loads)</h3>

      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Do Something</CButton>{' '}
        <CButton
          color="secondary"
          onClick={toggle}
        >Cancel</CButton>
      </CModalFooter>
    </CModal>
  </>
)
}
export default ShowWetModal

