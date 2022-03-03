import React from "react";

import { Button, Form, Modal, Table } from "react-bootstrap";

function Report2({
  userData,
  open,
  handleClose,
  setopenModal,
}) {
 

  const onHide = () => {
    setopenModal(false);


  };

  return (
    <Modal show={open} onClose={handleClose}    >
      <Modal.Body style={{}}>
        <h4>Enter Glucometry Reports </h4>
        <Form>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Result</th>
              </tr>
            </thead>

            <tbody>
    
              <tr>
                <th>Fbs</th>
                <td>{userData?.glucometry?.fbs} </td>
              </tr>
              <tr>
                <th>Ppbs</th>
                <td> {userData?.glucometry?.ppbs}</td>
              </tr>
              <tr>
                <th>Gh</th>
                <td>{userData?.glucometry?.gh} </td>
              </tr>
              <tr>
                <th>Calcium</th>
                <td>{userData?.glucometry?.calcium} </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          onClick={() => onHide()}
        >
          Close
        </Button>
      </Modal.Footer>

    </Modal>
  );
}

export default Report2;
