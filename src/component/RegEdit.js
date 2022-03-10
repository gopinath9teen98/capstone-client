import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function RegEdit(props) {
    const [show, setShow] = useState(false);
    const [user, setuser] = useState({
        _id: '',
        name: '',
        email: '',   
        role: '',
    });
    const history = useHistory()

    useEffect(() => {
        setShow(props.showEditData)
    }, [props.showEditData])

//    useEffect(()=>{
//        props.userData()
//    },[])


    useEffect(() => {
        setuser(props.editableData)
    }, [props.editableData])

    const handleClose = () => {
        setShow(false)
        props.setshowEditData(false)
    };

    const handleChange = (event) => {
        const userCopy = { ...user }
        userCopy[event.target.name] = event.target.value
        setuser(userCopy)
    }
    
    const editProduct = async () => {
        console.log(user);
        let url = '/edituser'

        try {
            const response = await axios.put(url, user)
            console.log(response.data);
            if (response.data.error === false) {
                handleClose()
                props.history.push('/userData')
                history.location.reload()
            } else {
                alert(response.data.message)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="row">
                            <div className="col">
                                <input type="text"
                                    name="_id"
                                    value={user._id}
                                    onChange={(event) => { handleChange(event) }}
                                    className="form-control" placeholder="User Id" disabled />
                            </div>
                            <div className="col">
                                <input type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="form-control" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control" placeholder="Email Id" />
                            </div>
                            <div className="col">
                                <input type="text"
                                    name="role"
                                    value={user.role}
                                    onChange={handleChange}
                                    className="form-control" placeholder="role" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editProduct}>
                        update changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegEdit;