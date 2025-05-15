const MenuList = [
  {
    id: "0",
    label: "首页",
    icon: "HomeFilled",
    path: "/"
  },
  {
    id: "1",
    label: 'webworker',
    icon: 'Location',
    children: [
      {
        id: "1-1",
        label: '笔记',
        path: '/webworker'
      },
      {
        id: "1-2",
        label: '基本功能',
        path: '/about'
      },
      {
        id: "1-3",
        label: '图片处理',
        path: '/testPic'
      },
      {
        id: "1-4",
        label: '表格',
        path: '/workbook'
      }
    ]
  },
  {
    id: "2",
    label: "GSAP",
    icon: "Location",
    children: [
      {
        id: "2-1",
        label: 'GSAP',
        path: '/gsap'
      }
    ]
  }
]

export default MenuList