import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ6C92WDbgWrw9PVIrcNLK7TfQxO8TxeA',
  authDomain: 'thread-it-8e14f.firebaseapp.com',
  databaseURL: 'https://thread-it-8e14f.firebaseio.com',
  projectId: 'thread-it-8e14f',
  storageBucket: 'thread-it-8e14f.appspot.com',
  messagingSenderId: '914538863538',
  appId: '1:914538863538:web:0c4c703784f7d5fe4de2ab',
  measurementId: 'G-VY7QMBQC6Y'
};

const app = firebase.initializeApp(firebaseConfig);
app.analytics();

export const auth = app.auth();
export const firestore = app.firestore();
firestore.enablePersistence();
export default app;