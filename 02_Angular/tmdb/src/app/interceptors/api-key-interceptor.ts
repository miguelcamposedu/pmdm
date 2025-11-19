import { HttpInterceptorFn } from '@angular/common/http';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzNkMmM0ODY1NzJhZmIyNDJjNmZlN2MxZGRjNjc3MSIsIm5iZiI6MTU1NjUzMTcyMi4xMTksInN1YiI6IjVjYzZjYTBhMGUwYTI2NGVlZmVkYmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WQSGV3wuwi_I-c5AUWg568JFEe3__0XlunJZeFZycJ0';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${API_TOKEN}`),
    });
    return next(reqWithHeader);
};
