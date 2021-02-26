import { audioData } from './DataLoader';
const characterBGMPlay = (round='',main='')=>{
  if(audioData[round]._volume===0.6){ audioData[round].fade(0.6,0,1000); };
  if(audioData[main].playing() && audioData[main]._volume===1){ return };
  audioData[main].stop();
  audioData[main].volume(1);
  audioData[main].play();
};
const roundBGMPlay = (round)=> {
  audioData[round].stop();
  audioData[round].volume(0.6);
  audioData[round].play();
};
export const currentBGMStatus = ( currentBGM )=>{
  switch (currentBGM) {
    case 'Tanjirou':
    case 'Nezuko':
    case 'Zenitsu':
    case 'Inosuke':
    case 'Rengoku':
      characterBGMPlay('round','KimetsuNoYaiba');
      break;
    case 'Teoni':
    case 'Hakuji':
    case 'Nomanooni':
    case 'Nomanooni-2':
    case 'Nomanooni-3':
      characterBGMPlay('round','KimetsuNoYaibaEnemy');
      break;
    case 'userRounds':
    case 'enemyRounds':
      roundBGMPlay('round');
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
    case 'Teoni':
    case 'Hakuji':
    case 'Nomanooni':
    case 'Nomanooni-2':
    case 'Nomanooni-3':
      audioData.KimetsuNoYaibaEnemy.fade(1,0,1000);
      setCurrentBGM('userRounds');
      break;
    default:
      break;
  };
};