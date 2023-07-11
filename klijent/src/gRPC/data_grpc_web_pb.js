/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.4
// source: data.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./data_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DataServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DataServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.None,
 *   !proto.Data>}
 */
const methodDescriptor_DataService_GetAll = new grpc.web.MethodDescriptor(
  '/DataService/GetAll',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.None,
  proto.Data,
  /**
   * @param {!proto.None} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Data.deserializeBinary
);


/**
 * @param {!proto.None} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Data>}
 *     The XHR Node Readable Stream
 */
proto.DataServiceClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/DataService/GetAll',
      request,
      metadata || {},
      methodDescriptor_DataService_GetAll);
};


/**
 * @param {!proto.None} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Data>}
 *     The XHR Node Readable Stream
 */
proto.DataServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/DataService/GetAll',
      request,
      metadata || {},
      methodDescriptor_DataService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DataId,
 *   !proto.Data>}
 */
const methodDescriptor_DataService_GetById = new grpc.web.MethodDescriptor(
  '/DataService/GetById',
  grpc.web.MethodType.UNARY,
  proto.DataId,
  proto.Data,
  /**
   * @param {!proto.DataId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Data.deserializeBinary
);


/**
 * @param {!proto.DataId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Data)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Data>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataService/GetById',
      request,
      metadata || {},
      methodDescriptor_DataService_GetById,
      callback);
};


/**
 * @param {!proto.DataId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Data>}
 *     Promise that resolves to the response
 */
proto.DataServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataService/GetById',
      request,
      metadata || {},
      methodDescriptor_DataService_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Data,
 *   !proto.Data>}
 */
const methodDescriptor_DataService_AddData = new grpc.web.MethodDescriptor(
  '/DataService/AddData',
  grpc.web.MethodType.UNARY,
  proto.Data,
  proto.Data,
  /**
   * @param {!proto.Data} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Data.deserializeBinary
);


/**
 * @param {!proto.Data} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Data)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Data>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataServiceClient.prototype.addData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataService/AddData',
      request,
      metadata || {},
      methodDescriptor_DataService_AddData,
      callback);
};


/**
 * @param {!proto.Data} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Data>}
 *     Promise that resolves to the response
 */
proto.DataServicePromiseClient.prototype.addData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataService/AddData',
      request,
      metadata || {},
      methodDescriptor_DataService_AddData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Data,
 *   !proto.Data>}
 */
const methodDescriptor_DataService_UpdateData = new grpc.web.MethodDescriptor(
  '/DataService/UpdateData',
  grpc.web.MethodType.UNARY,
  proto.Data,
  proto.Data,
  /**
   * @param {!proto.Data} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Data.deserializeBinary
);


/**
 * @param {!proto.Data} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Data)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Data>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataServiceClient.prototype.updateData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataService/UpdateData',
      request,
      metadata || {},
      methodDescriptor_DataService_UpdateData,
      callback);
};


/**
 * @param {!proto.Data} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Data>}
 *     Promise that resolves to the response
 */
proto.DataServicePromiseClient.prototype.updateData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataService/UpdateData',
      request,
      metadata || {},
      methodDescriptor_DataService_UpdateData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DataId,
 *   !proto.None>}
 */
const methodDescriptor_DataService_DeleteData = new grpc.web.MethodDescriptor(
  '/DataService/DeleteData',
  grpc.web.MethodType.UNARY,
  proto.DataId,
  proto.None,
  /**
   * @param {!proto.DataId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.None.deserializeBinary
);


/**
 * @param {!proto.DataId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.None)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.None>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataServiceClient.prototype.deleteData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataService/DeleteData',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteData,
      callback);
};


/**
 * @param {!proto.DataId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.None>}
 *     Promise that resolves to the response
 */
proto.DataServicePromiseClient.prototype.deleteData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataService/DeleteData',
      request,
      metadata || {},
      methodDescriptor_DataService_DeleteData);
};


module.exports = proto;
