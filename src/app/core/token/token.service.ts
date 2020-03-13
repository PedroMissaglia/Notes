import { Injectable } from '@angular/core';

const KEY: string = 'token';

@Injectable({providedIn: 'root'})
export class TokenService {

    constructor(){}

    setToken(token){
        window.localStorage.setItem(KEY,token);
    }

    getToken(){
        return window.localStorage.getItem(KEY);
    }

    hasToken(){
        return !!this.getToken();
    }

    removeToken(){
        window.localStorage.removeItem(KEY);
    }
}