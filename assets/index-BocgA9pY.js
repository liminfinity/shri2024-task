import{c as n,j as t,r as c}from"./vendor-Dzuxdzeo.js";import{H as l,M as u}from"./components-BTT32Lb0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();n(document.getElementById("header")).render(t.jsx(c.StrictMode,{children:t.jsx(l,{})}));n(document.getElementById("main")).render(t.jsx(c.StrictMode,{children:t.jsx(u,{})}));