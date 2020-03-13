import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3001'

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(
        private http: HttpClient,
        private userService: UserService) {}

    authenticate(userEmail: string, password: string){
        return this.http
            .post(
                API_URL + '/login',
                {email: userEmail, password},
                {observe: 'response'})
            .pipe(tap(
                res => {
                        this.userService.setToken(res.body['accessToken']);
                }))
    };

    getIdfromToken(){
        return this.userService.getIdfromToken();
    }

    setIdFromToken(id){
        return this.userService.setIdFromToken(id);
    }

    removeToken(){
        return this.userService.removeToken();
    }

    getUser(){
        return this.userService.getUser();
    }

}