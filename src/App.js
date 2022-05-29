import './App.css';
import React from 'react';
import List from './components/List';

function App() {
  var birthdays = [];

  if(! (localStorage.birthdays === undefined) ) {
    if(! (JSON.parse(localStorage.birthdays).length === 0) ) {
      birthdays = JSON.parse(localStorage.birthdays);
    }
  };
  
  const updateBirthday = value => {
    birthdays.push(value);
    localStorage.birthdays = JSON.stringify(birthdays);
  }
  
  localStorage.birthdays = JSON.stringify(birthdays);

  return (
    <div className='birthdays'>
      <List birthdays={birthdays} updateBirthday={updateBirthday}/>
    </div>
  );
}

export default App;
