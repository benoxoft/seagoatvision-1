from flask import Flask, request
app = Flask(__name__)
import sys
module = sys.modules[__name__]
import json

@app.route('/')
def hello_world():
    return app.send_static_file('test.html')

import JSONRPCClient
c = JSONRPCClient.FlaskJsonRpcClient()

@app.route('/api/testt')
def testt():
    return json.dumps(c.testt())

@app.route('/api/add_image_observer/<observer>/<execution_name>/<filter_name>')
def add_image_observer(observer, execution_name, filter_name):
    return json.dumps(c.add_image_observer(observer, execution_name, filter_name))

@app.route('/api/add_output_observer/<execution_name>')
def add_output_observer(execution_name):
    
    return json.dumps(c.add_output_observer(execution_name))

@app.route('/api/cmd_to_media/<media_name>/<cmd>/<value>')
def cmd_to_media(media_name, cmd, value):
    return json.dumps(c.cmd_to_media(media_name, cmd, value))

@app.route('/api/cut_video/<video_name>/<begin>/<end>/<cut_video_name>')
def cut_video(video_name, begin, end, cut_video_name):
    return json.dumps(c.cut_video(video_name, begin, end, cut_video_name))

@app.route('/api/delete_filterchain/<filterchain_name>')
def delete_filterchain(filterchain_name):
    return json.dumps(c.delete_filterchain(filterchain_name))

@app.route('/api/<get_count_keys>')
def get_count_keys():
    return json.dumps(c.get_count_keys())

@app.route('/api/get_execution_info/<execution_name>')
def get_execution_info(execution_name):
    return json.dumps(c.get_execution_info(execution_name))

@app.route('/api/get_execution_list')
def get_execution_list():
    return json.dumps(c.get_execution_list())

@app.route('/api/get_default_media_name')
def get_default_media_name():
    return json.dumps(c.get_default_media_name())

@app.route('/api/get_filter_list')
def get_filter_list():
    return json.dumps(c.get_filter_list())

@app.route('/api/get_filterchain_info/<filterchain_name>')
def get_filterchain_info(filterchain_name):
    return json.dumps(c.get_filterchain_info(filterchain_name))

@app.route('/api/get_filterchain_list')
def get_filterchain_list():
    return json.dumps(c.get_filterchain_list())

@app.route('/api/get_fps_execution/<execution_name>')
def get_fps_execution(execution_name):
    return json.dumps(c.get_fps_execution(execution_name))

@app.route('/api/get_info_media/<media_name>')
def get_info_media(media_name):
    return json.dumps(c.get_info_media(media_name))

@app.route('/api/get_lst_old_record_historic')
def get_lst_old_record_historic():
    return json.dumps(c.get_lst_old_record_historic())

@app.route('/api/get_lst_record_historic')
def get_lst_record_historic():
    return json.dumps(c.get_lst_record_historic())

@app.route('/api/get_media_list')
def get_media_list():
    return json.dumps(c.get_media_list())

@app.route('/api/get_param_filterchain/<execution_name>/<filter_name>/<param_name>')
def get_param_filterchain(execution_name, filter_name, param_name):
    return json.dumps(c.get_param_filterchain(execution_name, filter_name, param_name))

@app.route('/api/get_param_media/<media_name>/<param_name>')
def get_param_media(media_name, param_name):
    return json.dumps(c.get_param_media(media_name, param_name))

@app.route('/api/get_params_filterchain/<execution_name>/<filter_name>/<param_name>')
def get_params_filterchain(execution_name, filter_name, param_name):
    return json.dumps(c.get_params_filterchain(execution_name, filter_name, param_name))

@app.route('/api/get_params_media/<media_name>')
def get_params_media(media_name):
    return json.dumps(c.get_params_media(media_name))

@app.route('/api/is_connected')
def is_connected():
    return json.dumps(c.is_connected())

