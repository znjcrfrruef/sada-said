import Sign_in from './components/Connexion/Sign In page/sign_in';
import Sign_up1 from './components/Connexion/Sign up page/Sign_up1'; 
import Sign_up2 from './components/Connexion/Sign up page/Sign_up2';
import Sign_up3 from './components/Connexion/Sign up page/Sign_up3';
import Sign_up4 from './components/Connexion/Sign up page/Sign_up4';
import { Route,Routes, } from 'react-router-dom';
function App() { 
  return(  

    <Routes>
        <Route  path="/"  element={ <Sign_in/>}/> 
        <Route path="/inscrire"     element={<Sign_up1 />}/> 
        <Route path='/inscrire/suivant1' element={<Sign_up2/>}  /> 
        <Route path='/inscrire/suivant2' element={<Sign_up3/>} /> 
        <Route path='/inscrire/suivant3' element={<Sign_up4/>} /> 

    </Routes> 
    
  )
}

export default App;
