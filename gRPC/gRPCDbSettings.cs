namespace Models
{
    public class gRPCDbSettings
    {
        public string ConnectionString { get; set; }=string.Empty;
        public string DatabaseName { get; set; }=string.Empty;
        public string ModelsCollectionName { get; set; }=string.Empty;
    }
}