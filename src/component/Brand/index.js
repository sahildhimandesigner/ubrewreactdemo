import React from 'react'
import BrandLogo from '../../img/logo.svg'

class Brand extends React.Component {
    render() {
        return (
            <div>
                <img src={BrandLogo} alt={BrandLogo} />
            </div>
        )
    }
}

export default Brand;