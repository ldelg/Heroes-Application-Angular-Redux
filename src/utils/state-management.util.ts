import {
  Observable,
  catchError,
  map,
  of,
  startWith,
  switchMap,
  timer,
} from 'rxjs';
import { State } from '../models/state-management.model';
import { tap } from 'rxjs/operators';

export function handleState<T>(
  source$: Observable<T>,
  delayTime = 0
): Observable<State<T>> {
  // Optionally introduce a small delay for the loading state to ensure it's visible
  return timer(delayTime).pipe(
    switchMap(() => source$), //throwError(() => new Error('Forced test error'))), add this instead of "source$" to mock an error
    map((data) => ({ isLoading: false, data: data ?? null })),
    startWith({ isLoading: true, data: null }),
    tap(null, (error) => console.log('Caught error:', error)),
    catchError((error) => of({ isLoading: false, data: null, error }))
  );
}
