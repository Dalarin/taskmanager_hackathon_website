
import Auth from '../Components/Auth';
import Navbar from '../Components/Navbar.jsx';
import TaskCont from '../Components/TaskCont.jsx';
import Footer from '../Components/Footer.jsx';
import Keeps from '../Components/Keeps';


function Keep() {
  return (
    <>
    <Navbar head="Заметки" />
    <Footer />
    <Keeps/>
    </>
  );
}

export default Keep;
