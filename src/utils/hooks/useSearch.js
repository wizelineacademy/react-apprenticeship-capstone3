import { useEffect, useState } from 'react';

const useSearch = () => {
    const archiveData = JSON.parse(localStorage.getItem('archive')) 
    // const [notes, setNotes] = useState(archiveData);
    const [searchedNotes, setSearchedNotes] = useState([]);
    
    // useEffect(() => {
    //     if (searchedNotes.length !== 0) setNotes(archiveData);
    // }, [searchedNotes]);

    const handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const filterData = archiveData.filter(search => search.content.includes(value) && search);
        setSearchedNotes(filterData);
};

    return { handleSearch, searchedNotes, archiveData };

}

export default useSearch;