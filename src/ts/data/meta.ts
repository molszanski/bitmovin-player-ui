// @ts-ignore
import { createStore } from 'unistore/full/preact';

export interface MetadataStore {
  defined: boolean;
  title: string;
  description: string;
}

export interface StoreUpdate {
  title?: string;
  description?: string;
}

const defaultStoreState: MetadataStore = {
  defined: false,
  title: '',
  description: '',
};

const store: any = createStore(defaultStoreState);

export const clearStore =  store.action(() => (defaultStoreState));
export const markDefined = store.action(() => ({ defined: true }));
export const sendUpdate =  store.action((s: MetadataStore, u: StoreUpdate) => (u));

export const updateStore = function(update: StoreUpdate): void {
  sendUpdate(update);
  if (!store.getState().defined) {
    markDefined();
  }
};

// Dev Tools & Logger
console.log('logger.metadata.updates: ', store.getState());
store.subscribe(function(state: any) {
  console.log('logger.metadata.updates: ', state);
});
(<any>window).quickDemoTitleChange = function(text: string) {
  updateStore({title: text});
};

export {
  store as default,
  store as store,
};
