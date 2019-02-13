import React from 'react'
import Navigation from '../TopNavigation'
import BrandName from '../Brand'
import Button from '../Button'

class Header extends React.Component {
    render () {
        return (
            <div>
                <BrandName />
                <Navigation items={['sahil', 'dhiman']} />
                <Button label="Register" bgcolor="yellow" />
                <Button label="Login" bgcolor="white" />
            </div>
        );
    }
}

export default Header;