import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import PropTypes from 'prop-types';

export const ContactForm = ( { setUsers }) =>{
  const navigate = useNavigate();
  const location = useLocation();
  const fullName = useRef();
  const phone = useRef();
  const image = useRef();

  console.log(location);

  const onBack = () =>{
    navigate(-1);
  }

  const onAdd = (evt) =>{
    evt.preventDefault();

    const newContact = {
      id: v4(),
      fullName: fullName.current.value,
      phone: phone.current.value,
      image: image.current.value,
    };
    setUsers((prev) => [...prev, newContact]);
    navigate(`/contact/${newContact.id}`)
  }

  return(
    <div>
      <div className="d-flex align-items-center mb-5">
        <button onClick={onBack} className="btn btn-outline-success">Back</button>
        <h2 className="h4 ms-4">New contact</h2>
      </div>

      <form onSubmit={onAdd}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-4 col-form-label">Full name</label>
          <div className="col-8">
            <input ref={fullName} type="text" className="form-control" id="staticEmail" placeholder="full name" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-4 col-form-label">Phone</label>
          <div className="col-8">
            <input ref={phone} type="text" className="form-control" id="inputPassword" placeholder="phone" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-4 col-form-label">Img url</label>
          <div className="col-8">
            <input ref={image} type="url" className="form-control" id="inputPassword" placeholder="img url" />
          </div>
        </div>

        <button className="btn btn-success">Add</button>
      </form>
    </div>
  )
}

ContactForm.defaultProps = {
  setUsers: () => {},
}

ContactForm.propTypes = {
  setUsers: PropTypes.func,
}