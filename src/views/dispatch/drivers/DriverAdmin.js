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
  
  import DriverList from '../../../utils/drivers/Driverlist.js'
  
  const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['id','name','tractor', 'shift']
function DriverAdmin() {
    return (
        <>
        <CRow>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardHeader>
                Depot 175 Fleet Drivers
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={DriverList}
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
export default DriverAdmin
