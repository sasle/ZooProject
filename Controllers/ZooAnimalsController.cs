using Microsoft.AspNetCore.Mvc;
using ZooProject.Models;
using ZooProject.Services;

namespace ZooProject.Controllers
{
  [ApiController]
  [Route("animals")]
  public class ZooAnimalsController : ControllerBase
  {
    private readonly ZooAnimalsService _zooAnimalsService;

    public ZooAnimalsController(ZooAnimalsService zooAnimalsService)
    {
      _zooAnimalsService = zooAnimalsService;
    }

    [HttpGet]
    public IEnumerable<ZooAnimal> Get()
    {
      IEnumerable<ZooAnimal> animals = _zooAnimalsService.Get();
      return animals;
    }
  }
}