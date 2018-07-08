import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const setValidation = functions.firestore
  .document('productos/{prodId}')
  .onCreate(async snap => {
    const { propietario } = snap.data();

    return admin
      .firestore()
      .doc(`users/${propietario}`)
      .get()
      .then(data => {
        if (data.exists) {
          const user = data.data();

          return snap.ref.update({ verified: user.verified });
        }
        return null;
      });
  });
