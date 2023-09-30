import Flowers from "../Flowers/Flowers";
import './FlowerFinal.css';
function FlowerFinal() {
    return(
        <div className='flowerFinal'>
        <Flowers number={1}/>
        <Flowers number={2}/>
        <Flowers number={6}/>
        <Flowers number={9}/>
          <div className="bordeSuperior"></div>
          <div className="bordeInferior"></div>
        </div>
    );
}

export default FlowerFinal;
