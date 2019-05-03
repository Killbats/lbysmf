export default {
    modalOverlay: {
        
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '2',
        opacity: 1,
        animation: 'show .5s linear',
        overflowX: 'hidden',
        overflowY: 'auto',
    },


    
    modal: {
        width: '95%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor: '#fff',
        boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
        height: '280px',
        backgroundImage: '-webkit-linear-gradient( 93deg, rgb(11, 31, 47) 0%, rgb(31, 45, 49) 100%)' ,
        borderColor: 'rgb(35, 107, 127)' ,
        borderRadius: '12px',
        border: '1px solid rgba(0,0,0,.2)',
        marginTop:'20px',
        color:'white'
        

      
      },

      '@media (max-width: 600px)': {
        modal: {
            height: '275px'
        },
    },

    '@media (min-width: 605px)': {
        modal: {
            height: '215px', 
        },
    },

    '@media only screen and (min-device-width: 414px) and (max-device-width: 736px)' : {
        modal:{
            height : '225px'
        },
    },
    '@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)':{
        modal:{
            height :'225px'
        },
    },


 };

