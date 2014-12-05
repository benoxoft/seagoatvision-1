//var myApp = angular.module('myApp', ['ngDraggable']);
myApp.controller('callback', ['$scope', function($scope) {
    $scope.testt_cb = function(data, status) {
		console.log("HEEELLLLO!!!");
    };

    $scope.add_image_observer_cb = function(data, status) {

    };

    $scope.add_output_observer_cb = function(data, status) {

    };

    $scope.cmd_to_media_cb = function(data, status) {

    };

    $scope.cut_video_cb = function(data, status) {

    };

    $scope.delete_filterchain_cb = function(data, status) {

    };

    $scope.get_count_keys_cb = function(data, status) {

    };

    $scope.get_execution_info_cb = function(data, status) {
		var exec = $scope.executions.filter(function(obj){return obj.name === data.execution_name;})[0];
		exec.media_name = data.info.media_name;
		exec.chainFilter = {name : data.info.filterchain_name};
		$scope.get_filterchain_info(data.filterchain_name, $scope.get_filterchain_info_cb);
    };

    $scope.get_execution_list_cb = function(data, status) {
		for(k in data) {
			var exec = $scope.executions.filter(function(obj){return obj.name === k;})[0];
			if(typeof(exec) == 'undefined') {
				$scope.executions.push({name : k});
				$scope.get_execution_info(k, $scope.get_execution_info_cb);
			}
		}
    };

    $scope.get_default_media_name_cb = function(data, status) {

    };

    $scope.get_filter_list_cb = function(data, status) {
		filters = [];
		for(var k in data) {
			if(data.hasOwnProperty(k)) {
				filters.push({name : k, description : data[k]});
			}
		}
		console.log(filters);
		$scope.filters = filters;
    };

    $scope.get_filterchain_info_cb = function(data, status) {
		var fc = $scope.executions.filter(function(obj){return obj.chainFilter.name === data.filterchain_name;})[0];			
		fc.default_media = data.info.default_media;
		fc.filters = [];
		for(f in data.info.filters) {
			fc.filters.push({name : f.name, executionCode : '', workingCopy : '', language : 'c', feed : ''});
			
		}
			
    };

    $scope.get_filterchain_list_cb = function(data, status) {

    };

    $scope.get_fps_execution_cb = function(data, status) {

    };

    $scope.get_info_media_cb = function(data, status) {

    };

    $scope.get_lst_old_record_historic_cb = function(data, status) {

    };

    $scope.get_lst_record_historic_cb = function(data, status) {

    };

    $scope.get_media_list_cb = function(data, status) {

    };

    $scope.get_param_filterchain_cb = function(data, status) {

    };

    $scope.get_param_media_cb = function(data, status) {

    };

    $scope.get_params_filterchain_cb = function(data, status) {

    };

    $scope.get_params_media_cb = function(data, status) {

    };

    $scope.is_connected_cb = function(data, status) {

    };

    // TODO: PAS BON POUR CETTE METHODE!!!!!!
    $scope.modify_filterchain_cb = function(data, status) {

    };

    $scope.reload_filter_cb = function(data, status) {

    };

    $scope.remove_image_observer_cb = function(data, status) {

    };

    $scope.remove_output_observer_cb = function(data, status) {

    };

    $scope.reset_param_cb = function(data, status) {

    };

    $scope.reset_param_media_cb = function(data, status) {

    };

    $scope.save_params_cb = function(data, status) {

    };

    $scope.save_params_media_cb = function(data, status) {

    };

    $scope.set_as_default_param_cb = function(data, status) {

    };

    $scope.set_as_default_param_media_cb = function(data, status) {

    };

    $scope.set_image_observer_cb = function(data, status) {

    };

    $scope.start_filterchain_execution_cb = function(data, status) {

    };

    $scope.start_record_cb = function(data, status) {

    };

    $scope.stop_filterchain_execution_cb = function(data, status) {

    };

    $scope.stop_record_cb = function(data, status) {

    };

    $scope.subscribe_cb = function(data, status) {

    };

    $scope.update_param_cb = function(data, status) {

    };

    $scope.update_param_media_cb = function(data, status) {

    };

    $scope.upload_filterchain_cb = function(data, status) {

    };
    
}]);
