import { Link } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = ( { users }) =>{
  return(
    <div className="p-3 border-end vh-100">
      <div className="d-flex mb-3">
        <input type="text" className="form-control"/>
        <Link to='/add' className="btn btn-outline-success ms-3">New</Link>
      </div>

      {users.length > 0 ? (<ul className="list-group list-group-flush">
        {users.map(user => (
          <li className="list-group-item list-group-item-action" key={user.id}>
            <Link className='sidebar-li' to={`contact/${user.id}`}>{user.fullName}</Link>
          </li>
        ))}
      </ul>) : <p className='text-center text-secondary pt-2'>Contacts not found</p>}
    </div>
  )
}