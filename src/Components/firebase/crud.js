import { getDatabase, push, ref, set, child, get } from 'firebase/database';
import database from './config';

const fetchData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'cards/'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log(data);
                return data;
            } else {
                return [];
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const appendToDB = (title, post) => {
    const db = getDatabase();
    const postListRef = ref(db, 'cards');
    const newPostRef = push(postListRef);
    
    set(newPostRef, {
        title: title,
        post: post,
        id: newPostRef.key,
    });
};

export {appendToDB, fetchData};