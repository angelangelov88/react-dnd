import React from 'react';
import { Rnd } from 'react-rnd';

const RncComp = () => {
	const fields = [
		{
			id: '1',
			width: 20,
			height: 20,
			type: 'checkbox',
			x: 0,
			y: 0,
			value:'✔',
		},
		{
			id: '2',
			width: 150,
			height: 20,
			type: 'signature',
			x: 150,
			y: 0,
			value:'2',
		},
		{
			id: '3',
			width: 200,
			height: 20,
			type: 'text',
			x: 300,
			y: 50,
			value:'longText',
		}
	];

	return ( 
		<div>
			{fields.map((field) => (
				<Rnd
					key={field.id}
					default={{
						x: field?.x,
						y: field?.y,
						width: field?.width,
						height: field?.height,
					}}
					className='bg-green-200'
				>
					{field?.value}
				</Rnd>
			))}
		</div>

	);
};
 
export default RncComp;