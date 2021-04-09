import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { baseUrl } from './../shared/baseUrl';
import { DadosEndereco } from './../shared/dadosEndereco';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {

  }

  getData(route: string): Observable<any[]> {
    return this.http.get<any[]>(`${route}`)
      .pipe(
        tap(data => console.log('Informação recebida')),
        catchError(this.handleError)
      );
  }

  getCep(route: string): Observable<DadosEndereco> {
    return this.http.get<DadosEndereco>(`${route}`)
      .pipe(
        tap(data => console.log('CEP recebido')),
        catchError(this.handleError)
      );
  }

  querySQL(route: string): Observable<any[]> {
    return this.http.get<any[]>(`${route}`)
      .pipe(
        tap(data => console.log('Dados da query recebidos')),
        catchError(this.handleError)
      );
  }

  updateData(route, data): Observable<any> {
    return this.http.post(`${baseUrl}${route}`, {data: data}).pipe(
      tap((data: any) => console.log('Data da id obtida')),
      catchError(this.handleError)
    );
  }
  
  addData (route:string, data): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${baseUrl}${route}`, {data: data}).pipe(
      tap((data: any) => console.log('Informação adicionada com sucesso.')),
      catchError(this.handleError)
    );
  }


  uploadImage (data, route:string): Observable<any> {
    return this.http.post<any>(baseUrl + route, data).pipe(
      tap((data: any) => console.log(`added product w/ id=${data.id}`)),
      catchError(this.handleError)
    );
  }
  
  // updateData (id, data, route: string): Observable<any> {
  //   const url = `${baseUrl}${route}/${id}`;
  //   return this.http.patch(url, data, httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError)
  //   );
  // }
  
  deleteData (route: string, id): Observable<any> {
    const url = `${baseUrl}${route}/${id}`;
  
    return this.http.delete<any>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted data id=${id}`)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Codigo retornado do backend ${error.message}, ` +
        `body era: ${JSON.stringify(error.message)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      error.error.message);
  };
}