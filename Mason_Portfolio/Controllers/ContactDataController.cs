using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mason_Portfolio.Data;
using Mason_Portfolio.Models;

namespace Mason_Portfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactDataController : ControllerBase
    {
        private readonly Mason_PortfolioContext _context;

        public ContactDataController(Mason_PortfolioContext context)
        {
            _context = context;
        }

        // GET: api/ContactData
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactData>>> GetContactData()
        {
          if (_context.ContactData == null)
          {
              return NotFound();
          }
            return await _context.ContactData.ToListAsync();
        }

        // GET: api/ContactData/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactData>> GetContactData(int id)
        {
          if (_context.ContactData == null)
          {
              return NotFound();
          }
            var contactData = await _context.ContactData.FindAsync(id);

            if (contactData == null)
            {
                return NotFound();
            }

            return contactData;
        }

        // PUT: api/ContactData/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactData(int id, ContactData contactData)
        {
            if (id != contactData.id)
            {
                return BadRequest();
            }

            _context.Entry(contactData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ContactData
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContactData>> PostContactData(ContactData contactData)
        {
          if (_context.ContactData == null)
          {
              return Problem("Entity set 'Mason_PortfolioContext.ContactData'  is null.");
          }
            _context.ContactData.Add(contactData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactData", new { id = contactData.id }, contactData);
        }

        // DELETE: api/ContactData/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactData(int id)
        {
            if (_context.ContactData == null)
            {
                return NotFound();
            }
            var contactData = await _context.ContactData.FindAsync(id);
            if (contactData == null)
            {
                return NotFound();
            }

            _context.ContactData.Remove(contactData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactDataExists(int id)
        {
            return (_context.ContactData?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
