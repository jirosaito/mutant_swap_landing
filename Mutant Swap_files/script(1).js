window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme27"]=window.wsb["Theme27"]||window.radpack("@widget/LAYOUT/bs-layout27-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=/<script[^>]*>([\s\S]*)<\/script>/;let l,n,i;function s(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function c(e){if(i=document.getElementById(o),!i)return;l=document.createElement("div"),l.style.cssText="transition:all 0.5s;width:100%;min-height: 0px;",i.prepend(l),n=document.createElement("div"),n.setAttribute("data-freemium-ad",!0),n.style.cssText="transition:all 0.5s;overflow:hidden;width:100%;z-index:10000;position:fixed;left:0;transform:translateY(-100px);",n.innerHTML=(e||"").replace(r,""),i.prepend(n);const t=`${n.offsetHeight}px`;if(window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t),l.style.minHeight=t,n.style.transform="translateY(0px)"})),a){const t=r.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else n.addEventListener("click",s,{useCapture:!0})}function g(){const e=a&&sessionStorage.getItem(t)||"";e?c(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),c(e))})).catch((()=>{}))}return"complete"===document.readyState?g():window.addEventListener("load",g),function(){!a&&n.removeEventListener("click",s,{useCapture:!0}),i&&(i.removeChild(l),i.removeChild(n))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-1654\"}"));
window.wsb["DynamicFontScaler"]=function(e){let{containerId:t,targetId:a,fontSizes:o,maxLines:r,prioritizeDefault:l}=e;if("undefined"==typeof document)return;const n=document.getElementById(t),i=document.getElementById(a);function s(e){return function(e){const t=parseInt(g(e,"padding-left")||0,10),a=parseInt(g(e,"padding-right")||0,10);return e.scrollWidth+t+a}(e)<=n.clientWidth&&function(e){const t=e.offsetHeight,a=parseInt(g(e,"line-height"),10)||1;return Math.floor(t/a)}(e)<=r}function c(){if(!n||!i)return;if(i.hasAttribute("data-font-scaled"))return void function(){i.removeAttribute("data-last-size");const e=document.querySelector(`#${a}-style`);e&&e.parentNode.removeChild(e)}();const e=Array.prototype.slice.call(n.querySelectorAll(`[data-scaler-id="scaler-${t}"]`)).sort(((e,t)=>o.indexOf(e.getAttribute("data-size"))-o.indexOf(t.getAttribute("data-size"))));if(n.clientWidth&&e.length){const t=n.style.width||"";n.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${n.clientWidth}px`}));const o=function(e){return e.find(s)||e[e.length-1]}(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),n.style.width=t;const r=g(o,"font-size"),c=i.getAttribute("data-last-size");if(r&&r!==c){if(l){const e=g(i,"font-size");if(parseInt(r,10)>=parseInt(e,10))return}i.setAttribute("data-last-size",r);let e=document.querySelector(`#${a}-style`);e||(e=document.createElement("style"),e.id=`${a}-style`,document.head.appendChild(e)),e.textContent=`#${i.id} { font-size: ${r} !important; }`}}}function g(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}if(c(),window.ResizeObserver&&n){new ResizeObserver((()=>{window.requestAnimationFrame(c)})).observe(n)}else window.addEventListener("resize",c)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-1657\",\"targetId\":\"logo-text-1658\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-1660\",\"targetId\":\"logo-text-1661\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-1662\",\"targetId\":\"dynamic-tagline-1663\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":4}"));
window.wsb["CookieBannerScript"]=function({id:e,acceptCookie:t,dismissCookie:o}){let a,n,i;function l(e,t=60){const o=new Date;o.setTime(o.getTime()+864e5*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function r(e){return document.cookie.includes(e)}function s(){n&&n.removeEventListener("click",c),i&&i.removeEventListener("click",p),a.style.display="none"}function c(e){e.preventDefault(),g(),l(o),l(t),s()}function p(e){var a;e.preventDefault(),l(o),r(t)&&(a=t,document.cookie=`${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),s()}function g(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}r(t)?g():r(o)||setTimeout((()=>{a=document.getElementById(`${e}-banner`),n=document.getElementById(`${e}-accept`),i=document.getElementById(`${e}-decline`),n&&n.addEventListener("click",c),i&&i.addEventListener("click",p),a.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"60249866-b07a-4274-a563-9ae6cd9e15b3\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"default\",\"\"],\"colors\":[\"#d4e0e9\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"internalLinks\":{},\"isHomepage\":true,\"navigationMap\":{\"61e91cb9-0d09-4237-b050-af83588fc4eb\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"61e91cb9-0d09-4237-b050-af83588fc4eb\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b26f8523-6379-452a-b659-680e6689895f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b26f8523-6379-452a-b659-680e6689895f\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]}},\"colors\":[{\"id\":\"#d4e0e9\",\"meta\":{\"primary\":\"rgb(212, 224, 233)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}]},\"theme\":\"Theme27\"}");
Core.utils.renderBootstrap({elId:'bs-1',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"f7fc3b9e-329e-4c1b-8b85-63d4da0e5e25\",\"env\":\"production\",\"isMobile\":null,\"websiteId\":\"aaf99245-378b-4e60-be05-7819de7341bc\",\"accountId\":\"7bd5f106-6dfd-11ec-825d-3417ebe72595\",\"isReseller\":false,\"domainName\":\"mutantswap.godaddysites.com\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"Mutant Swap\",\"reamazeBrandId\":\"aaf99245-378b-4e60-be05-7819de7341bc\",\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"cookieBannerEnabled\":true,\"notificationPreference\":\"REAMAZE\",\"formEmail\":\"chefjirosaito@gmail.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"reamazePosition\":\"bottom-right\",\"reamazeThemeColor\":\"#d4e0e9\",\"reamazePromptEnabled\":true,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"reamazeDismissCarousel\":false,\"widgetId\":\"f7fc3b9e-329e-4c1b-8b85-63d4da0e5e25\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"f7fc3b9e-329e-4c1b-8b85-63d4da0e5e25\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-1652').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":true,"wam_site_homepageFirstWidgetType":"SOCIAL","wam_site_homepageFirstWidgetPreset":"social1","wam_site_businessCategory":"cryptocurrency","wam_site_theme":"layout27","wam_site_locale":"en-US","wam_site_fontPack":"playfair-display","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"freemiumV1","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);