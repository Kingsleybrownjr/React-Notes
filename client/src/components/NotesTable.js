import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { AxiosDeleteRequest, AxiosGetRequest } from '../_config/axiosRequests';
import { EditNoteModal } from './NotesModal';

const NotesTable = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		(async () => {
			setNotes(await AxiosGetRequest());
		})();
	}, [notes]);

	const retrieveNotes = () =>
		notes.map(note => (
			<>
				<tbody>
					<tr>
						<th style={{ padding: 0 }} scope="row">
							{note.id}
						</th>
						<td>{note.value}</td>
						<td style={{display: "flex", alignItems: "center"}}>
							<Button
								onClick={() => AxiosDeleteRequest(note.id)}
								className="btn btn-danger m-2"
							>Delete</Button>
							<EditNoteModal note={note} />
						</td>
					</tr>
				</tbody>
			</>
		));

	return (
		<table className="container table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Note</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			{retrieveNotes()}
		</table>
	);
};

export default NotesTable;
