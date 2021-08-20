import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
		<span>
			<div style={{ overflowY: 'scroll', border: '1px solid black', height: '80vh'}}>
			{props.children}
			</div>
		</span>
  );
};

export default Scroll;