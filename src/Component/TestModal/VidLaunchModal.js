import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import styles from "./modalbutton";
import LaunchModal from "./VidModal";


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


class VidLaunchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
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
    
  }

  render() {
    const { buttonLabel, classes } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className={classes.modalButton}
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button>

        {showModal && (
          <LaunchModal  onCloseRequest={() => this.handleToggleModal()}>
            <div>
              <div>
              <h1 className={classes.txt1}> 
                Package Booster 1
                <button className={classes.butstyl} onClick={() =>this.handleToggleModal()}>
                <span>X</span>
              </button>
              </h1>
              
              
              </div>  
              <hr className={classes.line1}/>
              <div className={classes.padst}>
              <p1 >By pressing OK this will invoke the SMS app with keyword "HOOQSF1" to be sent to "123"</p1>
              </div>
              <hr className={classes.line1}/>
              <button className={classes.butsty2} onClick={(e) => this.initSMS(this, e)}>Ok</button>
            </div>
          </LaunchModal>
        )}
      </div>
    );
  }
}

VidLaunchModal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default injectSheet(styles)(VidLaunchModal);
