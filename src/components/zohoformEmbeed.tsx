// import React, { useEffect } from "react";

//kyc form
// const ZohoFormEmbed: React.FC = () => {
//   useEffect(() => {
//     const formContainerId =
//       "zf_div_VLQioiqb_do8RpXusCONXcO14ddN7YiBCW5Jqxct6Rc";
//     const existingIframe = document
//       .getElementById(formContainerId)
//       ?.getElementsByTagName("iframe")[0];

//     // Prevent duplicate iframes
//     if (!existingIframe) {
//       const iframe = document.createElement("iframe");
//       iframe.src =
//         "https://forms.zohopublic.com/603thecoworkingspace/form/KYC/formperma/VLQioiqb_do8RpXusCONXcO14ddN7YiBCW5Jqxct6Rc?zf_rszfm=1&zf_enablecamera=true";
//       iframe.style.border = "none";
//       iframe.style.height = "3096px";
//       iframe.style.width = "100%";
//       iframe.style.transition = "all 0.5s ease";
//       iframe.setAttribute("aria-label", "KYC");
//       iframe.setAttribute("allow", "camera;");

//       const container = document.getElementById(formContainerId);
//       container?.appendChild(iframe);

//       // Add event listener for resizing the iframe
//       const handleMessage = (event: MessageEvent) => {
//         if (event.data && typeof event.data === "string") {
//           const zf_ifrm_data = event.data.split("|");
//           if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
//             const zf_perma = zf_ifrm_data[0];
//             const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;
//             if (
//               iframe.src.includes("formperma") &&
//               iframe.src.includes(zf_perma)
//             ) {
//               iframe.style.height = zf_ifrm_ht_nw;
//             }
//           }
//         }
//       };
//       window.addEventListener("message", handleMessage);

//       // Cleanup event listener on unmount
//       return () => {
//         window.removeEventListener("message", handleMessage);
//       };
//     }
//   }, []);

//   return <div id="zf_div_VLQioiqb_do8RpXusCONXcO14ddN7YiBCW5Jqxct6Rc"></div>;
// };

// kyc form website

import React, { useEffect } from "react";

const ZohoFormEmbed: React.FC = () => {
  useEffect(() => {
    const formContainerId =
      "zf_div_KdALvvafT-xnItclZhm7Fd5jYW4BzDOfHGsSv3relts";
    const existingIframe = document
      .getElementById(formContainerId)
      ?.getElementsByTagName("iframe")[0];

    // Prevent duplicate iframes
    if (!existingIframe) {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://forms.zohopublic.com/603thecoworkingspace/form/KYCwebsite/formperma/KdALvvafT-xnItclZhm7Fd5jYW4BzDOfHGsSv3relts?zf_rszfm=1&zf_enablecamera=true";
      iframe.style.border = "none";
      iframe.style.height = "100vh";
      //   iframe.style.height = "2889px";
      iframe.style.width = "100%";
      iframe.style.transition = "all 0.5s ease";
      iframe.setAttribute("aria-label", "KYC-website");
      iframe.setAttribute("allow", "camera;");

      const container = document.getElementById(formContainerId);
      container?.appendChild(iframe);

      // Add event listener for resizing the iframe
      const handleMessage = (event: MessageEvent) => {
        if (event.data && typeof event.data === "string") {
          const zf_ifrm_data = event.data.split("|");
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;
            if (
              iframe.src.includes("formperma") &&
              iframe.src.includes(zf_perma)
            ) {
              iframe.style.height = zf_ifrm_ht_nw;
            }
          }
        }
      };
      window.addEventListener("message", handleMessage);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }
  }, []);

  return <div id="zf_div_KdALvvafT-xnItclZhm7Fd5jYW4BzDOfHGsSv3relts"></div>;
};

export default ZohoFormEmbed;
