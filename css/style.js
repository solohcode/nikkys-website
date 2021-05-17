import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // usable stylings
  'mt-big': {
    marginTop: [{ unit: 'px', value: 150 }]
  },
  'ml-big': {
    marginLeft: [{ unit: 'px', value: 150 }]
  },
  'mr-big': {
    marginRight: [{ unit: 'px', value: 150 }]
  },
  'my-big': {
    margin: [{ unit: 'px', value: 150 }, { unit: 'px', value: 0 }, { unit: 'px', value: 150 }, { unit: 'px', value: 0 }]
  },
  'mx-big': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 150 }, { unit: 'px', value: 0 }, { unit: 'px', value: 150 }]
  },
  'mb-big': {
    marginBottom: [{ unit: 'px', value: 150 }]
  },
  'text-gray': {
    color: 'rgb(196, 196, 196)'
  },
  'text-silver': {
    color: 'rgb(82, 81, 81)'
  },
  'text-orange': {
    color: 'orangered'
  },
  'fs-big': {
    fontSize: [{ unit: 'px', value: 50 }]
  },
  'btnbtn-outline-warning': {
    color: 'orangered',
    borderColor: 'orangered'
  },
  'btnbtn-outline-warning:hover': {
    color: 'white',
    backgroundColor: 'orangered',
    borderColor: 'orangered'
  },
  'nc-body': {
  },
  // top headnav
  'navbar-nav nav-item a': {
    color: 'gray'
  },
  'navbar-nav nav-item a:hover': {
    color: 'orange'
  },
  'navbar-nav nav-item active': {
    color: 'orangered'
  },
  // slides starts here
  'nc-banner': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 500 }]
  },
  slideshow: {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 500 }],
    background: 'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9))',
    backgroundSize: 'cover'
  },
  slide1: {
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }],
    background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(../images/banner/b6.jpg), no-repeat',
    backgroundSize: 'cover'
  },
  slide2: {
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }],
    background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(../images/banner/b12.jpg), no-repeat',
    backgroundSize: 'cover'
  },
  slide3: {
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }],
    background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(../images/banner/banner.jpg), no-repeat',
    backgroundSize: '100% 100%'
  },
  slide4: {
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }],
    background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(../images/banner/b17.jpg), no-repeat',
    backgroundSize: 'cover'
  },
  slide5: {
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }],
    background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(../images/banner/b4.jpg), no-repeat',
    backgroundSize: '100% 100%'
  },
  slide6: {
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }],
    background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(../images/banner/b16.jpg), no-repeat',
    backgroundSize: 'cover'
  }
});
