using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Models
{
    public class Model
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public int Age { get; set; }
        public int SystolicBP { get; set; }
        public int DiastolicBP { get; set; }
        [BsonRepresentation(MongoDB.Bson.BsonType.Decimal128, AllowTruncation=true)]
        public float BS { get; set; }
        [BsonRepresentation(MongoDB.Bson.BsonType.Int32, AllowTruncation=true)]
        public int BodyTemp { get; set; }
        public int HeartRate { get; set; }
        public string RiskLevel { get; set; } 
        public int __v { get; set; } 

    }
}