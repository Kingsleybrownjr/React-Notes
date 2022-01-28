using API.Models;

namespace API.interfaces;

public interface INoteServices
{
    ICollection<Note> GetNotes();
    Note CreateNote(Note note);
    Note GetNote(int id);
    void EditNote(Note note);
    void DeleteNote(int id);
}
