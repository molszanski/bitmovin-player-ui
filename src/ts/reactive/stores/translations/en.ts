import { Translation } from './types';

export const en: Translation = {
  language: 'english',
  settings: {
    audioQuality: 'Audio Quality',
    videoQuality: 'Video Quality',
    speed: 'Speed',
    audioTrack: 'Audio Track',
    fontSize: 'Font size',
    fontFamily: 'Font family',
    fontColor: 'Font color',
    fontOpacity: 'Font opacity',
    characterEdge: 'Character edge',
    backgroundColor: 'Background color',
    backgroundOpacity: 'Background opacity',
    windowColor: 'Window color',
    windowOpacity: 'Window opacity',
  },
  labels: {
    subtitles: 'Subtitles',
    subtitleSettings: 'Subtitle settings',
    reset: 'Reset',
    back: 'Back',
    normal: 'Normal',
  },
  messages: {
    remainingTime: 'Ad: {remainingTime} secs',
    connectingTo: function(castDeviceName: string): string {
      return `Connecting to <strong>${castDeviceName}</strong>...`;
    },
    playingOn: function(castDeviceName: string): string {
      return `Playing on <strong>${castDeviceName}</strong>...`;
    },
  },
};
