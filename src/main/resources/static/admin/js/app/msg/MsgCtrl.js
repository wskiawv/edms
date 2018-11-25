app.controller('MsgInstanceCtrl', ['$scope', '$modalInstance', 'msg', function($scope, $modalInstance, msg) {
    $scope.msg = msg;
    $scope.title=(angular.isDefined(msg.title)) ? msg.title : "温馨提示";
    $scope.content=(angular.isDefined(msg.content)) ? msg.content : "对话框内容！";
    $scope.selected = {
      item: $scope.msg[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.msg);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]); 
app.controller('AlertCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
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
app.controller('ConfirmCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
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