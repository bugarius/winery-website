import React, {Ref, useCallback, useContext, useEffect, useMemo, useReducer} from 'react';

interface ScrollContextInterface
{
    refs: RefObject;
    scrollToRef: (ref: Ref<any>) => void;
    scrollToTop: () => void;
    currentRef: Ref<any>;
    activeRef: Ref<any>;
    showElementsOnScroll: boolean;
}

interface RefObject
{
    contact: Ref<any>;
    home: Ref<any>;
    aboutUs: Ref<any>;
    aboutPlace: Ref<any>;
    wines: Ref<any>;
}

const defaultState: ScrollContextInterface = {
    refs: {
        contact: React.createRef(),
        home: React.createRef(),
        aboutUs: React.createRef(),
        aboutPlace: React.createRef(),
        wines: React.createRef()
    },
    scrollToRef: () => {
    },
    scrollToTop: () => {
    },
    currentRef: React.createRef(),
    activeRef: React.createRef(),
    showElementsOnScroll: false
};

const reducer = (state: any, action: any) => {
    switch (action.type)
    {
        case "contact":
            return {...state, elementRef: state.refs.contact};
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
        console.log("scrolling to current", state.currentRef)
        state.currentRef?.current?.scrollIntoView({behavior: 'smooth'})
    }, [state.currentRef])

    useEffect(() => {
        console.log("####SCROLLING####")
        const setShowElementsOnScroll = () => {
            window.scrollY > 250 ?
            dispatch({type: "showElementsOnScroll", value: true})
                :
            dispatch({type: "showElementsOnScroll", value: false});
        }

        if (state.currentRef !== null)
        {
            dispatch({type: "currentRef", value: null})
        }

        window.addEventListener("scroll", () => setShowElementsOnScroll());
        return window.removeEventListener("scroll", () => setShowElementsOnScroll());
    }, [state.showElementsOnScroll, state.currentRef])

    const scrollToRef = useCallback((ref: any) => {
        dispatch({type: "currentRef", value: ref})
        dispatch({type: "activeRef", value: ref})
    }, []);

    const scrollToTop = useCallback(() => {
        dispatch({type: "currentRef", value: null})
        dispatch({type: "activeRef", value: null})
        window.scrollTo({behavior: 'smooth', top: 0})
    }, []);

    const providerValue = useMemo(() => ({
        refs: state.refs,
        scrollToRef,
        scrollToTop,
        currentRef: state.currentRef,
        activeRef: state.activeRef,
        showElementsOnScroll: state.showElementsOnScroll
    }), [state.refs, scrollToRef, scrollToTop, state.currentRef, state.activeRef, state.showElementsOnScroll]);

    return (
        <ScrollContext.Provider value={providerValue}>
            {children}
        </ScrollContext.Provider>
    )
};

export default ScrollProvider;