import { useEffect, useState } from 'react';
import { AxiosCreateNote, AxiosEditNote } from '../_config/axiosRequests';
import { Button, Modal, InputGroup, Form, FormControl } from 'react-bootstrap';

export const NewNoteModal = () => {
	const [newNote, setNewNote] = useState('');

	return (
		<Form
			className="new-note_modal"
			onSubmit={e => {
				e.preventDefault();
			}}
		>
			<input
				className="edit"
				value={newNote}
				onChange={e => setNewNote(e.target.value)}
				type="text"
			/>
			<Button
				onClick={() => {
					AxiosCreateNote({ value: newNote });
					setNewNote('');
				}}
			>
				CreateNote
			</Button>
		</Form>
	);
};

export const EditNoteModal = ({ note }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button onClick={handleShow} className="btn btn-warning">
				Edit
			</Button>
			<NoteModal note={note} show={show} handleClose={handleClose} />
		</div>
	);
};

const NoteModal = ({ note, show, handleClose }) => {
	const [modalNote, setModalNote] = useState();

	useEffect(() => {
		setModalNote(note.value);
	}, []);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Form onSubmit={e => e.preventDefault()}>
				<Modal.Body>
					<InputGroup>
						<FormControl
							value={modalNote === null ? '' : modalNote}
							onChange={e => {
								setModalNote(e.target.value);
							}}
						/>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							handleClose();
							AxiosEditNote({ id: note.id, value: modalNote });
						}}
					>
						Save
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};
