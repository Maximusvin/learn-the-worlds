import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCerZsna6OXtSLC36WRmP44qSi61sTppZI',
  authDomain: 'learn-twe-words.firebaseapp.com',
  databaseURL: 'https://learn-twe-words.firebaseio.com',
  projectId: 'learn-twe-words',
  storageBucket: 'learn-twe-words.appspot.com',
  messagingSenderId: '486234514627',
  appId: '1:486234514627:web:7827457df3ff7ee701ae76',
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
const database = fire.database();

export default database;
