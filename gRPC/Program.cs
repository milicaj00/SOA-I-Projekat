using gRPC.Services;
using Models;
using DataAccess;
using Grpc.AspNetCore.Web;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.Configure<gRPCDbSettings>(builder.Configuration.GetSection("gRPCDbSettings"));
builder.Services.AddSingleton<SensorDataAccess>();
builder.Services.AddGrpc();
builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader()
               .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
    }));
builder.Services.AddAutoMapper(typeof(Program)); 
var app = builder.Build();

// Configure the HTTP request pipeline
app.UseRouting();

app.UseGrpcWeb();
app.UseCors();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<GreeterService>().EnableGrpcWeb()
                                              .RequireCors("AllowAll");
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<DataServiceController>().EnableGrpcWeb()
                                              .RequireCors("AllowAll");
});
//app.MapGrpcService<DataServiceController>().RequireCors("AllowAll");;
//app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
