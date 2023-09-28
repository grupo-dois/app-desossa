import React from 'react';
import logo from '../resources/logo.png';
import { logout } from '../services/login';
import { Button } from '@mui/material';
import { Screens } from '../enums/Screens'
import { useNavigate } from 'react-router-dom';

interface Props {
  setScreen: (screen: Screens) => void;
}

const Navbar: React.FC<Props> = (props) => {
  const { setScreen } = props;
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="h-20 bg-white flex justify-between">
      <div>
        <img
          className="h-14 pt-3 cursor-pointer"
          src={logo}
          onClick={() => setScreen(Screens.HOME)}
          alt="Pedra Moura"
        />
      </div>
      <div className="flex space-x-4 mr-3">
        <Button onClick={() => setScreen(Screens.CARCASS)}>Adicionar carcaça/boi</Button>
        <Button onClick={() => setScreen(Screens.REPORTS)}>Relatórios</Button>
        <Button onClick={() => setScreen(Screens.SUPPORT)}>Suporte</Button>
        <Button onClick={() => setScreen(Screens.PROFILE)}>Meu perfil</Button>
        <Button onClick={() => logoutUser()}>Sair</Button>
      </div>
    </div>
  )
}

export default Navbar;
