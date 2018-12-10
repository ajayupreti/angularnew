import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIConstants } from "../api/api.constants";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    showList() {
        return this.http.get<Response>('https://hn.algolia.com/api/v1/search_by_date?tags=story')
    }
}