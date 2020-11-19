import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  
  import StoreAddressList from '../../../../utils/stores/StoreAddressList.js'
  
  const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['store','city','address', 'phone']
function StoreAddress() {
    return (
        <>
        <CRow>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardHeader>
                Store Address
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={StoreAddressList}
                fields={fields}
                bordered
                itemsPerPage={14}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
  
                }}
              />
              </CCardBody>
            </CCard>
          </CCol>
  
        </CRow>
  
       
      </>
    )
  }
export default StoreAddress
