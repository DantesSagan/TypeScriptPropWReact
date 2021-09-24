import React from 'react';
import { Login } from './Login';
import { ProfileProp } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name='DangesSagan' />;
  } else {
    return <Login />;
  }
}
