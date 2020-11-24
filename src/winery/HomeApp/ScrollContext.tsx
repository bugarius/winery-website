import React, {Ref, useCallback, useContext, useEffect, useMemo, useReducer} from 'react';

interface ScrollContextInterface
{
    refs: RefObject;
    scrollToRef: (ref: Ref<any>) => void;
    currentRef: Ref<any>;
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
    },
    currentRef: React.createRef()
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

    useEffect(() => {
        state.currentRef?.current?.scrollIntoView({behavior: 'smooth'})
    }, [state])

    const scrollToRef = useCallback((ref: any) => {
        dispatch({type: "currentRef", value: ref})
    }, []);

    const providerValue = useMemo(() => ({
        refs: state.refs,
        scrollToRef,
        currentRef: state.currentRef
    }), [state.refs, scrollToRef, state.currentRef]);

    return (
        <ScrollContext.Provider value={providerValue}>
            {children}
        </ScrollContext.Provider>
    )
};

export default ScrollProvider;