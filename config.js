// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Will',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '048c4d498bbd08adb540c2cd87c3d8eb',
  weatherIcons: 'White', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '52.056736',
  defaultLongitude: '1.148220',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '2',
      name: 'Pixlr E',
      icon: 'camera',
      link: 'https://pixlr.com/e/',
    },
    {
      id: '3',
      name: 'Roblox',
      icon: 'hexagon',
      link: 'https://roblox.com',
    },
    {
      id: '4',
      name: 'Inoreader',
      icon: 'rss',
      link: 'https://www.inoreader.com/all_articles',
    },
    {
      id: '5',
      name: 'Office',
      icon: 'file-text',
      link: 'https://www.office.com',
    },
    {
      id: '6',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'book-open',

  // Links
  lists: {
    firstList: [
      {
        name: 'Spotify Liked Songs',
        link: 'spotify:user/m721lyjmo4bhqy922jubq2noe/collection',
      },
      {
        name: 'Daily Dance Mix',
        link: 'spotify:playlist/37i9dQZF1EQp9BVPsNVof1',
      },
      {
        name: 'Lowkey Tech',
        link: 'spotify:playlist/37i9dQZF1DX0r3x8OtiwEM',
      },
      {
        name: 'Drum & Bass',
        link: 'spotify:playlist/37i9dQZF1DX8jnAPF7Iiqp',
      },
      {
        name: 'Dance Nation',
        link: 'spotify:playlist/7FUhHHA0zXAPVsJdDrNxNs?si=6fba575608c24ce7'
      }
    ],
    secondList: [
      {
        name: 'Satchel One',
        link: 'https://www.satchelone.com/todos/upcoming',
      },
      {
        name: 'OneDrive',
        link: 'https://coplestonsuffolkschuk-my.sharepoint.com/personal/18wleggett_copleston_suffolk_sch_uk/_layouts/15/onedrive.aspx',
      },
      {
        name: 'Learning Grid',
        link: 'https://www.clickict.co.uk/mylearninggrid/mynotes.asp?usr=18wleggett&unit=10GC&key=HV%98%7Bi%A0gbn%A0',
      },
      {
        name: 'Pintrest',
        link: 'https://www.pinterest.co.uk/18wleggett/_saved/',
      },
      {
        name: 'GO 4 Schools',
        link: 'https://www.go4schools.com/parents/Login.aspx',
      }
    ],
  },
};
