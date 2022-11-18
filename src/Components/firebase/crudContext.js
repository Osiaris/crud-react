import React, { useContext, useState, useEffect } from 'react';
import { getDatabase, push, ref, set, child, get } from 'firebase/database';
import database from './config';

const CardData = React.createContext()
const UpdateCardData = React.createContext() 


export const useCardData = () =>{
    return useContext(CardData);
} 

export const useUpdateCardData = () =>{
    return useContext(UpdateCardData);
} 

export const CardDataContext = ({children}) => {
   const [currentData, setCurrentData] = useState([]);
   
   const appendToDB = (title, post) => {
      const db = getDatabase();
      const postListRef = ref(db, 'test4');
      const newPostRef = push(postListRef);
      const data = {
         title: title,
         post: post,
         id: newPostRef.key,
     }
      set(newPostRef, data);
      setCurrentData = appendToDB(title, post);
      return data;
  };

   
//   useEffect(() => {
//         const dbRef = ref(getDatabase());
//         get(child(dbRef, 'cards/'))
//             .then((snapshot) => {
//                 if (snapshot.exists()) {
//                     const data = snapshot.val();
//                 } else {
//                     return [];
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//   },[])

    return (
      <CardData.Provider value={currentData}>
        <UpdateCardData.Provider value={appendToDB}>
           {children}
        </UpdateCardData.Provider>
      </CardData.Provider>
   );
}

