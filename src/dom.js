import * as THREE from 'three';
import { int } from 'three/tsl';
import HALO from 'vanta/src/vanta.halo';

let vantaEffectDawn;

const introBg = document.querySelector('#introBackground');
const goBtn = document.querySelector('.goButton');

const vantaContainer = document.createElement('div');
vantaContainer.id = 'vantaContainer';
vantaContainer.style.position = 'absolute';
vantaContainer.style.top = '0';
vantaContainer.style.left = '0';
vantaContainer.style.width = '100%';
vantaContainer.style.height = '100%';
vantaContainer.style.zIndex = '0';
vantaContainer.style.filter = 'blur(20px)';
vantaContainer.style.pointerEvents = 'none';
vantaContainer.style.opacity = '0';
vantaContainer.style.transition = 'opacity 0.5s ease-in-out';
introBg.insertBefore(vantaContainer, introBg.firstChild);

const children = introBg.querySelectorAll(
  '.askTextContainer, .aiBoxBackground, .continueToProfile'
);
children.forEach((child) => {
  child.style.zIndex = '10';
});

vantaEffectDawn = HALO({
  el: '#vantaContainer',
  THREE: THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 2.0,
  scaleMobile: 1.0,
  backgroundAlpha: 0.0,
});

goBtn.addEventListener('mouseenter', () => {
  vantaContainer.style.opacity = '1';
});

goBtn.addEventListener('mouseleave', () => {
  vantaContainer.style.opacity = '0';
});
