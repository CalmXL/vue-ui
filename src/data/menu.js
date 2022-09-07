export default [
  {
    id: 1,
    title: '菜单1'
  },
  {
    id: 2,
    title: '菜单2',
    children: [
      {
        id: 21,
        title: '菜单2-1',
      },
      {
        id: 22,
        title: '菜单2-2',
        children: [
          {
            id:221,
            title: '菜单2-2-1'
          },
          {
            id:222,
            title: '菜单2-2-2'
          },
          {
            id:223,
            title: '菜单2-2-3'
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: '菜单3',
    children: [
      {
        id: 31,
        title: '菜单3-1'
      },
      {
        id: 32,
        title: '菜单3-2',
        children: [
          {
            id: 321,
            title: '菜单3-2-1'
          },
          {
            id: 322,
            title: '菜单3-2-2'
          },
          {
            id: 323,
            title: '菜单3-2-3',
            children: [
              {
                id: 3231,
                title: '菜单3-2-3-1',
                children: [
                  {
                    id: 32311,
                    title: '菜单3-2-3-1-1'
                  },
                  {
                    id: 32312,
                    title: '菜单3-2-3-1-2'
                  },
                  {
                    id: 32313,
                    title: '菜单3-2-3-1-3'
                  },
                ]
              },
              {
                id: 3232,
                title: '菜单3-2-3-2'
              },
              {
                id: 3233,
                title: '菜单3-2-3-3'
              },
            ]
          },
        ]
      },
      {
        id: 33,
        title: '菜单3-3'
      }
    ]
  },
  {
    id: 4,
    title: '菜单4'
  },
  {
    id: 5,
    title: '菜单5',
    children: [
      {
        id: 51,
        title: '菜单5-1',
        children: [
          {
            id:511,
            title: '菜单5-1-1',
          },
          {
            id:512,
            title: '菜单5-1-2',
            children: [
              {
                id: 5121,
                title: '菜单5-1-2-1'
              }
            ]
          },
        ]
      }
    ]
  },
]