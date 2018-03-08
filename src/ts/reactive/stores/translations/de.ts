import { Translation } from './types';

export const de: Translation = {
  language: 'german',
  settings: {
    audioQuality: 'Audioqualität',
    videoQuality: 'Videoqualität',
    speed: 'Geschwindigkeit',
    audioTrack: 'Audiospur',
    fontSize: 'Größe',
    fontFamily: 'Schriftart',
    fontColor: 'Farbe',
    fontOpacity: 'Deckkraft',
    characterEdge: 'Ränder',
    backgroundColor: 'Hintergrundfarbe (Text)',
    backgroundOpacity: 'Hintergrunddeckkraft (Text)',
    windowColor: 'Hintergrundfarbe (Textbox)',
    windowOpacity: 'Hintergrunddeckkraft (Textbox)',
  },
  labels: {
    subtitles: 'Untertitel',
    subtitleSettings: 'Subtitles settings',
    reset: 'Zurücksetzen',
    back: 'Zurück',
    normal: 'Normal',
  },
  messages: {
    remainingTime: 'Ad: {remainingTime} secs',
    connectingTo: function(castDeviceName: string): string {
      return `Verbindung mit <strong>${castDeviceName}</strong> wird hergestellt...`;
    },
    playingOn: function(castDeviceName: string): string {
      return `Playing on <strong>${castDeviceName}</strong>...`;
    },
  },
};
