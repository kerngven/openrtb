var RtbObject = require('../rtbObject'),
    DealBuilder= require('./deal').builder;

var Pmp = function(private_auction, deals){
  this.private_auction = private_auction;
  this.deals = deals;  
};

Pmp.prototype = Object.create(RtbObject.prototype);

var PmpBuilder = function(){};

PmpBuilder.prototype.private_auction = function(private_auction){
  this._private_auction = private_auction;
  return this;
};

PmpBuilder.prototype.deals = function(deals){
  this._deals = deals.map(function(deal){
    var builder = new DealBuilder();

    builder
    .id(deal.id)
    .bidfloor(deal.bidfloor)
    .bidfloorcur(deal.bidfloorcur)
    .at(deal.at)
    .wseat(deal.wseat)
    .wadomain(deal.wadomain)

    return builder.build();
  });
  return this;
};

PmpBuilder.prototype.build = function() {
  return new Pmp(this._private_auction, this._deals);
};

module.exports = {
  object: Pmp,
  builder: PmpBuilder  
};