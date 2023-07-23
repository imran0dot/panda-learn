import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Loading from '../shared/sharedComponents/Loading';

const PrivateRout = ({children}) => {
   const {user, loading} = useAuth();
   const location = useLocation();
   if(loading){
    return <Loading />
   }
   if(user){
    return children
   }

   return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivateRout;