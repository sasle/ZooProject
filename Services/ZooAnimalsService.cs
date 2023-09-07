using ZooProject.Models;

namespace ZooProject.Services
{
  public interface IZooAnimalsService { List<ZooAnimal> Get(); }

  public class ZooAnimalsService : IZooAnimalsService
  {
    public List<ZooAnimal> Get()
    {
      List<ZooAnimal> animals = new()
      {
        new ZooAnimal { ID = 1, Name = "Lion" },
        new ZooAnimal { ID = 2, Name = "Bear" },
        new ZooAnimal { ID = 3, Name = "Shark" },
        new ZooAnimal { ID = 4, Name = "Elephant" },
        new ZooAnimal { ID = 5, Name = "Giraffe" },
      };
      return animals;
    }
  }
}
