const offers = [
  {
    id: '0',
    image: 'https://picsum.photos/200?image=0',
    title: 'Amazing offer to win sth',
    description: 'Etiam sed porta eros, a tristique odio. Suspendisse neque velit, laoreet a nunc quis, hendrerit convallis nibh. Integer et est a urna vulputate varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    earnAmount: 1.4,
    usersDone: [],
    usersDoneTotal: 0,
  },
  {
    id: '1',
    image: 'https://picsum.photos/200?image=1',
    title: 'Another cool offer to win sth',
    description: 'Etiam sed porta eros, a tristique odio. Suspendisse neque velit, laoreet a nunc quis, hendrerit convallis nibh. Integer et est a urna vulputate varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    earnAmount: 12,
    usersDone: [
      {
        image: 'https://picsum.photos/200?image=2',
        id: '11',
      },
    ],
    usersDoneTotal: 1,
  },
  {
    id: '3',
    image: 'https://picsum.photos/200?image=3',
    title: 'Download an app offer',
    description: 'Etiam sed porta eros, a tristique odio. Suspendisse neque velit, laoreet a nunc quis, hendrerit convallis nibh. Integer et est a urna vulputate varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    earnAmount: 5.3,
    odds: '3/8',
    usersDone: [
      {
        image: 'https://picsum.photos/200?image=4',
        id: '12',
      },
      {
        image: 'https://picsum.photos/200?image=5',
        id: '13',
      },
      {
        image: 'https://picsum.photos/200?image=6',
        id: '14',
      },
    ],
    usersDoneTotal: 18,
  },
  {
    id: '4',
    image: 'https://picsum.photos/200?image=7',
    title: 'Watch video offer',
    description: 'Etiam sed porta eros, a tristique odio. Suspendisse neque velit, laoreet a nunc quis, hendrerit convallis nibh. Integer et est a urna vulputate varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    earnAmount: 7.7,
    odds: '1/6',
    usersDone: [
      {
        image: 'https://picsum.photos/200?image=8',
        id: '15',
      },
      {
        image: 'https://picsum.photos/200?image=9',
        id: '16',
      },
    ],
    usersDoneTotal: 2,
  },
  {
    id: '5',
    image: 'https://picsum.photos/200?image=10',
    title: 'Share somewhere offer',
    description: 'Etiam sed porta eros, a tristique odio. Suspendisse neque velit, laoreet a nunc quis, hendrerit convallis nibh. Integer et est a urna vulputate varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    earnAmount: 6.9,
    usersDone: [],
    usersDoneTotal: 0,
  },
  {
    id: '6',
    image: 'https://picsum.photos/200?image=11',
    title: 'And the last offer in the list',
    description: 'Etiam sed porta eros, a tristique odio. Suspendisse neque velit, laoreet a nunc quis, hendrerit convallis nibh. Integer et est a urna vulputate varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    earnAmount: 0.2,
    usersDone: [
      {
        image: 'https://picsum.photos/200?image=12',
        id: '17',
      },
      {
        image: 'https://picsum.photos/200?image=13',
        id: '18',
      },
      {
        image: 'https://picsum.photos/200?image=14',
        id: '19',
      },
    ],
    usersDoneTotal: 254,
  },
]
export default offers
