import React from 'react';
import classes from "./MyButton.module.scss";

const MyButton = ({children, class1, ...props}) => {

    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;