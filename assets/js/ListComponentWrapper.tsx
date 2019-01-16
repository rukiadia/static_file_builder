import * as React from 'react';
import ListComponent from './ListComponent';

export default class ListComponentsWrapper extends React.Component {
    render() {
        const componentIds = [1, 2, 3, 4, 5, 6];

        return (
            <div className="components-wrapper">
                {componentIds.map((componentId, index) => {
                    return <ListComponent componentId={componentId} key={index} />
                })}
            </div>
        );
    }
}