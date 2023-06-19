import './reset.scss'
import './App.scss'
import AppRouter from './AppRouter';
import { useAppDispatch } from '../hooks/redux';
import { useEffect } from 'react';
import { auth } from '../store/actions/userActions';

function App() {

  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch( auth() )
  }, [dispatch])
  
  return (
    <>
      
        <AppRouter/>
      
    </>
  );
}

export default App;