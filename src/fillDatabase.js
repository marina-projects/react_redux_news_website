const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const newsData = [
  {
    newsID: 1,
    newsTitle: 'Title 1',
    newsShortText: 'Short text for news 1',
    newsImage: 'https://example.com/image1.jpg',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
      { commentText: 'Comment 2', createdAt: new Date() },
    ],
  },
  {
    newsID: 2,
    newsTitle: 'Title 2',
    newsShortText: 'Short text for news 2',
    newsImage: 'https://example.com/image2.jpg',
    newsDate: admin.firestore.Timestamp.fromDate(new Date()),
    comments: [
      { commentText: 'Comment 1', createdAt: new Date() },
    ],
  },
  {
    newsID: 3,
    newsTitle: 'Title 3',
    newsShortText: 'Short text for news 3',
    newsImage: 'https://example.com/image2.jpg',
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
