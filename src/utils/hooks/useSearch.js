import { useContext } from 'react';
import { Context, actions } from '../../context';

const useSearch = () => {
    const { state, dispatch } = useContext(Context);
    const handleSearchedText = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const filterData = state.archive.filter(search => search.content.includes(value) && search);
        dispatch(actions.changeSearchText(value));
        return filterData;
    };

    return { handleSearchedText };

}

export default useSearch;