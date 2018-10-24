import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Another from './pages/Another';
import NotFoundPage from './pages/not-found.vue';
import Login from './pages/Login'
import Register from '@/components/Register'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: About
  },
  {
    path: '/services/',
    component: Services
  },
  {
    path: '/about/another/',
    component: Another
  },
  {
    path: '(.*)',
    component: NotFoundPage
  },
  {
    path: '/login/',
    name: 'login',
    component: Login
    
  },
  {
    path: '/register',
    name: 'register',
    component: Register
    
  }
];
