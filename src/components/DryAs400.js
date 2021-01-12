import React, { useState } from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable,
  CRow,
} from "@coreui/react";

import DryLoads from "../../src/utils/loads/dryLoads/DryLoads";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "LOA":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};



const fields = [
  { key: "Warehouse" },
  "Time",
  "Date",
  "Status",
  "LoadNumber",
  "Trailer",
  "Seal",
  {
    key: "show_details",
    label: "",
    _style: { width: "5%" },
    sorter: false,
    filter: false,
  },
];

const DryAs400 = () => {
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>DRY AS400</CCardHeader>
            <CCardBody>
              <CDataTable
                sorter="{ external: true, resetable: true }"
                tableFilter="{ external: true, lazy: true }"
                clickableRows
                footer
                items={DryLoads}
                fields={fields}
                bordered
                striped
                itemsPerPageSelect
                itemsPerPage={20}
                hover
                outlined
                responsive
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  details: (item, index) => {
                    return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          <h4>{item.Warehouse}</h4>
                          <p className="text-muted">
                            Employee since: {item.startDate}
                          </p>
                          <CButton size="sm" color="info">
                            User Settings
                          </CButton>
                          <CButton size="sm" color="danger" className="ml-1">
                            Delete
                          </CButton>
                        </CCardBody>
                      </CCollapse>
                    );
                  },
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="danger"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {
                            toggleDetails(index);
                          }}
                        >
                          {details.includes(index) ? "Hide" : "Show"}
                        </CButton>
                      </td>
                    );
                  }
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};
export default DryAs400