import React from 'react';
import './index.css';
import { Resizable } from 're-resizable';

const ResizableComp = () => {

	return (
		<div className="border border-red-50">
			<h3>Resizable div using re-resizable</h3>
			<button 
				onClick={() => console.log('clicked')}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						console.log('enter');
					}
				}}
			>
				<Resizable
					defaultSize={{
						width: 20,
						height: 20,
					}}
					handleStyles={{
						bottomRight: { backgroundColor: 'white', border: '1px solid orange', width: '8px', height: '8px', bottom: '-3px', right: '-3px'},
					}}
					enable={{
						top: false,
						right: false,
						bottom: false,
						left: false,
						topRight: false,
						bottomRight: true,
						bottomLeft: false,
						topLeft: false,
					}}
					className="ml-32 mr-10 my-10 bg-emerald-100 absolute"
				>
v
				</Resizable>

			</button>
		</div>
	);
};

export default ResizableComp;
