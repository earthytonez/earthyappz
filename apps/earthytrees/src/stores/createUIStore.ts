import UIStore from "./UI.store";

// import { AudioContext } from 'standardized-audio-context';

export function createUIStore() {
  // note the use of this which refers to observable instance of the store
  return new UIStore();
}

export type TStore = ReturnType<typeof createUIStore>;
