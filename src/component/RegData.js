import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import RegEdit from "./RegEdit";

function RegData() {
  const [userData, setuserData] = useState([]);
  const [editableData, seteditableData] = useState({});
  const [showEditData, setshowEditData] = useState(false);

  useEffect(() => {
    fetchSamples();
  }, []);

  const handleShow = (data) => {
    seteditableData(data);
    setshowEditData(true);
  };

  const fetchSamples = async () => {
    try {
      const url = "/editData";
      const resp = await fetch(url);
      const sampleData = await resp.json();
      console.log(sampleData);
      const datad = sampleData.data;
      setuserData(datad);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {console.log(userData)}
      <Table className="table table-bordered" Responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data._id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleShow(data);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <img src= "https://cutewallpaper.org/24/loading-gif-png/loading-gif-images-free-psd-templatespng-and-vector-download.gif" alt="" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <RegEdit
        editableData={editableData}
        seteditableData={seteditableData}
        userData={userData}
        fetchSamples={fetchSamples}
        showEditData={showEditData}
        setuserData={setuserData}
        setshowEditData={setshowEditData}
      />
    </div>
  );
}

export default RegData;