@app.route('/api/modify_filterchain/<old_filterchain_name>/<new_filterchain_name>/<lst_str_filters>/<default_media>')
def modify_filterchain(old_filterchain_name,
                        new_filterchain_name,
                        lst_str_filters,
                        default_media):
    return json.dumps(c.modify_filterchain(old_filterchain_name, new_filterchain_name, lst_str_filters, default_media))

@app.route('/api/reload_filter/<filter_name>')
def reload_filter(filter_name):
    return json.dumps(c.reload_filter(filter_name))

@app.route('/api/remove_image_observer/<observer>/<execution_name>/<filter_name>')
def remove_image_observer(observer, execution_name, filter_name):
    return json.dumps(c.remove_image_observer(observer, execution_name, filter_name))

@app.route('/api/remove_output_observer/<execution_name>')
def remove_output_observer(execution_name):
    return json.dumps(c.remove_output_observer(execution_name))

@app.route('/api/reset_param/<execution_name>/<filter_name>/<param_name>')
def reset_param(execution_name, filter_name, param_name):
    return json.dumps(c.reset_param(execution_name, filter_name, param_name))

@app.route('/api/reset_param_media/<media_name>/<param_name>')
def reset_param_media(media_name, param_name):
    return json.dumps(c.reset_param_media(media_name, param_name))

@app.route('/api/save_params/<execution_name>')
def save_params(execution_name):
    return json.dumps(c.save_params(execution_name))

@app.route('/api/save_params_media/<media_name>')
def save_params_media(media_name):
    return json.dumps(c.save_params_media(media_name))

@app.route('/api/set_as_default_param/<execution_name>/<filter_name>/<param_name>')
def set_as_default_param(execution_name, filter_name, param_name):
    return json.dumps(c.set_as_default_param(execution_name, filter_name, param_name))

@app.route('/api/set_as_default_param_media/<media_name>/<param_name>')
def set_as_default_param_media(media_name, param_name):
    return json.dumps(c.set_as_default_param_media(media_name, param_name))

@app.route('/api/set_image_observer/<observer>/<execution_name>/<filter_name_old>/<filter_name_new>/<new_observer>')
def set_image_observer(observer,
                        execution_name,
                        filter_name_old,
                        filter_name_new,
                        new_observer=None):
    return json.dumps(c.set_image_observer(observer, execution_name, filter_name_old, filter_name_new, new_observer=None))

@app.route('/api/start_filterchain_execution/<execution_name>/<media_name>/<filterchain_name>/<file_name>/<is_client_manager>')
def start_filterchain_execution(execution_name,
                                media_name,
                                filterchain_name,
                                file_name,
                                is_client_manager):
    return json.dumps(c.start_filterchain_execution(execution_name, media_name, filterchain_name, file_name, is_client_manager))

@app.route('/api/start_record/<media_name>/<path>/<options>')
def start_record(media_name, path, options):
    return json.dumps(c.start_record(media_name, path, options))

@app.route('/api/stop_filterchain_execution/<execution_name>')
def stop_filterchain_execution(execution_name):
    return json.dumps(c.stop_filterchain_execution(execution_name))

@app.route('/api/stop_record/<media_name>')
def stop_record(media_name):
    return json.dumps(c.stop_record(media_name))

@app.route('/api/subscribe/<key>')
def subscribe(key):
    return json.dumps(c.subscribe(key))

@app.route('/api/update_param/<execution_name>/<filter_name>/<param_name>/<value>')
def update_param(execution_name, filter_name, param_name, value):
    return json.dumps(c.update_param(execution_name, filter_name, param_name, value))

@app.route('/api/update_param_media/<media_name>/<param_name>/<value>')
def update_param_media(media_name, param_name, value):
    return json.dumps(c.update_param_media(media_name, param_name, value))

@app.route('/api/upload_filterchain/<filterchain_name>/<s_file_contain>')
def upload_filterchain(filterchain_name, s_file_contain):
    return json.dumps(c.upload_filterchain(filterchain_name, s_file_contain))

@app.route('/api/<method>')
def default_call(method):
    try:
        getattr(c, method)
    except:
        return "ERROR"

if __name__ == '__main__':
    app.run(debug=True)
    
