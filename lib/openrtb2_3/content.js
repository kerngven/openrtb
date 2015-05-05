var RtbObject = require('../rtbObject'),
    ProducerBuilder = require('./producer').builder;

var Content = function(id, episode, title, series, season, producer, url, cat, videoquality, context, contentrating, userrating, qagmediarating, keywords, livestream, sourcerelationship, len, language, embeddable){
  this.id= id
  this.episode= episode
  this.title= title
  this.series= series
  this.season= season
  this.producer= producer
  this.url= url
  this.cat= cat
  this.videoquality= videoquality
  this.context= context
  this.contentrating= contentrating
  this.userrating= userrating
  this.qagmediarating= qagmediarating
  this.keywords= keywords
  this.livestream= livestream
  this.sourcerelationship= sourcerelationship
  this.len= len
  this.language= language
  this.embeddable= embeddable
};

Content.prototype = Object.create(RtbObject.prototype);

var ContentBuilder = function(){};



ContentBuilder.prototype.id= function(id){
  this._id= id;
  return this;
};

ContentBuilder.prototype.episode= function(episode){
  this._episode= episode;
  return this;
};

ContentBuilder.prototype.title= function(title){
  this._title= title;
  return this;
};

ContentBuilder.prototype.series= function(series){
  this._series= series;
  return this;
};

ContentBuilder.prototype.season= function(season){
  this._season= season;
  return this;
};

ContentBuilder.prototype.url= function(url){
  this._url= url;
  return this;
};

ContentBuilder.prototype.cat= function(cat){
  this._cat= cat;
  return this;
};

ContentBuilder.prototype.videoquality= function(videoquality){
  this._videoquality= videoquality;
  return this;
};

ContentBuilder.prototype.context= function(context){
  this._context= context;
  return this;
};

ContentBuilder.prototype.contentrating= function(contentrating){
  this._contentrating= contentrating;
  return this;
};

ContentBuilder.prototype.userrating= function(userrating){
  this._userrating= userrating;
  return this;
};

ContentBuilder.prototype.qagmediarating= function(qagmediarating){
  this._qagmediarating= qagmediarating;
  return this;
};

ContentBuilder.prototype.keywords= function(keywords){
  this._keywords= keywords;
  return this;
};

ContentBuilder.prototype.livestream= function(livestream){
  this._livestream= livestream;
  return this;
};

ContentBuilder.prototype.sourcerelationship= function(sourcerelationship){
  this._sourcerelationship= sourcerelationship;
  return this;
};

ContentBuilder.prototype.len= function(len){
  this._len= len;
  return this;
};

ContentBuilder.prototype.language= function(language){
  this._language= language;
  return this;
};

ContentBuilder.prototype.embeddable= function(embeddable){
  this._embeddable= embeddable;
  return this;
};

ContentBuilder.prototype.producer= function(producer){
  var builder = new ProducerBuilder();
  this._producer = builder
                    .id(producer.id)
                    .name(producer.name)
                    .cat(producer.cat)
                    .domain(producer.domain)
                    .build();
  return this;
};

ContentBuilder.prototype.build = function() {
  return new Content(this._id , this._episode , this._title , this._series , this._season , this._producer , this._url , this._cat , this._videoquality , this._context , this._contentrating , this._userrating , this._qagmediarating , this._keywords , this._livestream , this._sourcerelationship , this._len , this._language , this._embeddable);
};

module.exports = {
  object: Content,
  builder: ContentBuilder  
};