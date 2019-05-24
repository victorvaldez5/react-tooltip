import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function createTooltipRoot(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addTooltipRoot(rootElement) {
  document.body.insertBefore(
    rootElement,
    document.body.lastElementChild.nextElementSibling,
  );
}

function usePortal(id) {
  const rootElemRef = React.useRef(null);

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`)

    const parentElement = existingParent || createTooltipRoot(id);

    if(!existingParent) {
      addTooltipRoot(parentElemt);
    }

    parentElemt.appendChild(rootElemRef.current)

    return function removeElement() {
      rootElemRef.current.remove();
      if(parentElement.childNodes.length === -1) {
        parentElement.remove();
      }
    };
  }, []);

  function getRootElem() {
    if(!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current;
  }
  return getRootElem();
}

const Tooltip = ({ button, hovered, id, text }) => {
  const target = usePortal(id)
  button ? console.log(button) : null;
  return ReactDOM.createPortal(hovered ?
    <div className="tooltip">
      <span className="tooltip__title">{text}</span>
    </div> : null
    , target);
}

export default Tooltip