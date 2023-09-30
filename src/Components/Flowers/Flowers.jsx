import './Flowers.css';

function Flowers ({number}){
    return(
        <div className={`flower flower-${number}`}>
        <div className="leaf leaf-0"></div>
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
        <div className="leaf leaf-7"></div>
        <div className="leaf leaf-8"></div>
        <div className="leaf leaf-9"></div>
        <div className="leaf leaf-10"></div>
        <div className="leaf leaf-11"></div>
        <div className="leaf leaf-12"></div>
        <div className="leaf leaf-13"></div>
        <div className="leaf leaf-14"></div>
        <div className="leaf leaf-15"></div>
        <div className="dot"></div>
      <div className="talls">
      <div className="tall"></div>
        <div className="leaf-tall leaf-16"></div>
        <div className="leaf-tall leaf-17"></div>
      </div>
      </div>
    );
}

export default Flowers;