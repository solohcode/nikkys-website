import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'animate-fading': {
    WebkitAnimation: 'fading 10s infinite',
    animation: 'fading 10s infinite'
  },
  'animate-opacity': {
    WebkitAnimation: 'opac 4s',
    animation: 'opac 4s'
  },
  'animate-top': {
    position: 'relative',
    WebkitAnimation: 'animatetop 1.5s',
    animation: 'animatetop 1.5s'
  },
  'animate-left': {
    position: 'relative',
    WebkitAnimation: 'animateleft 1.5s',
    animation: 'animateleft 1.5s'
  },
  'animate-right': {
    position: 'relative',
    WebkitAnimation: 'animateright 1.5s',
    animation: 'animateright 1.5s'
  },
  'animate-bottom': {
    position: 'relative',
    WebkitAnimation: 'animatebottom 1.5s',
    animation: 'animatebottom 1.5s'
  },
  'animate-zoom': {
    WebkitAnimation: 'animatezoom 1.5s',
    animation: 'animatezoom 1.5s'
  }
});
