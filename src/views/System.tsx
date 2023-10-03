import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Home, Carcass, Reports, Support, Profile } from '../components'
import { Screens } from '../enums/Screens'

function System() {
  const [currentScreen, setScreen] = useState<Screens>(Screens.HOME);
  const navigate = useNavigate();

  useEffect(() => {
    checkForToken()
  });

  const checkForToken = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  }

  const defineScreen = (currentScreen: Screens) => {
    const screens = new Map();
    screens.set(0, <Home />)
    screens.set(1, <Carcass />)
    screens.set(2, <Reports />)
    screens.set(3, <Support />)
    screens.set(4, <Profile />)

    return screens.get(currentScreen)
  }

  return (
    <div className="System bg-slate-100 h-full">
      <Navbar setScreen={setScreen} />
      <div id="dynamic-component">{ defineScreen(currentScreen) }</div>
    </div>
  );
}

export default System;
