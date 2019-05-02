import React, { Component } from 'react';
import viu_logo from '../PIC/Logo/Viu_logo.png';
import '../CSS/PackStyle.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../PIC/main_banner/AMB_1Sheet_Dom_Duo_900x450.jpg';
import Banner2 from '../PIC/main_banner/Lovely_Horribly_1592x1124.jpg';
import Banner3 from '../PIC/main_banner/viu_x_smartfren-low.mp4';
import Banner5 from '../PIC/main_banner/COCO_900x600.jpg';
import Banner4 from '../PIC/main_banner/My_ID_is_Gangnam_Beauty_180704.jpg';
import VidLaunchModal from './TestModal/VidLaunchModal';
import Carousel from 'nuka-carousel';
import {graphql} from 'react-apollo';
// import {lbsLandingPagesList} from './Query/quer';
// import { get } from 'https';
import Property from './Item';
import LbsLandingPage from './LbsLandingPage';

const keyword = [ 'HOOQSF1', 'HOOQSF7', 'HOOQSF30'];

const style5={
  backgroundColor: 'transparent',
  border: 0,
  width: '25px'
}
const marg={
  margin: 'auto'
}


class Video extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         cart: [],
//         shop: [
//             {id: 35, name: 'jumper', color: 'red', price: 20},
//             {id: 42, name: 'shirt', color: 'blue', price: 15},
//             {id: 56, name: 'pants', color: 'green', price: 25},
//             {id: 71, name: 'socks', color: 'black', price: 5},
//             {id: 72, name: 'socks', color: 'white', price: 5},
//         ],
//         lbstemp: this.props.data.lbsLandingPages,
//     }
// }

render() {
  let table;
  if(this.props.data.loading) {
    return (<div>Loading . . . </div>);
  }
  // console.log("tes")
  // console.log(this.props.data.lbsLandingPages)

    table = this.props.data.lbsLandingPages.map((lbpage) =>{
      // lbsLandingPages[lbpage]._planDesc = lbpage;
      return  <Property key = {lbpage.id}
                       title = {lbpage.title}
                       buyOption = {lbpage.buyOption}
                       
      />
    }
    );

    // Option = this.props.datalbsLandingPages.map((lbopt) =>{
    //   return <Property id   = {lbopt.idOption}
    //                    desc = {lbopt.planDesc}
    //   />
    // })
    
    
    return(
      <div>   
        {table}
      </div>
    )
}

  
  pack = [];
  // var pack = [];
  // displayLbs(){ 
  displayLbs = () => {

    // var data= this.props.data;
    console.log("tes123")


  }
}
 






// const Video = () => (
// <Query>
//   {({ loading, error, data }) => {
//       if (loading) return <p>Good things take time....</p>
//       if (error) return <p>Something went wrong...</p>

//       return <div className="row">{data.allBooks.map(book => <Book book={book} />)}</div>
//   }}
//     </Query>

//     )


































    //         this.pack.push("apel");
    //         this.pack.push("jeruk");
    // console.log(this.pack)


  // if(data.loading){
  //     console.log("loading...")
  //     // return ( <div>Loading..</div>);
  //   }else{
  //     // array function 
  //     data.lbsLandingPages.map(lbs => {
  //       this.pack.push(lbs.buyOption)
        
  //     })

    //   const lbstemp = Object.keys(lbsLandingPages).map((key) => {
    //     lbsLandingPages[key]._planDesc = key;
    //     return lbsLandingPages;
    //   });
    
    //   console.log("luarif")
    // return data.lbsLandingPages.map(lbs => {
    //   return(
        // <p3 key={lbs.id}>{lbs.description}</p3>
        // var x = ""
        // var y = ""
        // console.log("tes213")
     
  //         // lbs.buyOption.map(abc => {
  //           // pack.push()  
  //           // console.log(abc.planDesc)
  //           // this.pack.push(abc.planDesc);

  //         // })
  //     )
  //   })


//   <div >
//   <br/>
// <Carousel 
// width='100%'  style={marg}
// renderCenterLeftControls={({ previousSlide }) => (
// <button style={style5} onClick={previousSlide}> </button>
// )}
// renderCenterRightControls={({ nextSlide }) => (
// <button style={style5} onClick={nextSlide}></button>
// )} >
// <div ><video width="100%" className="vidsize" src={Banner3}></video></div>
// <div><img className="imgstyle" src={Banner2}></img></div>
// <div><img className="imgstyle" src={Banner1}></img></div>
// <div><img className="imgstyle" src={Banner4}></img></div>
// <div><img className="imgstyle" src={Banner5}></img></div>
// </Carousel>
// </div>



  // render(){
//     console.log(this.pack)
// console.log(this.displayLbs())
    // this.displayLbs()

    // console.log(this.state)

    // return(

    //   this.state.lbstemp.map((item, key) =>
    //     <Item item={item} key={item.id} />
    // )
    // <div></div>
      
// this.pack.map(descPlan => {
// console.log(descPlan)
//   return(
//   <div className="container1">
//   <div className="package-box">
//     <div className="color1" >{descPlan[0].planDesc}</div>
//       <div className="test">
//         <p className="color2"><sup>Rp</sup>30.000</p>
//         <p className="color3">30 <sup>Hari</sup></p>
//       </div>
//   </div>
// </div>
//  )
// })


  //   );
  // }
  

// render(){
//   return(
    
//     <div >
   

// <br/>
//       <div className="container">    
//         <img
           
//             src={viu_logo}
//             alt="Generic placeholder"
//             className="viu_thumb"
//         ></img>
//         <div >
//                 <p1 className="color1m">Media Heading</p1>
//                 <br/>
//                 <p2 className="color2m">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p2>
//         </div>
//       </div>



//     <div className="container1">
//       <div className="package-box">
//           <p3 className="color1">HOOQ 1 day subscription + 300 MB Quota</p3>
//           <div className="test">
//               <p className="color2"><sup>Rp</sup>30.000</p>
//               <p className="color3">30 <sup>Hari</sup></p>
//           </div>
//           <hr/>
//         <div className="test">
//             <p className="color4"><sub className="color3">Free </sub>1 GB</p>
//             <TestLaunchModal buttonLabel="Buy" className="button-payment"  initialModalState={true} data_title='1 day' data_keyword={keyword[1]}/>
//         </div>
//       </div>
//       <div className="package-box">
//           <p3 className="color1">HOOQ 1 day subscription + 300 MB Quota</p3>
//           <div className="test">
//               <p className="color2"><sup>Rp</sup>30.000</p>
//               <p className="color3">30 <sup>Hari</sup></p>
//           </div>
//           <hr/>
//           <div className="test">
//             <p className="color4"><sub className="color3">Free </sub>1 GB</p>
//             <TestLaunchModal buttonLabel="Buy" className="button-payment"  initialModalState={true} data_title='7 day' data_keyword={keyword[2]}/>
//         </div>
//       </div>
//       <div className="package-box">
//           <p3 className="color1">HOOQ 1 day subscription + 300 MB Quota</p3>
//           <div className="test">
//               <p className="color2"><sup>Rp</sup>30.000</p>
//               <p className="color3">30 <sup>Hari</sup></p>
//           </div>
//           <hr/>
//           <div className="test">
//             <p className="color4"><sub className="color3">Free </sub>1 GB</p>
//             <TestLaunchModal buttonLabel="Buy" className="button-payment"  initialModalState={true} data_title='30 day' data_keyword={keyword[3]}/>
//         </div>
//       </div>
//     </div>

  
//   </div>

//   );
// }

// }

export default graphql(LbsLandingPage)(Video);
// export default Video;


