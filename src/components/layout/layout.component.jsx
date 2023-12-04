import { Sidebar } from "./sidebar/sidebar.component";
import PropTypes from 'prop-types';

export const Layout = ({children, users}) =>{
  return(
    <div className="d-flex">
      <Sidebar users={users}/>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.any,
  users: PropTypes.array,
}