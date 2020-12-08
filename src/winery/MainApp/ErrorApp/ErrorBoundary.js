import React from "react";
import {withRouter} from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        this.props.history.push("/404")
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ErrorBoundary);