from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer
import inspect

class MockJsonrpcServer():
    def __init__(self, port):
        self.server = SimpleJSONRPCServer(('', port), logRequests=False)

    def close(self):
        pass
    
    def run(self):
        self.server.serve_forever()

    def register(self):
        # register all rpc callback
        methods = inspect.getmembers(self, predicate=inspect.ismethod)
        for name, method in methods:
            if name in ('__init__', 'register'):
                continue
            self.server.register_function(method, name)
            
    def add_image_observer(self, observer, execution_name, filter_name):
        return "add_image_observer(self, observer, execution_name, filter_name)"

    def add_output_observer(self, execution_name):
        return "add_output_observer(self, execution_name)"

    def cmd_to_media(self, media_name, cmd, value):
        return "cmd_to_media(self, media_name, cmd, value)"

    def cut_video(self, video_name, begin, end, cut_video_name):
        return "cut_video(self, video_name, begin, end, cut_video_name)"

    def delete_filterchain(self, filterchain_name):
        return "delete_filterchain(self, filterchain_name)"

    def get_count_keys(self):
        return "get_count_keys(self)"

    def get_execution_info(self, execution_name):
        return "get_execution_info(self, execution_name)"

    def get_execution_list(self):
        return "get_execution_list(self)"

    def get_default_media_name(self):
        return "get_default_media_name(self)"

    def get_filter_list(self):
        return "get_filter_list(self)"

    def get_filterchain_info(self, filterchain_name):
        return "get_filterchain_info(self, filterchain_name)"

    def get_filterchain_list(self):
        return "get_filterchain_list(self)"

    def get_fps_execution(self, execution_name):
        return "get_fps_execution(self, execution_name)"

    def get_info_media(self, media_name):
        return "get_info_media(self, media_name)"

    def get_lst_old_record_historic(self):
        return "get_lst_old_record_historic(self)"

    def get_lst_record_historic(self):
        return "get_lst_record_historic(self)"

    def get_media_list(self):
        return "get_media_list(self)"

    def get_param_filterchain(self, execution_name, filter_name, param_name):
        return "get_param_filterchain(self, execution_name, filter_name, param_name)"

    def get_param_media(self, media_name, param_name):
        return "get_param_media(self, media_name, param_name)"

    def get_params_filterchain(self, execution_name, filter_name, param_name):
        return "get_params_filterchain(self, execution_name, filter_name, param_name)"

    def get_params_media(self, media_name):
        return "get_params_media(self, media_name)"

    def is_connected(self):
        return "is_connected(self)"

    def modify_filterchain(self,
                           old_filterchain_name,
                           new_filterchain_name,
                           lst_str_filters,
                           default_media):
        return "modify_filterchain(self, old_filterchain_name, new_filterchain_name, lst_str_filters, default_media)"

    def reload_filter(self, filter_name):
        return "reload_filter(self, filter_name)"

    def remove_image_observer(self, observer, execution_name, filter_name):
        return "remove_image_observer(self, observer, execution_name, filter_name)"

    def remove_output_observer(self, execution_name):
        return "remove_output_observer(self, execution_name)"

    def reset_param(self, execution_name, filter_name, param_name):
        return "reset_param(self, execution_name, filter_name, param_name)"

    def reset_param_media(self, media_name, param_name):
        return "reset_param_media(self, media_name, param_name)"

    def save_params(self, execution_name):
        return "save_params(self, execution_name)"

    def save_params_media(self, media_name):
        return "save_params_media(self, media_name)"

    def set_as_default_param(self, execution_name, filter_name, param_name):
        return "set_as_default_param(self, execution_name, filter_name, param_name)"

    def set_as_default_param_media(self, media_name, param_name):
        return "set_as_default_param_media(self, media_name, param_name)"

    def set_image_observer(self,
                           observer,
                           execution_name,
                           filter_name_old,
                           filter_name_new,
                           new_observer=None):
        return "set_image_observer(self, observer, execution_name, filter_name_old, filter_name_new, new_observer=None)"

    def start_filterchain_execution(self,
                                    execution_name,
                                    media_name,
                                    filterchain_name,
                                    file_name,
                                    is_client_manager):
        return "start_filterchain_execution(self, execution_name, media_name, filterchain_name, file_name, is_client_manager)"

    def start_record(self, media_name, path, options):
        return "start_record(self, media_name, path, options)"

    def stop_filterchain_execution(self, execution_name):
        return "stop_filterchain_execution(self, execution_name)"

    def stop_record(self, media_name):
        return "stop_record(self, media_name)"

    def subscribe(self, key):
        return "subscribe(self, key)"

    def update_param(self, execution_name, filter_name, param_name, value):
        return "update_param(self, execution_name, filter_name, param_name, value)"

    def update_param_media(self, media_name, param_name, value):
        return "update_param_media(self, media_name, param_name, value)"

    def upload_filterchain(self, filterchain_name, s_file_contain):
        return "upload_filterchain(self, filterchain_name, s_file_contain)"

    def default_call(self):
        return "default_call(self)"
    
if __name__ == '__main__':
    x = MockJsonrpcServer(9000)
    z = inspect.getmembers(x, predicate=inspect.ismethod)
    
