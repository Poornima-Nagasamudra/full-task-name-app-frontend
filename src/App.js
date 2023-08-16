import React from 'react'
import PersonForm from './components/personForm';
import PersonList from './components/personList'

function App() {
  return (
    <div >
        <h1> App component</h1>

        <PersonForm />
        <PersonList  />
    </div>
  );
}

export default App;
