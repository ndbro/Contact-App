import {useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

export const Contact = ( { users }) =>{
  const {id} = useParams();
  const navigate = useNavigate();
  const foundUser = users.find((user) => user.id === id);


  if (!foundUser) {
    return <h4 className="text-secondary mt-5 ms-5">Contact not found</h4>
  }

  const onEdit = () =>{
    navigate('/edit', {
      state: foundUser, 
    })
  }

  return(
    <>
    <div className="d-flex" style={{marginLeft: '50px',marginTop:'50px', width: '22rem '}}>
      <img src={foundUser.image} className="me-3" style={{height:'250px'}} alt="..."/>
        <div className="card-body">
        <h1 className="card-title pb-3">{foundUser.fullName}</h1>
        <h5 className="card-text pt-2 pb-5 text-primary">{foundUser.phone}</h5>
        <button className="btn btn-success me-2 mt-5" onClick={onEdit}>Edit</button>
        <button className="btn btn-outline-danger mt-5">Delete</button>
        </div>
    </div>
    </>
  )
}

Contact.propTypes = {
  users: PropTypes.array,
}