
angular.module('Seagoat', []).controller('api', function ($scope, $http) {

    $scope.testt = function() {
        $http.get("/api/testt")
        .success(function(data, status) {
            console.log("testt");
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.add_image_observer = function(observer, execution_name, filter_name) {
        $http.get("/api/add_image_observer/" + observer + "/" + execution_name + "/" + filter_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.add_output_observer = function(execution_name) {
        $http.get("/api/add_output_observer/" + execution_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.cmd_to_media = function(media_name, cmd, value) {
        $http.get("/api/cmd_to_media/" + media_name + "/" + cmd + "/" + value)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.cut_video = function(video_name, begin, end, cut_video_name) {
        $http.get("/api/cut_video/" + video_name + "/" + begin + "/" + end + "/" + cut_video_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.delete_filterchain = function(filterchain_name) {
        $http.get("/api/delete_filterchain/" + filterchain_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_count_keys = function() {
        $http.get("/api/get_count_keys")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_execution_info = function(execution_name) {
        $http.get("/api/get_execution_info/" + execution_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_execution_list = function() {
        $http.get("/api/get_execution_list")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_default_media_name = function() {
        $http.get("/api/get_default_media_name")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_filter_list = function() {
        $http.get("/api/get_filter_list")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_filterchain_info = function(filterchain_name) {
        $http.get("/api/get_filterchain_info/" + filterchain_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_filterchain_list = function() {
        $http.get("/api/get_filterchain_list")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_fps_execution = function(execution_name) {
        $http.get("/api/get_fps_execution/" + execution_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_info_media = function(media_name) {
        $http.get("/api/get_info_media/" + "/" + media_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_lst_old_record_historic = function() {
        $http.get("/api/get_lst_old_record_historic")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_lst_record_historic = function() {
        $http.get("/api/get_lst_record_historic")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_media_list = function() {
        $http.get("/api/get_media_list")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_param_filterchain = function(execution_name, filter_name, param_name) {
        $http.get("/api/get_param_filterchain/" + "/" + execution_name + "/" + filter_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_param_media = function(media_name, param_name) {
        $http.get("/api/get_param_media/" + media_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_params_filterchain = function(execution_name, filter_name, param_name) {
        $http.get("/api/get_params_filterchain/" + execution_name + "/" + filter_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.get_params_media = function(media_name) {
        $http.get("/api/get_params_media/" + media_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.is_connected = function() {
        $http.get("/api/is_connected")
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    // TODO: PAS BON POUR CETTE METHODE!!!!!!
    $scope.modify_filterchain = function(old_filterchain_name, new_filterchain_name, lst_str_filters, default_media) {
        $http.get("/api/modify_filterchain/" + old_filterchain_name + "/" + new_filterchain_name + "/" + lst_str_filters + "/" + default_media)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.reload_filter = function(filter_name) {
        $http.get("/api/reload_filter/" + filter_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.remove_image_observer = function(observer, execution_name, filter_name) {
        $http.get("/api/remove_image_observer/" + observer + "/" + execution_name + "/" + filter_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.remove_output_observer = function(execution_name) {
        $http.get("/api/remove_output_observer/" + execution_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.reset_param = function(execution_name, filter_name, param_name) {
        $http.get("/api/reset_param/" + execution_name + "/" + filter_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.reset_param_media = function(media_name, param_name) {
        $http.get("/api/reset_param_media/" + media_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.save_params = function(execution_name) {
        $http.get("/api/save_params/" + execution_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.save_params_media = function(media_name) {
        $http.get("/api/save_params_media/" + media_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.set_as_default_param = function(execution_name, filter_name, param_name) {
        $http.get("/api/set_as_default_param/" + execution_name + "/" + filter_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.set_as_default_param_media = function(media_name, param_name) {
        $http.get("/api/set_as_default_param_media/" + media_name + "/" + param_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.set_image_observer = function(observer, execution_name, filter_name_old, filter_name_new, new_observer) {
        $http.get("/api/set_image_observer/" + observer + "/" + execution_name + "/" + filter_name_old + "/" + filter_name_new + "/" + new_observer)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.start_filterchain_execution = function(execution_name, media_name, filterchain_name, file_name, is_client_manager) {
        $http.get("/api/start_filterchain_execution/" + execution_name + "/" + media_name + "/" + filterchain_name + "/" + file_name + "/" + is_client_manager)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.start_record = function(media_name, path, options) {
        $http.get("/api/start_record/" + media_name + "/" + path + "/" + options)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.stop_filterchain_execution = function(execution_name) {
        $http.get("/api/stop_filterchain_execution/" + execution_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.stop_record = function(media_name) {
        $http.get("/api/stop_record/" + media_name)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.subscribe = function(key) {
        $http.get("/api/subscribe/" + key)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.update_param = function(execution_name, filter_name, param_name, value) {
        $http.get("/api/update_param/" + execution_name + "/" + filter_name + "/" + param_name + "/" + value)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.update_param_media = function(media_name, param_name, value) {
        $http.get("/api/update_param_media/" + media_name + "/" + param_name + "/" + value)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

    $scope.upload_filterchain = function(filterchain_name, s_file_contain) {
        $http.get("/api/upload_filterchain/" + filterchain_name + "/" + s_file_contain)
        .success(function(data, status) {
            console.log(data);
            // TODO
        })
        .error(function(data, status, headers, config) {
            // TODO
        })
    };

