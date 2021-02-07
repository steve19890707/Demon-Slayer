import * as PIXI from "pixi.js";
export const loader = new PIXI.Loader();
const hostname = window.location.hostname==='localhost'?'./Demon-Slayer/':'./';

loader
  .add('Tanjirou-head-default',`${hostname}imgs/Tanjirou/head-default.png`)
  .add('Tanjirou-talk-default',`${hostname}imgs/Tanjirou/talk-default.jpg`)
  .add('Tanjirou-talk-attack',`${hostname}imgs/Tanjirou/talk-attack.jpg`)
  .add('Tanjirou-talk-def',`${hostname}imgs/Tanjirou/talk-def.jpg`)
  .add('Tanjirou-talk-dodge',`${hostname}imgs/Tanjirou/talk-dodge.jpg`)
  .add('Tanjirou-talk-dead',`${hostname}imgs/Tanjirou/talk-dead.jpg`)
  .add('Tanjirou-fight-typeA',`${hostname}imgs/Tanjirou/fight-typeA.png`)
  .add('Tanjirou-fight-typeB',`${hostname}imgs/Tanjirou/fight-typeB.png`)
  .add('Tanjirou-skill3-show',`${hostname}imgs/Tanjirou/skill/skill3.mp4`)
  .add('Nezuko-head-default',`${hostname}imgs/Nezuko/head-default.jpg`)
  .add('Nezuko-talk-default',`${hostname}imgs/Nezuko/talk-default.jpg`)
  .add('Nezuko-talk-attack',`${hostname}imgs/Nezuko/talk-attack.jpg`)
  .add('Nezuko-talk-def',`${hostname}imgs/Nezuko/talk-def.jpg`)
  .add('Nezuko-talk-dodge',`${hostname}imgs/Nezuko/talk-dodge.jpg`)
  .add('Nezuko-talk-dead',`${hostname}imgs/Nezuko/talk-dead.jpg`)
  .add('Nezuko-fight',`${hostname}imgs/Nezuko/fight.png`)
  .add('Inosuke-head-default',`${hostname}imgs/Inosuke/head-default.jpg`)
  .add('Inosuke-fight',`${hostname}imgs/Inosuke/fight.png`)
  .add('Teoni-head-default',`${hostname}imgs/Teoni/head-default.png`)
  .add('Teoni-talk-default',`${hostname}imgs/Teoni/talk-default.jpg`)
  .add('Teoni-talk-attack',`${hostname}imgs/Teoni/talk-attack.jpg`)
  .add('Teoni-talk-def',`${hostname}imgs/Teoni/talk-def.jpg`)
  .add('Teoni-talk-dodge',`${hostname}imgs/Teoni/talk-dodge.jpg`)
  .add('Teoni-talk-dead',`${hostname}imgs/Teoni/talk-dead.jpg`)
  .add('Teoni-fight',`${hostname}imgs/Teoni/fight.png`)
  .add('Nomanooni-head-default',`${hostname}imgs/Nomanooni/head-default.jpg`)
  .add('Nomanooni-fight',`${hostname}imgs/Nomanooni/fight.png`)
  .add('stageOne-BG',`${hostname}imgs/background/stage1-background.png`)
  .add('stageOne-main-BG',`${hostname}imgs/background/stage1-main-background.jpg`)
  .add('atkIcon',`${hostname}imgs/common/atk.png`)
  .add('defIcon',`${hostname}imgs/common/def.png`)
  .add('otherIcon',`${hostname}imgs/common/other.png`)
  .add('closeIcon',`${hostname}imgs/common/close.png`)
  .add('endBtn',`${hostname}imgs/common/end.png`)
  .add('fightOff',`${hostname}imgs/common/fightOff.png`)
  .add('fightDef',`${hostname}imgs/common/fightDef.png`)
  .add('bgm-KimetsuNoYaiba',`${hostname}audio/bgm-KimetsuNoYaiba.mp3`)
  .load();
