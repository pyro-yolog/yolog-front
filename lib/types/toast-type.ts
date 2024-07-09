export interface IToastMessage {
  id: number;
  message: string;
  type: 'error' | 'success' | 'default';
}
