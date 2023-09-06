import React from 'react';
import Card from './Card.js'


const CardList = ({ robots }) =>{

    const cartComponent = robots.map((user, i) => {
        return (
        <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>
        );
    })
    return(
        <div>
            {cartComponent}
        </div>
    );

}

export default CardList;