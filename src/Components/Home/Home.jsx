import './Home.css'; 
import { BsStars } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const openFlowers = () =>{
        navigate('/flowers');
    }
    return(
        <>
        <div className='containerBtn'>
        <h1> You have a gift from your bestie <BsStars className='stars'/> </h1>
         <button onClick={openFlowers}> Open gift</button>
        </div>
        </>
    );
}

export default Home; 