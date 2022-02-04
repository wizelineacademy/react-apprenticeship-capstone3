import { useContext } from 'react';
import { Context, actions } from '../../context';
const useDeleteNote = () => {
    const { dispatch } = useContext(Context);

    const handleDeleteNote = (id) => {
        dispatch(actions.deleteNotesOfArchive(id));
    };

    return { handleDeleteNote };

}

export default useDeleteNote;