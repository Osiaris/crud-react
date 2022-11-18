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

    const appendToDB = (title, post) => {
        const db = getDatabase();
        const postListRef = ref(db, 'cards');
        const newPostRef = push(postListRef);
        const data = {
            title: title,
            post: post,
            id: newPostRef.key,
        };
        set(newPostRef, data);
        setCurrentData((prev) => [data, ...prev]);
        return data;
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

    const editCardData = ({ target }) => {
        const db = getDatabase();
        const dbRef = ref(db, `cards/${target.parentNode.id}`);
        update(dbRef, { bajs: 'korv' })
            .then(() => {
                console.log('Data updated');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const removeCard = ({ target }) => {
      const db = getDatabase();
      const dbRef = ref(db, `cards/${target.parentNode.id}`)
      remove(dbRef);
    }

    useEffect(() => {
        fetchDB();
    }, []);

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
