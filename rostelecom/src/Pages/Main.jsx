
import Auth from '../Components/Auth';
import Navbar from '../Components/Navbar.jsx';
import TaskCont from '../Components/TaskCont.jsx';
import Footer from '../Components/Footer.jsx';

function Main() {
  return (
    <>
    <Navbar head="Задачи" />
    <Footer />
    <TaskCont/>
    </>
  );
}

export default Main;
