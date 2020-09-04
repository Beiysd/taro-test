export default {
  pages: [
    'pages/index/index',
    'pages/test-page/index',
    "pages/pageone/index",
    "pages/pagetwo/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

  tabBar: {
    list: [
      {
        pagePath: "pages/pageone/index",
        text: 'page1',
        selectedIconPath: "assets/img/selecthomes.png",
        iconPath: "assets/img/homes.png"
      },
      {
        pagePath: "pages/pagetwo/index",
        text: 'page2',
        selectedIconPath: "",
        iconPath: ""
      }
    ]
  }
}
