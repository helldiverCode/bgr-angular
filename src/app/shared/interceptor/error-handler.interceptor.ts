import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function httpErrorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unexpected error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        // Server-side error
        switch (error.status) {
          case 400:
            errorMessage = 'Bad request. Please check your input.';
            if (error.message) {
              errorMessage += error.message;
            }
            break;
          case 401:
            errorMessage = 'Unauthorized. Redirecting to login...';
            router.navigate(['/login']);
            break;
          case 403:
            errorMessage = 'Access forbidden. Contact the administrator.';
            break;
          case 404:
            errorMessage = 'Requested resource not found.';
            break;
          case 500:
            errorMessage = 'Internal Server Error. Try again later.';
            break;
          default:
            errorMessage = `Error ${error.status}: ${error.message}`;
        }
      }

      // Show a notification to the user
      snackBar.open(errorMessage, 'Close', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error'],
      });

      return throwError(() => new Error(errorMessage));
    })
  );
}
