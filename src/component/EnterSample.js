import React, { useEffect, useRef, useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EnterSample = () => {
  const [samples, setsamples] = useState([]);

  const [heamatology, setheamatology] = useState({
    haemoglobin: "",
    neutrophils: "",
    eosinophiles: "",
    basophills: "",
    pcv: "",
    wbc: "",
    lymphocytes: "",
    monocytes: "",
    rbc: "",
    mcv: "",
  });

  const [glucometry, setglucometry] = useState({
    fbs: "",
    ppbs: "",
    gh: "",
    calcium: "",
  });
  const [thyroid, setthyroid] = useState({
    tri: "",
    thyroxine: "",
    tsh: "",
  });

  const [currentType, setCurrentType] = useState("");
  const [openModal, setopenModal] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [currentData, setCurrentData] = useState([]);
  // const [hemo, setHemo] = useState(false);
  // const [thyr, setThyr] = useState(false);
  // const [glu, setglu] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    console.log(samples);
    try {
      const res = await fetch("/details", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      console.log(data);
      setsamples([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const user = useRef();

  const radio = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    console.log(val, id);
    setCurrentType(parseInt(id));
    setopenModal(!openModal);
    // id === "1" ? setHemo(true) : id === "2" ? setThyr(true) : setglu(true);
  };

  const HandleChange = (event) => {
    const heamatologyCopy = { ...heamatology };
    const glucometryCopy = { ...glucometry };
    const thyroidCopy = { ...thyroid };

    heamatologyCopy[event.target.name] = event.target.value;
    glucometryCopy[event.target.name] = event.target.value;
    thyroidCopy[event.target.name] = event.target.value;

    setheamatology(heamatologyCopy);
    setglucometry(glucometryCopy);
    setthyroid(thyroidCopy);
  };

  const CollectData = () => {
    postData();
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      haemoglobin,
      neutrophils,
      eosinophiles,
      basophills,
      pcv,
      wbc,
      lymphocytes,
      monocytes,
      rbc,
      mcv,
    } = heamatology;

    const { fbs, ppbs, gh, calcium } = glucometry;
    const { tri, thyroxine, tsh } = thyroid;

    try {
      const res = await fetch("/entersample", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          heamatology: {
            haemoglobin,
            neutrophils,
            eosinophiles,
            basophills,
            pcv,
            wbc,
            lymphocytes,
            monocytes,
            rbc,
            mcv,
          },
          glucometry: {
            fbs,
            ppbs,
            gh,
            calcium,
          },
          thyroid: {
            tri,
            thyroxine,
            tsh,
          },
          id: currentId,
          editId: currentType,
        }),
      });

      const data = await res.json();
      console.log("res ============>", data);
      if (res.status === 200) {
        alert("succesfull");
        history.push("/details");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Creat Test </Modal.Title>
        </Modal.Header>
        {/* <Modal.Header > */}
        <div className="container">
          <FloatingLabel
            controlId="floatingSelect"
            label=" selects Patient"
            className="mb-4"
          >
            <Form.Select
              aria-label="Floating label select example"
              ref={user}
              onChange={(val) => {
                let id = val.target.value;
                setCurrentId(id);
                // setCurrentData(val.target.value);
                const data = samples.filter((val) => val._id === id);
                setCurrentData(data);
              }}
            >
              <option value="user">Select </option>
              {samples.map((val) => {
                return <option value={val._id}>name: {val.name},{val.email}</option>;
              })}
            </Form.Select>
          </FloatingLabel>
        </div>

        {/* </Modal.Header> */}

        <Modal.Body>
          <Form.Check
            type="radio"
            name="radio 1"
            id="1"
            label="Haemotology"
            onChange={radio}
          />
          <br />

          <Form.Check
            type="radio"
            name="radio 1"
            id="2"
            label="Glucometry"
            onChange={radio}
          />

          <br />

          <Form.Check
            type="radio"
            name="radio 1"
            id="3"
            label="thyroid Profile"
            onChange={radio}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={CollectData}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>

      {currentType === 1 && openModal && (
        <Modal
          show={openModal}
          onClose={() => {
            setopenModal(false);
          }}
        >
          <Modal.Dialog>
            <Modal.Body>
              <h4>Enter Haematology Reports </h4>
              <Form>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="haemoglobin"
                      value={heamatology.haemoglobin}
                      placeholder="haemoglobin"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="neutrophils"
                      value={heamatology.neutrophils}
                      placeholder="neutrophils"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="eosinophiles"
                      value={heamatology.eosinophiles}
                      placeholder="eosinophiles"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="basophills"
                      value={heamatology.basophills}
                      placeholder="basophills"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="pcv"
                      value={heamatology.pcv}
                      placeholder="pcv"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="wbc"
                      value={heamatology.wbc}
                      placeholder="wbc"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="lymphocytes"
                      value={heamatology.lymphocytes}
                      placeholder="lymphocytes"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="monocytes"
                      value={heamatology.monocytes}
                      placeholder="monocytes"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="rbc"
                      value={heamatology.rbc}
                      placeholder="lymphocytes"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={HandleChange}
                      name="mcv"
                      value={heamatology.mcv}
                      placeholder="monocytes"
                    />
                  </Col>
                </Row>
              </Form>
              <Modal.Footer>
                <Button onClick={(e) => postData(e)}>submit</Button>
                <Button onClick={(e) => setopenModal(false)}>close</Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      )}

      {currentType === 2 && openModal && (
        <Modal
          show={openModal}
          onClose={() => {
            setopenModal(false);
          }}
        >
          <Modal.Dialog>
            <Modal.Body>
              <h4>Enter glucometry Reports </h4>
              <Form>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      name="fbs"
                      onChange={HandleChange}
                      value={glucometry.fbs}
                      placeholder="FBS"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="ppbs"
                      onChange={HandleChange}
                      value={glucometry.ppbs}
                      placeholder="PPBS"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      name="gh"
                      onChange={HandleChange}
                      value={glucometry.gh}
                      placeholder="GH"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="calcium"
                      onChange={HandleChange}
                      value={glucometry.calcium}
                      placeholder="Calcium"
                    />
                  </Col>
                </Row>
                <Modal.Footer>
                  <Button
                    style={{ marginRight: "175px" }}
                    onClick={(e) => postData(e)}
                  >
                    submit
                  </Button>
                  <Button onClick={(e) => setopenModal(false)}>close</Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      )}

      {currentType === 3 && openModal && (
        <Modal
          show={openModal}
          onClose={() => {
            setopenModal(false);
          }}
        >
          <Modal.Dialog>
            <Modal.Body>
              <h4>Enter Thyroid Reports </h4>
              <Form>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      name="tri"
                      onChange={HandleChange}
                      value={thyroid.tri}
                      placeholder="TRI"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="thyroxine"
                      onChange={HandleChange}
                      value={thyroid.thyroxine}
                      placeholder="Thyroxine"
                    />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col>
                    <Form.Control
                      name="tsh"
                      onChange={HandleChange}
                      value={thyroid.tsh}
                      placeholder="Thyroid"
                    />
                  </Col>
                  <Col>
                    <Button onClick={(e) => postData(e)}>submit</Button>
                    <Button onClick={(e) => setopenModal(false)}>close</Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      )}
    </>
  );
};

export default EnterSample;
