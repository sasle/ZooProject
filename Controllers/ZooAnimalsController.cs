using Microsoft.AspNetCore.Mvc;
using ZooProject.Models;

namespace ZooProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ZooAnimalsController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<ZooAnimalsController> _logger;

        public ZooAnimalsController(ILogger<ZooAnimalsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ZooAnimal> Get()
        {
            return null;
        }
    }
}