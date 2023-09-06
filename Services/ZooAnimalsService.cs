using ZooProject.Models;

namespace ZooProject.Services
{
  public interface IZooAnimalsService { IEnumerable<ZooAnimal> Get(); }

  public class ZooAnimalsService : IZooAnimalsService
  {
    private static readonly List<ZooAnimal> animals = new();

    public IEnumerable<ZooAnimal> Get()
    {
      animals.Add(new ZooAnimal { ID = 1, Name = "Tiger" });
      animals.Add(new ZooAnimal { ID = 2, Name = "Lion" });
      animals.Add(new ZooAnimal { ID = 3, Name = "Bear" });
      animals.Add(new ZooAnimal { ID = 4, Name = "Elephant" });
      animals.Add(new ZooAnimal { ID = 5, Name = "Shark" });
      return animals;
    }
  }
}
