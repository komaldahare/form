import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const submitForm = () => {

    console.log('Firstname', fFirstname);
    console.log('Lastname', fLastname);
    console.log('DOB', fDOB);
    console.log('email' , femail);
    console.log('Villege' , fVillege);
    console.log('State' , fState);
    
}

const [fFirstname, setfFirstname] = useState('');
const [fLastname, setfLastname] = useState('');
const [fDOB, setfDOB] = useState('');
const [femail, setfemail] = useState('');
const [fVillege, setfVillege] = useState('');
const [fState, setfState] = useState('');

return(

<div> 
        <div className='App'> <h1> Form  </h1></div>

<div className='App1'>

First Name:-
<br/>
<input className='App1' type = 'text' value={fFirstname} onChange={(e) =>setfFirstname(e.target.value)} placeholder='Enter your FirstName'/>
<br />
<br />
Last Name:-
<br/>
<input className='App1' type = 'text' value={fLastname} onChange={(e) =>setfLastname(e.target.value)} placeholder='Enter your Last Name'/>
<br />
<br />
Date of Birth:-
  <br/>
  <input type = "date" value = "fDOB" min = "15/5/1990"/>
<br />
<br />
Age:-
		<input type = "Number" name = "a" min = "15" max = "30" step = "2" />
		<br/>
    <br/>
Email:-
<br/>
<input className='App1' type = 'text' value={femail} onChange={(e) =>setfemail(e.target.value)} placeholder='Enter your email'/>
<br/>
<br/>
<div>
<form action="/action_page.php">
  <label>Select your College:-</label>
  <br/>
  <select  className='App1' name="College">
  <option value="Select your College">Select your College</option>
    <option value="Kamla Neharu College Nagpur">Kamla Neharu College Nagpur</option>
    <option value="Priyadarshini Bhagwati College Of Engineering - [PBCOE], Nagpur">Priyadarshini Bhagwati College Of Engineering - [PBCOE], Nagpur</option>
    <option value="G H Raisoni Institute Of Engineering & Technology - [GHRIET], Nagpur">G H Raisoni Institute Of Engineering & Technology - [GHRIET], Nagpur</option>
    <option value="Lemdeo College Mandhal">Lemdeo College Mandhal</option>
    <option value="suryodaya college of engineering & technology nagpur">suryodaya college of engineering & technology nagpur</option>
    <option value="Smt. Radhikatai Pandav College of Engineering">Smt. Radhikatai Pandav College of Engineering</option>
  </select>
</form>
</div>
<br />
Villege:-
<br/>
<input className='App1' type = 'text' value={fVillege} onChange={(e) =>setfVillege(e.target.value)} placeholder='Enter your villege name'/>
<br />
<br />
<div>
<form action="/action_page.php">
  <label>Select your state:-</label>
  <br/>
  <select name="State" id="state">
  <option value="Select your state">Select your state</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Madhyapradesh">Madhyapradesh</option>
    <option value="Gujrat">Gujrat</option>
    <option value="Uttarpradesh">Uttarpradesh</option>
    <option value="Karnatak">Karnatak</option>
    <option value="bhopal">bhopal</option>
  </select>
   
</form>
</div>
<br/>
<br/>

<button className='App2' onClick={ () => {submitForm()}}> submit </button>



</div>

       
     

</div>

);

}
export default App;

