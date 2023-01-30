import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Profile } from '../pages/Profile';
import { PreviewMovie } from '../pages/PreviewMovie';
import { CreateMovie } from '../pages/CreateMovie';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<PreviewMovie />} />
    </Routes>
  )
}