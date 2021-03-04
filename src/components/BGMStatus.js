import { audioData } from './DataLoader';
const userBGMList = [
  'KimetsuNoYaiba',
  'Jotaro',
  'Josuke'
];
const characterBGMPlay = (round='',main='')=>{
  for(let i =0; i < userBGMList.length ; i++){
    if(audioData[userBGMList[i]].playing() && audioData[userBGMList[i]]._volume>0 && userBGMList[i] !== main){ 
      audioData[userBGMList[i]].fade(0.6,0,1000);
    };
  };
  if(audioData[round]._volume>0 && round===main){ return; };
  if(audioData[round]._volume===0.6){ audioData[round].fade(0.6,0,1000); };
  if(audioData[main].playing() && audioData[main]._volume===1){ return; };
  audioData[main].stop();
  audioData[main].volume(1);
  audioData[main].play();
};
const roundBGMPlay = (stageStatus)=> {
  let round ='';
  switch (stageStatus) {
    case 'stageThree':
      round = 'HakujiRound';
      break;
    case 'stageFour':
      round = 'Jotaro';
      break;
    default:
      round = 'round';
      break;
  };
  audioData[round].stop();
  audioData[round].volume(0.6);
  audioData[round].play();
};
export const currentBGMStatus = ( currentBGM, stageStatus )=>{
  switch (currentBGM) {
    case 'Tanjirou':
    case 'Nezuko':
    case 'Zenitsu':
    case 'Inosuke':
    case 'Rengoku':
      if(stageStatus==='stageThree'){
        characterBGMPlay('HakujiRound','KimetsuNoYaiba');
      }else if(stageStatus==='stageFour'){
        characterBGMPlay('Jotaro','KimetsuNoYaiba');
      }else {
        characterBGMPlay('round','KimetsuNoYaiba');
      };
      break;
    case 'Teoni':
    case 'Nomanooni':
    case 'Nomanooni-2':
    case 'Nomanooni-3':
      if(stageStatus==='stageThree'){
        characterBGMPlay('round','Hakuji');
      }else if(stageStatus==='stageFour'){
        characterBGMPlay('Jotaro','KimetsuNoYaibaEnemy');
      }else {
        characterBGMPlay('round','KimetsuNoYaibaEnemy');
      };
      break;
    case 'Hakuji':
      if(stageStatus==='stageThree'){
        characterBGMPlay('HakujiRound','Hakuji');
      }else if(stageStatus==='stageFour'){
        characterBGMPlay('Jotaro','Hakuji');
      }else {
        characterBGMPlay('round','Hakuji');
      };
      break;
    case 'Jotaro':
      if(stageStatus==='stageThree'){
        characterBGMPlay('HakujiRound','Jotaro');
      }else if(stageStatus==='stageFour'){
        characterBGMPlay('Jotaro','Jotaro');
      }else {
        characterBGMPlay('round','Jotaro');
      };
      break;
    case 'Josuke':
      if(stageStatus==='stageThree'){
        characterBGMPlay('HakujiRound','Josuke');
      }else if(stageStatus==='stageFour'){
        characterBGMPlay('Jotaro','Josuke');
      }else {
        characterBGMPlay('round','Josuke');
      };
      break;
    case 'userRounds':
    case 'enemyRounds':
      roundBGMPlay(stageStatus);
      break;
    default:
      break;
  };
};
export const fadeBGMStatus = ( fadeBGM, setCurrentBGM )=>{
  switch (fadeBGM){
    case 'Tanjirou':
    case 'Nezuko':
    case 'Zenitsu':
    case 'Inosuke':
    case 'Rengoku':
      audioData.KimetsuNoYaiba.fade(1,0,1000);
      setCurrentBGM('enemyRounds');
      break;
    case 'Jotaro':
      if(audioData.Jotaro.playing() && audioData.Jotaro._volume===1){ return; };
      audioData.Jotaro.fade(1,0,1000);
      setCurrentBGM('enemyRounds');
      break;
    case 'Josuke':
      audioData.Josuke.fade(1,0,1000);
      setCurrentBGM('enemyRounds');
      break;
    case 'Teoni':
    case 'Nomanooni':
    case 'Nomanooni-2':
    case 'Nomanooni-3':
      audioData.KimetsuNoYaibaEnemy.fade(1,0,1000);
      setCurrentBGM('userRounds');
      break;
    case 'Hakuji':
      audioData.Hakuji.fade(1,0,1000);
      setCurrentBGM('userRounds');
      break;
    default:
      break;
  };
};