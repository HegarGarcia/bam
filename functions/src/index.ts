import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const env = functions.config();

import * as algoliasearch from 'algoliasearch';
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('products');

export const createAlgolia = functions.firestore
  .document('productos/{prodId}')
  .onCreate(snap => {
    const data = snap.data();
    const objectId = snap.id;

    return index.addObject({
      objectId,
      ...data
    });
  });

export const deleteAlgolia = functions.firestore
  .document('productos/{prodId}')
  .onDelete(snap => {
    const objectId = snap.id;

    return index.deleteObject(objectId);
  });

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

          return snap.ref.set(
            { id: snap.id, verified: user.verified },
            { merge: true }
          );
        }
        return snap.ref.set({ id: snap.id }, { merge: true });
      });
  });
