import { Routes } from '@angular/router';
import { Authform } from './template/authform/authform';
import { Register } from './components/register/register';
import { Login } from './components/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Authform,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
    ],
  },
];
