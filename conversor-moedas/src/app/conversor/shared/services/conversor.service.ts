import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs';
@Injectable()
export class ConversorService {

  private readonly KEY = "0138904fb6412bdba3aafede67e6c015";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=".concat(this.KEY);

  constructor(private http: HttpClient) {}

  public converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params);
  }

  public cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.rates[conversao.moedaPara];
  }
  
  public cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }
  
  public dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }

}