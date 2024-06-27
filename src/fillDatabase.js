const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const newsData = [
  {
    newsID: 11,
    newsTitle: 'SpaceX to build vehicle that will drag the International Space Station out of orbit',
    newsShortText: 'NASA will pay SpaceX up to nearly $1 billion to develop a vehicle capable of steering the International Space Station out of orbit to its final resting place when the federal agency and its partners retire the orbiting laboratory in the coming years.',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/44911459904-375bc02163-k-0.webp?alt=media&token=5e86f4a2-71e6-41db-b82c-2982e49327b6',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
      { commentText: 'Comment 2', createdAt: new Date() },
    ],
  },
  {
    newsID: 12,
    newsTitle: 'After the storm, bald eagles ‘Nick’ and ‘Nora’ left desperately searching for their eaglets',
    newsShortText: 'The White Rock Lake bald eagles "Nick" and "Nora” squawking from the trees searching for their two eaglet offspring',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/meril-3.webp?alt=media&token=04221aba-a03b-40c2-bf55-70f1d0cf5e27',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },
  {
    newsID: 13,
    newsTitle: 'Orca calf stranded in British Columbia lagoon for more than a month swims out on her own',
    newsShortText: 'A two-year-old female orca calf swims in Little Espinosa Inlet near Zeballos, British Columbia',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/ap24117022344131.webp?alt=media&token=3d672529-553a-420e-ad1f-30236a7cd4cchttps://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/gettyimages-550591881.webp?alt=media&token=656fb64b-3852-4dbb-9de0-0bf9350b40c4',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },

  {
    newsID: 14,
    newsTitle: 'The lunar far side is wildly different from what we see',
    newsShortText: 'Scientists want to know why',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/screen-shot-2024-05-03-at-10-37-52-am.webp?alt=media&token=60549971-a56e-4c64-b430-b8bf65072823',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },

  {
    newsID: 15,
    newsTitle: 'Scientists say they’ve discovered a ‘phonetic alphabet’ in whale calls',
    newsShortText: 'Understanding how sperm whales such as the mother and calf shown above vary their click sequences could help scientists learn how the animals "encode information in their calls," researchers said.',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/papiri-carbonizzati-3.webp?alt=media&token=337ce14a-fae9-4718-b8a6-3da1cfd15eb7',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },

  {
    newsID: 16,
    newsTitle: 'Newly mapped lost branch of the Nile could help solve long-standing pyramid mystery',
    newsShortText: 'Researcher Eman Ghoneim studies the surface topography of the extinct section of the Nile located in front of the pyramids of Giza and the Great Sphinx.',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/image-5-20240516132220420.webp?alt=media&token=d3ec5dc8-eb14-4db8-963b-7d708d2f7e4e',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },

  {
    newsID: 17,
    newsTitle: 'Study reveals when the first warm-blooded dinosaurs roamed Earth',
    newsShortText: 'Dinosaurs lived year-round in the Arctic, fossils have revealed.',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/portrait-dromaeosaur-in-the-snow-by-davide-bonadonna-crop.webp?alt=media&token=c3b55330-5cfe-442a-8188-4ccc2646b91b',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },

  {
    newsID: 18,
    newsTitle: 'Rare lunar event may reveal Stonehenge’s link with the moon',
    newsShortText: 'Archaeologists are investigating whether the design of Stonehenge has a connection to the moon.',
    newsImage: 'https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/the-moon-at-stonehenge-english-heritage-andre-pattendendsc-6335b.webp?alt=media&token=69f55f41-fa4a-49e1-9baa-b751ef029dc3',
    newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },

  
  // Добавьте больше новостей по необходимости
];

async function fillDatabase() {
  const batch = db.batch();

  newsData.forEach((news) => {
    const newsRef = db.collection('news').doc(); // генерирует случайный ID для документа
    batch.set(newsRef, news);
  });

  await batch.commit();
  console.log('Database filled successfully');
}

fillDatabase().catch(console.error);
