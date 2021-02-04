const moodList = {
  fear,
  sadness,
  joy,
  disgust,
  anger,
};

moodList.fear = [
  "지나고 보면 별 일 아닌 경우가 많아요<br>\
    하지만 그건 지나고 봐야 알 일이겠죠?<br>\
    지금 힘들면 잠시 쉬어가도 괜찮아요<br>",
  "소심하게 굴기엔<br>인생은 너무나 짧아요",
  "걱정되는 것들을 종이에 모두 적어보세요<br>\
    그리고 접어서 먼 곳에 두고<br>일단 지금 해야할 일들을 하세요<br>\
    다 끝낸 뒤 종이를 펼쳐 다시 생각해보세요",
  "코로 들이마시고 입으로 내쉬는 호흡을<br>\
    10번 반복해보세요<br>기분이 한결 괜찮아질거에요",
  "실수를 안하는 사람은 없어요<br>\
    무조건 실수 한 번은 한다 생각하는게 편해요<br>\
    그리고 남들은 내 실수를 오래 기억하지 못해요",
  "심장에 손을 가져다 대보세요<br>\
    숨을 쉼으로써 살아갈 수 있다는게<br>\
    가끔은 신기하지 않나요?",
  "걱정의 40%는 절대 현실로 일어나지 않는다<br>\
    걱정의 30%는 이미 일어난 일에 대한 것이다<br>\
    걱정의 22%는 정말 사소한 고민이다<br>\
    나머지는 우리가 바꿔놓을 수 없는 일에 대한 것이다<br><br>-어니 젤린스키-",
  "걱정을 해서<br>걱정이 없어지면<br>걱정이 없겠네<br><br>-티베트 속담-",
];
moodList.sadness = [
  "아무것도 손에 안잡히면<br>아무것도 하지 않아도 괜찮아요<br>\
 슬픔의 끝은 반드시 존재해요",
  "슬픔을 느끼는 것은<br>기쁨을 느끼는 것 못지않게<br>소중하고 필요한 경험이에요<br>\
 슬픔에 빠져있는 스스로를 탓하지 말아요",
  "가끔은 이유 없이 슬플 때도 있어요<br>눈물을 실컷 쏟아내면<br>\
 개운함이 느껴지기도 해요",
  "누군가는<br>당신이 슬퍼하고 있다는 사실에<br>슬퍼할거에요",
  "우리가 만난적은 없겠지만<br>응원할게요<br>너무 오래 슬프진 않길 바래요",
];
moodList.joy = [
  "우리가 반복적으로 하는 것은<br>우리를 만든다<br><br>\
훌륭함은 하나의 행동이 아니라<br>하나의 습관이다<br><br>-아리스토텔레스-",
  "오늘의 나는 어제의 나보다<br>\
  한 뼘 더 성장했을거에요!",
  "성공의 비밀은 '자신감'이며<br>자신감의 비밀은<br>'엄청난 준비'이다\
  <br><br>-조수미-",
  "자신의 본성이 어떤 것이든 그에 충실하라<br>\
  자신이 가진 재능의 끈을 놓아버리지 마라<br>\
  본성이 이끄는 대로 따르면 성공할 것이다<br><br>\
  -시드니 스미스-",
  "사람을 화나게 하는 방법에는 두 가지가 있어요<br><br>\
    첫 번째는 말을 하다가 마는 것이고<br>두 번째는",
  "기분 좋은 하루를 보내고 있군요!<br>\
  앞으로도 좋은 일들 가득하길 바래요",
];
moodList.disgust = [
  "개똥도 약에 쓰려면 없다더니<br>\
모처럼 일찍 퇴근한 날 연락했는데<br>\
아무도 전화를 받지 않는다<br><br>개똥 같은 친구들<br><br>\
-책, 그래도 좋은 날-",
  "아프면<br>청춘이 아니라<br>환자다",
  "떡볶이<br>치킨<br>곱창<br>아이스크림<br>햄버거<br>초밥<br><br>\
  끌리는게 있다면 어서 시키세요<br>",
  "<img style='width: 200px; height: 300px;' src='images/cat.jpg'>",
  "당신이 누군지 알면<br>맛있는걸 사줄텐데<br>모르니 어쩔 수 없군요",
  "밥은 거르지 않고 챙겨 먹었나요?<br>\
  저는 배가 고프면 예민해지더라구요..",
];
moodList.anger = [
  "모든걸 부숴버리고 싶나요?<br>돈이 많은가요?<br>아니라면<br>\
    바깥 공기 마시며 잠시 걷거나<br> 눈을 감고 가만히 쉬는 것도 좋아요",
  "때로는 맛있는 음식을 먹는 것만으로도<br>\
    문제가 해결되기도 해요",
  "가만히 눈을 감고 1부터 100까지 세어보세요<br>\
  너무 화가나서 눈물이 나면<br>\
  울면서 해도 괜찮아요",
  "따뜻한 차를 한잔 마시면<br>화가 조금 가라앉을거에요",
  "좋아하는 음악을 들어보세요.<br>저는 싱어게인이 재미있더라구요",
  "사람을 화나게 하는 방법에는 두 가지가 있어요<br><br>\
    첫 번째는 말을 하다가 마는 것이고<br>두 번째는",
];

const moodText = document.querySelector(".mood .text");

function getRandom(mood) {
  const textCnt = moodList[`${mood}`].length;
  const number = Math.ceil(Math.random() * textCnt) - 1;
  return number;
}

function moodClickEvent(e) {
  const mood = e.target.parentNode.id;
  if (mood == "") {
    return;
  }

  const moodArray = moodList[`${mood}`];
  //   console.log(mood);

  const randomNum = getRandom(mood);

  //   console.log(randomNum);
  moodText.classList.add("showing");
  console.log(moodArray[randomNum]);
  moodText.innerHTML = moodArray[randomNum];
}

function init() {}

init();
