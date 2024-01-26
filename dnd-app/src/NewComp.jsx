import React from "react";
import "./index.css";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import the styles for the resizable component

const NewComp = () => {
	const onResize = (event, { size }) => {
		console.log("New size:", size);
	};

	return (
		<div>
			<button 
				onClick={() => console.log("clicked")}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						console.log("enter");
					}
				}}
			>
				<ResizableBox
					width={200}
					height={200}
					onResize={onResize}
					draggableOpts={{ grid: [25, 25] }}
					// minConstraints={[10, 10]}
					// maxConstraints={[300, 300]}
					lockAspectRatio={false}
					axis="both"
					className='m-10 bg-emerald-200'
				>
					{/* <div 
      className='p-5 bg-emerald-200'
      style={{ 
        // border: '1px solid #ddd', padding: '10px', boxSizing: 'border-box' 
        }}> */}
        v
					{/* </div> */}
				</ResizableBox>
			</button>

		</div>
	);
};

export default NewComp;
