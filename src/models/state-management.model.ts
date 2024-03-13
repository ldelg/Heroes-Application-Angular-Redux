export interface State<T> {
  isLoading: boolean;
  data?: T | null;
  error?: any;
}
