import React from 'react';
import { getSession } from '@/actions';

const Login = async () => {
  const session = await getSession();
  console.log(session)
  return (
    <div>1</div>
  )
}

export default Login;

