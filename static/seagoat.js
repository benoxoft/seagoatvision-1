function api ($scope, $http) {
	$scope.default_success = function(cb) {
		return function(data, status) {
			console.log(data, status);
			cb(data, status);
		};
		
	};
	
	$scope.default_error = function(cb) {
		return function(data, status) {
			console.log(data, status, headers, config);
			cb(data, status);
		};
		
	};

    $scope.testt = function(cb) {
        $http.get("/api/testt").success($scope.default_success(cb)).error($scope.default_error(cb))
    };

    $scope.add_image_observer = function(observer, execution_name, filter_name, cb) {
        $http.get("/api/add_image_observer/" + observer + "/" + execution_name + "/" + filter_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.add_output_observer = function(execution_name, cb) {
        $http.get("/api/add_output_observer/" + execution_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.cmd_to_media = function(media_name, cmd, value, cb) {
        $http.get("/api/cmd_to_media/" + media_name + "/" + cmd + "/" + value)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.cut_video = function(video_name, begin, end, cut_video_name, cb) {
        $http.get("/api/cut_video/" + video_name + "/" + begin + "/" + end + "/" + cut_video_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.delete_filterchain = function(filterchain_name, cb) {
        $http.get("/api/delete_filterchain/" + filterchain_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_count_keys = function(cb) {
        $http.get("/api/get_count_keys")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_execution_info = function(execution_name, cb) {
        $http.get("/api/get_execution_info/" + execution_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_execution_list = function(cb) {
        $http.get("/api/get_execution_list")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_default_media_name = function(cb) {
        $http.get("/api/get_default_media_name")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_filter_list = function(cb) {
        $http.get("/api/get_filter_list")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_filterchain_info = function(filterchain_name, cb) {
        $http.get("/api/get_filterchain_info/" + filterchain_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_filterchain_list = function(cb) {
        $http.get("/api/get_filterchain_list")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_fps_execution = function(execution_name, cb) {
        $http.get("/api/get_fps_execution/" + execution_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_info_media = function(media_name, cb) {
        $http.get("/api/get_info_media/" + media_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_lst_old_record_historic = function(cb) {
        $http.get("/api/get_lst_old_record_historic")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_lst_record_historic = function(cb) {
        $http.get("/api/get_lst_record_historic")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_media_list = function(cb) {
        $http.get("/api/get_media_list")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_param_filterchain = function(execution_name, filter_name, param_name, cb) {
        $http.get("/api/get_param_filterchain/" + execution_name + "/" + filter_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_param_media = function(media_name, param_name, cb) {
        $http.get("/api/get_param_media/" + media_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_params_filterchain = function(execution_name, filter_name, param_name, cb) {
        $http.get("/api/get_params_filterchain/" + execution_name + "/" + filter_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.get_params_media = function(media_name, cb) {
        $http.get("/api/get_params_media/" + media_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.is_connected = function(cb) {
        $http.get("/api/is_connected")
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    // TODO: PAS BON POUR CETTE METHODE!!!!!!
    $scope.modify_filterchain = function(old_filterchain_name, new_filterchain_name, lst_str_filters, default_media, cb) {
        $http.get("/api/modify_filterchain/" + old_filterchain_name + "/" + new_filterchain_name + "/" + lst_str_filters + "/" + default_media)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.reload_filter = function(filter_name, cb) {
        $http.get("/api/reload_filter/" + filter_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.remove_image_observer = function(observer, execution_name, filter_name, cb) {
        $http.get("/api/remove_image_observer/" + observer + "/" + execution_name + "/" + filter_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.remove_output_observer = function(execution_name, cb) {
        $http.get("/api/remove_output_observer/" + execution_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.reset_param = function(execution_name, filter_name, param_name, cb) {
        $http.get("/api/reset_param/" + execution_name + "/" + filter_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.reset_param_media = function(media_name, param_name, cb) {
        $http.get("/api/reset_param_media/" + media_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.save_params = function(execution_name, cb) {
        $http.get("/api/save_params/" + execution_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.save_params_media = function(media_name, cb) {
        $http.get("/api/save_params_media/" + media_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.set_as_default_param = function(execution_name, filter_name, param_name, cb) {
        $http.get("/api/set_as_default_param/" + execution_name + "/" + filter_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.set_as_default_param_media = function(media_name, param_name, cb) {
        $http.get("/api/set_as_default_param_media/" + media_name + "/" + param_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.set_image_observer = function(observer, execution_name, filter_name_old, filter_name_new, new_observer, cb) {
        $http.get("/api/set_image_observer/" + observer + "/" + execution_name + "/" + filter_name_old + "/" + filter_name_new + "/" + new_observer)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.start_filterchain_execution = function(execution_name, media_name, filterchain_name, file_name, is_client_manager, cb) {
        $http.get("/api/start_filterchain_execution/" + execution_name + "/" + media_name + "/" + filterchain_name + "/" + file_name + "/" + is_client_manager)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.start_record = function(media_name, path, options, cb) {
        $http.get("/api/start_record/" + media_name + "/" + path + "/" + options)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.stop_filterchain_execution = function(execution_name, cb) {
        $http.get("/api/stop_filterchain_execution/" + execution_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.stop_record = function(media_name, cb) {
        $http.get("/api/stop_record/" + media_name)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.subscribe = function(key, cb) {
        $http.get("/api/subscribe/" + key)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.update_param = function(execution_name, filter_name, param_name, value, cb) {
        $http.get("/api/update_param/" + execution_name + "/" + filter_name + "/" + param_name + "/" + value)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.update_param_media = function(media_name, param_name, value, cb) {
        $http.get("/api/update_param_media/" + media_name + "/" + param_name + "/" + value)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

    $scope.upload_filterchain = function(filterchain_name, s_file_contain, cb) {
        $http.get("/api/upload_filterchain/" + filterchain_name + "/" + s_file_contain)
        .success($scope.default_success(cb))
        .error($scope.default_error(cb))
    };

	$scope.default_test_callback = function(data, status){};
    $scope.test_calls = function() {
        $scope.add_image_observer("observer", "execution_name", "filter_name", $scope.default_test_callback);
        $scope.add_output_observer("execution_name", $scope.default_test_callback);
        $scope.cmd_to_media("media_name", "cmd", "value", $scope.default_test_callback);
        $scope.cut_video("video_name", "begin", "end", "cut_video_name", $scope.default_test_callback);
        $scope.delete_filterchain("filterchain_name", $scope.default_test_callback);
        $scope.get_count_keys($scope.default_test_callback);
        $scope.get_execution_info("execution_name", $scope.default_test_callback);
        $scope.get_execution_list($scope.default_test_callback);
        $scope.get_default_media_name($scope.default_test_callback);
        $scope.get_filter_list($scope.default_test_callback);
        $scope.get_filterchain_info("filterchain_name", $scope.default_test_callback);
        $scope.get_filterchain_list($scope.default_test_callback);
        $scope.get_fps_execution("execution_name", $scope.default_test_callback);
        $scope.get_info_media("media_name", $scope.default_test_callback);
        $scope.get_lst_old_record_historic($scope.default_test_callback);
        $scope.get_lst_record_historic($scope.default_test_callback);
        $scope.get_media_list($scope.default_test_callback);
        $scope.get_param_filterchain("execution_name", "filter_name", "param_name", $scope.default_test_callback);
        $scope.get_param_media("media_name", "param_name", $scope.default_test_callback);
        $scope.get_params_filterchain("execution_name", "filter_name", "param_name", $scope.default_test_callback);
        $scope.get_params_media("media_name", $scope.default_test_callback);
        $scope.is_connected($scope.default_test_callback);
        $scope.modify_filterchain("old_filterchain_name", "new_filterchain_name", "lst_str_filters", "default_media", $scope.default_test_callback);
        $scope.reload_filter("filter_name", $scope.default_test_callback);
        $scope.remove_image_observer("observer", "execution_name", "filter_name", $scope.default_test_callback);
        $scope.remove_output_observer("execution_name", $scope.default_test_callback);
        $scope.reset_param("execution_name", "filter_name", "param_name", $scope.default_test_callback);
        $scope.reset_param_media("media_name", "param_name", $scope.default_test_callback);
        $scope.save_params("execution_name", $scope.default_test_callback);
        $scope.save_params_media("media_name", $scope.default_test_callback);
        $scope.set_as_default_param("execution_name", "filter_name", "param_name", $scope.default_test_callback);
        $scope.set_as_default_param_media("media_name", "param_name", $scope.default_test_callback);
        $scope.set_image_observer("observer", "execution_name", "filter_name_old", "filter_name_new", "new_observer", $scope.default_test_callback);
        $scope.start_filterchain_execution("execution_name", "media_name", "filterchain_name", "file_name", "is_client_manager", $scope.default_test_callback);
        $scope.start_record("media_name", "path", "options", $scope.default_test_callback);
        $scope.stop_filterchain_execution("execution_name", $scope.default_test_callback);
        $scope.stop_record("media_name", $scope.default_test_callback);
        $scope.subscribe("key", $scope.default_test_callback);
        $scope.update_param("execution_name", "filter_name", "param_name", "value", $scope.default_test_callback);
        $scope.update_param_media("media_name", "param_name", "value", $scope.default_test_callback);
        $scope.upload_filterchain("filterchain_name", "s_file_contain", $scope.default_test_callback);
    };
    //$scope.test_calls();
    
};
