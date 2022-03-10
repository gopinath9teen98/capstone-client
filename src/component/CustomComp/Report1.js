
import { Button, Form, Modal, Table } from "react-bootstrap";

function Report2({
  userData,
  open,
  handleClose,
  setopenModal,
  Backdrop,

}) {
  const onHide = () => {
    setopenModal(false);
  };

  return (
    <Modal show={open} onClose={handleClose} >
      <Modal.Body style={{}}>
        <h4>Enter Haematology Reports </h4>
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
                <th>Haemoglobim</th>
                <td>{userData?.heamatology?.haemoglobin}</td>
              </tr>
              <tr>
                <th>neutrophils</th>
                <td>{userData?.heamatology?.neutrophils} </td>
              </tr>
              <tr>
                <th>eosinophiles</th>
                <td>{userData?.heamatology?.eosinophiles} </td>
              </tr>
              <tr>
                <th>basophills</th>
                <td> {userData?.heamatology?.basophills} </td>
              </tr>
              <tr>
                <th>pcv</th>
                <td>{userData?.heamatology?.pcv} </td>
              </tr>
              <tr>
                <th>wbc</th>
                <td>{userData?.heamatology?.wbc} </td>
              </tr>
              <tr>
                <th>lymphocytes</th>
                <td> {userData?.heamatology?.lymphocytes}</td>
              </tr>
              <tr>
                <th>monocytes</th>
                <td>{userData?.heamatology?.monocytes} </td>
              </tr>
              <tr>
                <th>RBC</th>
                <td> {userData?.heamatology?.rbc}</td>
              </tr>
              <tr>
                <th>MCV</th>
                <td>{userData?.heamatology?.mcv} </td>
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
