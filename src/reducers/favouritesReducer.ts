export enum FavouritesActionKind {
    TOGGLE = 'TOGGLE',
    FILTER = 'FILTER',
    SEARCH = 'SEARCH'  
}

export type FavouriteAction =
  | { type: FavouritesActionKind.TOGGLE; payload: number }
  | { type: FavouritesActionKind.FILTER; payload: 'all' | 'favourites' }
  | { type: FavouritesActionKind.SEARCH; payload: string };

export type FavouriteState = {
    favorites: number[];
    filterTag: 'all'  | 'favourites';
    search: string;
};

export function favouritesReducer(state: FavouriteState, action:FavouriteAction) {
   
    switch(action.type) {
        case FavouritesActionKind.TOGGLE:
           if(state.favorites.includes(action.payload)){
            return {
                ...state,
                favorites: state.favorites.filter(id => id !== action.payload)
            }
           }
           return {
            ...state,
            favorites: [...state.favorites, action.payload]
           };
        case FavouritesActionKind.FILTER:
                return {
                    ...state,
                    filterTag: action.payload
                }

        case FavouritesActionKind.SEARCH:
                return {
                    ...state,
                    search: action.payload
                }
        default:
            throw new Error('Unknown action')
    }
}