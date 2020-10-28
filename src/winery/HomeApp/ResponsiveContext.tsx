import React, {useCallback, useContext, useEffect, useMemo, useReducer} from 'react';

interface ResponsiveContextInterface
{
    isMobile: boolean;
    isMenuOpen: boolean;
    pageWidth: number,
    pageHeight: number,
    closeMenu: () => void;
    toggleOpenMenu: () => void;
    setIsMobile: (value: boolean) => void;
    setState: (name: string, value: any) => void;
    bodyClassNames: BodyClassNames,
    modifyBodyClassName: (value: BodyClassNames) => void;
}

export interface BodyClassNames
{
    common?: string;
    blogMode?: "blog_mode_home" | "blog_mode_page" | "blog_mode_shop" | null;
    type?: "is_single" | "is_stream blog_style_excerpt" | null;
    margins?: "remove_margins" | null;
    headerPosition?: "header_position_over" | "header_position_default";
    headerTitle?: "header_title_off" | "header_title_on";
    site?: "home page page-template-default" | "page page-template-default" | "single single-product woocommerce woocommerce-page",
    layout?: "desktop_layout" | "mobile_layout" | null
}

const bodyClassNames: BodyClassNames = {
    site: "home page page-template-default",
    common: "body_tag body_style_wide scheme_default sidebar_hide expand_content header_style_header-1 menu_style_side vc_responsive",
    blogMode: null,
    type: null,
    margins: null,
    headerPosition: "header_position_over",
    headerTitle: "header_title_off",
    layout: null
}

const defaultState = {
    pageWidth: window.innerWidth,
    pageHeight: window.innerHeight,
    isMobile: window.innerWidth < 960,
    isMenuOpen: false,
    closeMenu: () => {},
    toggleOpenMenu: () => {},
    setIsMobile: () => {},
    setState: () => {},
    bodyClassNames: bodyClassNames,
    modifyBodyClassName: () => {}
};

const reducer = (state: any, action: any) => {
  switch (action.type)
  {
      case "toggleOpenMenu":
          return {...state, isMenuOpen: !state.isMenuOpen};
      case "setIsMobile":
          return {...state, isMobile: action.value};
      case "closeMenu":
          return {...state, isMenuOpen: false};
      case "bodyClassNames":
          return {...state, bodyClassNames: {...state.bodyClassNames, [action.type]: action.value}};
      default:
          return {...state,  [action.type]: action.value};
  }
};

const ResponsiveContext = React.createContext<ResponsiveContextInterface>(defaultState);
export const useResponsiveContext = (): ResponsiveContextInterface => {
    return useContext(ResponsiveContext);
};

const ResponsiveProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    const modifyBodyClassName = useCallback((customClassNameConfig: BodyClassNames) => {
        const layout = state.isMobile ? "mobile_layout" : "desktop_layout";
        const classNameConfig = {...state.bodyClassNames, ...customClassNameConfig, layout: layout};
        const classNameString = Object.values(classNameConfig).join(" ");
        document.body.setAttribute("class", classNameString);
    }, [state.bodyClassNames, state.isMobile]);

    const toggleOpenMenu = useCallback(() => {
        dispatch({type: "toggleOpenMenu"});
    }, []);

    const closeMenu = useCallback(() => {
        dispatch({type: "closeMenu"});
    }, []);

    const setIsMobile = useCallback((isMobile: boolean) => {
        dispatch({type: "setIsMobile", value: isMobile});
    }, []);

    const setState = useCallback((name: string, value: boolean | string | number) => {
        dispatch({type: name, value});
    }, []);

    useEffect(() => {
        const updateDimensions = () => {
            setState("pageWidth", window.innerWidth)
            setState("pageHeight", window.innerHeight)
            setIsMobile(window.innerWidth < 960);
        };

        window.addEventListener("resize", () => updateDimensions());
        return window.removeEventListener("resize", () => updateDimensions());
    }, [setIsMobile, setState]);

    const providerValue = useMemo(() => ({
        isMobile: state.isMobile,
        isMenuOpen: state.isMenuOpen,
        pageWidth: state.pageWidth,
        pageHeight: state.pageHeight,
        closeMenu,
        toggleOpenMenu,
        setIsMobile,
        setState,
        bodyClassNames: state.bodyClassNames,
        modifyBodyClassName: modifyBodyClassName
    }), [state.isMobile, state.isMenuOpen, state.pageWidth, state.pageHeight, state.bodyClassNames, closeMenu, toggleOpenMenu, setIsMobile, setState, modifyBodyClassName]);

    return (
        <ResponsiveContext.Provider value={providerValue}>
            {children}
        </ResponsiveContext.Provider>
    )
};

export default ResponsiveProvider;