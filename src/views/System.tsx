import { Button } from '@mui/material';
import { logout } from '../services/login';
import { useNavigate } from 'react-router-dom';

function System() {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="System">
      <h1 className="text-lg">AUTENTICADO</h1>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          logoutUser();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default System;
