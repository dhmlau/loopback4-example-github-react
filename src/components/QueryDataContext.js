/**
 * Use context to share data. 
 * https://javascript.plainenglish.io/a-guide-to-react-context-api-with-an-example-b6e7f494f05e
 */

import { createContext, useState } from "react";

const QueryDataContext = createContext();

function QueryDataContextProvider(props) {
    const [data, setData] = useState({total_count: 0, items:[]});

    return (
        <QueryDataContext.Provider value={[data, setData]}>
                {props.children}
        </QueryDataContext.Provider>
    );
} 

export {QueryDataContext, QueryDataContextProvider};
