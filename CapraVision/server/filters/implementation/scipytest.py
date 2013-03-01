
from scipy import weave
import cv
import numpy
from CapraVision.server.filters import dataextract

class ScipyExample(dataextract.DataExtractor):
    """Example on how to use scipy.weave inside filters.
        The code loop inside the entire image
        and reduce the value of each pixels by half"""

    def __init__(self):
        dataextract.DataExtractor.__init__(self)

    def execute(self, image):
        #self.notify_output_observers("ScipyTestPy: j=6 \n")
        notify = self.notify_output_observers

        img1 = cv.fromarray(image)
        weave.inline(
        """
        py::tuple notify_args(1);
        notify_args[0] = "patatoum";
        notify.call(notify_args);
        cv::Mat mat(get_cvmat(img1));
        //printf("addr %d %d\\n",  mat.rows, mat.cols);
        cv::circle(mat, cv::Point(mat.rows/2, mat.cols/2), mat.cols/4, cv::Scalar(255, 0, 255), -1);
        """,
        arg_names = ['img1', 'notify'],
        include_dirs = ['/usr/local/include/opencv/'],
        headers = ['<cv.h>', '<cxcore.h>'],
        #libraries = ['ml', 'cvaux', 'highgui', 'cv', 'cxcore'],
        extra_objects = ["`pkg-config --cflags --libs opencv`"],
        support_code = """
        struct cvmat_t {
                PyObject_HEAD
                CvMat *a;
                PyObject *data;
                size_t offset;
        };
        CvMat *get_cvmat(PyObject *o) { return ((cvmat_t*)o)->a; }
        """
        )
        img1 = numpy.asarray(img1)
        return img1

