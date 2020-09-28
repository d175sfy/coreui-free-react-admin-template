import React,{useState} from 'react'
import './ShowDryModal.css'


import {CButton,CModal,CModalHeader,CModalBody,CModalFooter,CForm,CFormGroup,CLabel,CInput,CFormText} from '@coreui/react'

const ShowDryModal = () => {
const [modal, setModal] = useState(false);
const toggle = ()=>{
  setModal(!modal);
}

return (
  <>
    <CButton color="danger" shape="square" size="large"
     onClick={toggle}
      className="l-2"
    >Show Dry Loads</CButton>
    <CModal
      show={modal}
      onClose={toggle}
    >
      <CModalHeader closeButton>175 (Dry Loads)</CModalHeader>
      <CModalBody>
      <h3>175 (Dry Loads)</h3>

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
export default ShowDryModal

