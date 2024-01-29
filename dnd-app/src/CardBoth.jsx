import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js';
import classNames from 'classnames';
import { Resizable } from 're-resizable';

const CardBoth = ({ id, name, index, roleType, moveCard }) => {
	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: ItemTypes.CARD,
		collect: (monitor) => {
			return {
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
				handlerId: monitor.getHandlerId(),
			};
		},
		hover: (item, monitor) => {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.CARD,
		item: () => ({ id, index }),
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(drop(ref));

	// console.log(index, name);
	return (
		<div className="flex gap-3 items-center">
			<div className="pl-4">
				{index + 1}
			</div>
			<div className="border border-red-50">
				<button 
					onClick={() => console.log('clicked')}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							console.log('enter');
						}
					}}
					ref={ref} 
					data-handler-id={handlerId}
				>
					<Resizable
						className={classNames(
							'w-56 border border-gray-900 mb-2 px-2 py-2 cursor-pointer',
							roleType === 'SIGNER' && 'bg-blue-400 text-blue-900',
							roleType === 'WITNESS' && 'bg-yellow-400 text-yellow-900',
							roleType === 'APPROVER' && 'bg-green-400 text-green-900',
							isDragging && 'opacity-30',
						)} 
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
					>
						{name}
					</Resizable>
				</button>
			</div>

			{/* <div ref={ref} className={classNames(
				'w-56 border border-gray-900 mb-2 px-2 py-2 cursor-pointer',
				roleType === 'SIGNER' && 'bg-blue-400 text-blue-900',
				roleType === 'WITNESS' && 'bg-yellow-400 text-yellow-900',
				roleType === 'APPROVER' && 'bg-green-400 text-green-900',
				isDragging && 'opacity-30',
			)} data-handler-id={handlerId}>{name}</div>  */}
		</div>
	);
};

export default CardBoth;
export { CardBoth };