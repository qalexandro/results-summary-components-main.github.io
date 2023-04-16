import { Aspect } from '../Models/aspect.models';
import {
  faEye,
  faBoltLightning,
  faBrain,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const aspect1: Aspect = {
  title: 'Reaction',
  score: 80,
  style: ['rgba(255, 0, 0, 0.05)', 'rgba(255, 0, 0, 1.0)'],
  icon: faBoltLightning,
};

const aspect2: Aspect = {
  title: 'Memory',
  score: 92,
  style: ['rgba(255, 255, 0, 0.05)', 'rgba(255, 255, 0, 1.0)'],
  icon: faBrain,
};

const aspect3: Aspect = {
  title: 'Verbal',
  score: 61,
  style: ['rgba(0, 255, 0, 0.05)', 'rgba(0, 255, 0, 1.0)'],
  icon: faMessage,
};

const aspect4: Aspect = {
  title: 'Visual',
  score: 72,
  style: ['rgba(0, 0, 255, 0.05)', 'rgba(0, 0, 255, 1.0)'],
  icon: faEye,
};

export const bgColorContainer = 'rgba(50, 0, 255, 0.8)';
export const bgColorCircle = 'rgba(50, 0, 255, 0.5)';
export const bgColorButton = 'rgba(50, 0, 255, 0.8)';

export const aspects = [aspect1, aspect2, aspect3, aspect4];
