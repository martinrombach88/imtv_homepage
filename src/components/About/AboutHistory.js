import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";

const AboutHistory = () => {
  const customTheme = createTheme(themes.default, {
    timeline: {
      fontFamily: "Inter",
      fontSize: "1.25rem",
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
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    timelineTrack: {
      backgroundColor: "black",
    },
    card: {
      backgroundColor: "#efefef",
      fontFamily: "Inter",
    },
    date: {
      fontFamily: "Inter",
      fontSize: "1.25rem",
      fontWeight: 500,
      backgroundColor: "rgb(255, 184, 129)",
    },
    marker: {
      borderColor: "black",
    },
  });

  return (
    <Timeline theme={customTheme}>
      <Events>
        <ImageEvent
          date="2022"
          text="Currently in production: Fool to the End. This ambitious dystopian sci-fi drama is produced in collaboration with Netflix. "
          src="/assets/images/timeline/fool2022.png"
        ></ImageEvent>
        <ImageEvent
          date="2021"
          text="Shh! Take Care of Him is released. The KT Original drama stars Kim Seul-gi, Lee Joo-woo, Song Ji-eun and Kang Yul."
          src="/assets/images/timeline/shh2021.png"
        ></ImageEvent>
        <ImageEvent
          date="2020"
          text="Meal Kid is released. The Naver web drama stars Park Na-eun and Jeong Dae-hyun."
          src="/assets/images/timeline/mealkid2020.jpg"
        ></ImageEvent>
        <TextEvent
          date="2019"
          text="Romance Detective is released in collaboration with Zig Zag Productions."
        ></TextEvent>
        <TextEvent
          date="2019"
          text="Documentary Three Kingdoms of Chado is released in collaboration with KBS and Yunnan TV China."
        ></TextEvent>
        <ImageEvent
          date="2018"
          text="IMTV Movie Memento Mori released, starring Jae-hee and Hwang Seung-eon. Winner of the 2018 Seoul Webfest Grand Prize and shown in the finals of the Cannes Series Festival."
          src="/assets/images/timeline/memento2018.png"
        ></ImageEvent>
        <ImageEvent
          date="2018"
          text="That's Mr Osu is released. The OCN Drama stars Lee Jong-hyun and Kim So-eun."
          src="/assets/images/timeline/osu2018.png"
        ></ImageEvent>
        <ImageEvent
          date="2017"
          text="Reunited World is released. The SBS drama stars Yeo Jin-goo and Lee Yeoni."
          src="/assets/images/timeline/reunited2017.png"
        ></ImageEvent>
        <ImageEvent
          date="2016"
          text="World Music - Song of Soul is released. The 4 part documentary was made in collaboration with KBS."
          src="/assets/images/timeline/worldmusic2016.jpg"
        ></ImageEvent>
        <TextEvent
          date="2016"
          text="KBS Special The Great Transition 2046 is released."
        ></TextEvent>
        <TextEvent
          date="2016"
          text="UHD documentary Colorholic is released."
          src="/assets/images/timeline/spy2015.png"
        ></TextEvent>
        <ImageEvent
          date="2015"
          text="Spy is released. The KBS Friday mini-series stars Kim Jae-joong, Bae Jong-ok and Yoo Oh-sung."
          src="/assets/images/timeline/spy2015.png"
        ></ImageEvent>
        <ImageEvent
          date="2015"
          text="Web drama Zero O'Clock is released, starring Nam Tae-hyun, Kim Min-ji and Son Jin-young. Released in collaboration with Naver and MBC Every1. "
          src="/assets/images/timeline/webdrama2015.png"
        ></ImageEvent>
        <ImageEvent
          date="2014"
          text="IMTV movie Memories of Love released, starring Seong-Suk Jeong and Kwon Lee. The movie was selected to close the Bucheon film festival."
          src="/assets/images/timeline/memories2014.jpg"
        ></ImageEvent>
        <ImageEvent
          date="2014"
          text="KBS children's drama Magic Scroll is released. Stars Ki-joon Shin, Ji-woo Lee and Lee Seul Cheon."
          src="/assets/images/timeline/magicscroll2014.jpg"
        ></ImageEvent>
        <ImageEvent
          date="2013"
          text="KBS Drama special Gokbi released. Drama stars Yu-jeong Kim and Jun-young Seo."
          src="/assets/images/timeline/gokbi2013.jpg"
        ></ImageEvent>
        <TextEvent
          date="2013"
          text="Inside K-Pop documentary released on National Geographic channels."
          src="/assets/images/timeline/kpop2013.png"
        ></TextEvent>
        <ImageEvent
          date="2012"
          text="Masters Trilogy released on National Geographic Channels. Documentary explores work of directors Park Chan-wook, Bong Joon-ho and Choi Dong-hoon."
          src="/assets/images/timeline/masters2012.jpg"
        ></ImageEvent>
        <ImageEvent
          date="2011"
          text="KBS Drama special My Wife Disappeared released. Drama stars Jo Hee-bong and Lee Se-eun."
          src="/assets/images/timeline/wife2011.jpg"
        ></ImageEvent>
        <TextEvent
          date="2008"
          text=" Elixir of Mortality is released. The international co-production with KBI is distributed in 10 countries including RAI TV in Italy."
        ></TextEvent>
        <TextEvent
          date="2008"
          text="KBS documentary Secrets of the Underground Palace - Royal Tomb of Joseon is released. Production is given support by the Korean Communication Commission."
        ></TextEvent>
        <TextEvent
          date="2007"
          text="Eat ZEN wins 3rd of 78 countries in the MIP TV/Milia Content 360 event."
        ></TextEvent>
        <ImageEvent
          date="2006"
          text=" Korea to the World - Seoul: Unlocking the Grid is released. The special collaboration project with National Geographic airs in over 140 countries."
          src="/assets/images/timeline/natgeo2006.png"
        ></ImageEvent>
        <ImageEvent
          date="2004"
          text="Secret Creation of Myth is released. 
          The KBS documentary wins the FKI Grand Prize in 2005 and 2006 and airs for a total of 120 episodes."
          src="/assets/images/timeline/myth2004.jpg"
        ></ImageEvent>
        <ImageEvent
          date="2003"
          text="KBS documentary Secret of the Life and Death is released."
          src="/assets/images/timeline/secret2003.jpg"
        ></ImageEvent>
        <ImageEvent
          date="2002"
          text="Water is Life is released. The SBS documentary is awarded the 6th YWCA Best Environmental TV Program Award."
          src="/assets/images/timeline/waterislife2002.jpg"
        ></ImageEvent>
        <TextEvent
          date="2001"
          text="CEO Young-sook Lee establishes IMTV Ltd."
        />
      </Events>
    </Timeline>
  );
};

export default AboutHistory;
