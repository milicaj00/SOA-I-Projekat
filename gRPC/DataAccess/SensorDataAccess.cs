using Microsoft.Extensions.Options;
using Models;
using MongoDB.Driver;

namespace DataAccess
{
    public class SensorDataAccess
    {
        private readonly IMongoCollection<Model> _data;

        public SensorDataAccess(IOptions<gRPCDbSettings> options)
        {
            var client = new MongoClient("mongodb+srv://admin:admin@cluster0.n1veu7b.mongodb.net");
            _data=client.GetDatabase("test")
                    .GetCollection<Model>("datas");
        }
        public async Task<List<Model>> GetAllAsync()
        {
            return await _data.Find(d => true).ToListAsync();
        }
        public async Task<Model> GetByIdAsync(string id)
        {
            return await _data.Find<Model>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task Add(Model m) =>
            await _data.InsertOneAsync(m);
        public async Task Update(string id, Model model)=>
            await _data.ReplaceOneAsync(m=>m.Id==id,model);
        public async Task Delete(string id) =>
            await _data.DeleteOneAsync(m=>m.Id == id);
    }
}