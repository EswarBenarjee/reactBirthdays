import React, {useState} from "react";
import ListItem from './ListItem';
import Add from './Add';

function List({birthdays, updateBirthday}) {

    const [add, setAdd] = useState(0);

    function change() {
        setAdd(0);
    }

    const onAdd = value => {
        updateBirthday(value);
    }

    if(add === 1) {
        return <Add birthdays={birthdays} change={change} onAdd={onAdd}/>
    }

    return(
        <div className="list">
            <h2 className="text-center mt-3 mb-5">{birthdays.length} Birthdays Remaining</h2>

            <div>
                {
                  birthdays.map(birthday => <ListItem birthday={birthday} />)
                }
            </div>

            <input type="submit" className="btn btn-outline-light mt-3 mb-2" value="Add Birthday" onClick={ () => setAdd(1) } />
        </div>
    );
}

export default List