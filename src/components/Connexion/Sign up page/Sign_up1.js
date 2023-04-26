import './Sign_up1.css'
import { useState } from 'react';
import sourire from '../../sourire.png'; 
import { parseISO, isValid, isAfter, isBefore, set } from 'date-fns'; 
import {Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';



function Sign_up1()
{
    const [Nom,setNom] =useState('');
    const [Prenom,setPrenom]=useState('');
    const [Date_de_naissance,setDate_de_naissance]=useState('');
    const [Situation,setSituation]=useState("");
    const[Situation_err,setSituation_err]=useState("");
    const [date_erreur,setDate_erreur]=useState(''); 
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
const[select_err,setSelect_err]=useState("");
const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
 const[e,setE]=useState(false);
 
    const traiter_prenom=(event)=>
    {  setFirstNameError("");      const s=event.target.value;
      setPrenom(s);
      if (!/^[a-zA-Z\s]*$/.test(s) || s.length < 2 || s.length > 30  ) {  
        setFirstNameError("Entrer Prenom valide!");setA(false);
              }  
              else  if(!s)
              {setFirstNameError("remplire ce champ!");setA(false);}
             else {setA(true);}

     }

     const traiter_nom=(event)=>
     {setLastNameError("");      const s=event.target.value;
      setNom(s);
      if (!/^[a-zA-Z\s]*$/.test(s) || s.length < 2 || s.length > 30  ) {  
        setLastNameError("Entrer Nom valide!");setB(false)
              } 
            else  if(!s)
          { setLastNameError("remplire ce champ!")   ;setB(false);  }
          else{setB(true);}
     }


    

    const traiter_date=(event)=>
{       setDate_erreur("");      const s=event.target.value;
   setDate_de_naissance(s);

   if(!isValid(parseISO(s))  || !isAfter(parseISO(s),new Date(1900,0,1)) || isAfter(parseISO(s),new Date())  )
   {
      setDate_erreur('Entrer date valide!');setC(false)
   } 
   else   if(!s){setDate_erreur("remplire ce champ!");setC(false)}
else{setC(true)}

    }


    function traiter_submit(event)
    {   event.preventDefault();console.log(a,b,c,d,e);
      if(a&&b&&c&&d&&e){
        const data={Nom:Nom,Prenom:Prenom,Date_de_naissance:Date_de_naissance,Situation:Situation,selectedOption:selectedOption}

        const requette={ 
          method:"POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        } 

        fetch("http://localhost:3500/users",requette)
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.error(error));




        window.location.href = "/inscrire/suivant1";
       } 
       else{
        alert("verifier les champs")
       }

     
    }


    const handleSelect =(event)=>{
      setSituation_err("");
      const s=event.target.value;
      setSituation(s);
      
      if(s==="Situation actuelle"){setSituation_err("remplire ce champ!");setD(false)}
      else{setD(true)}

      
    }
    const traiter_radio=(event)=>
      {       const s=event.target.value;    
          setSelect_err("");
        setSelectedOption(s);

        if(!s){
          setSelect_err("choisir une option");setE(false)
        }
        else{setE(true)}
      }



return(   
<div className='cover'>
   <div className='logo' >  
      <img src={sourire} alt='sourire ' />
   </div> 

      <form onSubmit={ traiter_submit}  className="sign_up"   >     
        <h1 className='Rejoignez-nous'>Rejoignez-nous !</h1>
        <h4 className='Ensemble'>Ensemble, nous pouvons changer des vies</h4>
        

        <div className='npds'>
            <label>   
              <h5>Nom:</h5>
              <FontAwesomeIcon icon={faUser} className="icn_user1" /> 
           <input type="text" value={Nom} placeholder='Entrer votre nom' onChange={traiter_nom}  />  
           {lastNameError && <p style={{ color: 'red' }} className='err'>{lastNameError}</p>}

           </label>     
           <label>
            <h5>Prenom:</h5> 
            <FontAwesomeIcon icon={faUser} className="icn_user2" /> 
           <input type="text" value={Prenom} placeholder='Entrer votre Prenom' onChange={traiter_prenom} /> 
           {firstNameError && <p style={{ color: 'red' }} className='err'>{firstNameError}</p>}

           </label>   
           
               
               
            <label>
              <h5> Date_de_naissance</h5> 
              <FontAwesomeIcon icon={faCalendarDays} className="icn_user4" />
               <input  type="date" value={Date_de_naissance} placeholder='Date_de_naissance' onChange={traiter_date}  />
               {date_erreur && <p style={{ color: 'red' }} className="err" > {date_erreur} </p> }
            </label>
            <label>
        <h5>    Situation actuelle</h5> 
        <FontAwesomeIcon icon={faUserCheck} id="icn_user3" />
               <select id='options' onChange={handleSelect} > 
               <option value="Situation actuelle">Situation actuelle</option>
                  <option value="Collégien / Lycéen" placeholder=''>Collégien / Lycéen</option>
                  <option value="Etudiant">Etudiant</option> 
                  <option value="En activité">En activité</option>
                  <option value="En recherche d'emploi">En recherche d'emploi</option>
                  <option value="Retraité">Retraité</option> 
                  <option value="Employé">Employé</option>
                  <option value="Autre">Autre</option>
               </select>
               {Situation_err && <p style={{ color: 'red' }} className="err" > {Situation_err} </p> }

            </label>
               </div>

<div className="genre"> 
  <h3>Genre</h3>
  <div className="radio-group" >
    <label className='male'>
      <input type="radio" name="gender" value="male" onChange={traiter_radio}/>
      <span>Homme</span>
    </label>
    <label className='female'>
      <input type="radio" name="gender" value="female" onChange={traiter_radio}/>
      <span>Femme</span>
    </label>

  </div>
  {select_err && <p style={{ color: 'red' }} className="msg_err" > {select_err} </p> }
</div>



<button type="submit" className='btn_suivant'   > <h5>Suivant</h5></button>
 

<h4 className='ouu'>ou</h4>    
   <div className="bott">
                  <button type='button'  className=' facebookk'> <h5>Google</h5>   </button>
      <button type='button' className=' instaa'>  <h5>Facebook</h5>   </button>
      </div> 

      </form>


      <div className='connexionn' >  
      <p>Vous avez deja un compte ? </p>
         <Link to="/" className='connecterr' > <button className='btn_cnct'>se connecter</button></Link>
      
       </div> 

  
  
 



</div>


)

} 


export default Sign_up1;