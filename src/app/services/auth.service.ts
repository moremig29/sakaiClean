import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForm } from '@interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login( user: UserForm ){

    /*
      Auth api route goes here

      example
      return this.http.post( ``, user )
        .subscribe( ( user: any) => {
          console.log( user );
        })
    */

    console.log( 'Login in...' );

  }

}
