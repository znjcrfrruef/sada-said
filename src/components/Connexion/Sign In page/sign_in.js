  import './sign_in.css';
  import React, { useState } from 'react';
  import sourire from '../../sourire.png'; 
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser } from '@fortawesome/free-solid-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { faLock } from '@fortawesome/free-solid-svg-icons';
  import { Link } from 'react-router-dom'; 





  function Sign_in() { 
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');


    const [a, setA] = useState(false);
    const [b, setB] = useState(false);

    const traiter_submit =(event)=>
    { 
      event.preventDefault();
        console.log(a,b);
      if(a&&b)
      { 
      fetch("http://localhost:3500/users?email=${email}&password=${password}",{method:'GET',})
      .then((response)=>response.json())
      .then((data)=>console.log(data))
      .then((data)=>
           {if(data.length>0) alert("connecte");
           else alert("Email ou mot de passe n'existe pas");}   )
      .catch(error => console.error(error));

      }
      else{
        alert("verifier les champs")
      }
      //recuperer les donne entres 
      console.log(`email  ${email} ,mot de passe ${password} `);
    
          }

          function isValidEmail(email) 
          {
            // Vérification de l'adresse e-mail en utilisant une expression régulière
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/* le ^ esqt debut et $ la fin*/
            return emailRegex.test(email);
          }

    const traiter_mail =(event)=>
    {setErrorMessage('');
    const val=event.target.value;
      setEmail(val);
      if (!isValidEmail(val)) {
        setErrorMessage('Veuillez entrer une adresse e-mail valide');
        setA(false);
      } 
      else if(!val){setErrorMessage(' remplir ce champ');
      setA(false);}
    else{
    setA(true);}
      
    } 

    const traiter_motdepass =(event)=>
    {setErrorMessage2("");
    const val=event.target.value;
      setPassword(val);
      if (val.length < 6) {
        setErrorMessage2('Le mot de passe doit contenir au moins 6 caractères');
        setB(false)
      }
      else if(!val){ setErrorMessage2('remplir ce champ');
      setB(false)}
    
    else setB(true)

    }




    return(

      
    <div className='cover' > 

      <div className='logo' >  
        <img src={sourire} alt='sourire ' /> </div>
        
      <form  onSubmit={traiter_submit} className="login" > 
        <h1 className='title'>Vous êtes de retour ! </h1>
        
          
        
        <label>
          Email<br></br> 
          <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className="icn" />                      
          <input className='email' type="email" value={email} onChange={traiter_mail} placeholder="Entrer votre adress email "    ></input>
        </label> 
        {errorMessage && <p id='err_M1'>{errorMessage}</p>}
        <label>
          Mot de passe <br></br>
          <FontAwesomeIcon icon={faLock} aria-hidden="true" className='icn' />
        <input  type="password" value={password} onChange={traiter_motdepass} placeholder="Saisir votre mot de passe " ></input>
        {errorMessage2 && <p id='err_M2'>{errorMessage2}</p>}
        <br></br>
        <a href='#' className="lien" >mot de passe oublier</a>
        </label> 
        <button   type="submit"  className='btn'  > <h5>se connecter</h5></button> 
        
        <h4 className='ou'>ou</h4>   
        <div className="bot">
          <button type='button'  className=' facebook'> <h5>Google</h5>    </button>
                    <button type='button' className=' insta'> <h5>Facebook</h5>   </button>
        </div> 
          
      </form> 
      <div className='connexion' >  
        <p>Vous n’avez pas de compte ?</p>
        <Link to="/inscrire" className='inscrire'><button className='btn_inscr'> Inscrire</button></Link>  

        </div>
            
  
      </div> 


      

    )

    
      
    
  }





  export default Sign_in;




