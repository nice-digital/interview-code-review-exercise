using System.Collections.Generic;
using System.Linq;

namespace StemmingFrequency.Core
{
    /// <summary>
    /// Contains logic for counting the frequency of the stem words.
    /// </summary>
    public class GetStemWordFrequency : IGetStemWordFrequency
    {
        #region PrivateMembers
        private readonly WordStemming _wordStemming;
        private Dictionary<string, int> _stemmedWordCount;


        #endregion PrivateMembers

        #region Constructor

        public GetStemWordFrequency()
        {
            _wordStemming = new WordStemming();
            _stemmedWordCount = new Dictionary<string, int>();
        }

        #endregion

        #region PublicMethods

        public void Run(string s)
        {
            var words = s.Split(',', ' ', '\t');
            _stemmedWordCount = words
                .Where(x => !string.IsNullOrEmpty(x))
                .Select(x => x.Trim())
                .Select(z => _wordStemming.GetStemmedWord(z))
                .GroupBy(x => x)
                .ToDictionary(x => x.Key, y => y.Count());
        }

        //public void Run(string s)
        //{
        //    var words = s.Split(',', ' ', '\t');
        //    _stemmedWordCount = words
        //        .Where(x => !string.IsNullOrEmpty(x))
        //        .Select(z => _wordStemming.GetStemmedWord(z))
        //        .GroupBy(x => x)
        //        .ToDictionary(x => x.Key, y => y.Count());
        //}

        public int Count(string w)
        {
            var stemmedWord = _wordStemming.GetStemmedWord(w);
            var count = 0;
            try
            {
                count = _stemmedWordCount[stemmedWord];
            }
            catch { }

            return count;
        }
        #endregion

    }
}