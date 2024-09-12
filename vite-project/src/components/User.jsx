import { useSelector } from "react-redux";
import { getUser } from '../userSlice';
import { IoPersonOutline } from "react-icons/io5";

function User() {
  
  const username = useSelector(getUser)

    return (
      <div>
        { 
          username 
            ? <span className='font-bold'>{ username }</span> 
            : <IoPersonOutline />
        }
      </div>
    )
}

export default User