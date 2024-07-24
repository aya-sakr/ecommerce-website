import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Iproduct } from '../models/Iproduct';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ApiserService {
  httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'my-auth-token'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  getAllProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${environment.apiUrl}/product`);
  }
  getProductByCatID(catID: number): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      `${environment.apiUrl}/product/?categoryID=${catID}`
    );
  }
   addProduct(newPrd:Iproduct):Observable<Iproduct>
   {
    return this.http.post<Iproduct>(`${environment.apiUrl}/product`,newPrd,this.httpOptions,).pipe(
      retry(3),
      catchError(this.handleError)

    )
  }


}
