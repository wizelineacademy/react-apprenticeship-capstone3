import { useContext } from 'react';

import { Context } from '../../context';
const useDeleteNote = (notes) => {
    const { state, dispatch } = useContext(Context);

    const handleDeleteNote = (id) => {
        console.log('notes kooh', notes);
        console.log('id', id);
        const removedNoteArray = notes.filter((note) => note.id !== id);
        dispatch({
        type: 'DELETE_NOTE',
        payload: {
            ...state,
            archive: removedNoteArray,
        },
        });
        console.log('removedNoteArray', removedNoteArray);
    };

    return { handleDeleteNote };

}

export default useDeleteNote;