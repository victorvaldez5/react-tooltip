import React from 'react';
import Tooltip from './TooltipPortal';

const TooltipElement = () => {
  const buttonEl = React.useRef(null);
  const [ hovered, setHovered ] = React.useState(false)
  const [ elementPosition, setElementPosition ] = React.useState(buttonEl)

  const onHoverHandler = () => {
    setHovered(true)
    setElementPosition(buttonEl.current.getClientRects())
  }
  return (
    <div>
      <button ref={buttonEl}
        onMouseEnter={() => onHoverHandler()}
        onMouseLeave={() => setHovered(false)}
      >Hover me</button>
      <Tooltip button={elementPosition} hovered={hovered} id="root-tooltip" title="test" text="working" />

    </div>
  )
}

export default TooltipElement;