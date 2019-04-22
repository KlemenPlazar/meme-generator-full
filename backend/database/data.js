const data = {
  users: [
    {
      id: 1,
      username: 'Obama',
      password: '4a1df5eb8254e5dc1c9070695d5fa89c6587b6701399e363adebaed8fc4cdc7a', // admin
      token: 'd9b525d0-5c10-46ed-bf74-420e2daaf606'
    }, 
    {
      id: 2,
      username: 'skankhunt42',
      password: '032b7104f60932a625ee788011ea21423ccb587a50521be3c6fde689ad8b2ec2', // 123456
      token: '72172a7a-db68-4d20-991e-4f0ea9c6cd49'
    }, 
    {
      id: 3,
      username: 'Elon Musk',
      password: 'e1247bb08f8a1caad3a09caa3a793eda23d436fa6f313f97803f4a40ace9f5cb', // tesla420
      token: 'c01fecdf-fc3c-40bb-9113-8912b6aa9ece'
    }
  ],
  memes: [
    {
      id: 1,
      img: 'img/aliens-guy.jpg',
      text: 'Aliens!',
      color: 'white',
      fontSize: '30px',
      author: 'Obama',
      authorId: 1,
      upvotes: 4,
      createdAt: '2019/1/1',
    },
    {
      id: 2,
      img: 'img/science-guy.jpg',
      text: 'Mind blown',
      color: 'white',
      fontSize: '30px',
      author: 'skankhunt42',
      authorId: 2,
      upvotes: 0,
      createdAt: '2018/12/13',
    },
    {
      id: 3,
      img: 'img/be-like-bill.jpg',
      text: 'Be like Bill',
      color: 'black',
      fontSize: '30px',
      author: 'Elon Musk',
      authorId: 3,
      upvotes: 13,
      createdAt: '2019/1/3',
    },
  ],
};

module.exports = data