import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Login/Login.css';
import { Spinner } from 'react-bootstrap';
import { isAuthenticated, loginUser } from '../services/userService';
import { setUser } from '../redux/slices/authslice'; 

function Login() {
  // TODO: change state => store or s
  const loading = useSelector((state) => state.auth.loading);
 
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    
    const loggedUser = await loginUser(email, password, navigate);
    if (loggedUser) {
      dispatch(setUser(loggedUser)); // Assuming loggedUser has the user details including ID
    } else {
      toast.error('Error occurred, try again!');
    }
  };

  return (
    <div className="container-login">

      <div className="card">
        <div className="card-image">
          <img src="" alt="" className="logo" />
        </div>
        <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input type="email" className="input-field" {...register('email', { required: true })} required />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input type="password" className="input-field" {...register('password', { required: true })} required />
            <label className="input-label">Mot de passe</label>
          </div>
          <div className="action">
            <button className="action-button">{loading ? <Spinner /> : 'Se connecter'}</button>
          </div>
        </form>
        <div className="card-info">
          <a href="#">Mot de passe oublié?</a> <br /> <br />
          <Link to="/signup">
            <a href="#">Créer un compte </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;