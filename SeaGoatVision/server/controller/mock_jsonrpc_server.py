from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer
import inspect

from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer
import inspect

null = None
false = False
true = True

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
            
    def testt(self):
        print "TESTT CALLED"
        return "HELLO"
    
    def add_image_observer(self, observer, execution_name, filter_name):
        return True

    def add_output_observer(self, execution_name):
        return True

    def cmd_to_media(self, media_name, cmd, value):
        return True

    def cut_video(self, video_name, begin, end, cut_video_name):
        return True

    def delete_filterchain(self, filterchain_name):
        return True

    def get_count_keys(self):
        return 1

    def get_execution_info(self, execution_name):
        return {"media": "media_name",
                "filterchain": "filterchain_name"}

    def get_execution_list(self):
        return ["execution_name"]

    def get_default_media_name(self):
        return "media_name"

    def get_filter_list(self):
        return {"BGR2YUV": "Convert to YUV (Luminance with two colors)", "HDR": "High-dynamic-range_imaging with python PIL - works with files", "BGR2HSV": "Convert to Hue Saturation Brightness/Value", "GPUExample": "Example on how to use scipy.weave to access the GPU with OpenCV.\n http://opencv.willowgarage.com/wiki/OpenCV_GPU", "ParticleFilter": "Remove small particles from the image.\n The image is first converted to grayscale and is then eroded and\n the remaining blobs are filtered according to the area of the blobs.", "Noop": "Do nothing", "resize_img": "Resize the image", "Blur": "Smoothes an image using the normalized box filter", "ColorThreshold": "Apply a binary threshold on the three channels of the images\n Each channel have a minimum and a maximum value.\n Everything within this threshold is white (255, 255, 255)\n Everything else is black (0, 0, 0)", "BGR2RGB": "Convert to RGB. Useful for interacting with other libraries", "RemoveGrass": "Remove grass from an image", "Rectangle": "Draw a black rectangle", "RemoveGrassAuto": "", "FaceDetection": "Detect faces and eyes", "Exec": "Create and edit a filter on the fly for testing purposes", "LineOrientation": "Port of the old line detection code", "ExePy1": "\n Python Example Test #1\n Convert BGR color to another color.\n ", "ExePy2": "\n Python Example Test #2\n Example filter to test params.\n Show rectangle on each detected face.\n ", "Canny": "Apply a canny filter to the image", "Psychedelic": "Acid trip", "YUV2BGR": "Convert from YUV to BGR", "Rotate": "\n Rotate picture\n ", "SectionFilter": "", "ColorLevel": "Determine the value in % a color will have.\n 0% = Nothing\n 50% = Half the original value.\n 100% = Original\n Example: With 50% Blue and the following pixel\n (100, 100, 100) give (50, 100, 100)", "RemoveObstacle": "Remove obstacles from an image", "Watershed": "", "Undistort": "Do nothing", "Filter": "", "TestSeagoat": "", "HoughTransform": "Apply a Canny filter to the image then\n finds lines in a binary image using the standard Hough transform", "DrawArc": "Draw an arc in the image", "GaussianBlur": "Smoothes an image using a Gaussian filter", "BGR2Grayscale": "Convert to grayscale then convert back to BGR", "GetFirstFace": "Get first face detected in the image", "exe_cpp_1": "C Example Test #1\nConvert BGR color to another color.", "Perspective": "Wrap perspective", "BGR2HSVManual": "", "Morphology": "", "FaceSwap": "Swap faces", "BilateralFilter": "Applies the bilateral filter to an image."}

    def get_filterchain_info(self, filterchain_name):
        return  {"filters": [{"doc": null, "name": "-- empty filter --"}, {"doc": "\n    Python Example Test #2\n    Example filter to test params.\n    Show rectangle on each detected face.\n    ", "name": "ExePy2-0"}], "default_media": null}

    def get_filterchain_list(self):
        return  [{"doc": null, "name": "Demo facedetection"}, {"doc": null, "name": "API test"}, {"doc": null, "name": "Example"}]

    def get_fps_execution(self, execution_name):
        return 30

    def get_info_media(self, media_name):
        return  {"status": null, "nb_frame": -1, "fps": -1}

    def get_lst_old_record_historic(self):
        return ["old_historic1", "old_historic2"]

    def get_lst_record_historic(self):
        return ["historic1", "historic2"]

    def get_media_list(self):
        return  {
        "ipc": "Streaming",
        "Empty": "Empty",
        "File": "Video",
        "generator": "Streaming"
    }

    def get_param_filterchain(self, execution_name, filter_name, param_name): 
        return  {
        "_active_filter": {
            "is_lock": false,
            "name": "_active_filter",
            "lst_value": null,
            "min_v": null,
            "value": true,
            "max_v": null,
            "lst_group": [
                "Generic"
            ],
            "threshold": null,
            "description": "Enable filter in filterchain."
        },
        "notify": {
            "is_lock": null,
            "name": "notify",
            "lst_value": null,
            "min_v": null,
            "value": false,
            "max_v": null,
            "lst_group": [],
            "threshold": null,
            "description": null
        }
    }

    def get_param_media(self, media_name, param_name): 
        return {
        "ipc name": {
            "is_lock": false,
            "name": "ipc name",
            "lst_value": null,
            "min_v": null,
            "value": "ipc:///tmp/seagoatvision_media.ipc",
            "max_v": null,
            "lst_group": [],
            "threshold": null,
            "description": null
        },
        "angle": {
            "is_lock": false,
            "name": "angle",
            "lst_value": null,
            "min_v": 0,
            "value": 0,
            "max_v": 3,
            "lst_group": [
                "Generic"
            ],
            "threshold": null,
            "description": "Rotate the picture. 0 - 90 - 180 - 270"
        }
    }

    def get_params_filterchain(self, execution_name, filter_name, param_name): 
        return  {
        "_active_filter": {
            "is_lock": false,
            "name": "_active_filter",
            "lst_value": null,
            "min_v": null,
            "value": true,
            "max_v": null,
            "lst_group": [
                "Generic"
            ],
            "threshold": null,
            "description": "Enable filter in filterchain."
        },
        "notify": {
            "is_lock": null,
            "name": "notify",
            "lst_value": null,
            "min_v": null,
            "value": false,
            "max_v": null,
            "lst_group": [],
            "threshold": null,
            "description": null
        }
    }

    def get_params_media(self, media_name):
        return  {
        "ipc name": {
            "is_lock": false,
            "name": "ipc name",
            "lst_value": null,
            "min_v": null,
            "value": "ipc:///tmp/seagoatvision_media.ipc",
            "max_v": null,
            "lst_group": [],
            "threshold": null,
            "description": null
        },
        "angle": {
            "is_lock": false,
            "name": "angle",
            "lst_value": null,
            "min_v": 0,
            "value": 0,
            "max_v": 3,
            "lst_group": [
                "Generic"
            ],
            "threshold": null,
            "description": "Rotate the picture. 0 - 90 - 180 - 270"
        }
    }
        
    def is_connected(self):
        return True

    def modify_filterchain(self, 
                           old_filterchain_name,
                           new_filterchain_name,
                           lst_str_filters,
                           default_media):
        return True

    def reload_filter(self, filter_name):
        return True

    def remove_image_observer(self, observer, execution_name, filter_name):
        return True

    def remove_output_observer(self, execution_name):
        return True

    def reset_param(self, execution_name, filter_name, param_name):
        return True

    def reset_param_media(self, media_name, param_name):
        return True

    def save_params(self, execution_name):
        return True

    def save_params_media(self, media_name):
        return True

    def set_as_default_param(self, execution_name, filter_name, param_name):
        return True

    def set_as_default_param_media(self, media_name, param_name):
        return True

    def set_image_observer(self, #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                           observer,
                           execution_name,
                           filter_name_old,
                           filter_name_new,
                           new_observer=None):
        return True

    def start_filterchain_execution(self,
                                    execution_name,
                                    media_name,
                                    filterchain_name,
                                    file_name,
                                    is_client_manager):
        return execution_name

    def start_record(self, media_name, path, options):
        return True

    def stop_filterchain_execution(self, execution_name):
        return True

    def stop_record(self, media_name):
        return True

    def subscribe(self, key): #!!!!!!!!!!!!!!!!!!!
        return "subscribe(self, key)"

    def update_param(self, execution_name, filter_name, param_name, value):
        return True

    def update_param_media(self, media_name, param_name, value):
        return True

    def upload_filterchain(self, filterchain_name, s_file_contain):
        return True
    
class MockSigJsonrpcServer():
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

