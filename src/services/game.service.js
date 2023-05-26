import firebase from "../firebase/firebase";

const db = firebase.collection("/videojuegos");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(juego) {
    return db.add(juego);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const GameServiceDataServiceInstance= new TutorialDataService();
export default GameServiceDataServiceInstance