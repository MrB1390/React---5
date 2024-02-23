import React from 'react';
import { Provider } from 'react-redux';
import { cardStore } from './CardStore';



const DataContext = ({children}) => {
 

    return (
        <div>
           <Provider store={cardStore}>
            {children}
           </Provider>
        </div>
    );
};

export default DataContext;