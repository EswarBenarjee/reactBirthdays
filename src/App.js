import './App.css';
import React from 'react';
import List from './components/List';

let birthdays = [
    {
      src: 'https://media.istockphoto.com/photos/birthday-party-for-cute-child-picture-id700712598?b=1&k=20&m=700712598&s=170667a&w=0&h=RjaJbk4BQb1nii0KUrGcCzqh_FocJdYpmo1ouCVkpxw=', 
      name: 'Eswar', 
      date: '23-10-2002'
    },
    {
      src: 'https://media.istockphoto.com/photos/birthday-party-for-cute-child-picture-id700712598?b=1&k=20&m=700712598&s=170667a&w=0&h=RjaJbk4BQb1nii0KUrGcCzqh_FocJdYpmo1ouCVkpxw=',
      name: 'Chandu',
      date: '29-05-2001'
    },
    {
      src: 'https://media.istockphoto.com/photos/birthday-party-for-cute-child-picture-id700712598?b=1&k=20&m=700712598&s=170667a&w=0&h=RjaJbk4BQb1nii0KUrGcCzqh_FocJdYpmo1ouCVkpxw=',
      name: 'Raj Kumar',
      date: '31-10-2000'
    }
];

function App() {

  const updateBirthday = value => {
    birthdays.push(value)
  }

  return (
    <div className='birthdays'>
      <List birthdays={birthdays} updateBirthday={updateBirthday}/>
    </div>
  );
}

export default App;
