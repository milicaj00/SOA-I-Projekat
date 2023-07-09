using System.Reflection;
using System.Security.Principal;
using System.Runtime.InteropServices;
using System.ComponentModel;
using System.Text.RegularExpressions;
using Models;
using AutoMapper;
using gRPC;
public class DataProfile : Profile 
{
    public DataProfile()
    {
        // CreateMap<Models.Model,gRPC.Data>()
        // .ForMember(dest=>dest.v, opt=>opt.MapFrom(src =>src.__v) );
    }
}