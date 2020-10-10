import React,{useState} from 'react'
import ShowDryWhse from '../../../../components/dry/ShowDryWhse'
import ShowDryContext from '../../../../../src/components/dry/ShowDryWhse'
import './ShowDryModal.css'
import {CButton,CModal,CModalHeader,CModalBody,CModalFooter,CForm,CFormGroup,CLabel,CInput,CFormText} from '@coreui/react'


const ShowDryModal = () => {

const [modal, setModal] = useState(false);
const [isVisible, setVisibility] = useState(true)

const [x, setX] = useState(0)
const [y, setY] = useState(0)
const toggle = ()=>{
  setModal(!modal);
}
/* const showDryMenu = (e) => {

  e.preventDefault();
  setVisibility(true)
  setX(e.clientX)
  setY(e.clientY)
} */

return isVisible ?(
  
  <React.Fragment>
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
      <div>
      <ShowDryContext.Provider>
      <ShowDryWhse whse="222"/>
      </ShowDryContext.Provider>
      </div>

      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Do Something</CButton>{' '}
        <CButton
          color="secondary"
          onClick={toggle}
        >Close</CButton>
      </CModalFooter>
    </CModal>
  </React.Fragment>
):null

}
export default ShowDryModal

