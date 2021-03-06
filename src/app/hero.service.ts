import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { Composant } from './composant';
import { Json } from './json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  public heroesUrl = 'http://127.0.0.1:5000';  // URL to web api

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  /** GET composants from the server */
  public getComposants (): Observable<Composant[]> {
    return this.http.get<Composant[]>(this.heroesUrl + '/composants')
      .pipe(
        // tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getComposants', []))
      );
  }

  /** GET jsons from the server */
  public getJson (): Observable<Json[]> {
    return this.http.get<Json[]>(this.heroesUrl + '/jsons')
      .pipe(
        // tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getJson', []))
      );
  }


  /** GET heroes from the server */
  public getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + '/wods')
      .pipe(
        // tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          // this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  public getHero(id: number): Observable<Hero> {
    // const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(this.heroesUrl + '/wod/' + id)
    .pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

    /** GET hero by id. Will 404 if id not found */
    public getJson1(id: number): Observable<Json> {
      // const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Json>(this.heroesUrl + '/json/' + id)
      .pipe(
        // tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Json>(`getHero id=${id}`))
      );
    }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(this.heroesUrl + `/wod/search/${term}`).pipe(
      // tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl + '/wod', hero, httpOptions)
    .pipe(
      // tslint:disable-next-line:no-shadowed-variable
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** POST: add a new hero to the server */
  addJson (json: Json): Observable<Json> {
    console.log(json)
    return this.http.post<Json>(this.heroesUrl + '/json', json, httpOptions)
    .pipe(
      // tslint:disable-next-line:no-shadowed-variable
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Json>('addJson'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    // const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(this.heroesUrl + '/wod/' + id, httpOptions).pipe(
      // tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + '/wod/' + hero.id, hero, httpOptions).pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.addMessage('HeroService: ' + message);
  // }
}
