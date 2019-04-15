import React from 'react';
import imPay1 from '../PIC/header.jpg';
import '../CSS/Modal.css';
import SimpleModalLauncher from "./ModalLauncher/ModalLauncher";
import details from '../PIC/93c42206-3d69-477d-8e8a-c1eacfe548b0.jpg'

const img1={
    width:'100%',
    maxWidth:'150px',
    height:'100%',
    webkitBorderRadius: '15px',
    mozBorderRadius: '15px',
    borderRadius: '15px'
}

const flexi={
    display:'flex',
    flexDirection:'row',
    
    paddingLeft:'10px'
}

const pad1={
    paddingLeft:'10px'
}

const margin1={
    marginTop:'50px',
    marginLeft:'15px'
}

const img2={
    width:'100%',
    height:'100%'
}

const color1={
    color:'green',
    fontSize:'12px'
}

const marg1={
    marginLeft: '20px',
    marginTop: '10px',
    marginBottom: '5px',
    color:'gray'
}

const marg2={
    marginLeft: '20px'
}


const MainPayment = (classes) => {
    return (
        <div>
            <br/>
            <div style={flexi}>
            <img style={img1} src={imPay1}></img> 
                <div style={pad1}>
                    <p1>Goat Simulator</p1><br/>
                    <p1 style={color1}>Coffe Stain Publishing</p1>
                    
                    <div style={margin1}>
                    <SimpleModalLauncher buttonLabel="Rp. 12.000">
                        <div className={classes.textModal}>
                            <h4 style={marg1}>Google Play</h4>
                            <hr/>
                            <p1 style={marg2}>
                            Goat Simulator 
                            </p1>
                            <hr/>
                            <div><p1 style={marg2}>In App Purchase</p1>
                            </div>
                            <hr/>
                            <div><p1 style={marg2}>Photo/Media</p1>
                            </div>
                            <hr/>
                            <div><p1 style={marg2}>Wifi-Connection</p1>
                            </div>
                            
                            
                            <div>
                           <a href="/Payment"><button class="btnsty1">CHANGE PAYMENT</button></a>
                           </div>
                        </div>
                    </SimpleModalLauncher>
                     </div>
                </div>
            </div>
            <img style={img2} src={details}/>
        </div>
    );
};


export default MainPayment;
