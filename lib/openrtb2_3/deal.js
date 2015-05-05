var RtbObject = require('../rtbObject');

var Deal = function(id, bidfloor, bidfloorcur, at, wseat, wadomain){
  this.id= id
  this.bidfloor= bidfloor
  this.bidfloorcur= bidfloorcur
  this.at= at
  this.wseat= wseat
  this.wadomain= wadomain
};

Deal.prototype = Object.create(RtbObject.prototype);

var DealBuilder = function(){};


DealBuilder.prototype.id= function(id){
  this._id= id;
  return this;
};

DealBuilder.prototype.bidfloor= function(bidfloor){
  this._bidfloor= bidfloor;
  return this;
};

DealBuilder.prototype.bidfloorcur= function(bidfloorcur){
  this._bidfloorcur= bidfloorcur;
  return this;
};

DealBuilder.prototype.at= function(at){
  this._at= at;
  return this;
};

DealBuilder.prototype.wseat= function(wseat){
  this._wseat= wseat;
  return this;
};

DealBuilder.prototype.wadomain= function(wadomain){
  this._wadomain= wadomain;
  return this;
};

DealBuilder.prototype.build = function() {
  return new Deal(this._id, this._bidfloor, this._bidfloorcur, this._at, this._wseat, this._wadomain);
};

module.exports = {
  object: Deal,
  builder: DealBuilder  
};