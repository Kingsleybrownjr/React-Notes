using API.interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController : ControllerBase
{
    private readonly INoteServices _noteServices;
    public NotesController(INoteServices noteServices)
    {
        _noteServices = noteServices;
    }

    [HttpGet]
    public IActionResult GetNotes()
    {
        return Ok(_noteServices.GetNotes());
    }

    [HttpGet("{id}", Name = "GetNote")]
    public IActionResult GetNote(int id)
    {
        return Ok(_noteServices.GetNote(id));
    }

    [HttpPost]
    public IActionResult CreateNote(Note note)
    {
        var newNote = _noteServices.CreateNote(note);
        return CreatedAtRoute("GetNote", new { newNote.Id }, note);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteNote(int id)
    {
        _noteServices.DeleteNote(id);
        return Ok();
    }

    [HttpPut]
    public IActionResult EditNote([FromBody] Note note)
    {
        _noteServices.EditNote(note);
        return Ok();
    }
}
