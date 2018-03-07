export interface FontPanelLabels {
  fontSize: string;
  fontFamily: string;
  fontColor: string;
  fontOpacity: string;
}

export interface Settings {
  fonts: FontPanelLabels;
}

export interface Labels {
  subtitles: string;
}

export interface Translation {
  language: string;
  settings: Settings;
  labels: Labels;
}
