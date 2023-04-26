import { useState } from 'react';
import sourire from '../../sourire.png'; 
import { parseISO, isValid, isAfter, isBefore } from 'date-fns'; 
import {Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';





export default function Sign_up4()
{const [yet,setYet]=useState("");
const[msg,setMsg]=useState("");

const txt=(event)=>{const val=event.target.value;setMsg("*le champe est facultatif")
setYet(val);
} 

function traiter_submit(event) {
   event.preventDefault();
     if (yet){
      //envoyer un requette post
      const data={yet:yet};
      const requette={
         method:"POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       } 
 
       fetch("http://localhost:3500/users",requette)
       .then((response)=>response.json())
       .then((data)=>console.log(data))
       .catch((error)=>console.error(error));


     }
     alert(" Succès:Formulaire soumis !");
     // Envoyer les données à l'API ou effectuer d'autres actions ici
   }

    return(
        <div className='cover'>
   <div className='logo' >   
      <img src={sourire} alt='sourire ' />
   </div> 
 
   <form   className="sign_up"  onSubmit={traiter_submit}  >
   <h1 className='Rejoignez-nous'>Rejoignez-nous !</h1>
        <h4 className='Ensemble'>Ensemble, nous pouvons changer des vies</h4>
     <label className='Partage'> Partager avec nous votre motivation ?</label>
     <textarea placeholder="Nous sommes ravis que vous envisagiez de devenir membre de notre communauté. Pour nous aider à mieux comprendre votre motivation, pourriez-vous nous expliquer ce qui vous pousse à vouloir devenir adhérent ?" onChange={txt}></textarea>
     {msg && <p className='err'>{msg}</p>}
   </form>



<div className='top'>
   <button type='submit' className='btn_suivant5' onClick={traiter_submit}  > <h5>S'inscrire</h5></button>

<p className='ouu'>  ou   </p>
      <div className="bott">
                  <button type='button'  className=' facebookk'> <h5>Google</h5>   </button>
      <button type='button' className=' instaa'>  <h5>Facebook</h5>   </button>
      </div> 
      </div>
      <div className='connexionn' >  
      <p>Vous avez deja un compte ? </p>
         <Link to="/" className='connecterr' ><button className='btn_cnct'>se connecter</button></Link>
      
       </div> 
       


   </div>

   


    )
}