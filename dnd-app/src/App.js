import React from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { BothContainer } from './BothContainer';
// import ResizableComp from './ResizableComp';
// import { Container } from './Container';
// import RncComp from './RncComp';
// import WebkitResizer from './WebkitResizer';
import './index.css';
import StoryBlok from './StoryBlok';

function App() {
	return (
		<div className="App">
			{/* <DndProvider backend={HTML5Backend}>
				<Container />
				<BothContainer />
			</DndProvider>
			<ResizableComp />
			<RncComp />
			<WebkitResizer /> */}
			<StoryBlok />
		</div>
	);
}

export default App;
