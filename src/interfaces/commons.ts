export interface Path {
  components: string[];
  isFile: boolean;
}

export interface SettingsData {
  theme: 'light' | 'dark';
  viewMode: 'list' | 'icon';
}
