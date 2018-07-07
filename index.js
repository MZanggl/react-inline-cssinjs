import React from 'react';

//shamelessly copied from 
//https://stackoverflow.com/questions/32916786/react-children-map-recursively
const recursiveMap = (children, fn) => {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
            return child;
        }
        
        if (child.props.children) {
            child = React.cloneElement(child, {
                children: recursiveMap(child.props.children, fn)
            });
        }
        
        return fn(child);
    });
}

const generateClassNames = (generateClassNameFn, props) => {
    const {style, className} = props;
    const addClassName = generateClassNameFn(style);
    
    return className ? `${className} ${addClassName}` : addClassName;
}

export default ({ generateClassNameFn, children }) => {
    return recursiveMap(children, (element) => {
        //no need to clone if it doesn't have style props
        if (!element.props.hasOwnProperty('style')) return element;

        return React.cloneElement(element, {
            className: generateClassNames(generateClassNameFn, element.props),
            style: null,
        })
    });
}