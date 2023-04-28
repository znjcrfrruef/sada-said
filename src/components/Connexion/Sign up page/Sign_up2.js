import './Sign_up2.css'
import { useState } from 'react';
import sourire from '../../sourire.png'; 
import { parseISO, isValid, isAfter, isBefore } from 'date-fns'; 
import {Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faL, faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Sign_up2()
{
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessageVille, setErrorMessageVille] = useState("");
  const [errorMessageCodePostal, setErrorMessageCodePostal] = useState("");
  const [errorMessageTelephone, setErrorMessageTelephone] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

  async function traiter_submit(event) {
    event.preventDefault();
    console.log(a,b,c,d);
    if (a&&b&&c&&d) {
      try{
        const response1 = await fetch("http://localhost:3500/users?_sort=id&_order=desc&_limit=1");
        const [lastUser] = await response1.json();
        
        // Récupérer l'id du dernier utilisateur créé
        const lastUserId = lastUser.id;
        
      const data={ville:ville,codePostal:codePostal,telephone:telephone,email:email}
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
    }
    catch(error){
      console.error(error);
    }



        window.location.href = "/inscrire/suivant2";

    
    } else {  
      alert("Veuillez remplir tous les champs correctement.");
    }
  }

  

  function traiter_ville(event) {
    const val=event.target.value;
    setVille(val);
    if (val === "Choisit une ville") {
      setErrorMessageVille("Le champ ville est obligatoire");
      setA(false);
    } else {
      setErrorMessageVille("");
      setA(true);
    }
  }

  function traiter_code_postal(event) {setErrorMessageCodePostal("")
   const val=event.target.value;
    setCodePostal(val);
    if (!/^[0-9]{5}$/.test(val)) {
      setErrorMessageCodePostal("Le code postal doit contenir 5 chiffres");
      setB(false);
    } else if (val === "") {
      setB(false);
      setErrorMessageCodePostal("Veuillez remplir ce champ.");
    } else {
     
      setB(true);
    }
  }

  function traiter_telephone(event) {
    const val=event.target.value;
    setTelephone(val);
    if (!/^[5-7][0-9]{8}$/.test(val)) { 
      setErrorMessageTelephone(
        "verifieer le numero "
      );
      setC(false);
    } else if (!val) {;
      setC(false);
      setErrorMessageTelephone("Veuillez remplir ce champ.");
    } else {
      setErrorMessageTelephone(""); 
      setC(true);
    }
  }

  function traiter_email(event) {
    const valeur = event.target.value;
    setEmail(valeur);
    if (!/\S+@\S+\.\S+/.test(valeur)) {
      setErrorMessageEmail("Le format de l'email est invalide");
      setD(false);
    } else if (valeur === "") {
      setD(false);
      setErrorMessageEmail("Veuillez remplir ce champ.");
    } else {
      setErrorMessageEmail(""); 
      setD(true);
    }
  }

  
return(   
<div className='cover'>
   <div className='logo' >   
      <img src={sourire} alt='sourire ' />
   </div> 

      <form   className="sign_up" onSubmit={traiter_submit}  >     
        <h1 className=' Rejoignez-nous'>Rejoignez-nous !</h1>
        <h4 className='Ensemble'>Ensemble, nous pouvons changer des vies</h4>
        
         {/* / ////////////////////////////////////////////////////// */}
        <div className='ville_cp'>
        <label>
        <h5> Ville </h5> 
               <select id='option' onChange={traiter_ville}> 
   <option value="Choisit une ville">Choisit une ville</option>            
  <option value="Adrar">Adrar</option>
  <option value="Chlef">Chlef</option>
  <option value="Laghouat">Laghouat</option>
  <option value="Oum El Bouaghi">Oum El Bouaghi</option>
  <option value="Batna">Batna</option>
  <option value="Béjaïa">Béjaïa</option>
  <option value="Biskra">Biskra</option>
  <option value="Béchar">Béchar</option>
  <option value="Blida">Blida</option>
  <option value="Bouira">Bouira</option>
  <option value="Tamanrasset">Tamanrasset</option>
  <option value="Tébessa">Tébessa</option>
  <option value="Tlemcen">Tlemcen</option>
  <option value="Tiaret">Tiaret</option>
  <option value="Tizi Ouzou">Tizi Ouzou</option>
  <option value="Alger">Alger</option>
  <option value="Djelfa">Djelfa</option>
  <option value="Jijel">Jijel</option>
  <option value="Sétif">Sétif</option>
  <option value="Saïda">Saïda</option>
  <option value="Skikda">Skikda</option>
  <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
  <option value="Annaba">Annaba</option>
  <option value="Guelma">Guelma</option>
  <option value="Constantine">Constantine</option>
  <option value="Médéa">Médéa</option>
  <option value="Mostaganem">Mostaganem</option>
  <option value="M'Sila">M'Sila</option>
  <option value="Mascara">Mascara</option>
  <option value="Ouargla">Ouargla</option>
  <option value="Oran">Oran</option>
  <option value="El Bayadh">El Bayadh</option>
  <option value="Illizi">Illizi</option>
  <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
  <option value="Boumerdès">Boumerdès</option>
  <option value="El Tarf">El Tarf</option>
  <option value="Tindouf">Tindouf</option>
  <option value="Tissemsilt">Tissemsilt</option>
  <option value="El Oued">El Oued</option>
  <option value="Khenchela">Khenchela</option>
  <option value="Souk Ahras">Souk Ahras</option>
  <option value="Tipaza">Tipaza</option>
  <option value="Mila">Mila</option>
  <option value="Aïn Defla">Aïn Defla</option>
  <option value="Naâma">Naâma</option>
  <option value="Témouchent">Témouchent</option>
  <option value="Ghardaïa">Ghard</option>

               </select>
               {errorMessageVille && <p style={{ color: 'red' }} className='err' >{errorMessageVille}</p>}

        </label>
           <label>
            <h5 id='h5'>Code postal</h5> 
            
           <input type="text" value={codePostal} placeholder='Entrer votre CP' onChange={traiter_code_postal}/> 
           {errorMessageCodePostal && <p style={{ color: 'red' }} className='err'>{errorMessageCodePostal}</p>}

           </label>   
        </div>
 

          
          <h5 id='h5'>Téléphone</h5>
          <input className='tel' value={telephone} type="tel" onChange={traiter_telephone} placeholder="555156496" ></input>

         
<select className="country" > 
  <option value="">Choisit votre pays</option>
  <option value="93">Afghanistan (+93)</option>
  <option value="213">Algeria (+213)</option>
  <option value="27">Afrique du Sud (+27)</option>
  <option value="355">Albanie (+355)</option>
  <option value="49">Allemagne (+49)</option>
  <option value="376">Andorre (+376)</option>
  <option value="244">Angola (+244)</option>
  <option value="1264">Anguilla (+1264)</option>
  <option value="1268">Antigua-et-Barbuda (+1268)</option>
  <option value="966">Arabie saoudite (+966)</option>
  <option value="54">Argentine (+54)</option>
  <option value="374">Arménie (+374)</option>
  <option value="297">Aruba (+297)</option>
  <option value="247">Ascension (+247)</option>
  <option value="61">Australie (+61)</option>
  <option value="43">Autriche (+43)</option>
  <option value="994">Azerbaïdjan (+994)</option>
  <option value="1242">Bahamas (+1242)</option>
  <option value="973">Bahreïn (+973)</option>
  <option value="880">Bangladesh (+880)</option>
  <option value="1246">Barbade (+1246)</option>
  <option value="375">Bélarus (+375)</option>
  <option value="32">Belgique (+32)</option>
  <option value="501">Belize (+501)</option>
  <option value="229">Bénin (+229)</option>
  <option value="1441">Bermudes (+1441)</option>
  <option value="975">Bhoutan (+975)</option>
  <option value="591">Bolivie (+591)</option>
  <option value="387">Bosnie-Herzégovine (+387)</option>
  <option value="267">Botswana (+267)</option>
  <option value="55">Brésil (+55)</option>
  <option value="673">Brunei (+673)</option>
  <option value="359">Bulgarie (+359)</option>
  <option value="226">Burkina Faso (+226)</option>
  <option value="257">Burundi (+257)</option>
  <option value="855">Cambodge (+855)</option>
  <option value="237">Cameroun (+237)</option>
  <option value="1">Canada (+1)</option>
  <option value="238">Cap-Vert (+238)</option>
  <option value="236">République centrafricaine (+236)</option>
  <option value="56">Chili (+56)</option>
  <option value="86">Chine (+86)</option>
  <option value="357">Chypre (+357)</option>
  <option value="57">Colombie (+57)</option>
  <option value="269">Comores (+269)</option>
  <option value="242">Congo-Brazzaville (+242)</option>
  </select>
  {errorMessageTelephone && <p style={{ color: 'red' }} className='err'>{errorMessageTelephone}</p>}
  


          <label>
        <h5 id='em'>Email</h5>
        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className="icn_email" />                      
         <input className='Email' type="email" value={email} onChange={traiter_email} placeholder="Entrer votre adress email "    ></input>
         {errorMessageEmail && <p style={{ color: 'red' }} className='err'>{errorMessageEmail}</p>}

      </label>


               
              
         {/* / ////////////////////////////////////////////////////// */}

         
         
 
<button type="submit" className='btn_suivant2' ><h5>Suivant</h5></button>
<p className='ouu'>  ou   </p>
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


export default Sign_up2;