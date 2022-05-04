import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
import { useLang } from "../Header/LangContext";
import Header from "../Header/Header.js";
import "./History.css";

const History = () => {
  const lang = useLang();

  const opts = {
    layout: "inline-evts",
  };
  const customTheme = createTheme(themes.default, {
    timeline: {
      fontFamily: "Inter",
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    imageAtom: {
      objectFit: "cover",
      overflow: "hidden",
      width: "100%",
      maxHeight: "200px",
    },
    imageText: {
      fontFamily: "Inter",
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    timelineTrack: {
      backgroundColor: "black",
      color: "black",
    },
    card: {
      backgroundColor: "#efefef",
      fontFamily: "Inter",
    },
    date: {
      fontFamily: "Inter",
      fontSize: "1.4rem",
      fontWeight: 800,
      // color: "black",
      color: "rgb(40, 110, 180)",
      backgroundColor: "rgb(244, 246, 248)",
    },
    marker: {
      backgroundColor: "rgb(244, 246, 248)",
      border: "none",
      borderRadius: "50%",
      width: "16px",
      height: "16px",
      zIndex: 100,
      left: "1px",
    },
  });

  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      <div className="history">
        <h2>20 YEARS OF PRODUCTION</h2>
        <Timeline theme={customTheme} opts={opts}>
          <Events>
            <ImageEvent
              date="2022"
              text={
                lang
                  ? "[종말의 바보] 현재 생산 중입니다. 이 야심찬 디스토피아 공상 과학 드라마는 넷플릭스와 협력하여 제작되었습니다."
                  : "Currently in production: Fool to the End. This ambitious dystopian sci-fi drama is produced in collaboration with Netflix."
              }
              src="/assets/images/timeline/fool2022.png"
            ></ImageEvent>
            <TextEvent
              date="2021"
              text={
                lang
                  ? "[쉿! 그놈을 부탁해] 출시되었습니다. KT 오리지널 드라마에는 김슬기, 이주우, 송지은, 강율이 출연합니다."
                  : "Shh! Take Care of Him is released. The KT Original drama stars Kim Seul-gi, Lee Joo-woo, Song Ji-eun and Kang Yul."
              }
            ></TextEvent>
            <TextEvent
              date="2020"
              text={
                lang
                  ? "[밀 키드] 출시되었습니다. KT 오리지널 드라마에는 김슬기, 이주우, 송지은, 강율이 출연합니다."
                  : "Meal Kid is released. The Naver web drama stars Park Na-eun and Jeong Dae-hyun."
              }
            ></TextEvent>
            <TextEvent
              date="2019"
              text={
                lang
                  ? "로맨스 탐정은 지그재그 프로덕션과 함께 출시됩니다."
                  : "Romance Detective is released in collaboration with Zig Zag Productions."
              }
            ></TextEvent>
            <TextEvent
              date="2019"
              text={
                lang
                  ? "다큐멘터리 차도 삼국지가 KBS, 윈난 TV 차이나와 함께 개봉했습니다."
                  : "Documentary Three Kingdoms of Chado is released in collaboration with KBS and Yunnan TV China."
              }
            ></TextEvent>
            <ImageEvent
              date="2018"
              text={
                lang
                  ? "재희와 황승언 주연의 IMTV 무비 메멘토 모리가 개봉했습니다. 2018 서울 웹페스트 대상을 수상하고 칸 시리즈 페스티벌 본선에 모습을 드러냈습니다."
                  : "IMTV Movie Memento Mori released, starring Jae-hee and Hwang Seung-eon. Winner of the 2018 Seoul Webfest Grand Prize and shown in the finals of the Cannes Series Festival."
              }
              src="/assets/images/timeline/memento2018.png"
            ></ImageEvent>
            <TextEvent
              date="2018"
              text={
                lang
                  ? "[그남자 오수] 출시됩니다. OCN 드라마에는 이종현과 김소은이 출연합니다."
                  : "Mr Osu is released. The OCN Drama stars Lee Jong-hyun and Kim So-eun."
              }
            ></TextEvent>
            <TextEvent
              date="2017"
              text={
                lang
                  ? "[다시 만난 세계] 출시합니다. SBS 드라마에는 여진구와 이연이 출연합니다."
                  : "Reunited World is released. The SBS drama stars Yeo Jin-goo and Lee Yeoni."
              }
            ></TextEvent>
            <TextEvent
              date="2016"
              text={
                lang
                  ? "[월드 뮤직 - Song of Soul이] 발매되었습니다. 4부작 다큐멘터리는 KBS와 합작으로 만들어졌습니다."
                  : "World Music - Song of Soul is released. The 4 part documentary was made in collaboration with KBS."
              }
            ></TextEvent>
            <TextEvent
              date="2016"
              text={
                lang
                  ? "KBS 스페셜 그레이트 트랜지션 2046이 공개되었습니다."
                  : "KBS Special The Great Transition 2046 is released."
              }
            ></TextEvent>
            <TextEvent
              date="2016"
              text={
                lang
                  ? "UHD 다큐멘터리 컬러홀릭 개봉합니다."
                  : "UHD documentary Colorholic is released."
              }
              src="/assets/images/timeline/spy2015.png"
            ></TextEvent>
            <ImageEvent
              date="2015"
              text={
                lang
                  ? "스파이는 풀려납니다. KBS 금요 미니시리즈에는 김재중, 배종옥, 유오성이 출연합니다."
                  : "Spy is released. The KBS Friday mini-series stars Kim Jae-joong, Bae Jong-ok and Yoo Oh-sung."
              }
              src="/assets/images/timeline/spy2015.png"
            ></ImageEvent>
            <TextEvent
              date="2015"
              text={
                lang
                  ? "남태현, 김민지, 손진영 주연의 웹 드라마 제로 오클락이 개봉되었습니다. 네이버, MBC Every1과 협업하여 출시되었습니다. "
                  : "Web drama Zero O'Clock is released, starring Nam Tae-hyun, Kim Min-ji and Son Jin-young. Released in collaboration with Naver and MBC Every1. "
              }
            ></TextEvent>
            <TextEvent
              date="2014"
              text={
                lang
                  ? "정성석, 이권 주연의 IMTV 영화 <사랑의 추억> 개봉. 부천영화제 폐막작으로 선정됐다."
                  : "IMTV movie Memories of Love released, starring Seong-Suk Jeong and Kwon Lee. The movie was selected to close the Bucheon film festival."
              }
            ></TextEvent>
            <TextEvent
              date="2014"
              text={
                lang
                  ? "KBS 어린이 드라마 '요술 두루마리' 개봉. 배우 신기준, 이지우, 천이슬."
                  : "KBS children's drama Magic Scroll is released. Stars Ki-joon Shin, Ji-woo Lee and Lee Seul Cheon."
              }
            ></TextEvent>

            <TextEvent
              date="2013"
              text={
                lang
                  ? "내셔널지오그래픽 채널에서 공개된 인사이드 K팝 다큐멘터리."
                  : "Inside K-Pop documentary released on National Geographic channels."
              }
              src="/assets/images/timeline/kpop2013.png"
            ></TextEvent>
            <ImageEvent
              date="2012"
              text={
                lang
                  ? "내셔널 지오그래픽 채널에서 공개된 마스터스 3부작. 박찬욱 감독, 봉준호 감독, 최동훈 감독의 작품을 탐구하는 다큐멘터리."
                  : "Masters Trilogy released on National Geographic Channels. Documentary explores work of directors Park Chan-wook, Bong Joon-ho and Choi Dong-hoon."
              }
              src="/assets/images/timeline/masters2012.jpg"
            ></ImageEvent>
            <TextEvent
              date="2011"
              text={
                lang
                  ? "KBS 드라마스페셜 <사망한 아내> 개봉. 드라마 주연 조희봉, 이세은."
                  : "KBS Drama special My Wife Disappeared released. Drama stars Jo Hee-bong and Lee Se-eun."
              }
            ></TextEvent>
            <TextEvent
              date="2008"
              text={
                lang
                  ? "필멸의 영약이 출시되었습니다. KBI와 함께하는 국제 공동제작은 이탈리아 RAI TV를 비롯한 10개국에 배급됩니다."
                  : "Elixir of Mortality is released. The international co-production with KBI is distributed in 10 countries including RAI TV in Italy."
              }
            ></TextEvent>
            <TextEvent
              date="2008"
              text={
                lang
                  ? "KBS 다큐 지하궁전의 비밀 - 조선왕릉이 개봉합니다. 제작은 방송통신심의위원회에서 지원합니다."
                  : "KBS documentary Secrets of the Underground Palace - Royal Tomb of Joseon is released. Production is given support by the Korean Communication Commission."
              }
            ></TextEvent>
            <TextEvent
              date="2007"
              text={
                lang
                  ? "Eat ZEN은 MIP TV/Milia Content 360 이벤트에서 78개국 중 3위를 차지했습니다."
                  : "Eat ZEN wins 3rd of 78 countries in the MIP TV/Milia Content 360 event."
              }
            ></TextEvent>
            <ImageEvent
              date="2006"
              text={
                lang
                  ? "한국 투 더 월드 - 서울: 그리드의 잠금 해제입니다. 내셔널 지오그래픽과의 특별한 콜라보레이션 프로젝트는 140개국 이상에서 방영됩니다."
                  : "Korea to the World - Seoul: Unlocking the Grid is released. The special collaboration project with National Geographic airs in over 140 countries."
              }
              src="/assets/images/timeline/natgeo2006.png"
            ></ImageEvent>
            <TextEvent
              date="2004"
              text={
                lang
                  ? "신화의 비밀 창조물이 공개됩니다.KBS 다큐멘터리는 2005년과 2006년 전경련 대상을 수상하며 총 120부작으로 방영됩니다."
                  : "Secret Creation of Myth is released. The KBS documentary wins the FKI Grand Prize in 2005 and 2006 and airs for a total of 120 episodes."
              }
            ></TextEvent>
            <TextEvent
              date="2003"
              text={
                lang
                  ? "KBS 다큐멘터리 생사의 비밀이 공개됐습니다."
                  : "KBS documentary Secret of the Life and Death is released."
              }
            ></TextEvent>
            <TextEvent
              date="2002"
              text={
                lang
                  ? "Water is Life가 출시되었습니다. SBS 다큐멘터리는 제6회 YWCA 최우수 환경 TV 프로그램상을 수상했습니다."
                  : "Water is Life is released. The SBS documentary is awarded the 6th YWCA Best Environmental TV Program Award."
              }
            ></TextEvent>
            <TextEvent
              date="2001"
              text={
                lang
                  ? "이영숙 대표는 IMTV를 설립했습니다."
                  : "CEO Young-sook Lee establishes IMTV Ltd."
              }
            />
          </Events>
        </Timeline>
      </div>
    </div>
  );
};

export default History;
