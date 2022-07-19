
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {fbKey, fbID,fbDomain, fbSenderID, fbMeasureID} from '../constants';


export const auth = firebase.initializeApp( {
    apiKey: fbKey,
    authDomain: fbDomain,
    projectId: "chatapp-7a4e5",
    storageBucket: "chatapp-7a4e5.appspot.com",
    messagingSenderId: fbSenderID,
    appId: fbID,
    measurementId: fbMeasureID
}).auth()

