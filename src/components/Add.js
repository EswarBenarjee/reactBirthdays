import React, { useState } from 'react';
import '../App.css';

function Add({onAdd, change}) {

    const [name1, setName] = useState('');
    const [date1, setDate] = useState('');

    const handleName = e => {
        setName(e.target.value);
    }

    const handleDate = e => {
        setDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        onAdd({
            src: 'https://media.istockphoto.com/photos/birthday-party-for-cute-child-picture-id700712598?b=1&k=20&m=700712598&s=170667a&w=0&h=RjaJbk4BQb1nii0KUrGcCzqh_FocJdYpmo1ouCVkpxw=', 
            name: name1, 
            date: date1});
        change();
    }

    return <div className='add'>
        <form onSubmit={handleSubmit}>
            <h2 className='text-center mb-5'>Add a New Birthday</h2>
            <input type="text" className='mb-5' placeholder="Enter your name" onChange={handleName}/> <br/>
            <input type="date" className='mb-5'onChange={handleDate} /> <br/>
            <input type="submit" value="Submit" className='btn btn-outline-light' />
        </form>
    </div>;
}

export default Add;