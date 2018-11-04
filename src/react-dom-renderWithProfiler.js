import React from "react";
import ReactDOM from "react-dom";

function renderApp(elements, container) {
  ReactDOM.unmountComponentAtNode(container);
  ReactDOM.render(elements, container);
}

function renderAndWaitForProfiler(elements, container) {
  function WaitForProfiler() {
    return (
      <>
        <p>Waiting Profiler to attach...</p>
        <button onClick={() => renderApp(elements, container)}>Skip</button>
      </>
    );
  }

  ReactDOM.render(<WaitForProfiler />, container);
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    .waitForProfiler()
      .then(() => renderApp(elements, container), 0)
}

export function renderWithProfiler(elements, container) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    ? renderAndWaitForProfiler(elements, container)
    : renderApp(elements, container);
}

ReactDOM.renderWithProfiler = renderWithProfiler;

export default ReactDOM;