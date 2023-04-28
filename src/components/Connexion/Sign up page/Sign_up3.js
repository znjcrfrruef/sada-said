import './Sign_up3.css'
import { useState } from 'react';
import sourire from '../../sourire.png'; 
import { parseISO, isValid, isAfter, isBefore } from 'date-fns'; 
import {Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Sign_up3()
{
  const traiter_submit = async (event) => {
    event.preventDefault();
     if (bool) {
      try{
        const response1 = await fetch("http://localhost:3500/users?_sort=id&_order=desc&_limit=1");
        const [lastUser] = await response1.json();
        
        // Récupérer l'id du dernier utilisateur créé
        const lastUserId = lastUser.id;

      // Envoyer les données à l'API ou effectuer d'autres actions ici
      const data={checked:checked,autreChecked:autreChecked    }
        const requette={
          method:"PATCH",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        } 

        const response=await fetch(`http://localhost:3500/users/${lastUserId}`,requette);
      const info=await response.json();
         console.log(info);
      if(info){}
      else { alert("error")} 

      window.location.href = "/inscrire/suivant3";
      }
      catch(error){
        console.error(error);
      }



     }
     else{
      alert("selectioner une options")
     }
    
   }

   const [autreChecked, setAutreChecked] = useState(false);
    const [checked,setChecked]=useState("");
    const [checkedmsg,setCheckedmsg]=useState("");

    const[bool,setBool]=useState(false);
   function handleCheck(e) {
     if (e.target.id === "autre") {
       setAutreChecked(true);
     } else {
       setAutreChecked(false);
     }
     if(e.target.value)
     {const va=e.target.value;
      setChecked(va);setBool(true);setCheckedmsg("")}
else {setCheckedmsg("choisir une option") ; setBool(false)}
     document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
       if (checkbox.id !== e.target.id) {
         checkbox.checked = false;
       }
     });
   }
   



return(   
<div className='cover'>
   <div className='logo' >   
      <img src={sourire} alt='sourire ' />
   </div> 

      <form   className="sign_up" onSubmit={traiter_submit}  >     
        <h1 className='Rejoignez-nous' >Rejoignez-nous !</h1>
        <h4 className='Ensemble'>Ensemble, nous pouvons changer des vies</h4>
        
         {/* / ////////////////////////////////////////////////////// */}
         <label className='association'><p>Comment avez-vous connez notre association ?</p></label>
      <div className='checkbox-container'>
        <input type="checkbox" id="amis" name="connu" value="Amis ou famille" onChange={handleCheck}/>
        <label htmlFor="amis">Amis ou famille</label>  

        <input type="checkbox" id="internet" name="connu" value="Internet" onChange={handleCheck}/>
        <label htmlFor="internet">Internet</label> 

        <input type="checkbox" id="reseaux-sociaux" name="connu" value="Réseaux sociaux" onChange={handleCheck}/>
        <label htmlFor="reseaux-sociaux">Réseaux sociaux</label>

        <input type="checkbox" id="publicite" name="connu" value="Publicité" onChange={handleCheck}/>
        <label htmlFor="publicite">Publicité</label>

        <input type="checkbox" id="evenements" name="connu" value="Événements" onChange={handleCheck}/>
        <label htmlFor="evenements">Événements</label> 

        <input type="checkbox" id="autre" name="connu" value="Autre" onChange={handleCheck}/>
        <label htmlFor="autre">Autre</label>  
        {checkedmsg && <p style={{ color: 'red' }} className='err'>{checkedmsg}</p>}

      </div>

      {autreChecked &&
        <div>
        <input className='autre'  type="text" placeholder="Saisir autre chose"/>
      </div>
      }
    
         

          

         

          
               
              
         {/* / ////////////////////////////////////////////////////// */}


        
<button type='submit' className='btn_suivant2' > <h5>Suivant</h5></button>

<p className='ouu'>  ou  </p>
      <div className="bott">
                  <button type='button'  className=' facebookk'> <h5>Google</h5>   </button>
      <button type='button' className=' instaa'>  <h5>Facebook</h5>   </button>
      </div> 

      </form>


      <div className='connexionn' >  
      <p>Vous avez deja un compte ? </p>
         <Link to="/" className='connecterr' ><button className='btn_cnct'>se connecter</button></Link>
      
       </div> 
       
  
  
 



</div>


)

} 


export default Sign_up3;