// ==UserScript==
// @name         GeoGuessr Learnable Meta
// @namespace    geometa
// @version      0.88
// @author       monkey
// @description  UserScript for GeoGuessr Learnable Meta maps
// @icon         https://learnablemeta.com/favicon.png
// @downloadURL  https://github.com/Zee-Cleanroom/geometa/raw/main/dist/geometa.user.js
// @updateURL    https://github.com/Zee-Cleanroom/geometa/raw/main/dist/geometa.user.js
// @match        *://*.geoguessr.com/*
// @require      https://raw.githubusercontent.com/miraclewhips/geoguessr-event-framework/5e449d6b64c828fce5d2915772d61c7f95263e34/geoguessr-event-framework.js
// @connect      learnablemeta.com
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})(` .loadership_ZOJAQ.svelte-i1jlc0{display:flex;position:relative;width:72px;height:72px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0){position:absolute;width:8px;height:8px;border-radius:50%;background:#fff;animation:svelte-i1jlc0-loadership_ZOJAQ_scale 1.2s infinite,svelte-i1jlc0-loadership_ZOJAQ_fade 1.2s infinite;animation-timing-function:linear}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(1){animation-delay:0s;top:62px;left:32px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(2){animation-delay:-.1s;top:58px;left:47px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(3){animation-delay:-.2s;top:47px;left:58px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(4){animation-delay:-.3s;top:32px;left:62px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(5){animation-delay:-.4s;top:17px;left:58px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(6){animation-delay:-.5s;top:6px;left:47px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(7){animation-delay:-.6s;top:2px;left:32px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(8){animation-delay:-.7s;top:6px;left:17px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(9){animation-delay:-.8s;top:17px;left:6px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(10){animation-delay:-.9s;top:32px;left:2px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(11){animation-delay:-1s;top:47px;left:6px}.loadership_ZOJAQ.svelte-i1jlc0 div:where(.svelte-i1jlc0):nth-child(12){animation-delay:-1.1s;top:58px;left:17px}@keyframes svelte-i1jlc0-loadership_ZOJAQ_scale{0%,20%,80%,to{transform:scale(1)}50%{transform:scale(1.5)}}@keyframes svelte-i1jlc0-loadership_ZOJAQ_fade{0%,20%,80%,to{opacity:.8}50%{opacity:1}}.fi.svelte-7lhsry{width:1.5em;height:1em;display:inline-block;vertical-align:middle;padding-right:3px}.carousel.svelte-fofh7f{position:relative;overflow:hidden;margin:0 auto}.image-wrapper.svelte-fofh7f{width:100%;height:100%;display:flex;justify-content:center;align-items:center;cursor:zoom-in}.responsive-image.svelte-fofh7f{max-width:100%;height:100%;display:block;object-fit:contain}.lens.svelte-fofh7f{position:absolute;pointer-events:none;border:2px solid #aaa;border-radius:50%;box-shadow:0 0 8px #00000080}.click-area.svelte-fofh7f{position:absolute;top:0;bottom:0;width:1.4em;cursor:pointer}.prev-area.svelte-fofh7f{left:0}.next-area.svelte-fofh7f{right:0}.prev.svelte-fofh7f,.next.svelte-fofh7f{background-color:#00000080;color:#fff;border:none;font-size:1.2em;padding:.2em;cursor:pointer;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%)}.prev.svelte-fofh7f{left:0}.next.svelte-fofh7f{right:0}.indicators.svelte-fofh7f{position:absolute;bottom:15px;left:50%;transform:translate(-50%);display:flex;justify-content:center;align-items:center;gap:8px}.indicator.svelte-fofh7f{width:12px;height:12px;background-color:#ffffff80;border-radius:50%;cursor:pointer;border:none;padding:0;flex-shrink:0}.indicator.active.svelte-fofh7f{background-color:#fff}.geometa-footer a{color:#188bd2;text-decoration:none}.geometa-footer a:hover{text-decoration:underline}.geometa-container.svelte-a3mhc8{position:absolute;top:13rem;left:1rem;z-index:50;display:flex;flex-direction:column;gap:5px;align-items:flex-start;background:var(--ds-color-purple-100);padding:6px 10px;border-radius:5px;font-size:17px;width:min(25%,500px);resize:both;overflow:auto}.geometa-container.svelte-a3mhc8>.header:where(.svelte-a3mhc8){margin-top:0}.geometa-footer.svelte-a3mhc8{color:#d3d3d3;font-size:small}.announcement.svelte-a3mhc8{background-color:#e6f7ff;color:#0050b3;padding:8px 12px;border-radius:4px;font-size:14px;display:flex;justify-content:space-between;align-items:center;width:100%;box-sizing:border-box;margin-bottom:8px;border:1px solid #91d5ff}.announcement a{color:#0050b3;font-weight:700;text-decoration:underline}.announcement a:hover{color:#003a8c}.vote-close-btn.svelte-a3mhc8{background-color:#b3d9ff;border:1px solid #0050b3;color:#0050b3;font-size:12px;cursor:pointer;padding:1px 10px;border-radius:4px;line-height:1;margin-left:5px;text-transform:none;transition:background-color .2s ease,color .2s ease,border-color .2s ease}.vote-close-btn.svelte-a3mhc8:hover,.vote-close-btn.svelte-a3mhc8:focus{background-color:#0050b3;color:#fff;border-color:#036;outline:none}a.svelte-a3mhc8{color:#188bd2}a.svelte-a3mhc8:hover{text-decoration:underline}.skill-icons--discord.svelte-a3mhc8{display:inline-block;width:1.2rem;height:1.2rem;margin-left:2px;background-repeat:no-repeat;background-size:100% 100%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cg fill='none'%3E%3Crect width='256' height='256' fill='%235865f2' rx='60'/%3E%3Cg clip-path='url(%23skillIconsDiscord0)'%3E%3Cpath fill='%23ffffff' d='M197.308 64.797a165 165 0 0 0-40.709-12.627a.62.62 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.64.64 0 0 0-.655-.31a164.5 164.5 0 0 0-40.709 12.627a.6.6 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.7.7 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.65.65 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86 86 0 0 0 3.098-2.428a.62.62 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.62.62 0 0 1 .655.08a80 80 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.6 102.6 0 0 1-15.609 7.428a.64.64 0 0 0-.339.889a133 133 0 0 0 10.208 16.61a.64.64 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.65.65 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.5.5 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='skillIconsDiscord0'%3E%3Cpath fill='%23ffffff' d='M28 51h200v154.93H28z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E")}.flat-color-icons--globe.svelte-a3mhc8{display:inline-block;width:1.2rem;height:1.2rem;margin-left:2px;background-repeat:no-repeat;background-size:100% 100%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%237cb342' d='M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4'/%3E%3Cpath fill='%230277bd' d='M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7'/%3E%3C/svg%3E")}.skill-icons--list.svelte-a3mhc8{display:inline-block;width:1.2rem;height:1.2rem;margin-left:2px;background-repeat:no-repeat;background-size:100% 100%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%235865f2' d='M4 3h13.17c.41 0 .8.16 1.09.44l3.3 3.3c.29.29.44.68.44 1.09V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'/%3E%3Cpath fill='%23ffffff' d='M14 2v4h4l-4-4zM7 9h10v2H7V9zm0 4h7v2H7v-2z'/%3E%3C/svg%3E")}.question-mark-icon.svelte-a3mhc8{display:inline-block;width:1.2rem;height:1.2rem;margin-left:2px;background-repeat:no-repeat;background-size:100% 100%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23188bd2' d='M21 2H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM12 18a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm2.07-5.25c-.9.52-.98 1.26-.98 1.75h-2c0-1.12.46-2.21 1.78-2.91c.9-.52 1.22-.87 1.22-1.34a1.5 1.5 0 0 0-3 0H9a3.5 3.5 0 0 1 7 0c0 1.63-1.28 2.41-1.93 2.75Z'/%3E%3C/svg%3E");cursor:pointer}.icons.svelte-a3mhc8{display:inline-block;vertical-align:middle}.flex.svelte-a3mhc8{display:flex;align-items:center}.icons.svelte-a3mhc8 a:where(.svelte-a3mhc8) span:where(.svelte-a3mhc8){align-items:center;justify-content:center}hr.svelte-a3mhc8{border:0;border-top:1px solid white;width:100%}.header.svelte-a3mhc8{cursor:move;border-bottom:1px solid #aaa;width:100%;display:flex;justify-content:space-between;align-items:center;touch-action:none;-webkit-user-select:none;user-select:none}.geometa-note a{color:#188bd2}.geometa-note a:hover{text-decoration:underline}.geometa-note ul li{list-style-type:disc;margin-left:1rem}.geometa-note ol li{list-style-type:decimal;margin-left:1rem}.modal-backdrop.svelte-a3mhc8{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#1e1e1ecc;display:flex;justify-content:center;align-items:center;z-index:1000}.modal.svelte-a3mhc8{background:var(--ds-color-purple-100);padding:15px 25px;border-radius:8px;text-align:center;width:90%;max-width:600px;box-shadow:0 4px 6px #0003;color:#d3d3d3}.modal.svelte-a3mhc8 p:where(.svelte-a3mhc8){margin:0 0 10px;font-size:17px}.modal-url.svelte-a3mhc8{font-size:15px;font-weight:700;color:#188bd2;word-break:break-word;margin:10px 0}.modal-buttons.svelte-a3mhc8{display:flex;justify-content:center;gap:15px;margin-top:20px}.proceed-btn.svelte-a3mhc8{background:#188bd2;color:#fff;padding:8px 16px;border:none;border-radius:5px;cursor:pointer;font-size:15px;transition:background-color .2s ease-in-out}.proceed-btn.svelte-a3mhc8:hover{background:#0056b3}.close-btn.svelte-a3mhc8{background:transparent;color:#d3d3d3;padding:8px 16px;border:1px solid #d3d3d3;border-radius:5px;cursor:pointer;font-size:15px;transition:background-color .2s ease-in-out,color .2s ease-in-out}.close-btn.svelte-a3mhc8:hover{background:#d3d3d3;color:var(--ds-color-purple-100)}button.svelte-a3mhc8{cursor:pointer;background:none;border:none;padding:0}.blink.svelte-a3mhc8{animation:svelte-a3mhc8-blink-animation 1s infinite}.help-message.svelte-a3mhc8{padding:12px;font-size:16px;line-height:1.5;text-align:left}.help-message.svelte-a3mhc8 strong:where(.svelte-a3mhc8){color:#007bff;font-weight:700}@keyframes svelte-a3mhc8-blink-animation{0%{filter:brightness(1)}50%{filter:brightness(2);background-color:#004779}to{filter:brightness(1)}}.outdated.svelte-a3mhc8 strong:where(.svelte-a3mhc8){color:red!important}.geometa-meta-btn{background:#188bd2;color:#fff;border:none;border-radius:3px;padding:2px 6px;font-size:11px;cursor:pointer;margin-left:10px;transition:background-color .2s ease;font-weight:700;z-index:1000;pointer-events:auto;display:inline-block}.result-list_listItemWrapper___XCGn{display:flex!important;justify-content:space-between!important;align-items:center!important}.geometa-meta-btn:hover{background:#0056b3}.geometa-pin-question{position:absolute;top:-8px;right:-8px;width:16px;height:16px;background:#188bd2;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;cursor:pointer;z-index:10000;transition:background-color .2s ease;border:1px solid white;box-shadow:0 1px 3px #0000004d}.geometa-pin-question:hover{background:#0056b3;transform:scale(1.1)}.hint-panel.svelte-1h74c2s{position:fixed;bottom:1rem;right:1rem;background:#fff;padding:.5rem;border:1px solid #ccc;border-radius:4px;z-index:9999;box-shadow:0 2px 6px #0003;max-width:300px}.hint-panel.svelte-1h74c2s input:where(.svelte-1h74c2s),.hint-panel.svelte-1h74c2s textarea:where(.svelte-1h74c2s){width:100%;margin-bottom:.25rem}.hint-panel.svelte-1h74c2s .error:where(.svelte-1h74c2s){color:#b00;font-size:.8rem;margin-bottom:.25rem}.hint-panel.svelte-1h74c2s header:where(.svelte-1h74c2s){display:flex;justify-content:space-between;align-items:center;margin-bottom:.25rem}.hint-panel.svelte-1h74c2s button.close:where(.svelte-1h74c2s){background:transparent;border:none;cursor:pointer}.geometa-map-label-container.svelte-1mmcvqu{background-color:#0003;color:#fff;text-align:center;z-index:999999;position:absolute;bottom:4px;right:4px;box-sizing:border-box;border-radius:8px;padding:8px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;gap:8px;text-shadow:0 0 10px rgba(255,255,255,.1)}p.svelte-1mmcvqu{font-size:14px;font-weight:700}button.svelte-1mmcvqu{padding:6px 12px;font-size:12px;color:#fff;background-color:#4caf50;border:none;border-radius:4px;cursor:pointer}.toast-notification.svelte-1rq8lsd{z-index:10001;min-width:250px;max-width:400px;padding:14px 22px;border-radius:8px;box-shadow:0 5px 15px #0003;color:#fff;display:flex;align-items:center;justify-content:space-between;font-size:.95em;line-height:1.4}.toast-success.svelte-1rq8lsd{background-color:#28a745;border-left:5px solid #1e7e34}.toast-error.svelte-1rq8lsd{background-color:#dc3545;border-left:5px solid #b02a37}.toast-info.svelte-1rq8lsd{background-color:#17a2b8;border-left:5px solid #117a8b}.toast-warning.svelte-1rq8lsd{background-color:#ffc107;color:#212529;border-left:5px solid #d39e00}.toast-message.svelte-1rq8lsd{flex-grow:1;margin-right:10px}.toast-close-button.svelte-1rq8lsd{background:transparent;border:none;color:inherit;font-size:1.6em;font-weight:700;margin-left:10px;cursor:pointer;padding:0;line-height:1;opacity:.7;transition:opacity .2s ease}.toast-close-button.svelte-1rq8lsd:hover{opacity:1}.custom-yellow-button.svelte-17or0cf{background:linear-gradient(180deg,#ffeb99,#f5c542);border:1px solid #e0b000;color:#002147;border-radius:3.75rem;box-shadow:0 2px 4px #00000026,inset 0 1px #fff6;cursor:pointer;transition:background .2s ease-in-out,transform .1s ease,box-shadow .2s ease-in-out}.custom-yellow-button.svelte-17or0cf:hover:not(:disabled){background:linear-gradient(180deg,#ffe066,#eab308);box-shadow:0 4px 8px #0003,inset 0 1px #ffffff80;transform:translateY(-1px)}.custom-yellow-button.svelte-17or0cf:active:not(:disabled){background:linear-gradient(180deg,#eab308,#d39e00);box-shadow:0 2px 4px #0003 inset;transform:translateY(1px)}.custom-yellow-button.svelte-17or0cf:focus{outline:none;box-shadow:0 0 0 3px #eab30880,0 2px 4px #00000026}.custom-yellow-button.svelte-17or0cf:disabled{background:#e0e0e0;border-color:#bbb;color:#888;box-shadow:none;cursor:not-allowed;transform:none}.modal-overlay.svelte-17or0cf{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0009;display:flex;justify-content:center;align-items:center;z-index:10000}.modal-content.svelte-17or0cf{background-color:#fff;padding:25px 30px;border-radius:8px;box-shadow:0 5px 15px #0000004d;width:90%;max-width:450px;color:#333}.modal-content.svelte-17or0cf h2:where(.svelte-17or0cf){margin-top:0;margin-bottom:15px;color:#2c3e50}.modal-content.svelte-17or0cf p:where(.svelte-17or0cf){margin-bottom:15px;line-height:1.6}.modal-content.svelte-17or0cf p:where(.svelte-17or0cf) a:where(.svelte-17or0cf){color:#007bff;text-decoration:underline}.modal-content.svelte-17or0cf p:where(.svelte-17or0cf) a:where(.svelte-17or0cf):hover{color:#0056b3}.modal-input.svelte-17or0cf{width:calc(100% - 20px);padding:10px;margin-bottom:20px;border:1px solid #ccc;border-radius:4px;font-size:1em}.modal-actions.svelte-17or0cf{display:flex;justify-content:flex-end;gap:10px}.modal-button.svelte-17or0cf{padding:10px 18px;border:none;border-radius:4px;cursor:pointer;font-weight:700;transition:background-color .2s ease}.modal-button-save.svelte-17or0cf{background-color:#28a745;color:#fff}.modal-button-save.svelte-17or0cf:hover{background-color:#218838}.modal-button-cancel.svelte-17or0cf{background-color:#6c757d;color:#fff}.modal-button-cancel.svelte-17or0cf:hover{background-color:#5a6268}.modal-note.svelte-17or0cf{font-size:.85em;color:#555;margin-top:15px;text-align:center} `);

