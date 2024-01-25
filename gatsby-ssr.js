/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import React from 'react';

import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setPostBodyComponents([
    <div key="fb-root" id="fb-root"></div>,
    <script
      key="fb-sdk"
      dangerouslySetInnerHTML={{
        __html: `
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v19.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `,
      }}
    />,
  ]);
};

setPostBodyComponents([
  // ...其他组件
  <div key="fb-customer-chat" className="fb-customerchat" page_id="236075412914941" attribution="biz_inbox"></div>,
]);