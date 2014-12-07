//var myApp = angular.module('myApp', ['ngDraggable']);
myApp.controller('callback', ['$scope', function($scope) {
    $scope.testt_cb = function(data, status) {
		console.log("HEEELLLLO!!!");
    };

    $scope.add_image_observer_cb = function(data, status) {
		var exec = $scope.executions.filter(function(obj){return obj.name === data.execution_name;})[0];
		var filter = exec.filterChain.filters.filter(function(obj){return obj.name === data.filter_name;})[0];
		var exec_name = exec.name;
		var filter_name = filter.name;

		filter.feed = "/live_feed/" + exec_name + "/" + filter_name;
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
		exec.media_name = data.info.media;
		exec.filterChain = {name : data.info.filterchain};
		$scope.get_filterchain_info(data.info.filterchain, $scope.get_filterchain_info_cb);
    };

    $scope.get_execution_list_cb = function(data, status) {
		for(k in data) {
			var exec = $scope.executions.filter(function(obj){return obj.name === k;})[0];
			if(typeof(exec) == 'undefined') {
				$scope.executions.push({name : data[k]});
				$scope.get_execution_info(data[k], $scope.get_execution_info_cb);
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
		var exec = $scope.executions.filter(function(obj){return obj.filterChain.name === data.filterchain_name;})[0];
		var fc = exec.filterChain;
		fc.default_media = data.info.default_media;
		fc.filters = [];
		for(fname in data.info.filters) {
			var f = data.info.filters[fname];
			fc.filters.push({name : f.name, executionCode : '', workingCopy : '', language : 'c', params : []});
			$scope.get_params_filterchain(exec.name, f.name, $scope.get_params_filterchain_cb);
		}
			
    };

    $scope.get_filterchain_list_cb = function(data, status) {
		var filterchains = [];
		for(var k in data) {
			if(data.hasOwnProperty(k)) {
				filterchains.push({name : data[k].name, doc : data[k].doc, filters : []});
			}
		}
		$scope.filterChains = filterchains;
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
		//params = [];
		//for(var paramName in data.params){
		//	params.push({name:paramName, value:data.params[paramName].value});
		//}
		//{params: {active_filter : {value:123}, param_2 : {}, param_3: {}}}
    };

    $scope.get_params_filterchain_cb = function(data, status) {
		var exec = $scope.executions.filter(function(obj){return obj.name === data.execution_name;})[0];
		var filter = exec.filterChain.filters.filter(function(obj){return obj.name === data.filter_name;})[0];
		for(pname in data.params) {
			var newp = data.params[pname]
			if(newp.lst_group.length > 0) {
				for(idx in newp.lst_group) {
					var group = filter.params.filter(function(obj){return obj.name === newp.lst_group[idx];})[0]
					if(!group) {
						group = {name:newp.lst_group[idx], type:'group', value:[]}
						filter.params.push(group)
					}
					group.value.push({name:pname, type:'text', value:newp.value});
				}
			} else {
				filter.params.push({name:pname, type:'text', value:newp.value});
			}
		}
		
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
		var exec = $scope.executions.filter(function(obj){return obj.name === data.execution_name;})[0];
		var filter = exec.filterChain.filters.filter(function(obj){return obj.name === data.filter_name;})[0];
		var exec_name = exec.name;
		var filter_name = filter.name;

		delete filter.feed;
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
    
    $scope.print_structure = function() {
		console.log($scope.executions);
	};
    
}]);
