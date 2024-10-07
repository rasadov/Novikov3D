document.addEventListener("DOMContentLoaded", function() {
    // Function to determine the device type
    function getDeviceType() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        return 'android';
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'ios';
      } else {
        return 'other';
      }
    }

    // Get all the links inside .list-group-item
    const links = document.querySelectorAll('.list-group-item a');

    // Determine the device type
    const deviceType = getDeviceType();

    // Append the appropriate file extension to the links
    links.forEach(link => {
      if (deviceType === 'android') {
        link.href += 'gltf';
      } else if (deviceType === 'ios') {
        link.href += 'usdz';
      } else {
        link.href `intent://arvr.google.com/scene-viewer/1.0?file=${link.href += 'gltf'}/gltf&mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end;`
        ;
      }
    });
  });