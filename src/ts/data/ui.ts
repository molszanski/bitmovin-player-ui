// @ts-ignore
import { createStore } from 'unistore/full/preact';

export interface UiState {
  panelOpen: boolean;
  hideOutTimeout: number;
  label: string;

  subs: {
    size: string | null;
    color: string | null;
  };
}

export interface UiUpdate {
  hideOutTimeout: number;
  label: string;
  subs?: {
    size?: string | null;
    color?: string | null;
  };
}


const defaultStoreState: UiState = {
  panelOpen: false,
  hideOutTimeout: 3000,
  label: 'closed',
  subs: {
    size: null,
    color: null,
  },
};

const store: any = createStore(defaultStoreState);

// Internalish
export const clearStore = store.action(() => (defaultStoreState));
export const openPanel  = store.action(() => ({ panelOpen: true }));
export const closePanel = store.action(() => ({ panelOpen: false }));
export const sendUpdate = store.action((s: UiState, u: UiUpdate) => (u));

// Settings panel

// Kinda public
export const openSubtitleSettingsPanel = function(): void {
  if (!store.getState().panelOpen) {
    openPanel();
    // sendUpdate({label: 'Open'});
  }
};
export const closeSubtitleSettingsPanel = function(): void {
  if (store.getState().panelOpen) {
    closePanel();
    // sendUpdate({label: 'Closed'});
  }
};

// Subs
export const setSize = store.action(function(s: UiState, u: string ) {
  s.subs.size = u;
  return { subs: s.subs };
});


export const setSubsSize = function(n: string): void {
  setSize(n);
};

export const subtitleActions = (store: UiState) => ({

  setSize: function ({ subs }: UiState, newSize: any) {
    subs.size = newSize;
    return { subs: subs };
  },

  setColor: function ({ subs }: UiState, newColor: any) {
    subs.color = newColor;
    return { subs: subs };
  },
});


// Dev Tools & Logger
const customLogger = () => {
  console.log('logger.ui-state.updates: ', store.getState());
};
customLogger();
store.subscribe(customLogger);
(<any>window).subOpen = function() {
  openPanel();
};
(<any>window).subClose = function() {
  closePanel();
};

export {
  store as default,
  store as store,
};
