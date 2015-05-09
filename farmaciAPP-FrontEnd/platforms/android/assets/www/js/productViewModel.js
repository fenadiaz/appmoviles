'use strict';

var ProductViewModel = function(){

  var self = this;

  //Domain data
  self.name = ko.observable('Manzana');
  self.price = ko.observable();
  self.productList = ko.observableArray();

  //Behaviour
  self.isEditMode = ko.observable(false);
  self.isCreateMode = ko.observable(false);

  self.isCreateAndEditVisible = ko.computed(function(){
    return self.isEditMode() || self.isCreateMode();
  }, self);

  self.isListVisible = ko.computed(function(){
    return !self.isEditMode() && !self.isCreateMode();
  }, self);

  self.isDeleteVisible = ko.computed(function(){
    return self.isEditMode();
  }, self);

  self.showList = function(){
    self.isCreateMode(false);
    self.isEditMode(false);
    self.getAll();
  };

  self.showCreate = function(){
    self.isCreateMode(true);
    self.isEditMode(false);
  };

  self.showEdit = function(){
    self.isCreateMode(false);
    self.isEditMode(true);
  };

  self.getAll = function(){
    var url = 'http://unabrestmobile-mreyesexamples.rhcloud.com/api/products/';

    $.ajax({

        url: 	url,
        type: 	'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data){
            console.log(data);
            self.productList(data);
        },
        error: function(xhr, type){
            console.error(xhr);
            console.error(type);
        }
    });

  };

  self.save = function(){
    alert('hello');
  };



};
