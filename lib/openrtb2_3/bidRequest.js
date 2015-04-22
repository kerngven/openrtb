var Promise = require('bluebird'),
    AppBuilder = require('./app'),
    DeviceBuilder = require('./device'),
    ImpressionBuilder = require('./impression');

var BidRequest = function(timestamp, requestId, auctionType, impressions, app, device, user, ext){
  this.timestamp = timestamp;
  this.requestId = requestId;
  this.auctionType = auctionType;
  this.impressions = impressions;
  this.app = app;
  this.device = device;
  this.user = user;
  this.ext = ext;
};

var BidRequestBuilder = function(){};

BidRequestBuilder.prototype.timestamp = function(timestamp){
  this._timestamp = timestamp;
  return this;
};

BidRequestBuilder.prototype.requestId = function(requestId){
  this._requestId = requestId;
  return this;
};

BidRequestBuilder.prototype.auctionType = function(auctionType){
  this._auctionType = auctionType;
  return this;
};

BidRequestBuilder.prototype.impressions = function(impressions){
  this._impressions = impressions.map(function(imp){
    var builder = new ImpressionBuilder();
    return builder
      .id(imp.id)
      .bidfloor(imp.bidfloor)
      .tagid(imp.tagid)
      .build();
  });
  return this;
};

BidRequestBuilder.prototype.app = function(app){
  var builder = new AppBuilder();
  this._app = builder
              .storeurl(app.storeurl)
              .cat(app.cat)
              .id(app.id)
              .name(app.name)
              .publisher(app.publisher)
              .build();
  return this;
};

BidRequestBuilder.prototype.device = function(device){
  var builder = new DeviceBuilder();
  this._device = builder
              .connectiontype(device.connectiontype)
              .carrier(device.carrier)
              .ip(device.ip)
              .geo(device.geo)
              .language(device.language)
              .make(device.make)
              .model(device.model)
              .type(1) //Mobile/tablet
              .dnt(device.dnt)
              .os(device.os)
              .osv(device.osv)
              .didsha1(device.didsha1)
              .build();
  return this;
};

BidRequestBuilder.prototype.user = function(user){
  this._user = user;
  return this;
};

BidRequestBuilder.prototype.ext = function(ext){
  this._ext = ext;
  return this;
};

BidRequestBuilder.prototype.build = function() {
  return new Promise(function (resolve, reject) {
    if (!this._timestamp) {
      reject(new Error('BidRequest should have a timestamp'));
    } else if (!this._requestId){
      reject(new Error('BidRequest should have a requestId'));
    } else {
      resolve(new BidRequest(
        this._timestamp,
        this._requestId,
        this._auctionType,
        this._impressions,
        this._app,
        this._device,
        this._user,
        this._ext
      ));
    }
  }.bind(this));
};

module.exports = BidRequestBuilder;