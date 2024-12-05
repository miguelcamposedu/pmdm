import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  // Replace with your API key
  private readonly accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzNkMmM0ODY1NzJhZmIyNDJjNmZlN2MxZGRjNjc3MSIsIm5iZiI6MTczMjc4NDMwNi4yODc5MzAzLCJzdWIiOiI1Y2M2Y2EwYTBlMGEyNjRlZWZlZGJkMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D-Usqrx6BWQRjJIfyMHHrPQ03WUjR1v7glATTbmLkTs';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the API key
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.accessToken}`, // or use 'x-api-key' if required
      },
    });

    // Pass the modified request to the next handler
    return next.handle(clonedRequest);
  }
}
