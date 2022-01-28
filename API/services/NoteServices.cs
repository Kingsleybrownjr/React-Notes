using API.Data;
using API.interfaces;
using API.Models;

namespace API.services;

public class NoteServices : INoteServices
{
    private readonly DataContext _context;
    public NoteServices(DataContext context)
    {
        _context = context;
    }

    public Note CreateNote(Note note)
    {
        _context.Add(note);
        _context.SaveChanges();
        return note;
    }

    public void DeleteNote(int id)
    {
        var note =_context.Notes.First(note => note.Id == id);
        _context.Notes.Remove(note);
        _context.SaveChanges();
    }

    public void EditNote(Note note)
    {
        var editedNote = _context.Notes.First(n => n.Id == note.Id);
        editedNote.Value = note.Value;
        _context.SaveChanges();
    }

    public Note GetNote(int id)
    {
        return _context.Notes.First(note => note.Id == id);
    }

    public ICollection<Note> GetNotes()
    {
        return _context.Notes.ToList();
    }
}
