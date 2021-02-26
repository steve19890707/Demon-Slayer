import * as PIXI from "pixi.js";
import { Howl } from 'howler';
const hostname = window.location.hostname==='localhost'?'./Demon-Slayer/':'./';
export const loader = new PIXI.Loader();
export const audioData = {
  open: new Howl({
    src: [`${hostname}audio/bgm-open.mp3`],
    preload: 'metadata',
    loop: true,
    autoplay: false
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
    skill2: PIXI.Texture.from(`${hostname}video/Tanjirou/skill2.mp4`),
    skill3: PIXI.Texture.from(`${hostname}video/Tanjirou/skill3.mp4`),
    skill4: PIXI.Texture.from(`${hostname}video/Tanjirou/skill4.mp4`)
  },
  Nezuko: {
    skill2: PIXI.Texture.from(`${hostname}video/Nezuko/skill2.mp4`),
  },
  Zenitsu: {
    skill2: PIXI.Texture.from(`${hostname}video/Zenitsu/skill2.mp4`),
    skill3: PIXI.Texture.from(`${hostname}video/Zenitsu/skill3.mp4`)
  },
  Rengoku: {
    skill2: PIXI.Texture.from(`${hostname}video/Rengoku/skill2.mp4`),
    skill3: PIXI.Texture.from(`${hostname}video/Rengoku/skill3.mp4`),
    skill4: PIXI.Texture.from(`${hostname}video/Rengoku/skill4.mp4`),
    skill5: PIXI.Texture.from(`${hostname}video/Rengoku/skill5.mp4`)
  },
  Hakuji: {
    skill2: PIXI.Texture.from(`${hostname}video/Hakuji/skill2.mp4`),
    skill3: PIXI.Texture.from(`${hostname}video/Hakuji/skill3.mp4`)
  }
};
// closeAutoPlay
const closeAutoPlay = ()=>{
  const Tanjirou = Object.keys(videos.Tanjirou);
  for(let i=0; i<Tanjirou.length; i++){
    videos.Tanjirou[`skill${i+2}`].baseTexture.resource.autoPlay= false;
    videos.Tanjirou[`skill${i+2}`].baseTexture.resource.muted= true;
  };
  const Nezuko = Object.keys(videos.Nezuko);
  for(let i=0; i<Nezuko.length; i++){
    videos.Nezuko[`skill${i+2}`].baseTexture.resource.autoPlay= false;
    videos.Nezuko[`skill${i+2}`].baseTexture.resource.muted= true;
  };
  const Zenitsu = Object.keys(videos.Zenitsu);
  for(let i=0; i<Zenitsu.length; i++){
    videos.Zenitsu[`skill${i+2}`].baseTexture.resource.autoPlay= false;
    videos.Zenitsu[`skill${i+2}`].baseTexture.resource.muted= true;
  };
  const Rengoku = Object.keys(videos.Rengoku);
  for(let i=0; i<Rengoku.length; i++){
    videos.Rengoku[`skill${i+2}`].baseTexture.resource.autoPlay= false;
    videos.Rengoku[`skill${i+2}`].baseTexture.resource.muted= true;
  };
  const Hakuji = Object.keys(videos.Hakuji);
  for(let i=0; i<Hakuji.length; i++){
    videos.Hakuji[`skill${i+2}`].baseTexture.resource.autoPlay= false;
    videos.Hakuji[`skill${i+2}`].baseTexture.resource.muted= true;
  };
};
closeAutoPlay();

loader
  .add('Tanjirou-head-default',`${hostname}imgs/Tanjirou/head-default.png`)
  .add('Tanjirou-talk-default',`${hostname}imgs/Tanjirou/talk-default.jpg`)
  .add('Tanjirou-talk-attack',`${hostname}imgs/Tanjirou/talk-attack.jpg`)
  .add('Tanjirou-talk-def',`${hostname}imgs/Tanjirou/talk-def.jpg`)
  .add('Tanjirou-talk-dodge',`${hostname}imgs/Tanjirou/talk-dodge.jpg`)
  .add('Tanjirou-talk-dead',`${hostname}imgs/Tanjirou/talk-dead.jpg`)
  .add('Tanjirou-fight-typeA',`${hostname}imgs/Tanjirou/fight-typeA.png`)
  .add('Tanjirou-fight-typeB',`${hostname}imgs/Tanjirou/fight-typeB.png`)
  .add('Nezuko-head-default',`${hostname}imgs/Nezuko/head-default.png`)
  .add('Nezuko-talk-default',`${hostname}imgs/Nezuko/talk-default.jpg`)
  .add('Nezuko-talk-attack',`${hostname}imgs/Nezuko/talk-attack.jpg`)
  .add('Nezuko-talk-def',`${hostname}imgs/Nezuko/talk-def.jpg`)
  .add('Nezuko-talk-dodge',`${hostname}imgs/Nezuko/talk-dodge.jpg`)
  .add('Nezuko-talk-dead',`${hostname}imgs/Nezuko/talk-dead.jpg`)
  .add('Nezuko-fight',`${hostname}imgs/Nezuko/fight.png`)
  .add('Zenitsu-head-default',`${hostname}imgs/Zenitsu/head-default.png`)
  .add('Zenitsu-talk-default',`${hostname}imgs/Zenitsu/talk-default.jpg`)
  .add('Zenitsu-talk-attack',`${hostname}imgs/Zenitsu/talk-attack.jpg`)
  .add('Zenitsu-talk-def',`${hostname}imgs/Zenitsu/talk-def.jpg`)
  .add('Zenitsu-talk-dodge',`${hostname}imgs/Zenitsu/talk-dodge.jpg`)
  .add('Zenitsu-talk-dead',`${hostname}imgs/Zenitsu/talk-dead.jpg`)
  .add('Zenitsu-talk-usual',`${hostname}imgs/Zenitsu/talk-usual.jpg`)
  .add('Zenitsu-talk-fall',`${hostname}imgs/Zenitsu/talk-fall.jpg`)
  .add('Zenitsu-talk-afraid',`${hostname}imgs/Zenitsu/talk-afraid.jpg`)
  .add('Zenitsu-fight',`${hostname}imgs/Zenitsu/fight.png`)
  .add('Inosuke-head-default',`${hostname}imgs/Inosuke/head-default.jpg`)
  .add('Inosuke-fight',`${hostname}imgs/Inosuke/fight.png`)
  .add('Rengoku-head-default',`${hostname}imgs/Rengoku/head-default.png`)
  .add('Rengoku-talk-default',`${hostname}imgs/Rengoku/talk-default.jpg`)
  .add('Rengoku-talk-attack',`${hostname}imgs/Rengoku/talk-attack.jpg`)
  .add('Rengoku-talk-def',`${hostname}imgs/Rengoku/talk-def.jpg`)
  .add('Rengoku-talk-dodge',`${hostname}imgs/Rengoku/talk-dodge.jpg`)
  .add('Rengoku-talk-dead',`${hostname}imgs/Rengoku/talk-dead.jpg`)
  .add('Rengoku-talk-usual',`${hostname}imgs/Rengoku/talk-usual.jpg`)
  .add('Rengoku-talk-spark',`${hostname}imgs/Rengoku/talk-spark.jpg`)
  .add('Rengoku-talk-last',`${hostname}imgs/Rengoku/talk-last.jpg`)
  .add('Rengoku-fight',`${hostname}imgs/Rengoku/fight.png`)
  .add('Teoni-head-default',`${hostname}imgs/Teoni/head-default.png`)
  .add('Teoni-talk-default',`${hostname}imgs/Teoni/talk-default.jpg`)
  .add('Teoni-talk-attack',`${hostname}imgs/Teoni/talk-attack.jpg`)
  .add('Teoni-talk-def',`${hostname}imgs/Teoni/talk-def.jpg`)
  .add('Teoni-talk-dodge',`${hostname}imgs/Teoni/talk-dodge.jpg`)
  .add('Teoni-talk-dead',`${hostname}imgs/Teoni/talk-dead.jpg`)
  .add('Teoni-fight',`${hostname}imgs/Teoni/fight.png`)
  .add('Nomanooni-head-default',`${hostname}imgs/Nomanooni/head-default.png`)
  .add('Nomanooni-talk-default',`${hostname}imgs/Nomanooni/talk-default.jpg`)
  .add('Nomanooni-talk-attack',`${hostname}imgs/Nomanooni/talk-attack.jpg`)
  .add('Nomanooni-talk-def',`${hostname}imgs/Nomanooni/talk-def.jpg`)
  .add('Nomanooni-talk-dodge',`${hostname}imgs/Nomanooni/talk-dodge.jpg`)
  .add('Nomanooni-talk-dead',`${hostname}imgs/Nomanooni/talk-dead.jpg`)
  .add('Nomanooni-fight',`${hostname}imgs/Nomanooni/fight.png`)
  .add('Hakuji-head-default',`${hostname}imgs/Hakuji/head-default.png`)
  .add('Hakuji-talk-default',`${hostname}imgs/Hakuji/talk-default.jpg`)
  .add('Hakuji-talk-attack',`${hostname}imgs/Hakuji/talk-attack.jpg`)
  .add('Hakuji-talk-def',`${hostname}imgs/Hakuji/talk-def.jpg`)
  .add('Hakuji-talk-dodge',`${hostname}imgs/Hakuji/talk-dodge.jpg`)
  .add('Hakuji-talk-dead',`${hostname}imgs/Hakuji/talk-dead.jpg`)
  .add('Hakuji-talk-usual',`${hostname}imgs/Hakuji/talk-usual.jpg`)
  .add('Hakuji-fight',`${hostname}imgs/Hakuji/fight.png`)
  .add('stageOne-BG',`${hostname}imgs/background/stage1-background.png`)
  .add('stageOne-main-BG',`${hostname}imgs/background/stage1-main-background.jpg`)
  .add('stageTwo-BG',`${hostname}imgs/background/stage2-background.png`)
  .add('stageTwo-main-BG',`${hostname}imgs/background/stage2-main-background.jpg`)
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
  .add('trun',`${hostname}imgs/common/trun.png`)
  .add('next',`${hostname}imgs/common/next.png`)
  .load();
