import React from 'react';
import VidLaunchModal from './TestModal/VidLaunchModal';

const Item = ({title, buyOption}) =>{
    return (
    // <plantamp>  
      
      // <item>
      <div>            
        <div className="container1">
          
            {buyOption.map((opsi,index) =>{
              return (
                <div key={opsi.idOption} className="package-box">
            <div className="color1" >
                {opsi.planDesc}
            </div>
              <div className="test">
                <p className="color2"><sup>Rp</sup>{opsi.price}
                </p>
                <p className="color3">30 <sup>Hari</sup></p>
              </div>
              <hr/>
           <div className="test">
             <p className="color4"><sub className="color3">Free </sub>1 GB</p>
             <VidLaunchModal buttonLabel="Buy" className="button-payment"  initialModalState={true} data_title='30 day' />
         </div>
       </div>


                )
            })}
          
        </div>
      </div>
      // </item>


    // </plantamp>
    )
  }


export default Item;