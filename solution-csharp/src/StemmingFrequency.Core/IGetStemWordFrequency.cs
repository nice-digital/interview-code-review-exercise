namespace StemmingFrequency.Core
{
    public interface IGetStemWordFrequency
    {
        int Count(string w);
        void Run(string s);
    }
}