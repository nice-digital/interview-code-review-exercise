using StemmingFrequency.Core;
using Xunit;

namespace StemmingFrequency.Tests
{
    public class GetStemWordFrequencyTests
    {
        private const string EmptyString = "          ";

        public const string DefaultInputString = @"Friends are friendlier friendlies that are friendly 
                                            and classify the friendly classification class. 
                                            Flowery flowers flow through following the flower flows.";

        [Fact]
        public void GetWordCount_HappyPath()
        {
            var stemWordFrequency = new GetStemWordFrequency();
            
            var expectedCounts = new Dictionary<string, int>()
            {
                {"following",1 },
                {"flow",2 },
                {"classification",3 },
                {"class",3 },
                {"flower",3 },
                {"friend",5 },
                {"friendly",5 },
                {"classes",3 }
            };

            stemWordFrequency.Run(DefaultInputString);

            foreach (var expected in expectedCounts)
            {
                Assert.Equal(expected.Value, stemWordFrequency.Count(expected.Key));
            }
        }


        [Fact]
        public void GetWordCount_Empty()
        {
            var stemWordFrequency = new GetStemWordFrequency();
            stemWordFrequency.Run(EmptyString);
            Assert.Equal(0, stemWordFrequency.Count("flow"));
        }

    }
}