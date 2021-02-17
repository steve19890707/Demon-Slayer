import * as PIXI from "pixi.js";
import { Howl } from 'howler';
const hostname = window.location.hostname==='localhost'?'./Demon-Slayer/':'./';
export const loader = new PIXI.Loader();
export const audioData = {
  open: new Howl({
    src: [`${hostname}audio/bgm-open.mp3`],
    preload: 'metadata',
    loop: true
  }),
  round: new Howl({
    src: [`${hostname}audio/bgm-round.mp3`],
    preload: 'metadata',
    loop: true
  }),
  KimetsuNoYaiba: new Howl({
    src: [`${hostname}audio/bgm-KimetsuNoYaiba.mp3`],
    preload: 'metadata',
    loop: true
  }),
  KimetsuNoYaibaEnemy: new Howl({
    src: [`${hostname}audio/bgm-KimetsuNoYaibaEnemy.mp3`],
    preload: 'metadata',
    loop: true
  }),
};
export const videos = {
  Tanjirou: {
    skill3: PIXI.Texture.from(`${hostname}video/Tanjirou/skill3.mp4`)
  }
};

loader
  .add('Tanjirou-head-default',`${hostname}imgs/Tanjirou/head-default.png`)
  .add('Tanjirou-talk-default',`${hostname}imgs/Tanjirou/talk-default.jpg`)
  .add('Tanjirou-talk-attack',`${hostname}imgs/Tanjirou/talk-attack.jpg`)
  .add('Tanjirou-talk-def',`${hostname}imgs/Tanjirou/talk-def.jpg`)
  .add('Tanjirou-talk-dodge',`${hostname}imgs/Tanjirou/talk-dodge.jpg`)
  .add('Tanjirou-talk-dead',`${hostname}imgs/Tanjirou/talk-dead.jpg`)
  .add('Tanjirou-fight-typeA',`${hostname}imgs/Tanjirou/fight-typeA.png`)
  .add('Tanjirou-fight-typeB',`${hostname}imgs/Tanjirou/fight-typeB.png`)
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
  .add('logo',`${hostname}imgs/common/logo.png`)
  .add('atkIcon',`${hostname}imgs/common/atk.png`)
  .add('defIcon',`${hostname}imgs/common/def.png`)
  .add('otherIcon',`${hostname}imgs/common/other.png`)
  .add('closeIcon',`${hostname}imgs/common/close.png`)
  .add('muteIcon',`${hostname}imgs/common/mute.png`)
  .add('volumeIcon',`${hostname}imgs/common/volume.png`)
  .add('startBtn',`${hostname}imgs/common/startBtn.png`)
  .add('endBtn',`${hostname}imgs/common/end.png`)
  .add('fightOff',`${hostname}imgs/common/fightOff.png`)
  .add('fightDef',`${hostname}imgs/common/fightDef.png`)
  .load();
