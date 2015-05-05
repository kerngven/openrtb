var Promise = require('bluebird'),
    RtbObject = require('../rtbObject'),
    AppBuilder = require('./app').builder,
    SiteBuilder = require('./site').builder,
    UserBuilder = require('./user').builder,
    DeviceBuilder = require('./device').builder,
    ImpressionBuilder = require('./imp').builder;

var BidRequest = function(timestamp, id, at, imp, app, site, device, user, ext, test, tmax, wseat, cur, bcat, badv){
  this.timestamp = timestamp;
  this.id = id;
  this.at = at;
  this.imp = imp;
  this.app = app;
  this.site= site;
  this.device = device;
  this.user = user;
  this.ext = ext;
  this.test= test;
  this.tmax= tmax;
  this.wseat= wseat;
  this.cur= cur;
  this.bcat= bcat;
  this.badv= badv;
};

BidRequest.prototype = Object.create(RtbObject.prototype);

var BidRequestBuilder = function(){};

BidRequestBuilder.prototype.timestamp = function(timestamp){
  this._timestamp = timestamp;
  return this;
};

BidRequestBuilder.prototype.id = function(id){
  this._id = id;
  return this;
};

BidRequestBuilder.prototype.at = function(at){
  this._at = at;
  return this;
};

BidRequestBuilder.prototype.imp = function(imp){
  this._imp = imp.map(function(imp){
    var builder = new ImpressionBuilder();

    builder
    .id(imp.id)
    .bidfloor(imp.bidfloor)
    .tagid(imp.tagid)
    .pmp(imp.pmp);

    if (imp.banner){
      builder.banner(imp.banner);
    } else if (imp.native){
      builder.native(imp.native);      
    }

    return builder.build();
  });
  return this;
};

BidRequestBuilder.prototype.app = function(app){
  if(!app)
    return this;
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

BidRequestBuilder.prototype.site = function(site){
  if(!site)
    return this;
  var builder = new SiteBuilder();
  this._site = builder
              .id(site.id)
              .name(site.name)
              .domain(site.domain)
              .cat(site.cat)
              .sectioncat(site.sectioncat)
              .pagecat(site.pagecat)
              .page(site.page)
              .ref(site.ref)
              .search(site.search)
              .mobile(site.mobile)
              .privacypolicy(site.privacypolicy)
              .keywords(site.keywords)
              .content(site.content)
              .publisher(site.publisher)
              .build();
  return this;
};

BidRequestBuilder.prototype.device = function(device){
  if(!device)
    return this;
  var builder = new DeviceBuilder();
  this._device = builder
              .connectiontype(device.connectiontype)
              .carrier(device.carrier)
              .ip(device.ip)
              .geo(device.geo)
              .language(device.language)
              .make(device.make)
              .model(device.model)
              .devicetype(device.devicetype)
              .dnt(device.dnt)
              .os(device.os)
              .osv(device.osv)
              .didsha1(device.didsha1)
              .ua(device.ua)
              .build();
  return this;
};

BidRequestBuilder.prototype.user = function(user){
  if(!user)
    return this;
  var builder = new UserBuilder();
  this._user = builder
              .gender(user.gender)
              .id(user.id)
              .yob(user.yob)
              .build();
  return this;
};

BidRequestBuilder.prototype.ext = function(ext){
  this._ext = ext;
  return this;
};

BidRequestBuilder.prototype.test = function(test){
  this._test = test;
  return this;
};


BidRequestBuilder.prototype.tmax = function(tmax){
  this._tmax = tmax;
  return this;
};

BidRequestBuilder.prototype.wseat = function(wseat){
  this._wseat = wseat;
  return this;
};

BidRequestBuilder.prototype.cur = function(cur){
  this._cur = cur;
  return this;
};

BidRequestBuilder.prototype.bcat = function(bcat){
  this._bcat = bcat;
  return this;
};

BidRequestBuilder.prototype.badv = function(badv){
  this._badv = badv;
  return this;
};

BidRequestBuilder.prototype.build = function() {
  return new Promise(function (resolve, reject) {
    if (!this._id){
      reject(new Error('BidRequest should have an id'));
    } else {
      resolve(new BidRequest(
        this._timestamp || new Date().toISOString(),
        this._id,
        this._at,
        this._imp,
        this._app,
        this._site,
        this._device,
        this._user,
        this._ext,
        this._test,
        this._tmax,
        this._wseat,
        this._cur, 
        this._bcat,
        this._badv
      ));
    }
  }.bind(this));
};

module.exports = {
  object: BidRequest,
  builder: BidRequestBuilder  
};