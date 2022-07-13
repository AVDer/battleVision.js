import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

import battleRouter from './src/routes/battleRouter.js';
import {BvDate} from "./src/bv_date.js"

const __dirname = dirname(fileURLToPath( import.meta.url )) + sep;
const cfg = {
  port: process.env.PORT || 3000,
  dir : {
    root : __dirname,
    static : __dirname + '/static' + sep,
    views: __dirname + '/views' + sep,
    upload: __dirname + '/upload' + sep
  }
};

let test_datr = new BvDate("-000490-09-10T00:00:00");
console.log(test_datr.toString());

var app = express();

app.set('port', cfg.port);

// view engine setup
app.set('/views', cfg.dir.views);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(cfg.dir.static));

battleRouter.setConfig(cfg);
app.use('/battle', battleRouter);

app.use((req, res) => {
  res.status(404).render('not_found', { title: 'Not found' });
});

// start server
app.listen(cfg.port, () => {
  console.log(`Example app listening at http://localhost:${ cfg.port }`);
});