import { toast } from 'react-toastify';

export default function ToastWarn(WarningMessage) {
  toast.warn(WarningMessage, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
