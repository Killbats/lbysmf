import React from 'react';
import viu_logo from '../PIC/Logo/Viu_logo.png';
import '../CSS/PackStyle.css';
// import {
//     Navbar,
//     NavbarBrand,
//     Container,
//     Row,
//     Col,
//     UncontrolledCarousel,
//     Media,
//     Jumbotron
//   } from 'reactstrap';
import ModalExample from '../ModalExample';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../PIC/main_banner/AMB_1Sheet_Dom_Duo_900x450.jpg';
import Banner2 from '../PIC/main_banner/Lovely_Horribly_1592x1124.jpg';
import Banner3 from '../PIC/main_banner/viu_x_smartfren-low.mp4';
import Banner5 from '../PIC/main_banner/COCO_900x600.jpg';
import Banner4 from '../PIC/main_banner/My_ID_is_Gangnam_Beauty_180704.jpg';



const keyword = [ 'HOOQSF1', 'HOOQSF7', 'HOOQSF30'];



export default class Example extends React.Component {
    render() {
        return (
        <div >
            {/* <div >
                <br/>
<Carousel  emulateTouch showStatus={false} showThumbs={false}>
    <div ><iframe  width="560" height="315" src={Banner3}></iframe></div>
    <div><img className="imgstyle" src={Banner2}></img></div>
    <div><img className="imgstyle" src={Banner1}></img></div>
    <div><img className="imgstyle" src={Banner4}></img></div>
    <div><img className="imgstyle" src={Banner5}></img></div>
</Carousel>
</div> */}
  
<br/>
              <div class="container">    
                <img
                   
                    src={viu_logo}
                    className='viu_thumb'
                    alt="Generic placeholder"
                ></img>
                <div >
                        <p1 class="color1m">Media Heading</p1>
                        <br/>
                        <p2 class="color2m">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p2>
                </div>
              </div>

            <div class="container1">
              <div class="package-box">
                  <p3 className="color1">HOOQ 1 day subscription + 300 MB Quota</p3>
                  <div class="test">
                      <p className="color2"><sup>Rp</sup>30.000</p>
                      <p className="color3">30 <sup>Hari</sup></p>
                  </div>
                  <hr/>
                <div class="test">
                    <p className="color4"><sub className="color3">Free </sub>1 GB</p>
                    <button class="button-payment" > Buy </button>
                </div>
              </div>
              <div class="package-box">
                  <p3 className="color1">HOOQ 1 day subscription + 300 MB Quota</p3>
                  <div class="test">
                      <p className="color2"><sup>Rp</sup>30.000</p>
                      <p className="color3">30 <sup>Hari</sup></p>
                  </div>
                  <hr/>
                  <div class="test">
                    <p className="color4"><sub className="color3">Free </sub>1 GB</p>
                    <button  class="button-payment"> Buy </button>
                </div>
              </div>
              <div class="package-box">
                  <p3 className="color1">HOOQ 1 day subscription + 300 MB Quota</p3>
                  <div class="test">
                      <p className="color2"><sup>Rp</sup>30.000</p>
                      <p className="color3">30 <sup>Hari</sup></p>
                  </div>
                  <hr/>
                  <div class="test">
                    <p className="color4"><sub className="color3">Free </sub>1 GB</p>
                    <button  class="button-payment"> Buy </button>
                </div>
              </div>
            </div>

          
          </div>


        );
    
        
      }
    }
    
  