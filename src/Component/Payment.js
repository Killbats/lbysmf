import React from "react";
import '../CSS/App.css';
import images1 from '../PIC/Payment/Layer 1.png';
import images2 from '../PIC/Payment/Layer 2.png';
import images3 from '../PIC/Payment/Layer 3.png';
import images4 from '../PIC/Payment/Layer 4.png';

const style1={
    textAlign: 'center', 
    paddingTop:'10px',
    paddingBottom:'10px',
     fontSize: '20px'
  }
  
  const styleimg={
    paddingLeft:'5.5em'
  }
  
  const styleimg1={
    height:'45px'
  }
  
const Payment = () => {
    return(
        <div>
 <h1 style={style1}>
 Pilih metode pembayaran untuk isi ulang pulsa Smartfren kamu
 </h1>

{/* UANGKU */}
 <div className="inst inst2">    
  <a className="wide"  href="intent://scan/#Intent;scheme=app;package=com.gojek.app;end"   >
      <img 
      className='imge'
      src={images1} 
      alt="uangku"/> 
    </a>
    </div>
    
{/* OVO */}

    <div className="inst inst2">
      <a className="wide" href="intent://twitter.com/granbluefantasy#Intent;package=com.twitter.android;scheme=https;end">
      <img
      style={styleimg}
      className="imge" 
      src={images2}
      alt="ovo"/>
      </a> 
    </div>

{/* GOPAY */}

<div className="inst inst2">
  
      <a className="wide" href="https://www.google.com/">
          <img 
          style={styleimg1}
          className="imge" 
          src={images3} 
          alt="gopay"/>
          </a>
</div>
    

<div className="inst inst2">
  
  <a className="wide" href="https://www.google.com/">
      <img 
      className="imge" 
      src={images4} 
      alt="DANA"/>
      </a>
    </div>     
</div>
    );
};

export default Payment;