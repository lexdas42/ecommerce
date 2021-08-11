import React from 'react';

const MessageBox = (props) => {
    return (<div className="borderL">
        {props.children}
    </div>  );
}
 
export default MessageBox;