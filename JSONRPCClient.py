
from SeaGoatVision.client.controller.json_client import JsonClient
from SeaGoatVision.client.controller.subscriber import Subscriber
import jsonrpclib

class FlaskJsonRpcClient():
    def __init__(self):
        self.rpc = jsonrpclib.Server('http://%s:%s' % ('localhost', 8090))
        
        self.controller = JsonClient(8090, host='localhost')

        if not self.controller.is_connected():
            logger.critical("Vision server is not accessible. Exit now.")
            ctr.close()
            sys.exit(-1)
        
        self.subscriber = Subscriber(self.controller, 5031, addr='localhost')
        self.controller.set_subscriber(self.subscriber)

    def __getattr__(self, name):
        if hasattr(self.rpc, name):
            return getattr(self.rpc, name)
        else:
            raise Exception("Unknown method: " + name)
    
