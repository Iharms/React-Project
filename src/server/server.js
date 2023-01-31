import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexHtmlTemplate } from "./indexHtmlTemplate";
import { App } from "../App";

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  res.send(
    indexHtmlTemplate(ReactDOM.renderToString(App()), req.query.code, process.env.CLIEND_ID, process.env.REDDIT_SECRET),
  );
});

app.get('*', (req, res) => {
  res.send(
    indexHtmlTemplate(ReactDOM.renderToString(App())),
  );
});

app.listen(3000, () => {
  console.log('Sever started on http://localhost:3000');
});

