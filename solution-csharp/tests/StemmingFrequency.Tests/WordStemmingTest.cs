using StemmingFrequency.Core;
using Xunit;


namespace StemmingFrequency.Tests
{
    public class WordStemmingTest
    {
        private readonly WordStemming _wordStemming = new WordStemming();
     
        [Theory]
        [InlineData("friends", "friend")]
        [InlineData("friendlies", "friend")] 
        [InlineData("classification", "class")]      
        [InlineData("class", "class")]     
        [InlineData("flowers", "flower")]

        public void GetStemmedWord(string word, string stemmedWord)
        {
            var actual = _wordStemming.GetStemmedWord(word);

            Assert.Equal(actual, stemmedWord);
        }

    }
}