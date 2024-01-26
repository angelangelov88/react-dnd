import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";
import NewComp from "./NewComp";

function App() {
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<Container />
			</DndProvider>
			<NewComp />
		</div>
	);
}

export default App;
