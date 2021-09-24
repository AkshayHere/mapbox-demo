import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Component(props) {

    useEffect(() => {
    }, []);

    return (
        <React.Fragment>
            <div></div>
        </React.Fragment>
    );
}

const Base = Component;
export default Base;