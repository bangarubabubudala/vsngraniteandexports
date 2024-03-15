import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { FaUserCircle, FaQuoteLeft, FaQuoteRight, FaTwitter, FaInstagram, FaLinkedin, FaCheck } from "react-icons/fa";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";



export const USERICON = (props) => <FaUserCircle {...props} />;
export const QUOTELEFT = (props) => <FaQuoteLeft {...props} />
export const QUOTERIGHT = (props) => <FaQuoteRight {...props} />
export const LEFTARROW = (props) => <RxDoubleArrowLeft {...props} />
export const RIGHTARROW = (props) => <RxDoubleArrowRight {...props} />
export const RIGHTARROWBAR = (props) => <BiRightArrowAlt {...props} />
export const XTWITTER = (props) => <FaSquareXTwitter {...props} />
export const INSTAGRAM = (props) => <FaInstagram {...props} />
export const LINKEDIN = (props) => <FaLinkedin {...props} />
export const SENTBUTTON = (props) => <FaCheck {...props} />


export function PopUpModal(msg, id) {
    Swal.fire({
        title: '',
        icon: 'success',
        text: msg,
        html: "<div style=color:#008000>" + msg + "</div>" + "<b>" + id + "</b>",
        focusConfirm: false,
        confirmButtonText: 'OK',
    })
}

export function isValidMobileNumber(value) {
    if (value != "") {
        var pattern = /^[1-9]+(?:)?(\d+)?$/
        return pattern.test(value);
    } else {
        return true;
    }
}


export const showNotification = (type, message) => {
    if (type === "success") {
        Swal.fire('Success', message, 'success');
        // NotificationManager.success(message);
    } else if (type === "error") {
        Swal.fire('Error', message, 'error');
        // NotificationManager.error(message);
    } else if (type === "warning") {
        Swal.fire('Warning', message, 'warning');
        // NotificationManager.warning(message);
    } else if (type === "info") {
        Swal.fire('info', message, 'info');
        // NotificationManager.warning(message);
    }
}




