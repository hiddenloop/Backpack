import Hello from './hello.jsx';
import World from './world.jsx';

export const sum = (a, b) => {
  return new Promise(resolve => resolve(a + b));
};
