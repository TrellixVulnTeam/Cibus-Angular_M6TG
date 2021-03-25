import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Provider {
    User_ID: number;
    First_Name: string;
    Last_Name: string;
    Organization_ID: number;
    Role_ID: number;
    Job_Description: string;
}

@Injectable({
    providedIn: 'root'
})

export class RecipeCRUDService {

    constructor(private http: HttpClient) {}
    
    getAllProviders(): Observable<Provider[]> {
        return this.http.get<Provider[]>('http://localhost:3000/providers')
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error.message);
        return throwError('A data error occurred, please try again.');
    }
}