import cv2

from flask import Flask, request, Response, redirect, jsonify
app = Flask(__name__)
import sys
module = sys.modules[__name__]
import json

from PIL import Image

import StringIO
import threading

import eventlet
eventlet.monkey_patch()

@app.route('/')
def index():
    return redirect("static/index.html")

@app.route("/test")
def test():
    return app.send_static_file("test.html")

from SeaGoatVision.server.core.cmdHandler import CmdHandler
from SeaGoatVision.commons import global_env
global_env.set_is_local(True)
c = CmdHandler()
observers = {}

@app.route('/api/testt', methods=["POST"])
def testt():
    print request.get_json()
    return ""
    return json.dumps(c.testt())

@app.route('/api/add_image_observer', methods=["POST"])
def add_image_observer():
    post = request.get_json()
    execution_name = post.get("execution_name")
    filter_name = post.get("filter_name")

    if not observers.has_key(execution_name):
        observers[execution_name] = {}
    if not observers[execution_name].has_key(filter_name):
        observers[execution_name][filter_name] = ImageListener()

    il = observers[execution_name][filter_name]
    
    c.add_image_observer(il.send, execution_name, filter_name)
    return json.dumps({"execution_name" : execution_name, "filter_name" : filter_name})

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

@app.route('/api/get_count_keys')
def get_count_keys():
    return json.dumps(c.get_count_keys())

@app.route('/api/get_execution_info/<execution_name>')
def get_execution_info(execution_name):
    return json.dumps({"execution_name" : execution_name, "info" : c.get_execution_info(execution_name)})

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
    return json.dumps({"filterchain_name" : filterchain_name, "info" : c.get_filterchain_info(filterchain_name)})

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

@app.route('/api/get_params_filterchain', methods=["POST"])
def get_params_filterchain():
    post = request.get_json()
    execution_name = post.get("execution_name")
    filter_name = post.get("filter_name")
    print execution_name
    print filter_name
    params = c.get_params_filterchain(execution_name, filter_name)
    print params
    return json.dumps({"execution_name" : execution_name, "filter_name" : filter_name, "params" : {k : v.serialize() for k, v in params.items()}})

@app.route('/api/get_params_media/<media_name>')
def get_params_media(media_name):
    return json.dumps(c.get_params_media(media_name))

@app.route('/api/is_connected')
def is_connected():
    return json.dumps(c.is_connected())

@app.route('/api/modify_filterchain', methods=["POST"])
def modify_filterchain():
    post = request.get_json()
    execution_name = post.get("execution_name")
    old_filterchain_name = post.get("old_filterchain_name")
    new_filterchain_name = post.get("new_filterchain_name")
    lst_str_filters = post.get("lst_str_filters")
    default_media = post.get("default_media")
    return json.dumps(c.modify_filterchain(old_filterchain_name, new_filterchain_name, lst_str_filters, default_media))

@app.route('/api/reload_filter/<filter_name>')
def reload_filter(filter_name):
    return json.dumps(c.reload_filter(filter_name))

@app.route('/api/remove_image_observer', methods=['POST'])
def remove_image_observer():
    post = request.get_json()
    execution_name = post.get("execution_name")
    filter_name = post.get("filter_name")
    observer = observers[execution_name][filter_name].send
    return json.dumps({"info" : c.remove_image_observer(observer, execution_name, filter_name), "execution_name" : execution_name, "filter_name" : filter_name})

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
    return json.dumps(c.set_image_observer(observer, execution_name, filter_name_old, filter_name_new, new_observer))

@app.route('/api/start_filterchain_execution', methods=["POST"])
def start_filterchain_execution():
    post = request.get_json()
    execution_name = post.get("execution_name")
    media_name = post.get("media_name")
    filterchain_name = post.get("filterchain_name")
    file_name = post.get("file_name")
    is_client_manager = post.get("is_client_manager")
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

class ImageListener:
    
    def __init__(self):
        self.image = None
        self.evt = threading.Event()

    def send(self, output):
        if output is None:
            return
        output = cv2.resize(output, (320, 180))        
        img = Image.fromarray(output)
        buff = StringIO.StringIO()
        img.save(buff, 'bmp')
        contents = buff.getvalue()
        buff.close()
        self.image = contents
        self.evt.set()
    
    def update_fps(self):
        pass
    
    def gen(self):
        while True:
            self.evt.clear()
            self.evt.wait()
            yield (b'--frame\r\n'
                   b'Content-Type: image/bmp\r\n\r\n' + self.image + b'\r\n')
    
@app.route('/video_feed/')
def video_feed():
    if len(x) == 0:
        return ""
    web = x[0]
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(web.gen(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/live_feed/<execution_name>/<filter_name>')
def live_feed(execution_name, filter_name):
    #post = request.get_json()
    #execution_name = post.get("execution_name")
    #filter_name = post.get("filter_name")

    web = observers[execution_name][filter_name]
    if web is None:
        return ""
    return Response(web.gen(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, host="0.0.0.0", port=8000)
    
