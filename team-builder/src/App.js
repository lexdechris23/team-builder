import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';





const App = () => {

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }

  const [teamMember, setTeamMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues ({...formValues, [inputName]: inputValue})
  }

  const submitForms = () => {

    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }

    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return

    setTeamMember([...teamMember, newTeamMember]);
    setFormValues([initialFormValues]);
     };



  return (
    <div className="App">
        <h2>Team Members</h2>
        <Form 
        formValues={formValues}
        update={updateForm}
        submit={submitForms}
        />

        {teamMember.map((member) => {
          return (
            <div>
                  <h2>{member.name}</h2>
                  <h3>Email: {member.email}</h3>
                  <h4>Role: {member.role}</h4>
                  </div>
          )

        })}

    </div>
  );
}

export default App;