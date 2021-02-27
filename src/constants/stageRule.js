import { fromJS } from "immutable";

export const stageRule = fromJS({
  stageOne: {
    debutChess:[
      { 
        name:'Tanjirou',
        x:6,
        y:7
      }
    ],
    debutEnemyChess:[
      {
        name:'Teoni',
        x:13,
        y:7
      }
    ],
    ruleText:{
      win:'擊敗手鬼。',
      lose:'竃門 炭治郎 戰敗。'
    },
    recap:'前情提要：炭治郎與鬼殺隊士們即將與「炎柱」煉獄杏壽郎見面，並協助他殺死潛伏在無限列車上的惡鬼。今夜是無限列車出發的前一夜，炭治郎即將要與其他隊士集合...。',
    story:[{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'到達車站了，想不到現在的東京已經這麼繁華，連夜晚到處都是燈光。'
      },{
        character:'Tanjirou-talk-usual',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(這一陣子的經歷讓禰豆子累壞了，似乎很久沒有好好睡個覺了..)'
      },{
        character:'Tanjirou-talk-usual',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'禰豆子，今夜就好好在旅館休息吧! 哥哥等等先去與伊之助、善逸們會合。'
      },{
        character:'Nezuko-talk-dodge',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'嗯...(點頭)'
      },{
        character:'Tanjirou-talk-usual',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'那麼我出去囉!'
      },{
        character:'Nezuko-talk-dodge',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'嗯嗯...(路上小心)'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(步行到市區外圍)'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'距離和伊之助、善逸會合還有一些時間，先來獨自修行一下吧!!'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'想想至今很久沒有獨自揮刀修煉了! 真是懷念..哈哈。'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(騷動聲)..!!'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'鬼的氣味!?..好熟悉?!!'
      },{
        character:'Teoni-talk-default',
        name:'手鬼',
        color:'#9d4edd',
        content:'獵鬼人?!! 真是剛好，眼前送來的食物!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'手鬼!!!??..不是在鬼殺隊試煉的時候就擊敗他了嗎??'
      },{
        character:'Teoni-talk-default',
        name:'手鬼',
        color:'#9d4edd',
        content:'看我吃了你!!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'真是奇怪!!..究竟是怎麼回事??..從沒聽到消息說這附近出現惡鬼，而且還是死過一次的手鬼..'
      },{
        character:'Tanjirou-talk-attack',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'冷靜下來! 必須在這個地方打倒他!!'
    }],
    endStory:[{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'總算成功打倒他了!'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'手鬼看起來並不記得之前與我交手過的事..而且力量也比過往強大，想必是有什麼奇怪的事情發生了吧..'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'不知道伊之助與善逸是否平安....'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'快叫起禰豆子一起與伊之助、善逸會合吧!!....'
    }],
    isWin: enemyList => {
      let totalLife = 0;
        enemyList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    },
    isLose: chessList => {
      let totalLife = 0;
        chessList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    }
  },
  stageTwo: {
    debutChess:[
      { 
        name:'Zenitsu',
        x:11,
        y:10
      },{ 
        name:'Inosuke',
        x:9,
        y:10
      }
    ],
    debutEnemyChess:[
      {
        name:'Nomanooni',
        x:10,
        y:5
      },{
        name:'Nomanooni-2',
        x:8,
        y:6
      },{
        name:'Nomanooni-3',
        x:12,
        y:6
      }
    ],
    ruleText:{
      win:'擊敗所有的沼鬼。',
      lose:'我妻善逸 / 嘴平 伊之助 戰敗。'
    },
    recap:'前情提要：無限列車行駛的前一夜晚，炭治郎碰上了曾經打敗的手鬼，並與其交戰...同一時間的附近，則是準備與炭治郎與會的伊之助與善逸。此時的周圍也散發出了不尋常的氣息...',
    story:[{
        character:'Zenitsu-talk-usual',
        name:'我妻善逸',
        color:'#00ff99',
        content:'那個..伊之助..我好像聽到甚麼奇怪的聲音..你聽見了嗎?'
      },{
        character:'Inosuke-talk-default',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'蛤? 我可是甚麼都沒看見呀!??'
      },{
        character:'Zenitsu-talk-usual',
        name:'我妻善逸',
        color:'#00ff99',
        content:'我是問你聲音呀.......'
      },{
        character:'Inosuke-talk-default',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'本大爺才不管有甚麼聲音!! 話說紋治郎到了沒呀!!'
      },{
        character:'Zenitsu-talk-afraid',
        name:'我妻善逸',
        color:'#00ff99',
        content:'哇啊啊啊啊!!!!! 奇怪的聲音又出現了，快點救我!!救救我呀!!伊之助~~~~~~~'
      },{
        character:'Inosuke-talk-angry',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'真是吵死了!!我甚麼東西都沒有看見啊!'
      },{
        character:'Zenitsu-talk-afraid',
        name:'我妻善逸',
        color:'#00ff99',
        content:'不!不!不!，是真的有惡鬼出現了....'
      },{
        character:'Inosuke-talk-default',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'!!!!(野獸的直覺感應到了惡鬼)'
      },{
        character:'Inosuke-talk-dodge',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'看來是真的有東西要來了! 快拔刀作戰吧! 真逸!'
      },{
        character:'Zenitsu-talk-fall',
        name:'我妻善逸',
        color:'#00ff99',
        content:'!@#$%!...(暈倒)'
      },{
        character:'Nomanooni-talk-dodge',
        name:'沼鬼(壹)',
        color:'#9d4edd',
        content:'看起來是送上門的食物呀!!'
      },{
        character:'Nomanooni-talk-default',
        name:'沼鬼(貳)',
        color:'#9d4edd',
        content:'不是年輕女子...下等的食物。'
      },{
        character:'Nomanooni-talk-def',
        name:'沼鬼(參)',
        color:'#9d4edd',
        content:'別囉嗦! 快吃了他們吧!!!'
      },{
        character:'Inosuke-talk-def',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'有意思! 就讓本大爺來陪陪你們這些螻蟻吧!!'
      },{
        character:'Zenitsu-talk-default',
        name:'我妻善逸',
        color:'#00ff99',
        content:'雷之呼吸...(覺醒狀態)'
    }],
    endStory:[{
        character:'Inosuke-talk-dodge',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'呼呀!!.. 還挺耐打得嘛，這些傢伙。'
      },{
        character:'Zenitsu-talk-default',
        name:'我妻善逸',
        color:'#00ff99',
        content:'....'
      },{
        character:'Inosuke-talk-dodge',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'做了一連串的訓練，看來還是不夠，可惡!'
      },{
        character:'Tanjirou-talk-worry',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'伊之助! 善逸! 你們沒事吧!?'
      },{
        character:'Inosuke-talk-default',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'啊~~ 你終於出現啦! 真治郎。'
      },{
        character:'Zenitsu-talk-usual',
        name:'我妻善逸',
        color:'#00ff99',
        content:'疑?~~ 發生甚麼事啦?! 炭治郎!??'
      },{
        character:'Tanjirou-talk-usual',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'太好了..看來兩位都很好呢!'
      },{
        character:'Nezuko-talk-dodge',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'嗯嗯!!...'
      },{
        character:'Zenitsu-talk-happy',
        name:'我妻善逸',
        color:'#00ff99',
        content:'哇!~~~ 禰豆子醬呀~ 哈哈哈哈哈!'
      },{
        character:'Nezuko-talk-confuse',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'~~~~~~~~'
      },{
        character:'Tanjirou-talk-usual',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'看來大家精神都很好呢..一起折返吧各位!!'
      },{
        character:'Tanjirou-talk-usual',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(想不到任務的前一日發生了這樣的意外..不知道煉獄先生是否也平安。)'
      },{
        character:'Hakuji-talk-default',
        name:'猗窩座',
        color:'#9d4edd',
        content:'又見面了呀，鬼殺隊士們。'
      },{
        character:'Tanjirou-talk-afraid',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'....!!!!??'
    }],
    isWin: enemyList => {
      let totalLife = 0;
        enemyList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    },
    isLose: chessList => {
      const Zenitsu = chessList.filter(v=>v.name==="Zenitsu")[0].debut;
      const Inosuke = chessList.filter(v=>v.name==="Inosuke")[0].debut;
      return (Zenitsu===false||Inosuke===false) ? true : false;
    }
  },
  stageThree: {
    debutChess:[
      { 
        name:'Rengoku',
        x:7,
        y:5
      }
    ],
    debutEnemyChess:[
      {
        name:'Hakuji',
        x:11,
        y:9
      }
    ],
    ruleText:{
      win:'擊敗猗窩座。',
      lose:'煉獄 杏壽郎 戰敗。'
    },
    recap:'前情提要：炭治郎與鬼殺隊士們於無限列車出發的前一夜碰上了一連串奇妙的事。雖然擊敗了手鬼及沼鬼，但眼前又出現了一個比過往都還要強大的敵人...而鬼殺隊士們必須在負傷的情況下面對這場惡戰。',
    story:[{
        character:'Hakuji-talk-default',
        name:'猗窩座',
        color:'#9d4edd',
        content:'鬼殺隊的竈門炭治郎!!能夠再次遇到你這真是緣分啊，哈哈哈。'
      },{
        character:'Tanjirou-talk-afraid',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(他是誰?...是鬼!!!...好強烈的氣!!)'
      },{
        character:'Hakuji-talk-usual',
        name:'猗窩座',
        color:'#9d4edd',
        content:'你不記得了嗎!!?當初對我咒罵膽小鬼的人是你沒錯吧!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'我不記得你是誰!!..但如果你是鬼的話，我就必須消滅你!!'
      },{
        character:'Hakuji-talk-dodge',
        name:'猗窩座',
        color:'#9d4edd',
        content:'哈哈哈!!那就快讓我知道你有多少能耐呀! 弱小的蟲子。'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(對手不是在虛張聲勢..實力非同小可，看起來是十二鬼月等級以上的鬼..冷靜下來。)'
      },{
        character:'Inosuke-talk-dodge',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'(可惡呀!..這傢伙的實力可不是開玩笑的...本大爺竟然在發抖..。)'
      },{
        character:'Zenitsu-talk-fall',
        name:'我妻善逸',
        color:'#00ff99',
        content:'炭治郎...伊之助...我們死定了吧!!!!!(暈倒)'
      },{
        character:'Hakuji-talk-dodge',
        name:'猗窩座',
        color:'#9d4edd',
        content:'奇怪!?還有一隻鬼嗎??'
      },{
        character:'Nezuko-talk-attack',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'嗚!!.....'
      },{
        character:'Hakuji-talk-usual',
        name:'猗窩座',
        color:'#9d4edd',
        content:'竟然還有被人類訓服的鬼??真是夠了!!你們每個都別想活著離開!!!'
      },{
        character:'Rengoku-talk-default',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'休想!!! 在場的所有人，一個都不會死!!!'
      },{
        character:'Hakuji-talk-def',
        name:'猗窩座',
        color:'#9d4edd',
        content:'嗚呀!!!!!杏壽郎!!!我太開心了!!哈哈哈哈哈哈!!'
      },{
        character:'Hakuji-talk-def',
        name:'猗窩座',
        color:'#9d4edd',
        content:'這次不會再讓你白白死去，快成為鬼和我永遠戰鬥下去吧!!'
      },{
        character:'Tanjirou-talk-worry',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'是..是煉獄先生!?'
      },{
        character:'Rengoku-talk-default',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'哦!!竈門，快和其他人遠離這個地方，我來阻止眼前的惡鬼。'
      },{
        character:'Inosuke-talk-default',
        name:'嘴平 伊之助',
        color:'#00ff99',
        content:'(好強...好強!!...)'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'好..好的煉獄先生，還請多小心。'
      },{
        character:'Rengoku-talk-default',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'哦!!! 交給我吧。'
      },{
        character:'Hakuji-talk-usual',
        name:'猗窩座',
        color:'#9d4edd',
        content:'再一次的相遇不是巧合，是命運的安排對吧!!..快成為鬼吧，杏壽郎!!!'
      },{
        character:'Rengoku-talk-attack',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'看來你好像認識我，不過我是不會成為鬼的，我會盡我的職責斬斷你的命，惡鬼!!'
    }],
    endStory:[{
        character:'Rengoku-talk-last',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'嗚!!..'
      },{
        character:'Hakuji-talk-usual',
        name:'猗窩座',
        color:'#9d4edd',
        content:'沒用的!!不管怎麼砍，鬼都能夠輕易地癒合傷口，這你還不明白嗎?..杏壽郎。'
      },{
        character:'Rengoku-talk-dead',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'不管怎麼樣，我都會用我的生命作戰到最後一刻!!'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'煉獄先生!!!!....(不好了，這樣下去煉獄先生會喪命的)'
      },{
        character:'Hakuji-talk-dead',
        name:'猗窩座',
        color:'#9d4edd',
        content:'可惡的傢伙!!難道你還要再一次浪費成為鬼的機會嗎??'
      },{
        character:'Rengoku-talk-dead',
        name:'煉獄 杏壽郎',
        color:'#00ff99',
        content:'我是炎柱!煉獄杏壽郎!!我絕對不會逃避我的職責!就算是死也一樣!!!'
      },{
        character:'Hakuji-talk-dead',
        name:'猗窩座',
        color:'#9d4edd',
        content:'嗚呀呀呀呀!!!!!...那你還是死吧!!!杏壽郎!!!!!'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'!!??...(是甚麼出現了!??)'
      },{
        character:'Jotaro-talk-usual',
        name:'????',
        color:'#00ff99',
        content:'這些人看起來不像是替身使者呢。'
      },{
        character:'Josuke-talk-usual',
        name:'????',
        color:'#00ff99',
        content:'是呀!但有人受傷了，可不能見死不救對吧!?'
      },{
        character:'Jotaro-talk-usual',
        name:'????',
        color:'#00ff99',
        content:'真是夠了...'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'!!??...(是甚麼人??...外國人!?...)'
    }],
    isWin: enemyList => {
      let totalLife = 0;
        enemyList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    },
    isLose: chessList => {
      let totalLife = 0;
        chessList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    }
  }
});