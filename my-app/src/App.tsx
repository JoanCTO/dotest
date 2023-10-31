import React, { useContext, useState } from 'react';
import "./App.css";
import Search from "./components/search";
import Cards from "./components/cards";
import { fetchSearchQuery } from './services/getchSearchQuery';
import { LoadingContext, TypeLoadingProvider } from './context/LoadingProvider';


// 1. TODO fetch query list and add some types
function App() {
    const [objectIds, setObjectIds] = useState<number[]>([]);
    const { loading, setLoading } = useContext(LoadingContext) as TypeLoadingProvider;


    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="App">
                <Search searchAction={(query: string) => fetchSearchQuery(query, setObjectIds, setLoading)} />
                {loading ? <h2>Loading...</h2> : <Cards objectIds={objectIds && objectIds.slice(0, 50)} />}
        </div>
    );
}

export default App;
