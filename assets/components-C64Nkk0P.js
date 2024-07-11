import{j as e,r as a}from"./vendor-Dzuxdzeo.js";const n={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}},u=Object.keys(n);function d(i){return e.jsx("li",{className:"event"+(i.slim?" event_slim":""),children:e.jsxs("button",{className:"event__button",children:[e.jsx("span",{className:`event__icon event__icon_${i.icon}`,role:"img","aria-label":i.iconLabel}),e.jsx("h4",{className:"event__title",children:i.title}),i.subtitle&&e.jsx("span",{className:"event__subtitle",children:i.subtitle})]})})}function m({activeTab:i}){const s=a.useRef({}),t=a.useRef(null),[c,r]=a.useState(!1);a.useEffect(()=>{if(s.current){const l=s.current[i].scrollWidth>s.current[i].offsetWidth;r(l)}},[i]);const o=()=>{const l=t.current.querySelector(".section__panel:not(.section__panel_hidden)");l&&l.scrollTo({left:l.scrollLeft+400,behavior:"smooth"})};return e.jsxs("div",{className:"section__panel-wrapper",ref:t,children:[u.map(l=>l===i?e.jsx("div",{ref:h=>s.current[l]=h,role:"tabpanel",className:"section__panel"+(l===i?"":" section__panel_hidden"),"aria-hidden":l===i?"false":"true",id:`panel_${l}`,"aria-labelledby":`tab_${l}`,children:e.jsx("ul",{className:"section__panel-list",children:n[l].items.map((h,_)=>e.jsx(d,{...h},_))})},l):null),c&&e.jsx("div",{className:"section__arrow",onClick:o})]})}function g(){const[i,s]=a.useState(new URLSearchParams(location.search).get("tab")||"all");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section__title",children:[e.jsx("h2",{className:"section__title-header",children:"Избранные устройства"}),e.jsx("select",{className:"section__select",defaultValue:"all",onInput:t=>s(t.target.value),children:u.map(t=>e.jsx("option",{value:t,children:n[t].title},t))}),e.jsx("ul",{role:"tablist",className:"section__tabs",children:u.map(t=>e.jsx("li",{role:"tab","aria-selected":t===i?"true":"false",tabIndex:t===i?"0":void 0,className:"section__tab"+(t===i?" section__tab_active":""),id:`tab_${t}`,"aria-controls":`panel_${t}`,onClick:()=>s(t),children:n[t].title},t))})]}),e.jsx(m,{activeTab:i})]})}function x(){const[i,s]=a.useState(!1),[t,c]=a.useState(!1),r=()=>{t||c(!0),s(o=>!o)};return e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),e.jsx("button",{className:"header__menu","aria-expanded":i?"true":"false",onClick:r,children:e.jsx("span",{className:"header__menu-text a11y-hidden",children:i?"Закрыть меню":"Открыть меню"})}),e.jsxs("ul",{className:"header__links"+(i?" header__links_opened":"")+(t?" header__links-toggled":""),children:[e.jsx("li",{className:"header__item",children:e.jsx("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),e.jsx("li",{className:"header__item",children:e.jsx("a",{className:"header__link",href:"/devices",children:"Устройства"})}),e.jsx("li",{className:"header__item",children:e.jsx("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}export{x as H,g as M};
