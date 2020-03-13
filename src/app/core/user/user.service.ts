import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';
import { User } from './user';
import { HttpClient, HttpParams } from '@angular/common/http';

const API = 'http://localhost:3001/users'

@Injectable({providedIn: 'root'})
export class UserService {

    id;
    
    constructor(private tokenService: TokenService,
                private http: HttpClient) {}

    setToken(token){
        return this.tokenService.setToken(token);
    }

    getIdfromToken(){
        
        const codedToken = this.tokenService.getToken();
        const decodedToken = jtw_decode(codedToken) as User;
        return decodedToken.sub;
    }

    setIdFromToken(id){
        
        this.id = id;
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    removeToken(){
        return this.tokenService.removeToken();
    }

    getUser(){

        if (this.tokenService.hasToken())
            return this.getIdfromToken()
        else{
            return this.id;
        }
    }

    validateEmail(form){
        
        let params = new HttpParams();
        params = params.append('email', form.get('email').value);
        
        return this.http.get<User[]>(API, {params})
    }

    postUser(form){
        return this.http.post<User[]>(API, {
            email: form.get('email').value,
            password: form.get('password').value,
            firstname: form.get('firstname').value,
            lastname: form.get('lastname').value
        })
    }
}