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
        new ZooAnimal { ID = 1, Name = "Lion", Description = "The lion, known as the King of the Jungle, is a majestic and powerful big cat native to Africa. With its golden mane and regal presence, the lion symbolizes strength and courage in the animal kingdom. These social creatures live in prides and are skilled hunters, making them both fearsome and awe-inspiring." },
        new ZooAnimal { ID = 2, Name = "Bear", Description = "Bears are large, furry mammals found in various habitats across the world, from forests to Arctic tundras. Known for their immense strength and distinctive hibernation behavior, bears are iconic symbols of the wild. They come in different species, including the grizzly bear and polar bear, each adapted to its unique environment." },
        new ZooAnimal { ID = 3, Name = "Shark", Description = "Sharks are sleek and formidable ocean predators, with their streamlined bodies and sharp teeth. These ancient creatures have inhabited the seas for millions of years, inspiring a mix of fascination and fear. Sharks play a crucial role in maintaining marine ecosystems and come in diverse species, from the gentle whale shark to the fierce great white shark." },
        new ZooAnimal { ID = 4, Name = "Elephant", Description = "Elephants are the gentle giants of the land, known for their enormous size, long trunks, and strong family bonds. These intelligent mammals roam the savannas and forests of Africa and Asia. Revered for their wisdom in some cultures and admired for their sheer size, elephants are vital to their ecosystems and face threats from habitat loss and poaching." },
        new ZooAnimal { ID = 5, Name = "Giraffe", Description = "Giraffes are the world's tallest land animals, instantly recognizable by their long necks and distinctive spotted coat patterns. Native to the African savannas, they are graceful herbivores that feed on leaves from tall trees. Giraffes exhibit a unique and captivating beauty as they tower over the landscape, making them a symbol of elegance and wonder in the natural world." },
      };
      return animals;
    }
  }
}
