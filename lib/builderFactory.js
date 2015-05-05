var BidRequestBuilder = require('./openrtb2_3/bidRequest').builder,
    BidResponseBuilder = require('./openrtb2_3/bidResponse').builder,
    SeatbidBuilder = require('./openrtb2_3/seatbid').builder,
    AppBuilder = require('./openrtb2_3/app').builder,
    DeviceBuilder = require('./openrtb2_3/device').builder,
    ImpBuilder = require('./openrtb2_3/imp').builder,
    PmpBuilder = require('./openrtb2_3/pmp').builder,
    SiteBuilder = require('./openrtb2_3/site').builder,
    DealBuilder = require('./openrtb2_3/deal').builder,
    NativeBuilder = require('./openrtb2_3/native').builder,
    BannerBuilder = require('./openrtb2_3/banner').builder,
    PublisherBuilder = require('./openrtb2_3/publisher').builder,
    UserBuilder = require('./openrtb2_3/user').builder,
    ProducerBuilder = require('./openrtb2_3/producer').builder,
    ContentBuilder = require('./openrtb2_3/content').builder,
    BidBuilder = require('./openrtb2_3/bid').builder;

var BuilderFactory = function(){};

BuilderFactory.prototype.getBuilder = function(options){
  options = options || {};
  options.openRtbVersion = options.openRtbVersion || '2.3';

  if (options.builderType === 'bidRequest') {
    return new BidRequestBuilder();
  } else if (options.builderType === 'bidResponse'){
    return new BidResponseBuilder();
  } else if (options.builderType === 'app'){
    return new AppBuilder();
  } else if (options.builderType === 'device'){
    return new DeviceBuilder();
  } else if (options.builderType === 'imp'){
    return new ImpBuilder();
  } else if (options.builderType === 'native'){
    return new NativeBuilder();
  } else if (options.builderType === 'banner'){
    return new BannerBuilder();
  } else if (options.builderType === 'user'){
    return new UserBuilder();
  } else if (options.builderType === 'publisher'){
    return new PublisherBuilder();
  } else if (options.builderType === 'seatbid'){
    return new SeatbidBuilder();
  } else if (options.builderType === 'bid') {
    return new BidBuilder();
  } else if (options.builderType === 'pmp') {
    return new PmpBuilder();
  } else if (options.builderType === 'site') {
    return new SiteBuilder();
  } else if (options.builderType === 'deal') {
    return new DealBuilder();
  } else if (options.builderType === 'content') {
    return new ContentBuilder();
  } else if (options.builderType === 'producer') {
    return new ProducerBuilder();
  } else {
    throw new Error('Unsupported builder');
  }
};

module.exports = BuilderFactory;