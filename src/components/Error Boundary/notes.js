import React from "react";

class ErrorBoundaryNotes extends React.Component{
  

    render(){
        return(<div>
            <h1>Error Boundary</h1>
            <p>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.</p>

            <p>
            A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch().

            </p>
            <p>
            getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.
            </p>

            <p>
            Note that error boundaries only catch errors in the components below them in the tree.
            </p>

            <p>Error boundaries do not catch errors inside event handlers.</p>
        </div>)
    }
}

export default ErrorBoundaryNotes;