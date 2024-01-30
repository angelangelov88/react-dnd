import React from 'react';
import { Rnd } from 'react-rnd';

const RncComp = () => {
	const fields = [
		{
			id: '1',
			width: 20,
			height: 20,
			type: 'checkbox',
			x: 150,
			y: 50,
			value:'✔',
		},
		{
			id: '2',
			width: 150,
			height: 20,
			type: 'signature',
			x: 250,
			y: 100,
			value:'2',
		},
		{
			id: '3',
			width: 200,
			height: 20,
			type: 'text',
			x: 350,
			y: 150,
			value:'longText',
		}
	];

	return ( 
		<>
			<div className='h-64'>
				<h3>Draggable and resizable fields using react-rnc</h3>
				{fields.map((field) => (
					<Rnd
						key={field.id}
						default={{
							x: field?.x,
							y: field?.y,
							width: field?.width,
							height: field?.height,
						}}
						className='bg-green-200 '
						resizeHandleStyles={{
							bottomRight: {
								backgroundColor: 'white',
								border: '1px solid #ddd',
								width: '10px',
								height: '10px',
								bottom: '-4px',
								right: '-4px',
							}
						}}
						enableResizing={{
							bottom: false,
							bottomLeft: false,
							bottomRight: true,
							left: false,
							right: false,
							top: false,
							topLeft: false,
							topRight: false,
						}}

					>
						{field?.value}
					</Rnd>
				))}
			</div>
		</>
	);
};
 
export default RncComp;