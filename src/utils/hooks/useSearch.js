import { useEffect, useState } from 'react';

const useSearch = () => {
    const [notes, setNotes] = useState([]);
    const [searchedNotes, setSearchedNotes] = useState([]);
    
    useEffect(() => {
        const archiveData = JSON.parse(localStorage.getItem('archive')) 
        if (archiveData) setNotes(archiveData);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const filterData = notes.filter(search => search.content.includes(value) && search);
        setSearchedNotes(filterData);
};

    return { notes, handleSearch, searchedNotes };

}

export default useSearch;