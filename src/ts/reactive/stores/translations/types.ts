export interface Settings {
  audioQuality: string;
  videoQuality: string;
  speed: string;
  audioTrack: string;
  fontSize: string;
  fontFamily: string;
  fontColor: string;
  fontOpacity: string;
  characterEdge: string;
  backgroundColor: string;
  backgroundOpacity: string;
  windowColor: string;
  windowOpacity: string;
}

export interface Labels {
  subtitles: string;
  subtitleSettings: string;
  reset: string;
  back: string;
  normal: string;
}

export interface Messages {
  remainingTime: string;
  connectingTo(source: string): string;
  playingOn(source: string): string;
}


export interface Translation {
  language: string;
  settings: Settings;
  labels: Labels;
  messages: Messages;
}
