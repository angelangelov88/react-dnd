import React from 'react';
import classNames from 'classnames';

const WebkitResizer = () => {
	const isWebKit =
	/WebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
	const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

	console.log('isChrome', isChrome);

	return ( 
		<>
			<h3>Native WebkitResizer</h3>
			<div className={classNames(
				'mt-8 ml-8 bg-blue-100 w-32 h-32 ',
				isWebKit ? 'resize-none' : 'resize overflow-auto',
				isChrome && 'border-4 border-cyan-600',
			)}
				// style={{
				// 	color: 'white',
				// 	'&::WebkitResizer': { background: 'black', },
				// 	WebkitResizer: {
				// 		border: '1px solid yellowgreen',
				// 		background: 'white'

				// 	}

				// }}
			>
dd			
			</div>
			<div 
				id="resizer"
				className='resize overflow-auto bg-emerald-300 m-20 w-20'
			>
dddd	
			</div>
		</>

	);
};
 
export default WebkitResizer;