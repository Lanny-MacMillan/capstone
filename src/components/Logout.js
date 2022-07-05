import '../App.css';
import {useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Logout = () => {
    const [theme, setTheme] = useState(false);

    const themeChange = () => {
      // 👇️ passed function to setState
      setTheme(current => !current);
    };
  
    return (
        <>
    <div>
      <button onClick={themeChange}>Change view</button>
      {theme && <h2>Loading...</h2>}
    </div>


        </>
    )
}

export default Logout