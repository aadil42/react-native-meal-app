import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    favoriteIds: [],
    add: () => {},
    remove: () => {}
});

const FavoriteContextProvider = ({children}) => {

    const [favoriteList, setFavoriteList] = useState([]);

    const add = (id) => {
        setFavoriteList((list) => {
            return [id, ...list];
        });
    }

    const remove = (incomingId) => {
        setFavoriteList((list) => {
            return list.filter((id) => {
                return id !== incomingId;
            });
        });
    }
    
    const values = {
        favoriteIds: favoriteList,
        add: add,
        remove: remove
    }

    return (
        <FavoriteContext.Provider value={values}> 
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContextProvider;