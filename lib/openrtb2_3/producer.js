var RtbObject = require('../rtbObject'),
    PublisherBuilder = require('./publisher').builder;

var Producer = function(id, name, cat, domain, ext){
  this.id= id
  this.name= name
  this.cat= cat
  this.domain= domain
};

Producer.prototype = Object.create(RtbObject.prototype);

var ProducerBuilder = function(){};


ProducerBuilder.prototype.id= function(id){
  this._id= id;
  return this;
};

ProducerBuilder.prototype.name= function(name){
  this._name= name;
  return this;
};

ProducerBuilder.prototype.cat= function(cat){
  this._cat= cat;
  return this;
};

ProducerBuilder.prototype.domain= function(domain){
  this._domain= domain;
  return this;
};


ProducerBuilder.prototype.build = function() {
  return new Producer(this._id, this._name, this._cat, this._domain, this._ext);
};

module.exports = {
  object: Producer,
  builder: ProducerBuilder  
};