(async function () {
  'use strict';

  var __defProp = Object.defineProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var _current, _previous, _callbacks, _pending, _deferred, _neutered, _async_effects, _boundary_async_effects, _render_effects, _effects, _block_effects, _Batch_instances, process_fn, traverse_effect_tree_fn, commit_fn, _a;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  function waitForElement(selector) {
    return new Promise((resolve) => {
      try {
        const existingElement = document.querySelector(selector);
        if (existingElement) {
          resolve(existingElement);
          return;
        }
      } catch {
      }
      const observer = new MutationObserver(() => {
        try {
          const element = document.querySelector(selector);
          if (element) {
            observer.disconnect();
            removeUrlChangeListener();
            resolve(element);
            return;
          }
        } catch {
        }
      });
      const handleUrlChange = () => {
        observer.disconnect();
        removeUrlChangeListener();
        resolve(null);
      };
      const removeUrlChangeListener = () => {
        window.removeEventListener("urlchange", handleUrlChange);
      };
      window.addEventListener("urlchange", handleUrlChange);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"]
      });
    });
  }
  function localStorageGetInt(name) {
    const savedValue = _unsafeWindow.localStorage.getItem(name);
    if (!savedValue) {
      return null;
    }
    const savedInt = parseInt(savedValue, 10);
    if (isNaN(savedInt)) {
      return null;
    }
    return savedInt;
  }
  async function fetchMapInfo(url) {
    return new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        method: "GET",
        url,
        onload: (response) => {
          if (response.status === 200 || response.status === 404) {
            try {
              const mapInfo = JSON.parse(response.responseText);
              logInfo("fetched map info", mapInfo);
              resolve(mapInfo);
            } catch (e) {
              logInfo("failed to parse map info response", e);
              reject("Failed to parse response");
            }
          } else {
            logInfo("failed to fetch map info", response);
            reject(`HTTP error! status: ${response.status}`);
          }
        },
        onerror: () => {
          reject("An error occurred while fetching data");
        }
      });
    });
  }
  async function getMapInfo(geoguessrId, forceUpdate) {
    const localStorageMapInfoKey = `geometa:map-info:${geoguessrId}`;
    if (!forceUpdate) {
      const savedMapInfo = _unsafeWindow.localStorage.getItem(localStorageMapInfoKey);
      if (savedMapInfo) {
        const mapInfo2 = JSON.parse(savedMapInfo);
        logInfo("using saved map info", mapInfo2);
        return mapInfo2;
      }
    }
    const url = `https://learnablemeta.com/api/userscript/map/${geoguessrId}`;
    const mapInfo = await fetchMapInfo(url);
    _unsafeWindow.localStorage.setItem(localStorageMapInfoKey, JSON.stringify(mapInfo));
    _unsafeWindow.localStorage.setItem("geometa:latest-version", mapInfo.userscriptVersion);
    return mapInfo;
  }
  function getLatestVersionInfo() {
    return _unsafeWindow.localStorage.getItem("geometa:latest-version");
  }
  function checkIfOutdated() {
    return _GM_info.script.version != getLatestVersionInfo();
  }
  function markHelpMessageAsRead() {
    _unsafeWindow.localStorage.setItem("geometa:help-message-read", "true");
  }
  function wasHelpMessageRead() {
    return _unsafeWindow.localStorage.getItem("geometa:help-message-read") == "true";
  }
  const getChallengeId = () => {
    const regexp = /.*\/live-challenge\/(.*)/;
    const matches = location.pathname.match(regexp);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return null;
  };
  async function getChallengeInfo(id) {
    const url = `https://game-server.geoguessr.com/api/live-challenge/${id}`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "include"
    });
    const data = await response.json();
    const mapId = data.options.mapSlug;
    const currentRound = data.currentRoundNumber - 1;
    const rounds = data.rounds;
    const panorama = rounds[currentRound].question.panoramaQuestionPayload.panorama;
    const panoIdHex = panorama.panoId;
    const panoId = decodePanoId(panoIdHex);
    return { mapId, panoId };
  }
  function decodePanoId(encoded) {
    const len = Math.floor(encoded.length / 2);
    let panoId = [];
    for (let i = 0; i < len; i++) {
      const code = parseInt(encoded.slice(i * 2, i * 2 + 2), 16);
      const char = String.fromCharCode(code);
      panoId = [...panoId, char];
    }
    return panoId.join("");
  }
  function logInfo(name, data) {
    console.log(`ALM: ${name}`, data);
  }
  function extractMapIdFromUrl(url) {
    const match = url.match(/\/maps\/([^\/]+)/);
    return match ? match[1] : null;
  }
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  function is_function(thing) {
    return typeof thing === "function";
  }
  const noop = () => {
  };
  function is_promise(value) {
    return typeof (value == null ? void 0 : value.then) === "function";
  }
  function run(fn) {
    return fn();
  }
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const UNOWNED = 1 << 8;
  const DISCONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const EFFECT_RAN = 1 << 15;
  const EFFECT_TRANSPARENT = 1 << 16;
  const INSPECT_EFFECT = 1 << 17;
  const HEAD_EFFECT = 1 << 18;
  const EFFECT_PRESERVED = 1 << 19;
  const USER_EFFECT = 1 << 20;
  const REACTION_IS_UPDATING = 1 << 21;
  const ASYNC = 1 << 22;
  const ERROR_VALUE = 1 << 23;
  const STATE_SYMBOL = Symbol("$state");
  const LEGACY_PROPS = Symbol("legacy props");
  const LOADING_ATTR_SYMBOL = Symbol("");
  const STALE_REACTION = new class StaleReactionError extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function await_outside_boundary() {
    {
      throw new Error(`https://svelte.dev/e/await_outside_boundary`);
    }
  }
  function lifecycle_outside_component(name) {
    {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  function async_derived_orphan() {
    {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function props_invalid_value(key) {
    {
      throw new Error(`https://svelte.dev/e/props_invalid_value`);
    }
  }
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const PROPS_IS_IMMUTABLE = 1;
  const PROPS_IS_RUNES = 1 << 1;
  const PROPS_IS_UPDATED = 1 << 2;
  const PROPS_IS_BINDABLE = 1 << 3;
  const PROPS_IS_LAZY_INITIAL = 1 << 4;
  const TRANSITION_IN = 1;
  const TRANSITION_OUT = 1 << 1;
  const TRANSITION_GLOBAL = 1 << 2;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const UNINITIALIZED = Symbol();
  const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
  let hydrating = false;
  function reset(node) {
    return;
  }
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  let async_mode_flag = false;
  let legacy_mode_flag = false;
  let tracing_mode_flag = false;
  function enable_legacy_mode_flag() {
    legacy_mode_flag = true;
  }
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      c: null,
      e: null,
      s: props,
      x: null,
      l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
    };
  }
  function pop(component) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    var effects = context.e;
    if (effects !== null) {
      context.e = null;
      for (var fn of effects) {
        create_user_effect(fn);
      }
    }
    component_context = context.p;
    return (
      /** @type {T} */
      {}
    );
  }
  function is_runes() {
    return !legacy_mode_flag || component_context !== null && component_context.l === null;
  }
  const adjustments = /* @__PURE__ */ new WeakMap();
  function handle_error(error) {
    var effect2 = active_effect;
    if (effect2 === null) {
      active_reaction.f |= ERROR_VALUE;
      return error;
    }
    if ((effect2.f & EFFECT_RAN) === 0) {
      if ((effect2.f & BOUNDARY_EFFECT) === 0) {
        if (!effect2.parent && error instanceof Error) {
          apply_adjustments(error);
        }
        throw error;
      }
      effect2.b.error(error);
    } else {
      invoke_error_boundary(error, effect2);
    }
  }
  function invoke_error_boundary(error, effect2) {
    while (effect2 !== null) {
      if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
        try {
          effect2.b.error(error);
          return;
        } catch (e) {
          error = e;
        }
      }
      effect2 = effect2.parent;
    }
    if (error instanceof Error) {
      apply_adjustments(error);
    }
    throw error;
  }
  function apply_adjustments(error) {
    const adjusted = adjustments.get(error);
    if (adjusted) {
      define_property(error, "message", {
        value: adjusted.message
      });
      define_property(error, "stack", {
        value: adjusted.stack
      });
    }
  }
  let micro_tasks = [];
  let idle_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function run_idle_tasks() {
    var tasks = idle_tasks;
    idle_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0) {
      queueMicrotask(run_micro_tasks);
    }
    micro_tasks.push(fn);
  }
  function flush_tasks() {
    if (micro_tasks.length > 0) {
      run_micro_tasks();
    }
    if (idle_tasks.length > 0) {
      run_idle_tasks();
    }
  }
  function get_pending_boundary() {
    var boundary = (
      /** @type {Effect} */
      active_effect.b
    );
    while (boundary !== null && !boundary.has_pending_snippet()) {
      boundary = boundary.parent;
    }
    if (boundary === null) {
      await_outside_boundary();
    }
    return boundary;
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
      flags |= UNOWNED;
    } else {
      active_effect.f |= EFFECT_PRESERVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        UNINITIALIZED
      ),
      wv: 0,
      parent: parent_derived ?? active_effect,
      ac: null
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function async_derived(fn, location2) {
    let parent = (
      /** @type {Effect | null} */
      active_effect
    );
    if (parent === null) {
      async_derived_orphan();
    }
    var boundary = (
      /** @type {Boundary} */
      parent.b
    );
    var promise = (
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0
    );
    var signal = source(
      /** @type {V} */
      UNINITIALIZED
    );
    var prev2 = null;
    var should_suspend = !active_reaction;
    async_effect(() => {
      try {
        var p = fn();
      } catch (error) {
        p = Promise.reject(error);
      }
      var r2 = () => p;
      promise = (prev2 == null ? void 0 : prev2.then(r2, r2)) ?? Promise.resolve(p);
      prev2 = promise;
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var pending = boundary.pending;
      if (should_suspend) {
        boundary.update_pending_count(1);
        if (!pending) batch.increment();
      }
      const handler = (value, error = void 0) => {
        prev2 = null;
        if (!pending) batch.activate();
        if (error) {
          if (error !== STALE_REACTION) {
            signal.f |= ERROR_VALUE;
            internal_set(signal, error);
          }
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }
          internal_set(signal, value);
        }
        if (should_suspend) {
          boundary.update_pending_count(-1);
          if (!pending) batch.decrement();
        }
        unset_context();
      };
      promise.then(handler, (e) => handler(null, e || "unknown"));
      if (batch) {
        return () => {
          queueMicrotask(() => batch.neuter());
        };
      }
    });
    return new Promise((fulfil) => {
      function next2(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            next2(promise);
          }
        }
        p.then(go, go);
      }
      next2(promise);
    });
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  function get_derived_parent_effect(derived2) {
    var parent = derived2.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (
          /** @type {Effect} */
          parent
        );
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived2));
    {
      try {
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    if (!derived2.equals(value)) {
      derived2.v = value;
      derived2.wv = increment_write_version();
    }
    if (is_destroying_effect) return;
    if (batch_deriveds !== null) {
      batch_deriveds.set(derived2, derived2.v);
    } else {
      var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
      set_signal_status(derived2, status);
    }
  }
  function flatten(sync, async, fn) {
    const d = is_runes() ? derived : derived_safe_equal;
    if (async.length === 0) {
      fn(sync.map(d));
      return;
    }
    var batch = current_batch;
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    var restore = capture();
    var boundary = get_pending_boundary();
    Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then((result) => {
      batch == null ? void 0 : batch.activate();
      restore();
      try {
        fn([...sync.map(d), ...result]);
      } catch (error) {
        if ((parent.f & DESTROYED) === 0) {
          invoke_error_boundary(error, parent);
        }
      }
      batch == null ? void 0 : batch.deactivate();
      unset_context();
    }).catch((error) => {
      boundary.error(error);
    });
  }
  function capture() {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;
    return function restore() {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
    };
  }
  function unset_context() {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
  }
  const batches = /* @__PURE__ */ new Set();
  let current_batch = null;
  let batch_deriveds = null;
  let effect_pending_updates = /* @__PURE__ */ new Set();
  let queued_root_effects = [];
  let last_scheduled_effect = null;
  let is_flushing = false;
  const _Batch = class _Batch {
    constructor() {
      __privateAdd(this, _Batch_instances);
      /**
       * The current values of any sources that are updated in this batch
       * They keys of this map are identical to `this.#previous`
       * @type {Map<Source, any>}
       */
      __privateAdd(this, _current, /* @__PURE__ */ new Map());
      /**
       * The values of any sources that are updated in this batch _before_ those updates took place.
       * They keys of this map are identical to `this.#current`
       * @type {Map<Source, any>}
       */
      __privateAdd(this, _previous, /* @__PURE__ */ new Map());
      /**
       * When the batch is committed (and the DOM is updated), we need to remove old branches
       * and append new ones by calling the functions added inside (if/each/key/etc) blocks
       * @type {Set<() => void>}
       */
      __privateAdd(this, _callbacks, /* @__PURE__ */ new Set());
      /**
       * The number of async effects that are currently in flight
       */
      __privateAdd(this, _pending, 0);
      /**
       * A deferred that resolves when the batch is committed, used with `settled()`
       * TODO replace with Promise.withResolvers once supported widely enough
       * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
       */
      __privateAdd(this, _deferred, null);
      /**
       * True if an async effect inside this batch resolved and
       * its parent branch was already deleted
       */
      __privateAdd(this, _neutered, false);
      /**
       * Async effects (created inside `async_derived`) encountered during processing.
       * These run after the rest of the batch has updated, since they should
       * always have the latest values
       * @type {Effect[]}
       */
      __privateAdd(this, _async_effects, []);
      /**
       * The same as `#async_effects`, but for effects inside a newly-created
       * `<svelte:boundary>` — these do not prevent the batch from committing
       * @type {Effect[]}
       */
      __privateAdd(this, _boundary_async_effects, []);
      /**
       * Template effects and `$effect.pre` effects, which run when
       * a batch is committed
       * @type {Effect[]}
       */
      __privateAdd(this, _render_effects, []);
      /**
       * The same as `#render_effects`, but for `$effect` (which runs after)
       * @type {Effect[]}
       */
      __privateAdd(this, _effects, []);
      /**
       * Block effects, which may need to re-run on subsequent flushes
       * in order to update internal sources (e.g. each block items)
       * @type {Effect[]}
       */
      __privateAdd(this, _block_effects, []);
      /**
       * A set of branches that still exist, but will be destroyed when this batch
       * is committed — we skip over these during `process`
       * @type {Set<Effect>}
       */
      __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Source} source
     * @param {any} value
     */
    capture(source2, value) {
      if (!__privateGet(this, _previous).has(source2)) {
        __privateGet(this, _previous).set(source2, value);
      }
      __privateGet(this, _current).set(source2, source2.v);
    }
    activate() {
      current_batch = this;
    }
    deactivate() {
      current_batch = null;
      for (const update of effect_pending_updates) {
        effect_pending_updates.delete(update);
        update();
        if (current_batch !== null) {
          break;
        }
      }
    }
    neuter() {
      __privateSet(this, _neutered, true);
    }
    flush() {
      if (queued_root_effects.length > 0) {
        this.flush_effects();
      } else {
        __privateMethod(this, _Batch_instances, commit_fn).call(this);
      }
      if (current_batch !== this) {
        return;
      }
      if (__privateGet(this, _pending) === 0) {
        batches.delete(this);
      }
      this.deactivate();
    }
    flush_effects() {
      var was_updating_effect = is_updating_effect;
      is_flushing = true;
      try {
        var flush_count = 0;
        set_is_updating_effect(true);
        while (queued_root_effects.length > 0) {
          if (flush_count++ > 1e3) {
            var updates, entry;
            if (DEV) ;
            infinite_loop_guard();
          }
          __privateMethod(this, _Batch_instances, process_fn).call(this, queued_root_effects);
          old_values.clear();
        }
      } finally {
        is_flushing = false;
        set_is_updating_effect(was_updating_effect);
        last_scheduled_effect = null;
      }
    }
    increment() {
      __privateSet(this, _pending, __privateGet(this, _pending) + 1);
    }
    decrement() {
      __privateSet(this, _pending, __privateGet(this, _pending) - 1);
      if (__privateGet(this, _pending) === 0) {
        for (const e of __privateGet(this, _render_effects)) {
          set_signal_status(e, DIRTY);
          schedule_effect(e);
        }
        for (const e of __privateGet(this, _effects)) {
          set_signal_status(e, DIRTY);
          schedule_effect(e);
        }
        for (const e of __privateGet(this, _block_effects)) {
          set_signal_status(e, DIRTY);
          schedule_effect(e);
        }
        __privateSet(this, _render_effects, []);
        __privateSet(this, _effects, []);
        this.flush();
      } else {
        this.deactivate();
      }
    }
    /** @param {() => void} fn */
    add_callback(fn) {
      __privateGet(this, _callbacks).add(fn);
    }
    settled() {
      return (__privateGet(this, _deferred) ?? __privateSet(this, _deferred, deferred())).promise;
    }
    static ensure(autoflush = true) {
      if (current_batch === null) {
        const batch = current_batch = new _Batch();
        batches.add(current_batch);
        if (autoflush) {
          queueMicrotask(() => {
            if (current_batch !== batch) {
              return;
            }
            batch.flush();
          });
        }
      }
      return current_batch;
    }
  };
  _current = new WeakMap();
  _previous = new WeakMap();
  _callbacks = new WeakMap();
  _pending = new WeakMap();
  _deferred = new WeakMap();
  _neutered = new WeakMap();
  _async_effects = new WeakMap();
  _boundary_async_effects = new WeakMap();
  _render_effects = new WeakMap();
  _effects = new WeakMap();
  _block_effects = new WeakMap();
  _Batch_instances = new WeakSet();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process_fn = function(root_effects) {
    var _a2;
    queued_root_effects = [];
    var current_values = null;
    if (batches.size > 1) {
      current_values = /* @__PURE__ */ new Map();
      batch_deriveds = /* @__PURE__ */ new Map();
      for (const [source2, current] of __privateGet(this, _current)) {
        current_values.set(source2, { v: source2.v, wv: source2.wv });
        source2.v = current;
      }
      for (const batch of batches) {
        if (batch === this) continue;
        for (const [source2, previous] of __privateGet(batch, _previous)) {
          if (!current_values.has(source2)) {
            current_values.set(source2, { v: source2.v, wv: source2.wv });
            source2.v = previous;
          }
        }
      }
    }
    for (const root2 of root_effects) {
      __privateMethod(this, _Batch_instances, traverse_effect_tree_fn).call(this, root2);
    }
    if (__privateGet(this, _async_effects).length === 0 && __privateGet(this, _pending) === 0) {
      var render_effects = __privateGet(this, _render_effects);
      var effects = __privateGet(this, _effects);
      __privateSet(this, _render_effects, []);
      __privateSet(this, _effects, []);
      __privateSet(this, _block_effects, []);
      __privateMethod(this, _Batch_instances, commit_fn).call(this);
      flush_queued_effects(render_effects);
      flush_queued_effects(effects);
      (_a2 = __privateGet(this, _deferred)) == null ? void 0 : _a2.resolve();
    } else {
      for (const e of __privateGet(this, _render_effects)) set_signal_status(e, CLEAN);
      for (const e of __privateGet(this, _effects)) set_signal_status(e, CLEAN);
      for (const e of __privateGet(this, _block_effects)) set_signal_status(e, CLEAN);
    }
    if (current_values) {
      for (const [source2, { v, wv }] of current_values) {
        if (source2.wv <= wv) {
          source2.v = v;
        }
      }
      batch_deriveds = null;
    }
    for (const effect2 of __privateGet(this, _async_effects)) {
      update_effect(effect2);
    }
    for (const effect2 of __privateGet(this, _boundary_async_effects)) {
      update_effect(effect2);
    }
    __privateSet(this, _async_effects, []);
    __privateSet(this, _boundary_async_effects, []);
  };
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  traverse_effect_tree_fn = function(root2) {
    var _a2;
    root2.f ^= CLEAN;
    var effect2 = root2.first;
    while (effect2 !== null) {
      var flags = effect2.f;
      var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags & INERT) !== 0 || this.skipped_effects.has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags & EFFECT) !== 0) {
          __privateGet(this, _effects).push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags & ASYNC) !== 0) {
            var effects = ((_a2 = effect2.b) == null ? void 0 : _a2.pending) ? __privateGet(this, _boundary_async_effects) : __privateGet(this, _async_effects);
            effects.push(effect2);
          } else {
            if ((effect2.f & BLOCK_EFFECT) !== 0) __privateGet(this, _block_effects).push(effect2);
            update_effect(effect2);
          }
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      var parent = effect2.parent;
      effect2 = effect2.next;
      while (effect2 === null && parent !== null) {
        effect2 = parent.next;
        parent = parent.parent;
      }
    }
  };
  /**
   * Append and remove branches to/from the DOM
   */
  commit_fn = function() {
    if (!__privateGet(this, _neutered)) {
      for (const fn of __privateGet(this, _callbacks)) {
        fn();
      }
    }
    __privateGet(this, _callbacks).clear();
  };
  let Batch = _Batch;
  function flushSync(fn) {
    var result;
    const batch = Batch.ensure(false);
    while (true) {
      flush_tasks();
      if (queued_root_effects.length === 0) {
        if (batch === current_batch) {
          batch.flush();
        }
        last_scheduled_effect = null;
        return (
          /** @type {T} */
          result
        );
      }
      batch.flush_effects();
    }
  }
  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    for (var i = 0; i < length; i++) {
      var effect2 = effects[i];
      if ((effect2.f & (DESTROYED | INERT)) === 0) {
        if (is_dirty(effect2)) {
          var wv = write_version;
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null && effect2.ac === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
          if (write_version > wv && (effect2.f & USER_EFFECT) !== 0) {
            break;
          }
        }
      }
    }
    for (; i < length; i += 1) {
      schedule_effect(effects[i]);
    }
  }
  function schedule_effect(signal) {
    var effect2 = last_scheduled_effect = signal;
    while (effect2.parent !== null) {
      effect2 = effect2.parent;
      var flags = effect2.f;
      if (is_flushing && effect2 === active_effect && (flags & BLOCK_EFFECT) !== 0) {
        return;
      }
      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect2.f ^= CLEAN;
      }
    }
    queued_root_effects.push(effect2);
  }
  const old_values = /* @__PURE__ */ new Map();
  function source(v, stack) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function state(v, stack) {
    const s = source(v);
    push_reaction_value(s);
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false, trackable = true) {
    var _a2;
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
      ((_a2 = component_context.l).s ?? (_a2.s = [])).push(s);
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!untracking || (active_reaction.f & INSPECT_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | INSPECT_EFFECT)) !== 0 && !(current_sources == null ? void 0 : current_sources.includes(source2))) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    return internal_set(source2, new_value);
  }
  function internal_set(source2, value) {
    if (!source2.equals(value)) {
      var old_value = source2.v;
      if (is_destroying_effect) {
        old_values.set(source2, value);
      } else {
        old_values.set(source2, old_value);
      }
      source2.v = value;
      const batch = Batch.ensure();
      batch.capture(source2, old_value);
      if ((source2.f & DERIVED) !== 0) {
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(
            /** @type {Derived} */
            source2
          );
        }
        set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
      }
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY);
      if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
    return value;
  }
  function increment(source2) {
    set(source2, source2.v + 1);
  }
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var runes = is_runes();
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;
      if ((flags & DIRTY) !== 0) continue;
      if (!runes && reaction === active_effect) continue;
      set_signal_status(reaction, status);
      if ((flags & (CLEAN | UNOWNED)) !== 0) {
        if ((flags & DERIVED) !== 0) {
          mark_reactions(
            /** @type {Derived} */
            reaction,
            MAYBE_DIRTY
          );
        } else {
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = /* @__PURE__ */ state(0);
    var parent_version = update_version;
    var with_parent = (fn) => {
      if (update_version === parent_version) {
        return fn();
      }
      var reaction = active_reaction;
      var version2 = update_version;
      set_active_reaction(null);
      set_update_version(parent_version);
      var result = fn();
      set_active_reaction(reaction);
      set_update_version(version2);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", /* @__PURE__ */ state(
        /** @type {any[]} */
        value.length
      ));
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            s = with_parent(() => {
              var s2 = /* @__PURE__ */ state(descriptor.value);
              sources.set(prop2, s2);
              return s2;
            });
          } else {
            set(s, descriptor.value, true);
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(prop2, s2);
              increment(version);
            }
          } else {
            set(s, UNINITIALIZED);
            increment(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          var _a2;
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
            s = with_parent(() => {
              var p = proxy(exists ? target[prop2] : UNINITIALIZED);
              var s2 = /* @__PURE__ */ state(p);
              return s2;
            });
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2 == null ? void 0 : source2.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          var _a2;
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
            if (s === void 0) {
              s = with_parent(() => {
                var p = has ? proxy(target[prop2]) : UNINITIALIZED;
                var s2 = /* @__PURE__ */ state(p);
                return s2;
              });
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var _a2;
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable)) {
              s = with_parent(() => /* @__PURE__ */ state(void 0));
              set(s, proxy(value2));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            var p = with_parent(() => proxy(value2));
            set(s, p);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor == null ? void 0 : descriptor.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            increment(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  var $window;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype.__click = void 0;
      element_prototype.__className = void 0;
      element_prototype.__attributes = null;
      element_prototype.__style = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype.__t = void 0;
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return first_child_getter.call(node);
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }
  function child(node, is_text) {
    {
      return /* @__PURE__ */ get_first_child(node);
    }
  }
  function first_child(fragment, is_text) {
    {
      var first = (
        /** @type {DocumentFragment} */
        /* @__PURE__ */ get_first_child(
          /** @type {Node} */
          fragment
        )
      );
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;
    while (count--) {
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    {
      return next_sibling;
    }
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  function validate_effect(rune) {
    if (active_effect === null && active_reaction === null) {
      effect_orphan();
    }
    if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn, sync, push2 = true) {
    var parent = active_effect;
    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
      ac: null
    };
    if (sync) {
      try {
        update_effect(effect2);
        effect2.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect2);
        throw e;
      }
    } else if (fn !== null) {
      schedule_effect(effect2);
    }
    var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_PRESERVED) === 0;
    if (!inert && push2) {
      if (parent !== null) {
        push_effect(effect2, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ?? (derived2.effects = [])).push(effect2);
      }
    }
    return effect2;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var flags = (
      /** @type {Effect} */
      active_effect.f
    );
    var defer = !active_reaction && (flags & BRANCH_EFFECT) !== 0 && (flags & EFFECT_RAN) === 0;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ?? (context.e = [])).push(fn);
    } else {
      return create_user_effect(fn);
    }
  }
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn, false);
  }
  function user_pre_effect(fn) {
    validate_effect();
    return create_effect(RENDER_EFFECT | USER_EFFECT, fn, true);
  }
  function component_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn, true);
  }
  function render_effect(fn, flags = 0) {
    return create_effect(RENDER_EFFECT | flags, fn, true);
  }
  function template_effect(fn, sync = [], async = []) {
    flatten(sync, async, (values) => {
      create_effect(RENDER_EFFECT, () => fn(...values.map(get)), true);
    });
  }
  function block(fn, flags = 0) {
    var effect2 = create_effect(BLOCK_EFFECT | flags, fn, true);
    return effect2;
  }
  function branch(fn, push2 = true) {
    return create_effect(BRANCH_EFFECT, fn, true, push2);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var _a2;
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      (_a2 = effect2.ac) == null ? void 0 : _a2.abort(STALE_REACTION);
      var next2 = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
      effect2 = next2;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next2;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null && effect2.nodes_end !== null) {
      remove_effect_dom(
        effect2.nodes_start,
        /** @type {TemplateNode} */
        effect2.nodes_end
      );
      removed = true;
    }
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    set_signal_status(effect2, DESTROYED);
    var transitions = effect2.transitions;
    if (transitions !== null) {
      for (const transition2 of transitions) {
        transition2.stop();
      }
    }
    execute_effect_teardown(effect2);
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = effect2.ac = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next2 = node === end ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev2 = effect2.prev;
    var next2 = effect2.next;
    if (prev2 !== null) prev2.next = next2;
    if (next2 !== null) next2.prev = prev2;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next2;
      if (parent.last === effect2) parent.last = prev2;
    }
  }
  function pause_effect(effect2, callback) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    run_out_transitions(transitions, () => {
      destroy_effect(effect2);
      if (callback) callback();
    });
  }
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition2 of transitions) {
        transition2.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transitions.push(transition2);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      set_signal_status(effect2, DIRTY);
      schedule_effect(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transition2.in();
        }
      }
    }
  }
  let is_updating_effect = false;
  function set_is_updating_effect(value) {
    is_updating_effect = value;
  }
  let is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let current_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && !async_mode_flag) {
      if (current_sources === null) {
        current_sources = [value];
      } else {
        current_sources.push(value);
      }
    }
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let update_version = read_version;
  function set_update_version(value) {
    update_version = value;
  }
  let skip_reaction = false;
  function increment_write_version() {
    return ++write_version;
  }
  function is_dirty(reaction) {
    var _a2;
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) {
      return true;
    }
    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;
      if (dependencies !== null) {
        var i;
        var dependency;
        var is_disconnected = (flags & DISCONNECTED) !== 0;
        var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
        var length = dependencies.length;
        if ((is_disconnected || is_unowned_connected) && (active_effect === null || (active_effect.f & DESTROYED) === 0)) {
          var derived2 = (
            /** @type {Derived} */
            reaction
          );
          var parent = derived2.parent;
          for (i = 0; i < length; i++) {
            dependency = dependencies[i];
            if (is_disconnected || !((_a2 = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a2.includes(derived2))) {
              (dependency.reactions ?? (dependency.reactions = [])).push(derived2);
            }
          }
          if (is_disconnected) {
            derived2.f ^= DISCONNECTED;
          }
          if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
            derived2.f ^= UNOWNED;
          }
        }
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_dirty(
            /** @type {Derived} */
            dependency
          )) {
            update_derived(
              /** @type {Derived} */
              dependency
            );
          }
          if (dependency.wv > reaction.wv) {
            return true;
          }
        }
      }
      if (!is_unowned || active_effect !== null && !skip_reaction) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    if (current_sources == null ? void 0 : current_sources.includes(signal)) {
      return;
    }
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root2) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var _a2;
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;
    var flags = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;
    if (reaction.ac !== null) {
      reaction.ac.abort(STALE_REACTION);
      reaction.ac = null;
    }
    try {
      reaction.f |= REACTION_IS_UPDATING;
      var result = (
        /** @type {Function} */
        (0, reaction.fn)()
      );
      var deps = reaction.deps;
      if (new_deps !== null) {
        var i;
        remove_reactions(reaction, skipped_deps);
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (!skip_reaction || // Deriveds that already have reactions can cleanup, so we still add them as reactions
        (flags & DERIVED) !== 0 && /** @type {import('#client').Derived} */
        reaction.reactions !== null) {
          for (i = skipped_deps; i < deps.length; i++) {
            ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */
            untracked_writes);
          }
        }
      }
      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }
      return result;
    } catch (error) {
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !new_deps.includes(dependency))) {
      set_signal_status(dependency, MAYBE_DIRTY);
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      destroy_derived_effects(
        /** @type {Derived} **/
        dependency
      );
      remove_reactions(
        /** @type {Derived} **/
        dependency,
        0
      );
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags = effect2.f;
    if ((flags & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var was_updating_effect = is_updating_effect;
    active_effect = effect2;
    is_updating_effect = true;
    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
    }
  }
  function get(signal) {
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
      if (!destroyed && !(current_sources == null ? void 0 : current_sources.includes(signal))) {
        var deps = active_reaction.deps;
        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          if (signal.rv < read_version) {
            signal.rv = read_version;
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else if (!skip_reaction || !new_deps.includes(signal)) {
              new_deps.push(signal);
            }
          }
        } else {
          (active_reaction.deps ?? (active_reaction.deps = [])).push(signal);
          var reactions = signal.reactions;
          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!reactions.includes(active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    } else if (is_derived && /** @type {Derived} */
    signal.deps === null && /** @type {Derived} */
    signal.effects === null) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      var parent = derived2.parent;
      if (parent !== null && (parent.f & UNOWNED) === 0) {
        derived2.f ^= UNOWNED;
      }
    }
    if (is_destroying_effect) {
      if (old_values.has(signal)) {
        return old_values.get(signal);
      }
      if (is_derived) {
        derived2 = /** @type {Derived} */
        signal;
        var value = derived2.v;
        if ((derived2.f & CLEAN) !== 0 || depends_on_old_values(derived2)) {
          value = execute_derived(derived2);
        }
        old_values.set(derived2, value);
        return value;
      }
    } else if (is_derived) {
      derived2 = /** @type {Derived} */
      signal;
      if (batch_deriveds == null ? void 0 : batch_deriveds.has(derived2)) {
        return batch_deriveds.get(derived2);
      }
      if (is_dirty(derived2)) {
        update_derived(derived2);
      }
    }
    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }
    return signal.v;
  }
  function depends_on_old_values(derived2) {
    if (derived2.v === UNINITIALIZED) return true;
    if (derived2.deps === null) return false;
    for (const dep of derived2.deps) {
      if (old_values.has(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
        /** @type {Derived} */
        dep
      )) {
        return true;
      }
    }
    return false;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  const STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function deep_read_state(value) {
    if (typeof value !== "object" || !value || value instanceof EventTarget) {
      return;
    }
    if (STATE_SYMBOL in value) {
      deep_read(value);
    } else if (!Array.isArray(value)) {
      for (let key in value) {
        const prop2 = value[key];
        if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
          deep_read(prop2);
        }
      }
    }
  }
  function deep_read(value, visited = /* @__PURE__ */ new Set()) {
    if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
    !(value instanceof EventTarget) && !visited.has(value)) {
      visited.add(value);
      if (value instanceof Date) {
        value.getTime();
      }
      for (let key in value) {
        try {
          deep_read(value[key], visited);
        } catch (e) {
        }
      }
      const proto = get_prototype_of(value);
      if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
        const descriptors = get_descriptors(proto);
        for (let key in descriptors) {
          const get2 = descriptors[key].get;
          if (get2) {
            try {
              get2.call(value);
            } catch (e) {
            }
          }
        }
      }
    }
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  let listening_to_form_reset = false;
  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        "reset",
        (evt) => {
          Promise.resolve().then(() => {
            var _a2;
            if (!evt.defaultPrevented) {
              for (
                const e of
                /**@type {HTMLFormElement} */
                evt.target.elements
              ) {
                (_a2 = e.__on_r) == null ? void 0 : _a2.call(e);
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
        { capture: true }
      );
    }
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function listen_to_event_and_reset_event(element, event2, handler, on_reset = handler) {
    element.addEventListener(event2, () => without_reactive_context(handler));
    const prev2 = element.__on_r;
    if (prev2) {
      element.__on_r = () => {
        prev2();
        on_reset(true);
      };
    } else {
      element.__on_r = () => on_reset(true);
    }
    add_form_reset_listener();
  }
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler == null ? void 0 : handler.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture2, passive) {
    var options = { capture: capture2, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || // @ts-ignore
    dom === window || // @ts-ignore
    dom === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
    dom instanceof HTMLMediaElement) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  function handle_event_propagation(event2) {
    var _a2;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = ((_a2 = event2.composedPath) == null ? void 0 : _a2.call(event2)) || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    var path_idx = 0;
    var handled_at = event2.__root;
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2.__root = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated = current_target["__" + event_name];
          if (delegated != null && (!/** @type {any} */
          current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          event2.target === current_target)) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event2, ...data]);
            } else {
              delegated.call(current_target, event2);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2.__root = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function create_fragment_from_html(html2) {
    var elem = document.createElement("template");
    elem.innerHTML = html2.replaceAll("<!>", "<!---->");
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes_start === null) {
      effect2.nodes_start = start;
      effect2.nodes_end = end;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function from_html(content, flags) {
    var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {Node} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function comment() {
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  let should_intro = true;
  function set_text(text, value) {
    var str = value == null ? "" : typeof value === "object" ? value + "" : value;
    if (str !== (text.__t ?? (text.__t = text.nodeValue))) {
      text.__t = str;
      text.nodeValue = str + "";
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  const document_listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        target.addEventListener(event_name, handle_event_propagation, { passive });
        var n = document_listeners.get(event_name);
        if (n === void 0) {
          document.addEventListener(event_name, handle_event_propagation, { passive });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    var component = void 0;
    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      branch(() => {
        if (context) {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context;
        }
        if (events) {
          props.$$events = events;
        }
        should_intro = intro;
        component = Component(anchor_node, props) || {};
        should_intro = true;
        if (context) {
          pop();
        }
      });
      return () => {
        var _a2;
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);
          var n = (
            /** @type {number} */
            document_listeners.get(event_name)
          );
          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          (_a2 = anchor_node.parentNode) == null ? void 0 : _a2.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  const PENDING = 0;
  const THEN = 1;
  const CATCH = 2;
  function await_block(node, get_input, pending_fn, then_fn, catch_fn) {
    var anchor = node;
    var runes = is_runes();
    var active_component_context = component_context;
    var input = UNINITIALIZED;
    var pending_effect;
    var then_effect;
    var catch_effect;
    var input_source = runes ? source(
      /** @type {V} */
      void 0
    ) : /* @__PURE__ */ mutable_source(
      /** @type {V} */
      void 0,
      false,
      false
    );
    var error_source = runes ? source(void 0) : /* @__PURE__ */ mutable_source(void 0, false, false);
    var resolved = false;
    function update(state2, restore) {
      resolved = true;
      if (restore) {
        set_active_effect(effect2);
        set_active_reaction(effect2);
        set_component_context(active_component_context);
      }
      try {
        if (state2 === PENDING && pending_fn) {
          if (pending_effect) resume_effect(pending_effect);
          else pending_effect = branch(() => pending_fn(anchor));
        }
        if (state2 === THEN && then_fn) {
          if (then_effect) resume_effect(then_effect);
          else then_effect = branch(() => then_fn(anchor, input_source));
        }
        if (state2 === CATCH && catch_fn) {
          if (catch_effect) resume_effect(catch_effect);
          else catch_effect = branch(() => catch_fn(anchor, error_source));
        }
        if (state2 !== PENDING && pending_effect) {
          pause_effect(pending_effect, () => pending_effect = null);
        }
        if (state2 !== THEN && then_effect) {
          pause_effect(then_effect, () => then_effect = null);
        }
        if (state2 !== CATCH && catch_effect) {
          pause_effect(catch_effect, () => catch_effect = null);
        }
      } finally {
        if (restore) {
          set_component_context(null);
          set_active_reaction(null);
          set_active_effect(null);
          flushSync();
        }
      }
    }
    var effect2 = block(() => {
      if (input === (input = get_input())) return;
      if (is_promise(input)) {
        var promise = input;
        resolved = false;
        promise.then(
          (value) => {
            if (promise !== input) return;
            internal_set(input_source, value);
            update(THEN, true);
          },
          (error) => {
            if (promise !== input) return;
            internal_set(error_source, error);
            update(CATCH, true);
            {
              throw error_source.v;
            }
          }
        );
        {
          queue_micro_task(() => {
            if (!resolved) update(PENDING, true);
          });
        }
      } else {
        internal_set(input_source, input);
        update(THEN, false);
      }
      return () => input = UNINITIALIZED;
    });
  }
  function if_block(node, fn, elseif = false) {
    var anchor = node;
    var consequent_effect = null;
    var alternate_effect = null;
    var condition = UNINITIALIZED;
    var flags = elseif ? EFFECT_TRANSPARENT : 0;
    var has_branch = false;
    const set_branch = (fn2, flag = true) => {
      has_branch = true;
      update_branch(flag, fn2);
    };
    function commit() {
      var active = condition ? consequent_effect : alternate_effect;
      var inactive = condition ? alternate_effect : consequent_effect;
      if (active) {
        resume_effect(active);
      }
      if (inactive) {
        pause_effect(inactive, () => {
          if (condition) {
            alternate_effect = null;
          } else {
            consequent_effect = null;
          }
        });
      }
    }
    const update_branch = (new_condition, fn2) => {
      if (condition === (condition = new_condition)) return;
      var target = anchor;
      if (condition) {
        consequent_effect ?? (consequent_effect = fn2 && branch(() => fn2(target)));
      } else {
        alternate_effect ?? (alternate_effect = fn2 && branch(() => fn2(target)));
      }
      {
        commit();
      }
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state2, items, controlled_anchor) {
    var items_map = state2.items;
    var transitions = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }
    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        /** @type {Element} */
        controlled_anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(
        /** @type {Element} */
        controlled_anchor
      );
      items_map.clear();
      link(state2, items[0].prev, items[length - 1].next);
    }
    run_out_transitions(transitions, () => {
      for (var i2 = 0; i2 < length; i2++) {
        var item = items[i2];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state2, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
    var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = parent_node.appendChild(create_text());
    }
    var fallback = null;
    var was_empty = false;
    var offscreen_items = /* @__PURE__ */ new Map();
    var each_array = /* @__PURE__ */ derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    var array;
    var each_effect;
    function commit() {
      reconcile(
        each_effect,
        array,
        state2,
        offscreen_items,
        anchor,
        render_fn,
        flags,
        get_key,
        get_collection
      );
      if (fallback_fn !== null) {
        if (array.length === 0) {
          if (fallback) {
            resume_effect(fallback);
          } else {
            fallback = branch(() => fallback_fn(anchor));
          }
        } else if (fallback !== null) {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
    }
    block(() => {
      each_effect ?? (each_effect = /** @type {Effect} */
      active_effect);
      array = get(each_array);
      var length = array.length;
      if (was_empty && length === 0) {
        return;
      }
      was_empty = length === 0;
      {
        {
          commit();
        }
      }
      get(each_array);
    });
  }
  function reconcile(each_effect, array, state2, offscreen_items, anchor, render_fn, flags, get_key, get_collection) {
    var _a2, _b, _c, _d;
    var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
    var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
    var length = array.length;
    var items = state2.items;
    var first = state2.first;
    var current = first;
    var seen;
    var prev2 = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var item;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        item = items.get(key);
        if (item !== void 0) {
          (_a2 = item.a) == null ? void 0 : _a2.measure();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item === void 0) {
        var pending = offscreen_items.get(key);
        if (pending !== void 0) {
          offscreen_items.delete(key);
          items.set(key, pending);
          var next2 = prev2 ? prev2.next : current;
          link(state2, prev2, pending);
          link(state2, pending, next2);
          move(pending, next2, anchor);
          prev2 = pending;
        } else {
          var child_anchor = current ? (
            /** @type {TemplateNode} */
            current.e.nodes_start
          ) : anchor;
          prev2 = create_item(
            child_anchor,
            state2,
            prev2,
            prev2 === null ? state2.first : prev2.next,
            value,
            key,
            i,
            render_fn,
            flags,
            get_collection
          );
        }
        items.set(key, prev2);
        matched = [];
        stashed = [];
        current = prev2.next;
        continue;
      }
      if (should_update) {
        update_item(item, value, i, flags);
      }
      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
        if (is_animated) {
          (_b = item.a) == null ? void 0 : _b.unfix();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
        }
      }
      if (item !== current) {
        if (seen !== void 0 && seen.has(item)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev2 = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev2, a);
            link(state2, b, start);
            current = start;
            prev2 = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(item);
            move(item, current, anchor);
            link(state2, item.prev, item.next);
            link(state2, item, prev2 === null ? state2.first : prev2.next);
            link(state2, prev2, item);
            prev2 = item;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current.k !== key) {
          if ((current.e.f & INERT) === 0) {
            (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
          }
          stashed.push(current);
          current = current.next;
        }
        if (current === null) {
          continue;
        }
        item = current;
      }
      matched.push(item);
      prev2 = item;
      current = item.next;
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = seen === void 0 ? [] : array_from(seen);
      while (current !== null) {
        if ((current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            (_c = to_destroy[i].a) == null ? void 0 : _c.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
          }
        }
        pause_effects(state2, to_destroy, controlled_anchor);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        var _a3;
        if (to_animate === void 0) return;
        for (item of to_animate) {
          (_a3 = item.a) == null ? void 0 : _a3.apply();
        }
      });
    }
    each_effect.first = state2.first && state2.first.e;
    each_effect.last = prev2 && prev2.e;
    for (var unused of offscreen_items.values()) {
      destroy_effect(unused.e);
    }
    offscreen_items.clear();
  }
  function update_item(item, value, index2, type) {
    if ((type & EACH_ITEM_REACTIVE) !== 0) {
      internal_set(item.v, value);
    }
    if ((type & EACH_INDEX_REACTIVE) !== 0) {
      internal_set(
        /** @type {Value<number>} */
        item.i,
        index2
      );
    } else {
      item.i = index2;
    }
  }
  function create_item(anchor, state2, prev2, next2, value, key, index2, render_fn, flags, get_collection, deferred2) {
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
    var v = reactive ? mutable ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev: prev2,
      next: next2
    };
    try {
      if (anchor === null) {
        var fragment = document.createDocumentFragment();
        fragment.append(anchor = create_text());
      }
      item.e = branch(() => render_fn(
        /** @type {Node} */
        anchor,
        v,
        i,
        get_collection
      ), hydrating);
      item.e.prev = prev2 && prev2.e;
      item.e.next = next2 && next2.e;
      if (prev2 === null) {
        if (!deferred2) {
          state2.first = item;
        }
      } else {
        prev2.next = item;
        prev2.e.next = item.e;
      }
      if (next2 !== null) {
        next2.prev = item;
        next2.e.prev = item.e;
      }
      return item;
    } finally {
    }
  }
  function move(item, next2, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next2 ? (
      /** @type {TemplateNode} */
      next2.e.nodes_start
    ) : anchor;
    var node = (
      /** @type {TemplateNode} */
      item.e.nodes_start
    );
    while (node !== null && node !== end) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      node = next_node;
    }
  }
  function link(state2, prev2, next2) {
    if (prev2 === null) {
      state2.first = next2;
    } else {
      prev2.next = next2;
      prev2.e.next = next2 && next2.e;
    }
    if (next2 !== null) {
      next2.prev = prev2;
      next2.e.prev = prev2 && prev2.e;
    }
  }
  function html(node, get_value, svg = false, mathml = false, skip_warning = false) {
    var anchor = node;
    var value = "";
    template_effect(() => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      if (value === (value = get_value() ?? "")) {
        return;
      }
      if (effect2.nodes_start !== null) {
        remove_effect_dom(
          effect2.nodes_start,
          /** @type {TemplateNode} */
          effect2.nodes_end
        );
        effect2.nodes_start = effect2.nodes_end = null;
      }
      if (value === "") return;
      var html2 = value + "";
      if (svg) html2 = `<svg>${html2}</svg>`;
      else if (mathml) html2 = `<math>${html2}</math>`;
      var node2 = create_fragment_from_html(html2);
      if (svg || mathml) {
        node2 = /** @type {Element} */
        /* @__PURE__ */ get_first_child(node2);
      }
      assign_nodes(
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(node2),
        /** @type {TemplateNode} */
        node2.lastChild
      );
      if (svg || mathml) {
        while (/* @__PURE__ */ get_first_child(node2)) {
          anchor.before(
            /** @type {Node} */
            /* @__PURE__ */ get_first_child(node2)
          );
        }
      } else {
        anchor.before(node2);
      }
    });
  }
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx$1() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  function clsx(value) {
    if (typeof value === "object") {
      return clsx$1(value);
    } else {
      return value ?? "";
    }
  }
  function to_class(value, hash, directives) {
    var classname = value == null ? "" : "" + value;
    if (hash) {
      classname = classname ? classname + " " + hash : hash;
    }
    return classname === "" ? null : classname;
  }
  function append_styles(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css = "";
    for (var key in styles) {
      var value = styles[key];
      if (value != null && value !== "") {
        css += " " + key + ": " + value + separator;
      }
    }
    return css;
  }
  function to_css_name(name) {
    if (name[0] !== "-" || name[1] !== "-") {
      return name.toLowerCase();
    }
    return name;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (value) {
        value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var in_str = false;
        var in_apo = 0;
        var in_comment = false;
        var reserved_names = [];
        if (normal_styles) {
          reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
        }
        if (important_styles) {
          reserved_names.push(...Object.keys(important_styles).map(to_css_name));
        }
        var start_index = 0;
        var name_index = -1;
        const len = value.length;
        for (var i = 0; i < len; i++) {
          var c = value[i];
          if (in_comment) {
            if (c === "/" && value[i - 1] === "*") {
              in_comment = false;
            }
          } else if (in_str) {
            if (in_str === c) {
              in_str = false;
            }
          } else if (c === "/" && value[i + 1] === "*") {
            in_comment = true;
          } else if (c === '"' || c === "'") {
            in_str = c;
          } else if (c === "(") {
            in_apo++;
          } else if (c === ")") {
            in_apo--;
          }
          if (!in_comment && in_str === false && in_apo === 0) {
            if (c === ":" && name_index === -1) {
              name_index = i;
            } else if (c === ";" || i === len - 1) {
              if (name_index !== -1) {
                var name = to_css_name(value.substring(start_index, name_index).trim());
                if (!reserved_names.includes(name)) {
                  if (c !== ";") {
                    i++;
                  }
                  var property = value.substring(start_index, i).trim();
                  new_style += " " + property + ";";
                }
              }
              start_index = i + 1;
              name_index = -1;
            }
          }
        }
      }
      if (normal_styles) {
        new_style += append_styles(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return value == null ? null : String(value);
  }
  function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
    var prev2 = dom.__className;
    if (prev2 !== value || prev2 === void 0) {
      var next_class_name = to_class(value, hash);
      {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else {
          dom.className = next_class_name;
        }
      }
      dom.__className = value;
    }
    return next_classes;
  }
  function update_styles(dom, prev2 = {}, next2, priority) {
    for (var key in next2) {
      var value = next2[key];
      if (prev2[key] !== value) {
        if (next2[key] == null) {
          dom.style.removeProperty(key);
        } else {
          dom.style.setProperty(key, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev2 = dom.__style;
    if (prev2 !== value) {
      var next_style_attr = to_style(value, next_styles);
      {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom.__style = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles == null ? void 0 : prev_styles[0], next_styles[0]);
        update_styles(dom, prev_styles == null ? void 0 : prev_styles[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }
  const IS_CUSTOM_ELEMENT = Symbol("is custom element");
  const IS_HTML = Symbol("is html");
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = get_attributes(element);
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "loading") {
      element[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  function get_attributes(element) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      // @ts-expect-error
      element.__attributes ?? (element.__attributes = {
        [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
        [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
      })
    );
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var setters = setters_cache.get(element.nodeName);
    if (setters) return setters;
    setters_cache.set(element.nodeName, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  const now = () => performance.now();
  const raf = {
    // don't access requestAnimationFrame eagerly outside method
    // this allows basic testing of user code without JSDOM
    // bunder will eval and remove ternary when the user's app is built
    tick: (
      /** @param {any} _ */
      (_) => requestAnimationFrame(_)
    ),
    now: () => now(),
    tasks: /* @__PURE__ */ new Set()
  };
  function run_tasks() {
    const now2 = raf.now();
    raf.tasks.forEach((task) => {
      if (!task.c(now2)) {
        raf.tasks.delete(task);
        task.f();
      }
    });
    if (raf.tasks.size !== 0) {
      raf.tick(run_tasks);
    }
  }
  function loop(callback) {
    let task;
    if (raf.tasks.size === 0) {
      raf.tick(run_tasks);
    }
    return {
      promise: new Promise((fulfill) => {
        raf.tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        raf.tasks.delete(task);
      }
    };
  }
  function dispatch_event(element, type) {
    without_reactive_context(() => {
      element.dispatchEvent(new CustomEvent(type));
    });
  }
  function css_property_to_camelcase(style) {
    if (style === "float") return "cssFloat";
    if (style === "offset") return "cssOffset";
    if (style.startsWith("--")) return style;
    const parts = style.split("-");
    if (parts.length === 1) return parts[0];
    return parts[0] + parts.slice(1).map(
      /** @param {any} word */
      (word) => word[0].toUpperCase() + word.slice(1)
    ).join("");
  }
  function css_to_keyframe(css) {
    const keyframe = {};
    const parts = css.split(";");
    for (const part of parts) {
      const [property, value] = part.split(":");
      if (!property || value === void 0) break;
      const formatted_property = css_property_to_camelcase(property.trim());
      keyframe[formatted_property] = value.trim();
    }
    return keyframe;
  }
  const linear$1 = (t) => t;
  function transition(flags, element, get_fn, get_params) {
    var is_intro = (flags & TRANSITION_IN) !== 0;
    var is_outro = (flags & TRANSITION_OUT) !== 0;
    var is_both = is_intro && is_outro;
    var is_global = (flags & TRANSITION_GLOBAL) !== 0;
    var direction = is_both ? "both" : is_intro ? "in" : "out";
    var current_options;
    var inert = element.inert;
    var overflow = element.style.overflow;
    var intro;
    var outro;
    function get_options() {
      return without_reactive_context(() => {
        return current_options ?? (current_options = get_fn()(element, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
        {}, {
          direction
        }));
      });
    }
    var transition2 = {
      is_global,
      in() {
        var _a2;
        element.inert = inert;
        if (!is_intro) {
          outro == null ? void 0 : outro.abort();
          (_a2 = outro == null ? void 0 : outro.reset) == null ? void 0 : _a2.call(outro);
          return;
        }
        if (!is_outro) {
          intro == null ? void 0 : intro.abort();
        }
        dispatch_event(element, "introstart");
        intro = animate(element, get_options(), outro, 1, () => {
          dispatch_event(element, "introend");
          intro == null ? void 0 : intro.abort();
          intro = current_options = void 0;
          element.style.overflow = overflow;
        });
      },
      out(fn) {
        if (!is_outro) {
          fn == null ? void 0 : fn();
          current_options = void 0;
          return;
        }
        element.inert = true;
        dispatch_event(element, "outrostart");
        outro = animate(element, get_options(), intro, 0, () => {
          dispatch_event(element, "outroend");
          fn == null ? void 0 : fn();
        });
      },
      stop: () => {
        intro == null ? void 0 : intro.abort();
        outro == null ? void 0 : outro.abort();
      }
    };
    var e = (
      /** @type {Effect} */
      active_effect
    );
    (e.transitions ?? (e.transitions = [])).push(transition2);
    if (is_intro && should_intro) {
      var run2 = is_global;
      if (!run2) {
        var block2 = (
          /** @type {Effect | null} */
          e.parent
        );
        while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
          while (block2 = block2.parent) {
            if ((block2.f & BLOCK_EFFECT) !== 0) break;
          }
        }
        run2 = !block2 || (block2.f & EFFECT_RAN) !== 0;
      }
      if (run2) {
        effect(() => {
          untrack(() => transition2.in());
        });
      }
    }
  }
  function animate(element, options, counterpart, t2, on_finish) {
    var is_intro = t2 === 1;
    if (is_function(options)) {
      var a;
      var aborted = false;
      queue_micro_task(() => {
        if (aborted) return;
        var o = options({ direction: is_intro ? "in" : "out" });
        a = animate(element, o, counterpart, t2, on_finish);
      });
      return {
        abort: () => {
          aborted = true;
          a == null ? void 0 : a.abort();
        },
        deactivate: () => a.deactivate(),
        reset: () => a.reset(),
        t: () => a.t()
      };
    }
    counterpart == null ? void 0 : counterpart.deactivate();
    if (!(options == null ? void 0 : options.duration)) {
      on_finish();
      return {
        abort: noop,
        deactivate: noop,
        reset: noop,
        t: () => t2
      };
    }
    const { delay = 0, css, tick, easing = linear$1 } = options;
    var keyframes = [];
    if (is_intro && counterpart === void 0) {
      if (tick) {
        tick(0, 1);
      }
      if (css) {
        var styles = css_to_keyframe(css(0, 1));
        keyframes.push(styles, styles);
      }
    }
    var get_t = () => 1 - t2;
    var animation = element.animate(keyframes, { duration: delay, fill: "forwards" });
    animation.onfinish = () => {
      animation.cancel();
      var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
      counterpart == null ? void 0 : counterpart.abort();
      var delta = t2 - t1;
      var duration = (
        /** @type {number} */
        options.duration * Math.abs(delta)
      );
      var keyframes2 = [];
      if (duration > 0) {
        var needs_overflow_hidden = false;
        if (css) {
          var n = Math.ceil(duration / (1e3 / 60));
          for (var i = 0; i <= n; i += 1) {
            var t = t1 + delta * easing(i / n);
            var styles2 = css_to_keyframe(css(t, 1 - t));
            keyframes2.push(styles2);
            needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
          }
        }
        if (needs_overflow_hidden) {
          element.style.overflow = "hidden";
        }
        get_t = () => {
          var time = (
            /** @type {number} */
            /** @type {globalThis.Animation} */
            animation.currentTime
          );
          return t1 + delta * easing(time / duration);
        };
        if (tick) {
          loop(() => {
            if (animation.playState !== "running") return false;
            var t3 = get_t();
            tick(t3, 1 - t3);
            return true;
          });
        }
      }
      animation = element.animate(keyframes2, { duration, fill: "forwards" });
      animation.onfinish = () => {
        get_t = () => t2;
        tick == null ? void 0 : tick(t2, 1 - t2);
        on_finish();
      };
    };
    return {
      abort: () => {
        if (animation) {
          animation.cancel();
          animation.effect = null;
          animation.onfinish = noop;
        }
      },
      deactivate: () => {
        on_finish = noop;
      },
      reset: () => {
        if (t2 === 0) {
          tick == null ? void 0 : tick(1, 0);
        }
      },
      t: () => get_t()
    };
  }
  function bind_value(input, get2, set2 = get2) {
    var runes = is_runes();
    var batches2 = /* @__PURE__ */ new WeakSet();
    listen_to_event_and_reset_event(input, "input", (is_reset) => {
      var value = is_reset ? input.defaultValue : input.value;
      value = is_numberlike_input(input) ? to_number(value) : value;
      set2(value);
      if (current_batch !== null) {
        batches2.add(current_batch);
      }
      if (runes && value !== (value = get2())) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        input.value = value ?? "";
        if (end !== null) {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, input.value.length);
        }
      }
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the updated value from the input instead.
      // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      untrack(get2) == null && input.value
    ) {
      set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
      if (current_batch !== null) {
        batches2.add(current_batch);
      }
    }
    render_effect(() => {
      var value = get2();
      if (input === document.activeElement && batches2.has(
        /** @type {Batch} */
        current_batch
      )) {
        return;
      }
      if (is_numberlike_input(input) && value === to_number(input.value)) {
        return;
      }
      if (input.type === "date" && !value && !input.value) {
        return;
      }
      if (value !== input.value) {
        input.value = value ?? "";
      }
    });
  }
  function is_numberlike_input(input) {
    var type = input.type;
    return type === "number" || type === "range";
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        queue_micro_task(() => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        });
      };
    });
    return element_or_component;
  }
  function init(immutable = false) {
    const context = (
      /** @type {ComponentContextLegacy} */
      component_context
    );
    const callbacks = context.l.u;
    if (!callbacks) return;
    let props = () => deep_read_state(context.s);
    if (immutable) {
      let version = 0;
      let prev2 = (
        /** @type {Record<string, any>} */
        {}
      );
      const d = /* @__PURE__ */ derived(() => {
        let changed = false;
        const props2 = context.s;
        for (const key in props2) {
          if (props2[key] !== prev2[key]) {
            prev2[key] = props2[key];
            changed = true;
          }
        }
        if (changed) version++;
        return version;
      });
      props = () => get(d);
    }
    if (callbacks.b.length) {
      user_pre_effect(() => {
        observe_all(context, props);
        run_all(callbacks.b);
      });
    }
    user_effect(() => {
      const fns = untrack(() => callbacks.m.map(run));
      return () => {
        for (const fn of fns) {
          if (typeof fn === "function") {
            fn();
          }
        }
      };
    });
    if (callbacks.a.length) {
      user_effect(() => {
        observe_all(context, props);
        run_all(callbacks.a);
      });
    }
  }
  function observe_all(context, props) {
    if (context.l.s) {
      for (const signal of context.l.s) get(signal);
    }
    props();
  }
  let is_store_binding = false;
  function capture_store_binding(fn) {
    var previous_is_store_binding = is_store_binding;
    try {
      is_store_binding = false;
      return [fn(), is_store_binding];
    } finally {
      is_store_binding = previous_is_store_binding;
    }
  }
  function prop(props, key, flags, fallback) {
    var _a2;
    var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
    var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
    var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;
        fallback_value = lazy ? untrack(
          /** @type {() => V} */
          fallback
        ) : (
          /** @type {V} */
          fallback
        );
      }
      return fallback_value;
    };
    var setter;
    if (bindable) {
      var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
      setter = ((_a2 = get_descriptor(props, key)) == null ? void 0 : _a2.set) ?? (is_entry_props && key in props ? (v) => props[key] = v : void 0);
    }
    var initial_value;
    var is_store_sub = false;
    if (bindable) {
      [initial_value, is_store_sub] = capture_store_binding(() => (
        /** @type {V} */
        props[key]
      ));
    } else {
      initial_value = /** @type {V} */
      props[key];
    }
    if (initial_value === void 0 && fallback !== void 0) {
      initial_value = get_fallback();
      if (setter) {
        if (runes) props_invalid_value();
        setter(initial_value);
      }
    }
    var getter;
    if (runes) {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    } else {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value !== void 0) {
          fallback_value = /** @type {V} */
          void 0;
        }
        return value === void 0 ? fallback_value : value;
      };
    }
    if (runes && (flags & PROPS_IS_UPDATED) === 0) {
      return getter;
    }
    if (setter) {
      var legacy_parent = props.$$legacy;
      return function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        }
        return getter();
      };
    }
    var overridden = false;
    var d = ((flags & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
      overridden = false;
      return getter();
    });
    if (bindable) get(d);
    var parent_effect = (
      /** @type {Effect} */
      active_effect
    );
    return function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
        set(d, new_value);
        overridden = true;
        if (fallback_value !== void 0) {
          fallback_value = new_value;
        }
        return value;
      }
      if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
        return d.v;
      }
      return get(d);
    };
  }
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component();
    }
    if (legacy_mode_flag && component_context.l !== null) {
      init_update_callbacks(component_context).m.push(fn);
    } else {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
          /** @type {() => void} */
          cleanup
        );
      });
    }
  }
  function init_update_callbacks(context) {
    var l = (
      /** @type {ComponentContextLegacy} */
      context.l
    );
    return l.u ?? (l.u = { a: [], b: [], m: [] });
  }
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined") {
    ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(PUBLIC_VERSION);
  }
  enable_legacy_mode_flag();
  var root$6 = /* @__PURE__ */ from_html(`<div class="loadership_ZOJAQ svelte-i1jlc0"><div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div> <div class="svelte-i1jlc0"></div></div>`);
  function Spinner($$anchor) {
    var div = root$6();
    append($$anchor, div);
  }
  var root_1$2 = /* @__PURE__ */ from_html(`<img class="fi svelte-7lhsry"/>`);
  function CountryFlag($$anchor, $$props) {
    const countryCodes = {
      Afghanistan: "af",
      Albania: "al",
      Algeria: "dz",
      Andorra: "ad",
      Angola: "ao",
      "Antigua and Barbuda": "ag",
      Argentina: "ar",
      Armenia: "am",
      Australia: "au",
      Austria: "at",
      Azerbaijan: "az",
      Bahamas: "bs",
      Bahrain: "bh",
      Bangladesh: "bd",
      Barbados: "bb",
      Belarus: "by",
      Belgium: "be",
      Belize: "bz",
      Benin: "bj",
      Bhutan: "bt",
      Bolivia: "bo",
      "Bosnia and Herzegovina": "ba",
      Botswana: "bw",
      Brazil: "br",
      Brunei: "bn",
      Bulgaria: "bg",
      "Burkina Faso": "bf",
      Burundi: "bi",
      "Cabo Verde": "cv",
      Cambodia: "kh",
      Cameroon: "cm",
      Canada: "ca",
      "Central African Republic": "cf",
      Chad: "td",
      Chile: "cl",
      China: "cn",
      Colombia: "co",
      Comoros: "km",
      Congo: "cg",
      "Costa Rica": "cr",
      Croatia: "hr",
      Cuba: "cu",
      Curacao: "cw",
      Cyprus: "cy",
      Czechia: "cz",
      "Christmas Island": "cx",
      "Democratic Republic of the Congo": "cd",
      Denmark: "dk",
      Djibouti: "dj",
      Dominica: "dm",
      "Dominican Republic": "do",
      Ecuador: "ec",
      Egypt: "eg",
      "El Salvador": "sv",
      "Equatorial Guinea": "gq",
      Eritrea: "er",
      Estonia: "ee",
      Eswatini: "sz",
      Ethiopia: "et",
      Fiji: "fj",
      Finland: "fi",
      France: "fr",
      Gabon: "ga",
      Gambia: "gm",
      Georgia: "ge",
      Germany: "de",
      Ghana: "gh",
      Greece: "gr",
      Grenada: "gd",
      Guatemala: "gt",
      Guinea: "gn",
      "Guinea-Bissau": "gw",
      Guyana: "gy",
      Haiti: "ht",
      Honduras: "hn",
      Hungary: "hu",
      Iceland: "is",
      India: "in",
      Indonesia: "id",
      Iran: "ir",
      Iraq: "iq",
      Ireland: "ie",
      Israel: "il",
      Italy: "it",
      Jamaica: "jm",
      Japan: "jp",
      Jordan: "jo",
      Kazakhstan: "kz",
      Kenya: "ke",
      Kiribati: "ki",
      Kuwait: "kw",
      Kyrgyzstan: "kg",
      Laos: "la",
      Latvia: "lv",
      Lebanon: "lb",
      Lesotho: "ls",
      Liberia: "lr",
      Libya: "ly",
      Liechtenstein: "li",
      Lithuania: "lt",
      Luxembourg: "lu",
      Madagascar: "mg",
      Malawi: "mw",
      Malaysia: "my",
      Maldives: "mv",
      Mali: "ml",
      Malta: "mt",
      "Marshall Islands": "mh",
      Mauritania: "mr",
      Mauritius: "mu",
      Mexico: "mx",
      Micronesia: "fm",
      Moldova: "md",
      Monaco: "mc",
      Mongolia: "mn",
      Montenegro: "me",
      Morocco: "ma",
      Mozambique: "mz",
      Myanmar: "mm",
      Namibia: "na",
      Nauru: "nr",
      Nepal: "np",
      Netherlands: "nl",
      "New Zealand": "nz",
      Nicaragua: "ni",
      Niger: "ne",
      Nigeria: "ng",
      "North Korea": "kp",
      "North Macedonia": "mk",
      Norway: "no",
      Oman: "om",
      Pakistan: "pk",
      Palau: "pw",
      "Palestine State": "ps",
      Panama: "pa",
      "Papua New Guinea": "pg",
      Paraguay: "py",
      Peru: "pe",
      Philippines: "ph",
      Poland: "pl",
      Portugal: "pt",
      "Puerto Rico": "pr",
      Qatar: "qa",
      Romania: "ro",
      Russia: "ru",
      Rwanda: "rw",
      "Saint Kitts and Nevis": "kn",
      "Saint Lucia": "lc",
      "Saint Vincent and the Grenadines": "vc",
      Samoa: "ws",
      "San Marino": "sm",
      "Sao Tome and Principe": "st",
      "Saudi Arabia": "sa",
      Senegal: "sn",
      Serbia: "rs",
      Seychelles: "sc",
      "Sierra Leone": "sl",
      Singapore: "sg",
      Slovakia: "sk",
      Slovenia: "si",
      "Solomon Islands": "sb",
      Somalia: "so",
      "South Africa": "za",
      "South Korea": "kr",
      "South Sudan": "ss",
      Spain: "es",
      "Sri Lanka": "lk",
      Sudan: "sd",
      Suriname: "sr",
      Sweden: "se",
      Switzerland: "ch",
      Syria: "sy",
      Taiwan: "tw",
      Tajikistan: "tj",
      Tanzania: "tz",
      Thailand: "th",
      "Timor-Leste": "tl",
      Togo: "tg",
      Tonga: "to",
      "Trinidad and Tobago": "tt",
      Tunisia: "tn",
      Turkey: "tr",
      Turkmenistan: "tm",
      Tuvalu: "tv",
      Uganda: "ug",
      Ukraine: "ua",
      "United Arab Emirates": "ae",
      "United Kingdom": "gb",
      "United States of America": "us",
      "United States": "us",
      Uruguay: "uy",
      Uzbekistan: "uz",
      Vanuatu: "vu",
      "Vatican City": "va",
      Venezuela: "ve",
      Vietnam: "vn",
      Yemen: "ye",
      Zambia: "zm",
      Zimbabwe: "zw"
    };
    const countryCode = countryCodes[$$props.countryName];
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var img = root_1$2();
        template_effect(
          ($0) => {
            set_attribute(img, "alt", $$props.countryName);
            set_attribute(img, "src", `https://purecatamphetamine.github.io/country-flag-icons/3x2/${$0 ?? ""}.svg`);
          },
          [() => countryCode.toUpperCase()]
        );
        append($$anchor2, img);
      };
      if_block(node, ($$render) => {
        if (countryCode) $$render(consequent);
      });
    }
    append($$anchor, fragment);
  }
  const leftKey = "geometa:containerStyleLeft";
  const topKey = "geometa:containerStyleTop";
  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };
  function getSavedPosition(key) {
    const value = localStorage.getItem(key);
    if (value && value.startsWith("-")) {
      return null;
    }
    return value;
  }
  function setContainerPosition(container) {
    container.style.left = getSavedPosition(leftKey) ?? container.style.left;
    container.style.top = getSavedPosition(topKey) ?? container.style.top;
  }
  const onPointerDown = (event2, container) => {
    const target = event2.target;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    isDragging = true;
    container.setPointerCapture(event2.pointerId);
    dragOffset = {
      x: event2.clientX - container.getBoundingClientRect().left,
      y: event2.clientY - container.getBoundingClientRect().top
    };
    event2.preventDefault();
  };
  const onPointerMove = (event2, container) => {
    if (isDragging) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      let newLeft = event2.clientX - dragOffset.x;
      let newTop = event2.clientY - dragOffset.y;
      if (newLeft < 0) newLeft = 0;
      if (newLeft + containerWidth > windowWidth) {
        newLeft = windowWidth - containerWidth;
      }
      if (newTop < 0) newTop = 0;
      if (newTop + containerHeight > windowHeight) {
        newTop = windowHeight - containerHeight;
      }
      container.style.left = `${newLeft}px`;
      container.style.top = `${newTop}px`;
    }
  };
  const onPointerUp = (event2, container) => {
    isDragging = false;
    if (container && container.hasPointerCapture(event2.pointerId)) {
      container.releasePointerCapture(event2.pointerId);
    }
    _unsafeWindow.localStorage.setItem(leftKey, container.style.left);
    _unsafeWindow.localStorage.setItem(topKey, container.style.top);
  };
  const widthKey = "geometa:containerWidth";
  const heightKey = "geometa:containerHeight";
  function setContainerDimensions(container) {
    const containerWidth = localStorageGetInt(widthKey) || 500;
    const containerHeight = localStorageGetInt(heightKey) || 400;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
  }
  function saveContainerDimensions(entry) {
    const containerWidth = entry.contentRect.width;
    const containerHeight = entry.contentRect.height;
    if (containerWidth !== 0 && containerHeight !== 0) {
      _unsafeWindow.localStorage.setItem(widthKey, Math.floor(containerWidth).toString());
      _unsafeWindow.localStorage.setItem(heightKey, Math.floor(containerHeight).toString());
    }
  }
  function prev(__1, currentIndex, images) {
    set(currentIndex, (get(currentIndex) - 1 + images().length) % images().length);
  }
  function next(__2, currentIndex, images) {
    set(currentIndex, (get(currentIndex) + 1) % images().length);
  }
  function handleMouseMove(event2, containerRef, lensX, lensY) {
    if (!get(containerRef)) return;
    const rect = get(containerRef).getBoundingClientRect();
    set(lensX, event2.clientX - rect.left);
    set(lensY, event2.clientY - rect.top);
  }
  var root_4 = /* @__PURE__ */ from_html(`<div class="lens svelte-fofh7f"></div>`);
  var root_3$1 = /* @__PURE__ */ from_html(`<div class="image-wrapper svelte-fofh7f" role="img" aria-label="Zoomable image"><img class="responsive-image svelte-fofh7f"/> <!></div>`);
  var root_6$1 = /* @__PURE__ */ from_html(`<button></button>`);
  var root_5$1 = /* @__PURE__ */ from_html(`<div class="controls"><button class="click-area prev-area svelte-fofh7f" type="button" aria-label="Previous image"><span class="prev svelte-fofh7f">&#10094;</span></button> <button class="click-area next-area svelte-fofh7f" type="button" aria-label="Next image"><span class="next svelte-fofh7f">&#10095;</span></button></div> <div class="indicators svelte-fofh7f"></div>`, 1);
  var root$5 = /* @__PURE__ */ from_html(`<div class="carousel svelte-fofh7f"><!> <!></div>`);
  function Carousel($$anchor, $$props) {
    push($$props, false);
    let images = prop($$props, "images", 24, () => []);
    let currentIndex = /* @__PURE__ */ mutable_source(0);
    let containerRef = /* @__PURE__ */ mutable_source(null);
    let imageRef = /* @__PURE__ */ mutable_source(null);
    let isZoomed = /* @__PURE__ */ mutable_source(false);
    let lensX = /* @__PURE__ */ mutable_source(0);
    let lensY = /* @__PURE__ */ mutable_source(0);
    let lensSize = 150;
    let scale = 2;
    function handleMouseEnter() {
      set(isZoomed, true);
    }
    function handleMouseLeave() {
      set(isZoomed, false);
    }
    init();
    var div = root$5();
    var node = child(div);
    {
      var consequent_2 = ($$anchor2) => {
        var fragment = comment();
        var node_1 = first_child(fragment);
        each(node_1, 1, images, index, ($$anchor3, image, index2) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          {
            var consequent_1 = ($$anchor4) => {
              var div_1 = root_3$1();
              div_1.__mousemove = [handleMouseMove, containerRef, lensX, lensY];
              var img = child(div_1);
              set_attribute(img, "alt", `Image ${index2 + 1}`);
              bind_this(img, ($$value) => set(imageRef, $$value), () => get(imageRef));
              var node_3 = sibling(img, 2);
              {
                var consequent = ($$anchor5) => {
                  var div_2 = root_4();
                  template_effect(() => set_style(div_2, `
                /* Position the lens so the mouse is in its center */
                top: ${get(lensY) - lensSize / 2}px;
                left: ${get(lensX) - lensSize / 2}px;
                width: 150px;
                height: 150px;
                background-image: url(${get(image) ?? ""});
                background-repeat: no-repeat;
                background-size: ${(get(imageRef), untrack(() => get(imageRef).width * scale)) ?? ""}px ${(get(imageRef), untrack(() => get(imageRef).height * scale)) ?? ""}px;
                background-position: ${-(get(lensX) * scale - lensSize / 2)}px ${-(get(lensY) * scale - lensSize / 2)}px;
              `));
                  append($$anchor5, div_2);
                };
                if_block(node_3, ($$render) => {
                  if (get(isZoomed) && get(imageRef)) $$render(consequent);
                });
              }
              bind_this(div_1, ($$value) => set(containerRef, $$value), () => get(containerRef));
              template_effect(() => set_attribute(img, "src", get(image)));
              event("mouseenter", div_1, handleMouseEnter);
              event("mouseleave", div_1, handleMouseLeave);
              append($$anchor4, div_1);
            };
            if_block(node_2, ($$render) => {
              if (index2 === get(currentIndex)) $$render(consequent_1);
            });
          }
          append($$anchor3, fragment_1);
        });
        append($$anchor2, fragment);
      };
      if_block(node, ($$render) => {
        if (deep_read_state(images()), untrack(() => images().length)) $$render(consequent_2);
      });
    }
    var node_4 = sibling(node, 2);
    {
      var consequent_3 = ($$anchor2) => {
        var fragment_2 = root_5$1();
        var div_3 = first_child(fragment_2);
        var button = child(div_3);
        button.__click = [prev, currentIndex, images];
        var button_1 = sibling(button, 2);
        button_1.__click = [next, currentIndex, images];
        var div_4 = sibling(div_3, 2);
        each(div_4, 5, images, index, ($$anchor3, _, index2) => {
          var button_2 = root_6$1();
          set_attribute(button_2, "aria-label", `Switch to image ${index2 + 1}`);
          button_2.__click = () => set(currentIndex, index2);
          template_effect(() => set_class(button_2, 1, `indicator ${index2 === get(currentIndex) ? "active" : ""}`, "svelte-fofh7f"));
          append($$anchor3, button_2);
        });
        append($$anchor2, fragment_2);
      };
      if_block(node_4, ($$render) => {
        if (deep_read_state(images()), untrack(() => images().length > 1)) $$render(consequent_3);
      });
    }
    append($$anchor, div);
    pop();
  }
  delegate(["mousemove", "click"]);
  const ANNOUNCEMENT_CACHE_KEY = "geometa:cached-announcement";
  const ANNOUNCEMENT_CACHE_DURATION_MS = 60 * 60 * 1e3;
  const ANNOUNCEMENT_API_URL = "https://learnablemeta.com/api/userscript/announcement/";
  async function getAnnouncement() {
    try {
      const cachedItemString = localStorage.getItem(ANNOUNCEMENT_CACHE_KEY);
      if (cachedItemString) {
        const cachedEntry = JSON.parse(cachedItemString);
        const now2 = Date.now();
        if (now2 - cachedEntry.fetchedAt < ANNOUNCEMENT_CACHE_DURATION_MS) {
          return cachedEntry.data;
        } else {
          localStorage.removeItem(ANNOUNCEMENT_CACHE_KEY);
        }
      }
    } catch (e) {
      localStorage.removeItem(ANNOUNCEMENT_CACHE_KEY);
    }
    return new Promise((resolve) => {
      _GM_xmlhttpRequest({
        method: "GET",
        url: ANNOUNCEMENT_API_URL,
        timeout: 3e3,
        onload: (response) => {
          let announcementToCache = null;
          if (response.status === 200) {
            try {
              if (response.responseText && response.responseText.trim().toLowerCase() !== "null") {
                const parsedData = JSON.parse(response.responseText);
                if (parsedData && typeof parsedData.timestamp === "number" && typeof parsedData.htmlMessage === "string") {
                  announcementToCache = parsedData;
                }
              }
            } catch (parseError) {
              console.error("Failed to parse announcement JSON from API:", parseError, response.responseText);
            }
          } else {
            console.error(`Error fetching announcement from API: ${response.status} ${response.statusText}`);
          }
          const itemToCache = {
            data: announcementToCache,
            fetchedAt: Date.now()
          };
          try {
            localStorage.setItem(ANNOUNCEMENT_CACHE_KEY, JSON.stringify(itemToCache));
            console.log(announcementToCache ? "Fetched announcement cached." : "Fetched 'no announcement' state cached.");
          } catch (e) {
            console.warn("Error writing announcement state to localStorage cache:", e);
          }
          resolve(announcementToCache);
        },
        onerror: (error) => {
          console.error("Network error fetching announcement from API:", error);
          resolve(null);
        },
        ontimeout: () => {
          console.error("Timeout fetching announcement from API.");
          resolve(null);
        }
      });
    });
  }
  const LAST_DISMISSED_ANNOUNCEMENT_TIMESTAMP_KEY = "geometa:last-dismissed-announcement";
  function getLastDismissedAnnouncementTimestamp() {
    try {
      const storedValue = localStorage.getItem(LAST_DISMISSED_ANNOUNCEMENT_TIMESTAMP_KEY);
      if (storedValue) {
        const timestamp = parseInt(storedValue, 10);
        return !isNaN(timestamp) ? timestamp : null;
      }
      return null;
    } catch (e) {
      console.warn("LocalStorage Error: Could not retrieve last dismissed announcement timestamp.", e);
      return null;
    }
  }
  function markAnnouncementAsDismissed(announcementTimestamp) {
    if (isNaN(announcementTimestamp)) {
      console.error("Invalid timestamp provided to markAnnouncementAsDismissed. Must be a number.", announcementTimestamp);
      return;
    }
    try {
      localStorage.setItem(LAST_DISMISSED_ANNOUNCEMENT_TIMESTAMP_KEY, announcementTimestamp.toString());
    } catch (e) {
      console.warn("LocalStorage Error: Could not save last dismissed announcement timestamp.", e);
    }
  }
  function proceed(_, showModal, currentUrl) {
    set(showModal, false);
    window.open(get(currentUrl), "_blank");
  }
  function cancel(__1, showModal) {
    set(showModal, false);
  }
  function togglePopup(__2, showHelpPopup, updateHelpClass) {
    set(showHelpPopup, !get(showHelpPopup));
    if (get(showHelpPopup)) {
      markHelpMessageAsRead();
      updateHelpClass();
    }
  }
  var on_click = (__3, announcement, lastDismissedTimestamp) => {
    markAnnouncementAsDismissed(get(announcement).timestamp);
    set(lastDismissedTimestamp, get(announcement).timestamp, true);
  };
  var root_2 = /* @__PURE__ */ from_html(`<div class="announcement svelte-a3mhc8"><div class="svelte-a3mhc8"><!></div> <button class="vote-close-btn svelte-a3mhc8" aria-label="Dismiss announcement">Dismiss</button></div>`);
  var root_3 = /* @__PURE__ */ from_html(`<p class="svelte-a3mhc8"> </p>`);
  var root_6 = /* @__PURE__ */ from_html(`<p class="geometa-footer svelte-a3mhc8"><!></p>`);
  var root_7 = /* @__PURE__ */ from_html(`<hr class="svelte-a3mhc8"/> <!>`, 1);
  var root_5 = /* @__PURE__ */ from_html(`<p class="svelte-a3mhc8"><!> <strong class="svelte-a3mhc8"> </strong> </p> <div class="geometa-note svelte-a3mhc8"><!></div> <!> <!>`, 1);
  var root_9 = /* @__PURE__ */ from_html(`<div class="modal-backdrop svelte-a3mhc8"><div class="modal svelte-a3mhc8"><p class="svelte-a3mhc8">You are about to open this site in a new tab:</p> <p class="modal-url svelte-a3mhc8"> </p> <div class="modal-buttons svelte-a3mhc8"><button class="proceed-btn svelte-a3mhc8">Continue</button> <button class="close-btn svelte-a3mhc8">Cancel</button></div></div></div>`);
  var root_11 = /* @__PURE__ */ from_html(`<p class="outdated svelte-a3mhc8"><strong class="svelte-a3mhc8"> </strong></p>`);
  var root_10 = /* @__PURE__ */ from_html(`<div class="modal-backdrop svelte-a3mhc8"><div class="modal svelte-a3mhc8"><div class="help-message svelte-a3mhc8"><!> <p class="svelte-a3mhc8">Welcome to LearnableMeta, we hope you are enjoying it, some quick info:</p> <ul class="svelte-a3mhc8"><li class="svelte-a3mhc8"><strong class="svelte-a3mhc8">Drag to Move:</strong> Click and drag the top of the note to reposition it anywhere on your
              screen.</li> <li class="svelte-a3mhc8"><strong class="svelte-a3mhc8">Resize:</strong> Use the bottom-right corner to resize the note to your liking.</li> <li class="svelte-a3mhc8"><strong class="svelte-a3mhc8">View Map meta list:</strong> Click the list icon to see all the metas included in the map you
              are currently playing.</li> <li class="svelte-a3mhc8"><strong class="svelte-a3mhc8">Join the Community:</strong> Click the Discord icon to share feedback, suggest improvements, or
              just say hi!</li> <li class="svelte-a3mhc8"><strong class="svelte-a3mhc8">Outdated Script:</strong> The question mark icon will blink if the script is outdated.</li></ul></div> <button class="close-btn svelte-a3mhc8">Close</button></div></div>`);
  var root$4 = /* @__PURE__ */ from_html(`<div class="geometa-container svelte-a3mhc8"><!> <div class="flex header svelte-a3mhc8"><h2 class="svelte-a3mhc8">Learnable Meta</h2> <div class="icons svelte-a3mhc8"><a target="_blank" aria-label="List of map metas" class="svelte-a3mhc8"><span class="skill-icons--list svelte-a3mhc8"></span></a> <a href="https://learnablemeta.com/" target="_blank" aria-label="Learnable Meta website" class="svelte-a3mhc8"><span class="flat-color-icons--globe svelte-a3mhc8"></span></a> <a href="https://discord.gg/AcXEWznYZe" target="_blank" aria-label="Learnable Meta discord" class="svelte-a3mhc8"><span class="skill-icons--discord svelte-a3mhc8"></span></a> <button aria-label="More information" style="background: none; border: none; padding: 0;" class="svelte-a3mhc8"><span></span></button></div></div> <!> <!> <!></div>`);
  function App($$anchor, $$props) {
    push($$props, true);
    let geoInfo = /* @__PURE__ */ state(null);
    let error = /* @__PURE__ */ state(null);
    let container;
    let header;
    onMount(() => {
      var _a2;
      const cacheKey = `${$$props.mapId}_${$$props.panoId}`;
      const cachedData = (_a2 = window.geometaMetaCache) == null ? void 0 : _a2.get(cacheKey);
      if (cachedData) {
        set(geoInfo, cachedData, true);
      } else {
        const urlParams = new URLSearchParams({
          panoId: $$props.panoId,
          mapId: $$props.mapId,
          userscriptVersion: $$props.userscriptVersion,
          source: $$props.source
        }).toString();
        const url = `https://learnablemeta.com/api/userscript/location?${urlParams}`;
        _GM_xmlhttpRequest({
          method: "GET",
          url,
          onload: (response) => {
            if (response.status === 200) {
              try {
                const data = JSON.parse(response.responseText);
                set(geoInfo, data, true);
                if (!window.geometaMetaCache) {
                  window.geometaMetaCache = /* @__PURE__ */ new Map();
                }
                window.geometaMetaCache.set(cacheKey, data);
              } catch (e) {
                set(error, "Failed to parse response");
              }
            } else if (response.status === 404) {
              set(error, "Meta for this location not found");
            } else {
              set(error, `HTTP error! status: ${response.status}`);
            }
          },
          onerror: (e) => {
            set(error, "An error occurred while fetching data");
            console.error("Error:", e);
          }
        });
      }
      setContainerPosition(container);
      setContainerDimensions(container);
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          saveContainerDimensions(entry);
        }
      });
      resizeObserver.observe(container);
      header.addEventListener("pointerdown", (event2) => onPointerDown(event2, container));
      document.addEventListener("pointermove", (event2) => onPointerMove(event2, container));
      document.addEventListener("pointerup", (event2) => onPointerUp(event2, container));
      return () => {
        resizeObserver.disconnect();
        header.removeEventListener("pointerdown", (event2) => onPointerDown(event2, container));
        document.removeEventListener("pointermove", (event2) => onPointerMove(event2, container));
        document.removeEventListener("pointerup", (event2) => onPointerUp(event2, container));
      };
    });
    function confirmNavigation(event2) {
      event2.preventDefault();
      set(currentUrl, event2.currentTarget.href, true);
      set(showModal, true);
    }
    let showModal = /* @__PURE__ */ state(false);
    let currentUrl = /* @__PURE__ */ state("");
    let showHelpPopup = /* @__PURE__ */ state(false);
    let helpClass = /* @__PURE__ */ state("question-mark-icon");
    function shouldBlink() {
      return !wasHelpMessageRead() || checkIfOutdated();
    }
    function updateHelpClass() {
      set(helpClass, shouldBlink() ? "question-mark-icon blink" : "question-mark-icon", true);
    }
    updateHelpClass();
    user_effect(() => {
      if (get(geoInfo)) {
        const links = document.querySelectorAll(".geometa-footer a, .geometa-note a");
        links.forEach((link2) => {
          link2.removeEventListener("click", confirmNavigation);
          link2.addEventListener("click", confirmNavigation);
        });
      }
    });
    let lastDismissedTimestamp = /* @__PURE__ */ state(proxy(getLastDismissedAnnouncementTimestamp()));
    var div = root$4();
    var node = child(div);
    await_block(node, getAnnouncement, null, ($$anchor2, announcement) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_2();
          var div_2 = child(div_1);
          var node_2 = child(div_2);
          html(node_2, () => get(announcement).htmlMessage);
          reset(div_2);
          var button = sibling(div_2, 2);
          button.__click = [on_click, announcement, lastDismissedTimestamp];
          reset(div_1);
          append($$anchor3, div_1);
        };
        if_block(node_1, ($$render) => {
          if ($$props.roundNumber >= 4 && get(announcement) && (!get(lastDismissedTimestamp) || get(announcement).timestamp > get(lastDismissedTimestamp))) $$render(consequent);
        });
      }
      append($$anchor2, fragment);
    });
    var div_3 = sibling(node, 2);
    var div_4 = sibling(child(div_3), 2);
    var a = child(div_4);
    var button_1 = sibling(a, 6);
    button_1.__click = [togglePopup, showHelpPopup, updateHelpClass];
    var span = child(button_1);
    bind_this(div_3, ($$value) => header = $$value, () => header);
    var node_3 = sibling(div_3, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var p = root_3();
        var text = child(p);
        template_effect(() => set_text(text, `Error: ${get(error) ?? ""}`));
        append($$anchor2, p);
      };
      var alternate_1 = ($$anchor2) => {
        var fragment_1 = comment();
        var node_4 = first_child(fragment_1);
        {
          var consequent_4 = ($$anchor3) => {
            var fragment_2 = root_5();
            var p_1 = first_child(fragment_2);
            var node_5 = child(p_1);
            CountryFlag(node_5, {
              get countryName() {
                return get(geoInfo).country;
              }
            });
            var strong = sibling(node_5, 2);
            var text_1 = child(strong);
            var text_2 = sibling(strong);
            var div_5 = sibling(p_1, 2);
            var node_6 = child(div_5);
            html(node_6, () => get(geoInfo).note);
            var node_7 = sibling(div_5, 2);
            {
              var consequent_2 = ($$anchor4) => {
                var p_2 = root_6();
                var node_8 = child(p_2);
                html(node_8, () => get(geoInfo).footer);
                append($$anchor4, p_2);
              };
              if_block(node_7, ($$render) => {
                if (get(geoInfo).footer) $$render(consequent_2);
              });
            }
            var node_9 = sibling(node_7, 2);
            {
              var consequent_3 = ($$anchor4) => {
                var fragment_3 = root_7();
                var node_10 = sibling(first_child(fragment_3), 2);
                Carousel(node_10, {
                  get images() {
                    return get(geoInfo).images;
                  }
                });
                append($$anchor4, fragment_3);
              };
              if_block(node_9, ($$render) => {
                if (get(geoInfo).images && get(geoInfo).images.length) $$render(consequent_3);
              });
            }
            template_effect(() => {
              set_text(text_1, get(geoInfo).country);
              set_text(text_2, ` - ${get(geoInfo).metaName ?? ""}`);
            });
            append($$anchor3, fragment_2);
          };
          var alternate = ($$anchor3) => {
            Spinner($$anchor3);
          };
          if_block(
            node_4,
            ($$render) => {
              if (get(geoInfo)) $$render(consequent_4);
              else $$render(alternate, false);
            },
            true
          );
        }
        append($$anchor2, fragment_1);
      };
      if_block(node_3, ($$render) => {
        if (get(error)) $$render(consequent_1);
        else $$render(alternate_1, false);
      });
    }
    var node_11 = sibling(node_3, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var div_6 = root_9();
        var div_7 = child(div_6);
        var p_3 = sibling(child(div_7), 2);
        var text_3 = child(p_3);
        var div_8 = sibling(p_3, 2);
        var button_2 = child(div_8);
        button_2.__click = [proceed, showModal, currentUrl];
        var button_3 = sibling(button_2, 2);
        button_3.__click = [cancel, showModal];
        template_effect(() => set_text(text_3, get(currentUrl)));
        append($$anchor2, div_6);
      };
      if_block(node_11, ($$render) => {
        if (get(showModal)) $$render(consequent_5);
      });
    }
    var node_12 = sibling(node_11, 2);
    {
      var consequent_7 = ($$anchor2) => {
        var div_9 = root_10();
        var div_10 = child(div_9);
        var div_11 = child(div_10);
        var node_13 = child(div_11);
        {
          var consequent_6 = ($$anchor3) => {
            var p_4 = root_11();
            var strong_1 = child(p_4);
            var text_4 = child(strong_1);
            template_effect(
              ($0) => set_text(text_4, `Your script version is out of date - please install the latest
              version (${$0 ?? ""})!`),
              [getLatestVersionInfo]
            );
            append($$anchor3, p_4);
          };
          if_block(node_13, ($$render) => {
            if (checkIfOutdated()) $$render(consequent_6);
          });
        }
        var button_4 = sibling(div_11, 2);
        button_4.__click = [togglePopup, showHelpPopup, updateHelpClass];
        append($$anchor2, div_9);
      };
      if_block(node_12, ($$render) => {
        if (get(showHelpPopup)) $$render(consequent_7);
      });
    }
    bind_this(div, ($$value) => container = $$value, () => container);
    template_effect(() => {
      set_attribute(a, "href", "https://learnablemeta.com/maps/" + $$props.mapId);
      set_class(span, 1, clsx(get(helpClass)), "svelte-a3mhc8");
    });
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);
  var root_1$1 = /* @__PURE__ */ from_html(`<div class="error svelte-1h74c2s"> </div>`);
  var root$3 = /* @__PURE__ */ from_html(`<div class="hint-panel svelte-1h74c2s"><header class="svelte-1h74c2s"><strong>Hint</strong> <button class="close svelte-1h74c2s">×</button></header> <div><label>Country <input class="svelte-1h74c2s"/></label></div> <div><label>Continent <input readonly="" class="svelte-1h74c2s"/></label></div> <div><label>Meta type <input class="svelte-1h74c2s"/></label></div> <div><label>Description <textarea rows="2" class="svelte-1h74c2s"></textarea></label></div> <!> <button>Submit</button></div>`);
  function HintPanel($$anchor, $$props) {
    push($$props, false);
    const SUPABASE_URL = "https://kacuunztbvznzhfsyfgp.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3V1bnp0YnZ6bnpoZnN5ZmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxODY0NjEsImV4cCI6MjA2OTc2MjQ2MX0.VsC1HLOG413lXABUn4Sfv9c_arN06IxH9EXIdn-fzj4";
    let country = /* @__PURE__ */ mutable_source("");
    let continent = /* @__PURE__ */ mutable_source("");
    let meta_type = /* @__PURE__ */ mutable_source("");
    let description = /* @__PURE__ */ mutable_source("");
    let error = /* @__PURE__ */ mutable_source("");
    const metaTypes = [
      "bollard",
      "car",
      "sign",
      "language",
      "generation",
      "antenna",
      "coverage"
    ];
    onMount(() => {
      detectCountry();
      detectMetaType();
      fetchContinent(get(country));
    });
    function detectCountry() {
      var _a2;
      const flag = document.querySelector('[class*="result-layout_flag"] img, img.flag');
      const alt = (_a2 = flag == null ? void 0 : flag.getAttribute("alt")) == null ? void 0 : _a2.trim();
      if (alt) {
        set(country, alt);
      }
    }
    function detectMetaType() {
      var _a2, _b;
      const note = ((_b = (_a2 = document.querySelector(".geometa-note")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.toLowerCase()) || "";
      const found = metaTypes.find((t) => note.includes(t));
      if (found) {
        set(meta_type, found);
      }
    }
    function gmRequest(options) {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({ ...options, onload: resolve, onerror: reject });
      });
    }
    async function fetchContinent(c) {
      var _a2;
      if (!c) {
        set(continent, "");
        return;
      }
      try {
        const res = await gmRequest({
          method: "GET",
          url: `${SUPABASE_URL}/rest/v1/country_meta?select=continent&country=eq.${encodeURIComponent(c)}`,
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`
          }
        });
        if (res.status >= 200 && res.status < 300) {
          const data = JSON.parse(res.responseText);
          set(continent, ((_a2 = data == null ? void 0 : data[0]) == null ? void 0 : _a2.continent) || "");
          if (!get(continent)) {
            set(error, "Continent not found");
          } else {
            set(error, "");
          }
        } else {
          set(continent, "");
          set(error, "Failed to fetch continent");
        }
      } catch (e) {
        set(continent, "");
        set(error, "Failed to fetch continent");
      }
    }
    async function submit() {
      if (!get(continent)) {
        set(error, "Continent required");
        return;
      }
      try {
        const res = await gmRequest({
          method: "POST",
          url: `${SUPABASE_URL}/rest/v1/hints`,
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            country: get(country),
            continent: get(continent),
            meta_type: get(meta_type),
            description: get(description)
          })
        });
        if (res.status >= 200 && res.status < 300) {
          set(country, "");
          set(continent, "");
          set(meta_type, "");
          set(description, "");
          set(error, "");
        } else {
          set(error, "Failed to submit");
        }
      } catch (e) {
        set(error, "Failed to submit");
      }
    }
    init();
    var div = root$3();
    var header = child(div);
    var button = sibling(child(header), 2);
    var div_1 = sibling(header, 2);
    var label = child(div_1);
    var input = sibling(child(label));
    var div_2 = sibling(div_1, 2);
    var label_1 = child(div_2);
    var input_1 = sibling(child(label_1));
    var div_3 = sibling(div_2, 2);
    var label_2 = child(div_3);
    var input_2 = sibling(child(label_2));
    var div_4 = sibling(div_3, 2);
    var label_3 = child(div_4);
    var textarea = sibling(child(label_3));
    var node = sibling(div_4, 2);
    {
      var consequent = ($$anchor2) => {
        var div_5 = root_1$1();
        var text = child(div_5);
        template_effect(() => set_text(text, get(error)));
        append($$anchor2, div_5);
      };
      if_block(node, ($$render) => {
        if (get(error)) $$render(consequent);
      });
    }
    var button_1 = sibling(node, 2);
    template_effect(() => button_1.disabled = !get(continent));
    event("click", button, () => {
      var _a2;
      return (_a2 = document.getElementById("geometa-hints")) == null ? void 0 : _a2.remove();
    });
    bind_value(input, () => get(country), ($$value) => set(country, $$value));
    event("change", input, () => fetchContinent(get(country)));
    bind_value(input_1, () => get(continent), ($$value) => set(continent, $$value));
    bind_value(input_2, () => get(meta_type), ($$value) => set(meta_type, $$value));
    bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
    event("click", button_1, submit);
    append($$anchor, div);
    pop();
  }
  function mountHintPanel(container) {
    const existing = document.getElementById("geometa-hints");
    if (existing) {
      existing.remove();
    }
    const element = document.createElement("div");
    element.id = "geometa-hints";
    container.appendChild(element);
    mount(HintPanel, { target: element });
  }
  const GeoGuessrEventFramework = _unsafeWindow.GeoGuessrEventFramework;
  let currentObserver = null;
  let currentPinObserver = null;
  function clearMetaCache() {
    if (window.geometaMetaCache) {
      window.geometaMetaCache.clear();
    }
  }
  function initSinglePlayer() {
    GeoGuessrEventFramework.init().then(() => {
      GeoGuessrEventFramework.events.addEventListener("game_start", async (event2) => {
        clearMetaCache();
        await getMapInfo(event2.detail.map.id, true);
      });
      GeoGuessrEventFramework.events.addEventListener("round_end", async (event2) => {
        var _a2, _b;
        (_a2 = document.getElementById("geometa-summary")) == null ? void 0 : _a2.remove();
        (_b = document.getElementById("geometa-hints")) == null ? void 0 : _b.remove();
        const mapInfo = await getMapInfo(event2.detail.map.id, false);
        if (!mapInfo.mapFound) {
          logInfo("not supported map - skip");
          return;
        }
        logInfo("waiting for the result view to render");
        waitForElement('[class*=result-layout_root__], div[data-qa="result-view-top"]').then((container) => {
          if (!container) {
            return;
          }
          logInfo("the result view is rendered");
          const element = document.createElement("div");
          element.id = "geometa-summary";
          container.appendChild(element);
          const lastRound = event2.detail.rounds[event2.detail.rounds.length - 1];
          logInfo("adding app window");
          mount(App, {
            target: element,
            props: {
              roundNumber: event2.detail.rounds.length,
              panoId: lastRound.location.panoId,
              mapId: event2.detail.map.id,
              userscriptVersion: mapInfo.userscriptVersion,
              source: window.location.href.includes("challenge") ? "challenge" : "map"
            }
          });
          mountHintPanel(container);
        });
      });
      GeoGuessrEventFramework.events.addEventListener("game_end", async (event2) => {
        console.log("game ended");
        const panoIds = event2.detail.rounds.map((round) => round.location.panoId);
        console.log("All round pano IDs:", panoIds);
        const mapInfo = await getMapInfo(event2.detail.map.id, false);
        if (!mapInfo.mapFound) {
          logInfo("not supported map for breakdown - skip");
          return;
        }
        const roundData = { rounds: event2.detail.rounds, mapId: event2.detail.map.id, userscriptVersion: mapInfo.userscriptVersion };
        waitForElement(".result-list_listWrapper__7SmiM").then((listWrapper) => {
          if (!listWrapper) {
            return;
          }
          addMetaButtonsToRounds(roundData.rounds, roundData.mapId, roundData.userscriptVersion);
        });
        if (currentObserver) {
          currentObserver.disconnect();
        }
        currentObserver = new MutationObserver(() => {
          const listWrapper = document.querySelector(".result-list_listWrapper__7SmiM");
          if (listWrapper && !listWrapper.querySelector(".geometa-meta-btn")) {
            addMetaButtonsToRounds(roundData.rounds, roundData.mapId, roundData.userscriptVersion);
          }
        });
        currentObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
        addClickableIconsToPins(roundData.rounds, roundData.mapId, roundData.userscriptVersion);
      });
      window.addEventListener("urlchange", () => {
        var _a2;
        clearMetaCache();
        if (currentObserver) {
          currentObserver.disconnect();
          currentObserver = null;
        }
        if (currentPinObserver) {
          currentPinObserver.disconnect();
          currentPinObserver = null;
        }
        (_a2 = document.getElementById("geometa-hints")) == null ? void 0 : _a2.remove();
      });
    });
  }
  function addMetaButtonsToRounds(rounds, mapId, userscriptVersion) {
    const roundItems = document.querySelectorAll(".result-list_listItemWrapper___XCGn");
    rounds.forEach((round, index2) => {
      var _a2;
      const roundItem = roundItems[index2];
      if (!roundItem) return;
      const roundNumber = (_a2 = roundItem.querySelector(".result-list_roundNumber__RlIKm")) == null ? void 0 : _a2.textContent;
      if (roundNumber === "Total") return;
      if (roundItem.querySelector(".geometa-meta-btn")) return;
      const metaButton = document.createElement("button");
      metaButton.className = "geometa-meta-btn";
      metaButton.textContent = "Show meta";
      metaButton.title = "View meta for this round";
      metaButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showMetaForRound(round.location.panoId, mapId, userscriptVersion, index2 + 1);
      });
      roundItem.appendChild(metaButton);
    });
  }
  function showMetaForRound(panoId, mapId, userscriptVersion, roundNumber) {
    let element = document.getElementById("geometa-summary");
    if (element) {
      element.innerHTML = "";
    } else {
      const container = document.querySelector('div[data-qa="result-view-top"]') || document.body;
      element = document.createElement("div");
      element.id = "geometa-summary";
      container.appendChild(element);
    }
    mount(App, {
      target: element,
      props: {
        roundNumber,
        panoId,
        mapId,
        userscriptVersion,
        source: window.location.href.includes("challenge") ? "challenge" : "map"
      }
    });
  }
  function addClickableIconsToPins(rounds, mapId, userscriptVersion) {
    if (currentPinObserver) {
      currentPinObserver.disconnect();
    }
    currentPinObserver = new MutationObserver(() => {
      const pins = document.querySelectorAll('[class*="map-pin_mapPin"]');
      pins.forEach((pin) => {
        var _a2;
        const pinText = (_a2 = pin.textContent) == null ? void 0 : _a2.trim();
        const roundNumber = parseInt(pinText || "");
        if (roundNumber >= 1 && roundNumber <= 5 && !pin.hasAttribute("data-geometa-pin-processed")) {
          pin.setAttribute("data-geometa-pin-processed", "true");
          const questionIcon = document.createElement("div");
          questionIcon.className = "geometa-pin-question";
          questionIcon.innerHTML = "?";
          questionIcon.title = `View meta for round ${roundNumber}`;
          questionIcon.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const round = rounds[roundNumber - 1];
            if (round) {
              showMetaForRound(round.location.panoId, mapId, userscriptVersion, roundNumber);
            }
          });
          const pinElement = pin;
          if (pinElement.style.position === "" || pinElement.style.position === "static") {
            pinElement.style.position = "relative";
          }
          pinElement.appendChild(questionIcon);
        }
      });
    });
    currentPinObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
  }
  function initLiveChallenge() {
    logInfo("live challenge support enabled");
    let pinChanged = false;
    const observer = new MutationObserver(async () => {
      var _a2;
      if (!document.querySelector("[class*=result-map_roundPin]")) {
        pinChanged = false;
        return;
      }
      if (pinChanged) {
        return;
      }
      pinChanged = true;
      (_a2 = document.getElementById("geometa-hints")) == null ? void 0 : _a2.remove();
      const challengeId = getChallengeId();
      if (challengeId) {
        const { mapId, panoId } = await getChallengeInfo(challengeId);
        const mapInfo = await getMapInfo(mapId, false);
        if (!mapInfo.mapFound) return;
        waitForElement('[class*=result-layout_root__], div[data-qa="result-view-top"]').then((container) => {
          if (!container) {
            return;
          }
          const element = document.createElement("div");
          element.id = "geometa-summary";
          container.appendChild(element);
          mount(App, {
            target: element,
            props: {
              // this is to display announcements and there is not easy way to calculate which round it is
              roundNumber: 4,
              panoId,
              mapId,
              userscriptVersion: mapInfo.userscriptVersion,
              source: "liveChallenge"
            }
          });
          mountHintPanel(container);
        });
      }
    });
    if (document.body) {
      observer.observe(document.body, { subtree: true, childList: true });
    } else {
      console.error("document.body is not available.");
    }
    window.addEventListener("urlchange", () => {
      var _a2;
      observer.disconnect();
      (_a2 = document.getElementById("geometa-hints")) == null ? void 0 : _a2.remove();
    });
  }
  function initURLChangeEvent() {
    overrideHistoryMethod("pushState");
    overrideHistoryMethod("replaceState");
    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("urlchange"));
    });
  }
  function overrideHistoryMethod(method) {
    const original = history[method];
    history[method] = function(state2, title, url) {
      const result = original.call(this, state2, title, url);
      window.dispatchEvent(new Event("urlchange"));
      return result;
    };
  }
  var root$2 = /* @__PURE__ */ from_html(`<div class="geometa-map-label-container svelte-1mmcvqu"><p class="svelte-1mmcvqu">LearnableMeta Enabled</p> <a target="_blank"><button class="svelte-1mmcvqu">Meta List</button></a></div>`);
  function MapLabel($$anchor, $$props) {
    var div = root$2();
    var a = sibling(child(div), 2);
    template_effect(() => set_attribute(a, "href", `https://learnablemeta.com/maps/${$$props.mapId}`));
    append($$anchor, div);
  }
  function initMapLabel() {
    addMapLabel();
    window.addEventListener("urlchange", () => {
      addMapLabel();
    });
  }
  async function addMapLabel() {
    const mapId = extractMapIdFromUrl(window.location.href);
    if (!mapId) {
      return;
    }
    const mapAvatarContainer = await waitForElement("[class*=map-block_mapImageContainer]");
    if (!mapAvatarContainer) {
      return;
    }
    const existingLabel = mapAvatarContainer.querySelector(".map-label");
    if (existingLabel) {
      existingLabel.remove();
    }
    const mapInfo = await getMapInfo(mapId, true);
    if (!(mapInfo == null ? void 0 : mapInfo.mapFound)) {
      return;
    }
    const element = document.createElement("div");
    element.classList.add("map-label");
    mapAvatarContainer.appendChild(element);
    mount(MapLabel, {
      target: element,
      props: {
        mapId
      }
    });
  }
  async function geoguessrAPIFetch(url, options = {}) {
    const { method = "GET", headers: initialHeaders, body, ...restOptions } = options;
    const effectiveHeaders = new Headers(initialHeaders);
    effectiveHeaders.set("Content-Type", "application/json");
    const response = await fetch(url, {
      method,
      headers: effectiveHeaders,
      body,
      ...restOptions
    });
    if (!response.ok) {
      let errorPayload = null;
      let errorMessage = `Request to ${url.substring(0, 100)}... failed with status ${response.status}: ${response.statusText}`;
      try {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          errorPayload = await response.json();
          if (errorPayload && errorPayload.message) {
            errorMessage = `API Error (${response.status}): ${errorPayload.message}`;
          } else if (errorPayload) {
            errorMessage = `API Error (${response.status}) for ${url.substring(0, 50)}...: ${JSON.stringify(errorPayload).substring(0, 100)}...`;
          }
        } else {
          const errorText = await response.text();
          errorPayload = errorText;
          if (errorText) {
            errorMessage = `API Error (${response.status}) for ${url.substring(0, 50)}...: ${errorText.substring(0, 100)}...`;
          }
        }
      } catch (e) {
        console.warn("Could not parse error response body from Geoguessr API:", e);
      }
      console.error(`geoguessrAPIFetch Error (Status: ${response.status}) for URL ${url}:`, errorMessage, "Full Payload:", errorPayload);
      throw new Error(errorMessage);
    }
    return response;
  }
  async function uploadLocations(geoguessrId, apiKey) {
    const geoguessrDraftApiUrl = `https://www.geoguessr.com/api/v4/user-maps/drafts/${geoguessrId}`;
    let geoguessrMapDetails;
    try {
      const response = await geoguessrAPIFetch(geoguessrDraftApiUrl);
      geoguessrMapDetails = await response.json();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to fetch Geoguessr map info:", error);
      throw new Error(`Geoguessr Error: Could not fetch map details. ${errorMessage}`);
    }
    const { avatar, description, highlighted, name, version } = geoguessrMapDetails;
    let locationsToUpload;
    try {
      locationsToUpload = await fetchMapLocationsGM(geoguessrId, apiKey);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to fetch map locations from backend:", error);
      throw new Error(`LearnableMeta Error: ${errorMessage}`);
    }
    if (!locationsToUpload || locationsToUpload.length === 0) {
      const errorMessage = "Cannot publish an empty map. Please add locations via LearnableMeta first.";
      console.warn(errorMessage);
      throw new Error(errorMessage);
    }
    const mapDataToUpload = {
      avatar,
      description,
      highlighted,
      name,
      customCoordinates: locationsToUpload,
      version: version + 1
    };
    try {
      await geoguessrAPIFetch(geoguessrDraftApiUrl, {
        method: "PUT",
        body: JSON.stringify(mapDataToUpload)
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to update Geoguessr map draft:", error);
      throw new Error(`Geoguessr Error: Could not update map draft. ${errorMessage}`);
    }
    try {
      console.log("Publishing Geoguessr map...");
      await geoguessrAPIFetch(`${geoguessrDraftApiUrl}/publish`, {
        method: "PUT",
        body: JSON.stringify({})
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to publish Geoguessr map:", error);
      throw new Error(`Geoguessr Error: Could not publish map. ${errorMessage}`);
    }
  }
  function fetchMapLocationsGM(geoguessrId, apiToken) {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://learnablemeta.com/api/userscript/map/${geoguessrId}/locations`;
      _GM_xmlhttpRequest({
        method: "GET",
        url: apiUrl,
        headers: {
          "Authorization": `Bearer ${apiToken}`,
          "Content-Type": "application/json"
        },
        timeout: 15e3,
        // Add a timeout (e.g., 15 seconds)
        onload: (response) => {
          if (response.status >= 200 && response.status < 300) {
            try {
              const data = JSON.parse(response.responseText);
              if (data && Array.isArray(data.customCoordinates)) {
                resolve(data.customCoordinates);
              } else {
                console.error("Unexpected data structure from backend:", data);
                reject(new Error("Received invalid location data structure from backend."));
              }
            } catch (parseError) {
              console.error("Error parsing JSON response from backend:", parseError, response.responseText);
              reject(new Error(`Backend Error: Failed to parse location data: ${parseError.message.substring(0, 100)}`));
            }
          } else {
            let errorMessage = `Backend Error (${response.status}): ${response.statusText || "Failed to fetch locations"}`;
            let rawErrorResponse = response.responseText;
            try {
              const parsedJsonError = JSON.parse(response.responseText);
              if (parsedJsonError && parsedJsonError.message) {
                errorMessage = `Backend Error (${response.status}): ${parsedJsonError.message}`;
              } else if (parsedJsonError) {
                errorMessage = `Backend Error (${response.status}): ${JSON.stringify(parsedJsonError).substring(0, 100)}...`;
              }
              rawErrorResponse = parsedJsonError;
            } catch (e) {
              if (response.responseText) {
                errorMessage = `Backend Error (${response.status}): ${response.responseText.substring(0, 100)}...`;
              }
            }
            console.error(`Error fetching map locations from backend (Status: ${response.status}):`, rawErrorResponse);
            reject(new Error(errorMessage));
          }
        },
        onerror: (error) => {
          console.error("Failed to fetch map locations (XHR onerror):", error);
          let detail = error.error || error.statusText || "Network request failed";
          reject(new Error(`Network Error: Could not reach backend to fetch locations. ${detail}`));
        },
        ontimeout: () => {
          console.error("Failed to fetch map locations: Request timed out", apiUrl);
          reject(new Error("Backend Timeout: Request to fetch locations timed out."));
        }
      });
    });
  }
  const linear = (x) => x;
  function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t * o}`
    };
  }
  var root$1 = /* @__PURE__ */ from_html(`<div role="alert"><span class="toast-message svelte-1rq8lsd"> </span> <button class="toast-close-button svelte-1rq8lsd" aria-label="Close">×</button></div>`);
  function ToastNotification($$anchor, $$props) {
    let type = prop($$props, "type", 3, "info");
    var div = root$1();
    set_style(div, "", {}, {
      position: "absolute",
      top: "100%",
      transform: "translateX(-75%) translateY(-10px)",
      "margin-top": "10px"
    });
    var span = child(div);
    var text = child(span);
    var button = sibling(span, 2);
    button.__click = function(...$$args) {
      var _a2;
      (_a2 = $$props.onClose) == null ? void 0 : _a2.apply(this, $$args);
    };
    template_effect(() => {
      set_class(div, 1, `toast-notification toast-${type() ?? ""}`, "svelte-1rq8lsd");
      set_text(text, $$props.message);
    });
    transition(1, div, () => fade, () => ({ duration: 200, delay: 50 }));
    transition(2, div, () => fade, () => ({ duration: 300 }));
    append($$anchor, div);
  }
  delegate(["click"]);
  async function handleUploadClick(_, isLoading, currentApiKey, getApiKeyFromGM, apiKeyInput, showApiKeyModal, performUpload) {
    if (get(isLoading)) return;
    set(currentApiKey, getApiKeyFromGM(), true);
    if (!get(currentApiKey) || get(currentApiKey).trim() === "") {
      set(apiKeyInput, "");
      set(showApiKeyModal, true);
    } else {
      await performUpload(get(currentApiKey));
    }
  }
  function handleSaveApiKey(__1, apiKeyInput, saveApiKeyToGM, currentApiKey, showApiKeyModal, showCustomToast, performUpload) {
    const trimmedKey = get(apiKeyInput).trim();
    if (trimmedKey) {
      saveApiKeyToGM(trimmedKey);
      set(currentApiKey, trimmedKey, true);
      set(showApiKeyModal, false);
      showCustomToast("API Key saved!", "success", 2e3);
      performUpload(trimmedKey);
    } else {
      showCustomToast("Please enter a valid API key.", "error", 3e3);
    }
  }
  function handleCancelModal(__2, showApiKeyModal, apiKeyInput) {
    set(showApiKeyModal, false);
    set(apiKeyInput, "");
  }
  var root_1 = /* @__PURE__ */ from_html(`<div class="modal-overlay svelte-17or0cf" role="dialog" aria-modal="true" aria-labelledby="apiKeyModalTitle"><div class="modal-content svelte-17or0cf"><h2 id="apiKeyModalTitle" class="svelte-17or0cf">Enter LearnableMeta API Key</h2> <p class="svelte-17or0cf">An API key is required to upload locations. Please paste your key below.</p> <p class="svelte-17or0cf">You can generate your API token by visiting <a target="_blank" rel="noopener noreferrer" class="svelte-17or0cf">profile page</a> on LearnableMeta and generating it there.</p> <input type="text" placeholder="Paste your API key here" aria-label="API Key Input" class="modal-input svelte-17or0cf"/> <div class="modal-actions svelte-17or0cf"><button class="modal-button modal-button-save svelte-17or0cf">Save & Upload</button> <button class="modal-button modal-button-cancel svelte-17or0cf">Cancel</button></div> <p class="modal-note svelte-17or0cf">Your API key will be stored securely in your browser's userscript storage for future
        use.</p></div></div>`);
  var root = /* @__PURE__ */ from_html(`<div class="upload-label-container"><button class="button_button__aR6_e button_sizeSmall__MB_qj custom-yellow-button svelte-17or0cf"> </button></div> <!> <!>`, 1);
  function UploadLocations($$anchor, $$props) {
    push($$props, true);
    const API_KEY_STORAGE_NAME = "learnableMeta_apiKey";
    const URL_TO_GENERATE_TOKEN = "https://learnablemeta.com/profile/token";
    let showApiKeyModal = /* @__PURE__ */ state(false);
    let apiKeyInput = /* @__PURE__ */ state("");
    let currentApiKey = /* @__PURE__ */ state(null);
    let isLoading = /* @__PURE__ */ state(false);
    let toastState = /* @__PURE__ */ state(null);
    let toastTimer = /* @__PURE__ */ state(void 0);
    function showCustomToast(message, type = "info", duration = 3e3) {
      clearTimeout(get(toastTimer));
      const displayToast = () => {
        set(toastState, { message, type }, true);
        if (duration > 0) {
          set(
            toastTimer,
            setTimeout(
              () => {
                hideCustomToast();
              },
              duration
            ),
            true
          );
        }
      };
      if (get(toastState)) {
        hideCustomToast();
        setTimeout(displayToast, 350);
      } else {
        displayToast();
      }
    }
    function hideCustomToast() {
      clearTimeout(get(toastTimer));
      set(toastState, null);
    }
    function getApiKeyFromGM() {
      try {
        return _GM_getValue(API_KEY_STORAGE_NAME, null);
      } catch (e) {
        console.warn("GM_getValue is not available. API key functionality might be limited.", e);
        showCustomToast("Userscript storage (GM_getValue) is not available. Please ensure Tampermonkey/Violentmonkey is correctly configured.", "error", 0);
        return null;
      }
    }
    function saveApiKeyToGM(key) {
      try {
        _GM_setValue(API_KEY_STORAGE_NAME, key);
      } catch (e) {
        console.warn("GM_setValue is not available. API key functionality might be limited.", e);
        showCustomToast("Userscript storage (GM_setValue) is not available. Please ensure Tampermonkey/Violentmonkey is correctly configured.", "error", 0);
      }
    }
    onMount(() => {
      set(currentApiKey, getApiKeyFromGM(), true);
      if (typeof _GM_registerMenuCommand === "function") {
        _GM_registerMenuCommand("LearnableMeta - Set/Update API Key", () => {
          set(currentApiKey, null);
          const newKey = prompt("Enter your new LearnableMeta API Key:");
          if (newKey && newKey.trim() !== "") {
            saveApiKeyToGM(newKey.trim());
            set(currentApiKey, newKey.trim(), true);
            showCustomToast("LearnableMeta API Key updated!", "success");
          } else if (newKey !== null) {
            showCustomToast("API Key not updated (empty value provided).", "info");
          }
        });
        _GM_registerMenuCommand("LearnableMeta - Clear API Key", () => {
          if (confirm("Are you sure you want to clear your LearnableMeta API Key?")) {
            saveApiKeyToGM("");
            set(currentApiKey, null);
            showCustomToast("LearnableMeta API Key cleared.", "success");
          }
        });
      }
    });
    async function performUpload(apiKey) {
      set(isLoading, true);
      try {
        await uploadLocations($$props.mapId, apiKey);
        showCustomToast("Locations uploaded and map published successfully! The page will refresh shortly.", "success", 4500);
        setTimeout(
          () => {
            window.location.reload();
          },
          5e3
        );
      } catch (error) {
        console.error("Upload process failed:", error);
        let toastMessage = "An unexpected error occurred during upload.";
        if (error && error.message) {
          toastMessage = error.message;
        }
        if (toastMessage.includes("401") || toastMessage.includes("403") || toastMessage.toLowerCase().includes("unauthorized") || toastMessage.toLowerCase().includes("invalid token")) {
          showCustomToast(`Upload failed: ${toastMessage}. Please check your API Key.`, "error", 0);
        } else {
          showCustomToast(`Upload failed: ${toastMessage}`, "error", 0);
        }
        set(isLoading, false);
      }
    }
    var fragment = root();
    var div = first_child(fragment);
    var button = child(div);
    button.__click = [
      handleUploadClick,
      isLoading,
      currentApiKey,
      getApiKeyFromGM,
      apiKeyInput,
      showApiKeyModal,
      performUpload
    ];
    var text = child(button);
    var node = sibling(div, 2);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_1();
        var div_2 = child(div_1);
        var p = sibling(child(div_2), 4);
        var a = sibling(child(p));
        set_attribute(a, "href", URL_TO_GENERATE_TOKEN);
        var input = sibling(p, 2);
        var div_3 = sibling(input, 2);
        var button_1 = child(div_3);
        button_1.__click = [
          handleSaveApiKey,
          apiKeyInput,
          saveApiKeyToGM,
          currentApiKey,
          showApiKeyModal,
          showCustomToast,
          performUpload
        ];
        var button_2 = sibling(button_1, 2);
        button_2.__click = [handleCancelModal, showApiKeyModal, apiKeyInput];
        bind_value(input, () => get(apiKeyInput), ($$value) => set(apiKeyInput, $$value));
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if (get(showApiKeyModal)) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    {
      var consequent_1 = ($$anchor2) => {
        ToastNotification($$anchor2, {
          get message() {
            return get(toastState).message;
          },
          get type() {
            return get(toastState).type;
          },
          onClose: hideCustomToast
        });
      };
      if_block(node_1, ($$render) => {
        if (get(toastState)) $$render(consequent_1);
      });
    }
    template_effect(() => {
      button.disabled = get(isLoading);
      set_text(text, get(isLoading) ? "Uploading..." : "LearnableMeta - Upload");
    });
    append($$anchor, fragment);
    pop();
  }
  delegate(["click"]);
  function extractMapIdFromMapMakerUrl(url) {
    const match = url.match(/\/map-maker\/([^\/]+)/);
    return match ? match[1] : null;
  }
  function initLocationsUpload() {
    addLocationsUploadButtons();
    window.addEventListener("urlchange", () => {
      addLocationsUploadButtons();
    });
  }
  const containerId = "geometa-locations-upload";
  async function addLocationsUploadButtons() {
    var _a2;
    const mapId = extractMapIdFromMapMakerUrl(window.location.href);
    if (!mapId) {
      return;
    }
    (_a2 = document.getElementById(containerId)) == null ? void 0 : _a2.remove();
    const mapInfo = await getMapInfo(mapId, true);
    if (!(mapInfo == null ? void 0 : mapInfo.mapFound)) {
      return;
    }
    const targetId = "geometa-locations-upload-container";
    const container = document.querySelector(".top-bar-menu_topBarMenu__kd9zX");
    if (container) {
      const existingElement = container.querySelector("#" + targetId);
      if (existingElement) {
        return;
      }
      const target = document.createElement("div");
      target.id = targetId;
      container.insertBefore(target, container.lastElementChild);
      mount(UploadLocations, {
        target,
        props: {
          mapId
        }
      });
    }
  }
  function changelog() {
    return [
      { "0.88": "Updated framework version for bug-fixes" },
      { "0.87": "Added ability to view metas on breakdown screen" },
      { "0.86": "Changed look of announcement closing button" },
      { "0.85": "Another fix for multiple instances of upload button" },
      { "0.84": "Fixed multiple instances of upload button, adjusted styles" },
      { "0.83": "Added uploading locations and announcements system" },
      { "0.82": "Changed position of LearnableMeta map label for new Geoguessr UI" },
      { "0.81": "Fixed live challenge support. Added information about userscript version and source of a call (map, challenge, liveChallenge) to location info request to help us with debugging issues." },
      { "0.80": "Adjusted window dragging to work on mobile. Improved selection mechanism of elements with dynamic class names. Removed special handling of challenges." },
      { "0.79": "Fixed ALM meta list panel when switching to non-ALM map" },
      { "0.78": "Added info window with version check" },
      { "0.77": "Added custom footer to the note and clicking on link warning" },
      { "0.76": "Redesign note and added meta list link" },
      { "0.75": "Added basic logging to help with debugging issues" },
      { "0.74": "Fixed window appearance when for some reason a negative position value is saved" },
      { "0.73": "Fixed live challenge support and updated framework to newest version" },
      { "0.72": "Adjusted images to fit vertically to the container to avoid scrolling and added magnifying glass effect on mouse hover" },
      { "0.71": "Added beta support for live challenges" },
      { "0.70": "Fixed carousel controls jumping and colored the note links" },
      { "0.69": "Display multiple images with carousel" },
      { "0.68": "Use panoId as unique location identifier, allow html in note" },
      { "0.67": "Updated to Svelte 5" },
      { "0.66": "Made note movable" },
      { "0.65": "Check map ids via API" },
      { "0.64": "Added more placeholder map ids" },
      { "0.63": "Added container resizing." },
      { "0.62": "Added images to metas." },
      { "0.61": "Added new/placehoder map ids." },
      { "0.6": "Bugfixes" },
      { "0.5": "New note format and prepared for multiple maps support" },
      {
        "0.4": "Updated GeoGuessr Event Framework version. Fixes the disappearing daily challenge from GeoGuessr home page."
      }
    ];
  }
  if (_unsafeWindow.notAValidVariable) {
    console.log(changelog());
  }
  initURLChangeEvent();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupLearnableMetaFeatures);
  } else {
    await( setupLearnableMetaFeatures());
  }
  async function setupLearnableMetaFeatures() {
    initSinglePlayer();
    initLiveChallenge();
    initMapLabel();
    initLocationsUpload();
  }

})();
