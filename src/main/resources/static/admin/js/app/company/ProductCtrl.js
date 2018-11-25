app.controller('ProductAddEditCtrl', ['$scope','$http', '$modalInstance','toaster','model',function($scope,$http,$modalInstance,toaster,model) {
	$scope.toaster = {
	        type: 'success',
	        title: '温馨提示',
	        text: '保存成功'
	};
	$scope.product=model;
	$scope.format='yyyy-MM-dd';
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
	//保存
    $scope.save = function () {
    	var url=appPath+"/company/Products/save";
    	var params=$scope.product;
    	var id=params.id!=null&&params.id!=undefined&&params.id!=''?params.id:null;
        if(id!=null){
            url=appPath+"/company/Products/update";
        }
    	debugger;
    	$http.post(url,params).success(function(response){
			if(response.success){				
				toaster.pop($scope.toaster.type, $scope.toaster.title,response.msg);
				$modalInstance.close(response.success);
			}else{
				toaster.pop('error', $scope.toaster.title,response.msg);
			}
						
		});   	
    	
    };
    //重置
    $scope.reset = function(){
    	$scope.product={
    			name:'',
    			video:''
    	};
    };
    //取消
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
     $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };
    $scope.end_time_open=function($event){
        $event.preventDefault();
        $event.stopPropagation();
        $scope.end_time_opened = true;
    };
    $scope.register_date_open=function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.register_date_opened = true;
    };
    $scope.validity_date_open=function($event){
            $event.preventDefault();
            $event.stopPropagation();
            $scope.validity_date_opened = true;
    };
}]);
app.controller('ProductCtrl', ['$scope','$http','$modal','toaster','ngDialog',function($scope,$http,$modal,toaster,ngDialog) {
	//选中记录数组
	$scope.mySelections = [];
	$scope.filterOptions = {
	        filterText: "",
	        useExternalFilter: true
	    }; 
    $scope.allRow = 0;
    //分页配置
    $scope.pagingOptions = {
        pageSizes: [25, 50, 100],
        pageSize: 25,
        currentPage: 1
    };
	//新增保存
	$scope.add=function(){
		var url="";	
		var record={};
        var modalInstance = $modal.open({
            templateUrl: 'tpl/company/productModal.html',
            controller: 'ProductAddEditCtrl',
            size: 'lg',
            backdrop:'static',
            resolve: {
            	model: function () {
                    return record;
                }
            }
          });
          debugger;
          //返回值
          modalInstance.result.then(function (o) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
           // $scope.selected = selectedItem;
          }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
          });
	};
	//更新
	$scope.edit=function(){
		var url="";
		var records=$scope.mySelections;
		debugger;
		var len=records!=null?records.length:0;
		if(len==0){
			toaster.pop('error', "温馨提示","请选择一行编辑");			
			return;
		}else if(len>1){
			toaster.pop('error', "温馨提示","不能同时编辑多行，请选择一行编辑！");			
			return;
		}
		var record=records[0];
		var modalInstance = $modal.open({
            templateUrl: 'tpl/company/productModal.html',
            controller: 'ProductAddEditCtrl',
            size: 'lg',
            resolve: {
            	model: function () {
                return record;
              }
            }
          });
	      debugger;
		  //返回值	
          modalInstance.result.then(function (o) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
          }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
          });
	};
	//查看
    $scope.show=function(){
        var records=$scope.mySelections;
        debugger;
        var len=records!=null?records.length:0;
        if(len==0){
            toaster.pop('info', "温馨提示","请选择一行查看");
            return;
        }else if(len>1){
            toaster.pop('info', "温馨提示","不能同时查看多行，请选择一行查看！");
            return;
        }
        var record=records[0];
        var modalInstance = $modal.open({
            templateUrl: 'tpl/company/productModal.html',
            controller: 'ProductAddEditCtrl',
            size: 'lg',
            resolve: {
                model: function () {
                return record;
              }
            }
          });
          debugger;
          //返回值
          modalInstance.result.then(function (o) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
          }, function () {

          });
    };
	//删除
	$scope.remove=function(){
		var url=appPath+"/company/Products/delete";
		var records=$scope.mySelections;
		var len=records!=null?records.length:0;
		if(len==0){
			toaster.pop('error', "温馨提示","请选择需要删除的行！");			
			return;
		}
		var ids="";
        for(var i=0;i<len; i++){
            var o=records[i];
            var id=o.id;
            if(i==0){
                ids=id;
            }else{
                ids+=","+id;
            }
        }
        ngDialog.openConfirm({
            template: 'tpl/msg/confirm.html',
            className: 'ngdialog-theme-default',
            controller: function ($scope) {
                $scope.msg = {
                        "title":"温馨提示",
                        "content":"你确定要删除选择记录？"
                };
                $scope.ok = function () {
                    $scope.removeAjax(ids,url,$scope);
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                };
            },
            scope: $scope
        });
    };
    //删除请求处理方法
    $scope.removeAjax=function(ids,url,$scope){
        url=url+"?id="+ids;
        $http.get(url).success(function(response){
            if(response.success){
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
                toaster.pop('success','温馨提示',response.msg);
                $scope.closeThisDialog();
                $scope.mySelections=null;
                $scope.alert();
            }else{
                toaster.pop('error', "温馨提示",response.msg);
            }
        });
    }
    $scope.alert=function(){
        ngDialog.open({
            template: 'tpl/msg/alert.html',
            className: 'ngdialog-theme-default',
            controller: function ($scope) {
                $scope.msg = {
                        "title":"温馨提示",
                        "content":"删除成功！"
                };
                $scope.ok = function () {
                    $scope.closeThisDialog();
                };
            },
            scope: $scope
        });
    };
	
	//查询分页	
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            var url=appPath+"/company/Products/showList?pageSize="+pageSize+"&currentPage="+page;
            if (searchText) {                
                $http.get(url).success(function (response) {		
                	$scope.result = response.list;
        			$scope.totalPage = response.totalPage;
        			$scope.currentPage = response.currentPage;
        			$scope.allRow = response.allRow;		
        			$scope.pageSize = response.pageSize;                     
                });            
            } else {
                $http.get(url).success(function (response) {
                	$scope.result = response.list;
        			$scope.totalPage = response.totalPage;
        			$scope.currentPage = response.currentPage;
        			$scope.allRow = response.allRow;		
        			$scope.pageSize = response.pageSize;                     
                });
            }
        }, 100);
    };
	
    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
	
    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    
    
	//表格
	$scope.grid = {
        data: 'result',
        enablePaging: true,
        showFooter: true,
        multiSelect: true,
        enableColumnResize:true,
        showSelectionCheckbox: true,
        selectWithCheckboxOnly: false,
        checkboxHeaderTemplate:'<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="allSelected" ng-change="toggleSelectAll(allSelected)"/>',
        selectedItems: $scope.mySelections,
        totalServerItems: 'allRow',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions,
        i18n:'zh-cn',
        columnDefs: [{field:'id', displayName:'序号'},
                     {field:'name', displayName:'产品名称',width:100},
                     {field:'img', displayName:'产品图片',width:100},
                     {field:'video', displayName:'产品视频',width:100},
                     {field:'introduction', displayName:'产品介绍',width:100},
                     {field:'trialUrl', displayName:'试用网址',width:100},
                     {field:'deve_time', displayName:'开发日期',width:100},
                     {field:'end_time', displayName:'开发结束日期',width:120},
                     {field:'remarks', displayName:'备注',width:100},
                     {field:'register_date', displayName:'产品登记日期',width:120},
                     {field:'validity_date', displayName:'产品有效期',width:100},
                     {field:'copyrightImg', displayName:'著作权登记证书',width:120},
                     {field:'register_number', displayName:'登记编号',width:100},
                     {field:'price', displayName:'市场价格',width:100},
                     {field:'create_by', displayName:'创建人',width:100},
                     {field:'create_date', displayName:'创建时间',width:100},
                     {field:'update_by', displayName:'更新用户',width:100},
                     {field:'update_date', displayName:'更新时间',width:100}
                     ]
    };
}]);
