import * as PIXI from "pixi.js";
export const loader = new PIXI.Loader();
const hostname = window.location.hostname==='localhost'?'./Demon-Slayer/':'./';

loader
  .add('Tanjirou-head-default',`${hostname}imgs/Tanjirou/head-default.jpg`)
  .add('Tanjirou-fight',`${hostname}imgs/Tanjirou/fight.png`)
  .add('Nezuko-head-default',`${hostname}imgs/Nezuko/head-default.jpg`)
  .add('Nezuko-fight',`${hostname}imgs/Nezuko/fight.png`)
  .add('Inosuke-head-default',`${hostname}imgs/Inosuke/head-default.jpg`)
  .add('Inosuke-fight',`${hostname}imgs/Inosuke/fight.png`)
  .add('Teoni-head-default',`${hostname}imgs/Teoni/head-default.jpg`)
  .add('Teoni-fight',`${hostname}imgs/Teoni/fight.png`)
  .add('Nomanooni-head-default',`${hostname}imgs/Nomanooni/head-default.jpg`)
  .add('Nomanooni-fight',`${hostname}imgs/Nomanooni/fight.png`)
  .load();
