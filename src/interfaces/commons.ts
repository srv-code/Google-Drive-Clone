export interface Path {
  name: string;
  parents?: string[];
  type: 'file' | 'folder';
}
