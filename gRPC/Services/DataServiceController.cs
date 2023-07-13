using System.Net;
using System.Net.Cache;
using System.Net.NetworkInformation;
using System.Data.Common;
using Grpc.Core;
using gRPC;
using DataAccess;
using AutoMapper;
using Models;
namespace gRPC.Services;

public class DataServiceController : DataService.DataServiceBase
{
    private readonly SensorDataAccess _data;
    private readonly IMapper _mapper;
    public DataServiceController(SensorDataAccess data, IMapper mapper)
    {
        _data = data;
        _mapper=mapper;
    }

    public override async Task<Data> GetById(DataId request, ServerCallContext context)
    {
        var d = await _data.GetByIdAsync(request.Id);
        
        if (d == null)
        {
        throw new RpcException(new Status(StatusCode.NotFound, "Data not found"));
        }

        return new Data{
            //Data = _mapper.Map<Model>(d)
            Id = d.Id,
            SystolicBP = d.SystolicBP,
            DiastolicBP = d.DiastolicBP,
            Age = d.Age,
            Bs = d.BS,
            RiskLevel = d.RiskLevel,
            HeartRate = d.HeartRate,
            V = d.__v,
            BodyTemp = d.BodyTemp
        };
    }
    public override async Task GetAll(None n, IServerStreamWriter<Data> response, ServerCallContext context)
    {
        var arr = await _data.GetAllAsync();
        foreach(var d in arr)
        {
            await  response.WriteAsync(new Data{
                Id = d.Id,
                SystolicBP = d.SystolicBP,
                DiastolicBP = d.DiastolicBP,
                Age = d.Age,
                Bs = d.BS,
                RiskLevel = d.RiskLevel,
                HeartRate = d.HeartRate,
                V = d.__v,
                BodyTemp = d.BodyTemp
            });
        }
    }
    public override async Task<Data> AddData(Data d, ServerCallContext context)
    {
        var newdata=new Model()
        {
            Id = d.Id,
            SystolicBP = d.SystolicBP,
            DiastolicBP = d.DiastolicBP,
            Age = d.Age,
            BS = d.Bs,
            RiskLevel = d.RiskLevel,
            HeartRate = d.HeartRate,
            __v = d.V,
            BodyTemp = d.BodyTemp
        };

        await _data.Add(newdata);
        var d2=await _data.GetByIdAsync(newdata.Id);

        return new Data{
            Id = d2.Id,
            SystolicBP = d2.SystolicBP,
            DiastolicBP = d2.DiastolicBP,
            Age = d2.Age,
            Bs = d2.BS,
            RiskLevel = d2.RiskLevel,
            HeartRate = d2.HeartRate,
            V = d2.__v,
            BodyTemp = d2.BodyTemp
        };
    }

    public override async Task<Data> UpdateData(Data d, ServerCallContext context)
    {
        var newdata=await _data.GetByIdAsync(d.Id);

        newdata.SystolicBP = d.SystolicBP;
        newdata.DiastolicBP = d.DiastolicBP;
        newdata.HeartRate = d.HeartRate;
        newdata.RiskLevel = d.RiskLevel;
        newdata.Age =d.Age;
        newdata.BS = d.Bs;
        newdata.BodyTemp = d.BodyTemp;

        await _data.Update(d.Id,newdata);
        var d2=await _data.GetByIdAsync(d.Id);

        return new Data{
            Id = d2.Id,
            SystolicBP = d2.SystolicBP,
            DiastolicBP = d2.DiastolicBP,
            Age = d2.Age,
            Bs = d2.BS,
            RiskLevel = d2.RiskLevel,
            HeartRate = d2.HeartRate,
            V = d2.__v,
            BodyTemp = d2.BodyTemp
        };
    }

    public override async Task<None> DeleteData (DataId request, ServerCallContext context)
    {
        await _data.Delete(request.Id);

        return new None {};
    }
}
