import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root' // No need to provide it manually in a module
})
export class HttpErrorInterceptor implements HttpInterceptor {
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
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
              this.router.navigate(['/login']);
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
        this.snackBar.open(errorMessage, 'Close', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['snackbar-error'],
        });

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
