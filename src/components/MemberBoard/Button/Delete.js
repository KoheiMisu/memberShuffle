import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

function DeleteButton({deleteMember, member}) {


    const handleDelete = () => {
        deleteMember(member);
    }

    return (
            <FlatButton
                icon={<ActionDelete />}
                hoverColor="#FFCDD2"
                rippleColor="#FF1744"
                onClick={handleDelete}
            />
    );
}

export {
    DeleteButton
};
