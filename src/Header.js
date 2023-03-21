import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1><Link to={`/`}>Featured Products</Link></h1>
        </div>
    )
}

export default Header;