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
        <h4>Enter Thyroid Reports </h4>
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
                <th>Tri</th>
                <td>{userData?.thyroid?.tri} </td>
              </tr>
              <tr>
                <th>Throxine</th>
                <td> {userData?.thyroid?.thyroxine}</td>
              </tr>
              <tr>
                <th>Thyroid</th>
                <td>{userData?.thyroid?.tsh} </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          className="btn btn-secondary"
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
