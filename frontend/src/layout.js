import Header from './header';
import {Outlet} from 'react-router-dom'; 

export default function Layout() {
  const currentDate = new Date().getFullYear(); // Declare and assign a value to currentDate
  return (
    <main>
      <Header />
      <Outlet />
      <footer>
        <span style={{fontWeight:'bold'}}>®{currentDate} ALX Projects</span> <br/>
        <span style={{textDecoration: 'underline', fontStyle: 'italic', fontSize: 'small'}}>
          <u>github: Thapelo_ST | email:tsamkelo96@gmail.com</u>
        </span>
      </footer>
    </main>
  );
}