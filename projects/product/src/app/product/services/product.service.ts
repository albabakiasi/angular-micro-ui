import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_GET_ALL_PRODUCTCATALOGS_URL = "http://localhost:5050/api/product/all";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    console.log("getAllProducts");
    return this.http.get<any[]>(API_GET_ALL_PRODUCTCATALOGS_URL);
  }
}
