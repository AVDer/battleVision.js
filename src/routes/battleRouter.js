import express from "express";
import formidable from "formidable";
import fs from "fs";

import {BvDate} from "../bv_date.js";

let router = express.Router();

router.setConfig = function setConfig(cfg) {
  this.cfg = cfg;
}

router.getConfig = function getConfig() {
  return this.cfg;
}

router.setConfig({})

router.get('/', function(req, res, next) {
  res.render('battle_file_select', { title: 'Select File'});
});

router.get('/info/:name', function(req, res, next) {
  const battle_data = JSON.parse(fs.readFileSync(router.getConfig().dir.upload + req.params.name + ".battle"));
  battle_data.general.date = BvDate.isoToString(battle_data.general.date);
  res.render('battle_info', { title: 'File Info', data: battle_data});
});

router.post('/upload', function(req, res, next) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, data, file) => {
    if (err) {
      next(err);
      return;
    }

    const filePath = file.battle_file.filepath;
    const newPath = router.getConfig().dir.upload + file.battle_file.originalFilename;

    fs.rename(filePath, newPath, () => {
      const battle_data = JSON.parse(fs.readFileSync(newPath));
      battle_data.general.date = BvDate.isoToString(battle_data.general.date);
      res.render('battle_info', { title: 'File Info', data: battle_data});
    })  
  });
  
});

export default router;
