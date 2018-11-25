
'use strict';
var app=angular.module('app',[]);
app.controller('MsgInstanceCtrl', ['$scope', '$modalInstance', 'msg', function($scope, $modalInstance, msg) {
    $scope.msg = msg;
    $scope.title=(angular.isDefined(msg.title)) ? msg.title : "温馨提示";
    $scope.content=(angular.isDefined(msg.content)) ? msg.content : "对话框内容！";


    $scope.ok = function () {
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
app.controller('AlertCtrl', ['$scope', '$modal', '$log','msg', function($scope, $modal, $log,msg) {
    $scope.msg = {
    		"title":"温馨提示",
    		"content":"你确定要删除选择数据？"
    }
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/msg/alert.html',
        controller: 'MsgInstanceCtrl',
        size: size,
        resolve: {
        	msg: function () {
            return $scope.msg;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
}]);
app.controller('ConfirmCtrl', ['$scope', '$modal', '$log','msg', function($scope, $modal, $log,msg) {
    $scope.msg = {
    		"title":"温馨提示",
    		"content":"你确定要删除选择数据？"
    }
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/msg/confirm.html',
        controller: 'MsgInstanceCtrl',
        size: size,
        resolve: {
        	msg: function () {
            return $scope.msg;
          }
        }
      });

      modalInstance.result.then(function (o) {
        $scope.selected = o;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
}]);
var message= angular.module('ui.message', []);
/*message.config(function($provide,$modal){
    $provide.provider('messageService', function() {
        this.$get = function() {
            return {
                alert:function(msg){
                    return $modal.open({
                           templateUrl: 'tpl/msg/alert.html',
                           controller: 'MsgInstanceCtrl',
                           size: 'lg',
                           backdrop:'static',
                           resolve: {
                               msg: function () {
                                   return msg;
                               }
                           }
                         });
                },
                confirm:function(msg){
                    return $modal.open({
                           templateUrl: 'tpl/msg/alert.html',
                           controller: 'MsgInstanceCtrl',
                           size: 'lg',
                           backdrop:'static',
                           resolve: {
                              msg: function () {
                                  return msg;
                              }
                          }
                        });
                }
            }
        };
    });
});*/
message.service('Message', ['$scope', '$modal', function ($scope,$modal) {

    /*this.alert= function(msg){
       return messageService.alert(msg);
    };
    this.confirm=function(msg){
        return messageService.confirm(msg);
    };*/
    var alert=function(msg){
        var modalInstance = $modal.open({
            templateUrl: 'tpl/msg/alert.html',
            controller: 'MsgInstanceCtrl',
            size: 'lg',
            backdrop:'static',
            resolve: {
                msg: function () {
                    return msg;
                }
            }
          });
          debugger;
          return modalInstance;
          //返回值
          //modalInstance.result.then(function (o) {
            //$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
           // $scope.selected = selectedItem;
         // }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
          //});
    };
    var confirm =function(msg){

    };

}]);
