import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components'
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
    screens.set(0, "Home")
    screens.set(1, "Adicionar carcaça")
    screens.set(2, "Relatórios")
    screens.set(3, "Suporte")
    screens.set(4, "Perfil")

    return screens.get(currentScreen)
  }

  return (
    <div className="System bg-slate-100 h-screen">
      <Navbar setScreen={setScreen} />
      <h1 className="text-lg">AUTENTICADO</h1>
      {/* CRIAR COMPONENTE GENÉRICO AQUI */}
      <h1 className="text-lg">Tela atual: { defineScreen(currentScreen) }</h1>
    </div>
  );
}

export default System;
