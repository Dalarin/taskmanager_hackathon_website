
import React from 'react'
import Root from'../Components/Root.js';
import ThemeProvider from '../Conrollers/ThemeProvider.js';
import Navbar from '../Components/Navbar.jsx';

const Settings = () => (
	<div>
        <ThemeProvider>
        <Root/>
        </ThemeProvider>
        

    </div>
)

export default Settings