import React from 'react'

const nav = ['home', 'about']

const Navigation = ({ items = nav }) => {

    
    return (
        <div>            
            {items.map(nav => <li><a href="#">{nav}</a></li>)}            
        </div>
    );
}

export default Navigation;