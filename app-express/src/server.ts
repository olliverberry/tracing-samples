import express, { Express, Request, Response, NextFunction, json } from 'express';
import tracer from './tracer';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use((req: Request, res: Response, next: NextFunction) => {
  const activeSpan = tracer.scope().active();
  if (!activeSpan) {
    next();
  } else {
    activeSpan.setTag('request.headers', req.headers);
    activeSpan.setTag('request.body', req.body);
    next();
    activeSpan.setTag('response.headers', res.getHeaders());
  }
});

app.post('/', (req: Request, res: Response) => {
  console.log(JSON.stringify(req.body));
  res.status(202).send();
});

app.listen(port, ()=> {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});