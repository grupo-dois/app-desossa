import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/profile';
import { Profile as ProfileType } from '../types/Profile';

interface Props {
}

const Profile: React.FC<Props> = () => {
  const [profile, setProfile] = useState<ProfileType | null>();

  useEffect(() => {
    async function fetchProfile() {
      const profile = await getProfile()

      setProfile(profile)
    }

    !profile && fetchProfile()
  }, [profile])

  return (
    <div className='flex flex-col gap-y-4 max-w-5xl mx-auto mt-16'>
      <h1 className="text-lg">Meu Perfil</h1>
      <TextField label="Nome" value={profile?.nome} defaultValue="" InputProps={{ readOnly: true }} />
      <TextField label="Email" value={profile?.email} defaultValue="" InputProps={{ readOnly: true }} />
      <TextField label="Usuário" value={profile?.usuario} defaultValue="" InputProps={{ readOnly: true }} />
      <TextField label="Senha" value={profile?.senha} defaultValue="" InputProps={{ readOnly: true }} />
      <p className='mt-14'>* Dados de usuário são administrados pelo RH, para alterar entre em contato com: rh@acme.com.br</p>
    </div>
  )
}

export default Profile;
