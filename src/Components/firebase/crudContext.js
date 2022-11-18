import React, { useContext, useState, useEffect } from 'react';
import { getDatabase, push, ref, set, child, get } from 'firebase/database';
import database from './config';

const CardData = React.createContext();
const UpdateCardData = React.createContext();

export const useCardData = () => {
    return useContext(CardData);
};

export const useUpdateCardData = () => {
    return useContext(UpdateCardData);
};

export const CardDataContext = ({ children }) => {
    const [currentData, setCurrentData] = useState([]);

    const appendToDB = (title, post) => {
        const db = getDatabase();
        const postListRef = ref(db, 'test5');
        const newPostRef = push(postListRef);
        const data = {
            title: title,
            post: post,
            id: newPostRef.key,
        };
        set(newPostRef, data);
        setCurrentData((prev) => [...prev, data]);
        return data;
    };

    const fetchDB = async () => {
        try {
            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, 'test5/'));
            if (snapshot.exists()) {
                setCurrentData(Object.values(snapshot.val()));
                console.log(Object.values(snapshot.val()));
                console.log(currentData);
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDB();
    }, []);

    return (
        <CardData.Provider value={currentData}>
            <UpdateCardData.Provider value={appendToDB}>
                {children}
            </UpdateCardData.Provider>
        </CardData.Provider>
    );
};
