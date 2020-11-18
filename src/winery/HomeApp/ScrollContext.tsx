import React, {Ref, useCallback, useContext, useMemo, useReducer, useRef} from 'react';

interface ScrollContextInterface
{
    refs: RefObject;
    scrollToRef: (ref: Ref<any>) => void;
}

interface RefObject
{
    contact: Ref<any>;
    home: Ref<any>;
    aboutUs: Ref<any>;
    aboutPlace: Ref<any>;
    wines: Ref<any>;
}

const defaultState = {
    refs: {
        contact: React.createRef(),
        home: React.createRef(),
        aboutUs: React.createRef(),
        aboutPlace: React.createRef(),
        wines: React.createRef()
    },
    scrollToRef: () => {
    }
};

const reducer = (state: any, action: any) => {
    switch (action.type)
    {
        case "contact":
            return {...state, elementRef: state.refs.contactRef};
        default:
            return {...state, [action.type]: action.value};
    }
};

const ScrollContext = React.createContext<ScrollContextInterface>(defaultState);
export const useScrollContext = (): ScrollContextInterface => {
    return useContext(ScrollContext);
};

const ScrollProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    const scrollToRef = useCallback((ref: any) => {
        console.log(state)
        ref?.current?.scrollIntoView({behavior: 'smooth'})
    }, [state]);

    console.log(state)
    const providerValue = useMemo(() => ({
        refs: state.refs,
        scrollToRef
    }), [state.refs, scrollToRef]);

    return (
        <ScrollContext.Provider value={providerValue}>
            {children}
        </ScrollContext.Provider>
    )
};

export default ScrollProvider;