import React, { useMemo } from 'react';
import './Simple.css';

type BulletedProps = {
    elements: React.ReactNode[];
}

function Bulleted(props: BulletedProps) {

    const { elements } = props;

    const bulletedChildren = useMemo(() => {
        const arr: React.ReactNode[] = [];
        const len = elements.length;
        var i = 0;
        elements.forEach((elem) => {
            i = i + 1;
            arr.push(elem);
            if (i !== len) {
                arr.push(<>&nbsp;&bull;&nbsp;</>);
            }
        });
        return arr;    
    }, [elements]);

    return <>{...bulletedChildren}</>;
};

export { Bulleted };