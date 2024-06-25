import { db } from './firebase'; // Предположим, что у тебя настроен firebase
import { collection, addDoc } from 'firebase/firestore'; 

const addNews = async () => {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      newsID: 2,
      newsTitle: "News 2",
      newsShortText: "News short description 2",
      newsImage: "https://firebasestorage.googleapis.com/v0/b/news-website-react-redux.appspot.com/o/38-760x380.jpeg?alt=media&token=abcde12345",
      comments: [
        { commentId: 1, commentText: "Comment example for news 2" }
      ]
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
