import React, { useContext, useState, useEffect } from 'react';
import {
    getDatabase,
    push,
    ref,
    set,
    child,
    get,
    update,
    remove,
} from 'firebase/database';

const CardData = React.createContext();
const CreateCardData = React.createContext();
const EditCardData = React.createContext();
const RemoveCard = React.createContext();

export const useRemoveCard = () => {
    return useContext(RemoveCard);
};

export const useCardData = () => {
    return useContext(CardData);
};

export const useEditCardData = () => {
    return useContext(EditCardData);
};

export const useUpdateCardData = () => {
    return useContext(CreateCardData);
};

export const CardDataContext = ({ children }) => {
    const [currentData, setCurrentData] = useState([]);
    const [rerender, setRerender] = useState(true);

    const appendToDB = (newPost) => {
        const db = getDatabase();
        const postListRef = ref(db, 'cards');
        const newPostRef = push(postListRef);
        const data = {
            title: newPost.title,
            post: newPost.post,
            id: newPostRef.key,
            author: newPost.author
        };
        set(newPostRef, data);
        setCurrentData((prev) => [data, ...prev]);
    };

    const fetchDB = async () => {
        try {
            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, 'cards/'));
            if (snapshot.exists()) {
                setCurrentData(Object.values(snapshot.val()).reverse());
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    };

    const editCardData = (edits, id) => {
        const db = getDatabase();
        const testref = `cards/${id}`
        const dbRef = ref(db, testref);
        update(dbRef, {...edits})
            .then(() => {
               setRerender(!rerender);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const removeCard = (id) => {
      console.log(`Skickat med ID: ${id}`);
        const db = getDatabase();
        const dbRef = ref(db, `cards/${id}`);
        remove(dbRef);
        setRerender(!rerender);
    };

    useEffect(() => {
        fetchDB();
    }, []);

    useEffect(() => {
      fetchDB();
  }, [rerender]);

    return (
        <CardData.Provider value={currentData}>
            <CreateCardData.Provider value={appendToDB}>
                <EditCardData.Provider value={editCardData}>
                    <RemoveCard.Provider value={removeCard}>
                        {children}
                    </RemoveCard.Provider>
                </EditCardData.Provider>
            </CreateCardData.Provider>
        </CardData.Provider>
    );
};
