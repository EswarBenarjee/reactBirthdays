import React from 'react';

function ListItem({birthday}) {
    return (
        <div className='list-item row'>
            <div className='col-sm-3'>
                <img src={birthday.src} alt={birthday.name}/>
            </div>
            <div className='col-sm-9 details'>
                <h4>{birthday.name}</h4>
                <p>{birthday.date}</p>
            </div>
        </div>  
    );
}

export default ListItem;