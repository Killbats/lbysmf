/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CSS/extra_modal.css';

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        var ver = getiOSversion();
        return 'iOS_'+ ver.toString();            
    }

    return "unknown";
}

function getiOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <https://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return parseInt(v[1], 10) + '.' + parseInt(v[2], 10) + '' + parseInt(v[3] || 0, 10);
  }
}
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  initSMS(param, e) {
    console.log('Parameter', param);
    console.log('Event', e);  
    
    if (getMobileOperatingSystem().includes("iOS_")) {
      var iOS_ver = getMobileOperatingSystem().split("_");      
      
      if (parseFloat(iOS_ver[1]) >= 8.0) {
        window.open ("sms:123&body=" + param.props.data_keyword,"_system");
      } else {
        window.open ("sms:123;body=" + param.props.data_keyword,"_system");
      }
    } else {
      window.open ("sms:123?body=" + param.props.data_keyword,"_system");
    }
    this.toggle();
  }

  render() {
    return (
      <div>
        {/* <Button color="primary" onClick={this.toggle}>Buy</Button>         */}
        <Button className='btn-buy-custom' onClick={this.toggle}>BUY</Button>        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.data_title}</ModalHeader>
          <ModalBody>
            {/* It will initiate the sms native apps to send subscription {this.props.data_keyword} */}
            By pressing OK this will invoke the SMS app with keyword "{this.props.data_keyword}" to be sent to "123"
          </ModalBody>
          <ModalFooter>
            <Button className='btn-buy-custom' onClick={(e) => this.initSMS(this, e)}>OK</Button>{' '}                        
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;