import logo from './logo.svg';
import './App.css';
import NotesTable from './components/NotesTable';
import { NewNoteModal } from './components/NotesModal';

const App = () => (
	<div className="App">
		<div>
			<NewNoteModal />
		</div>
		<div>
			<NotesTable />
		</div>
	</div>
);

export default App;
