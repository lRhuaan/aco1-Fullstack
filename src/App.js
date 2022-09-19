import React from 'react'
import {useState} from 'react';
import './App.css';

function Formulario() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    console.log('*** handleSubmit', data);
  };

  console.log('*** formValues', formValues);

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Nome:</h1>
          <input type="text" name="name" placeholder="name" onChange={handleInputChange} value={formValues.name || ''}/>
          <h1>Email:</h1>
          <input type="text" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email || ''}/>

          <h1>Sua linguagem favorita:</h1>
          <select name="language" onChange={handleInputChange} value={formValues.language || ''}>
            <option value="javascript">javascript</option>
            <option value="Python">Python</option>
            <option value="Ruby">Ruby</option> 
          </select>

          <h1>Sua bebida favorita</h1>
          <div className='radios'>
            <label>
              <input type='radio' value='cafe' name='drink' onChange={handleInputChange} checked={formValues.drink === 'cafe'}/> Café
            </label>
            <label>
              <input type='radio' value='cha' name='drink' onChange={handleInputChange} checked={formValues.drink === 'cha'}/> Chá
            </label>
          </div>

          <h1>Deixe sua mensagem</h1>
          <textarea name='bio' onChange={handleInputChange} value={formValues.bio || ''}></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
      
  );
}

export default Formulario;