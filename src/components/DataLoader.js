import * as PIXI from "pixi.js";
export const loader = new PIXI.Loader();
loader
  .add('Tanjirou-head-default','./imgs/Tanjirou/head-default.jpg')
  .add('Tanjirou-fight','./imgs/Tanjirou/fight.png')
  .add('Nezuko-head-default','./imgs/Nezuko/head-default.jpg')
  .add('Nezuko-fight','./imgs/Nezuko/fight.png')
  .add('Inosuke-head-default','./imgs/Inosuke/head-default.jpg')
  .add('Inosuke-fight','./imgs/Inosuke/fight.png')
  .load();
