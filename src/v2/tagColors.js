import db from "./data.js";
import Clipboard from 'clipboard';

function color16() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const tagsAll = Array.from(new Set(db.flatMap(item => item.tags))).map(item => {
    return {
        text: item,
        value: item,
    }
})
const tagColor = {
    "游戏源码": "#d9d1c0",
    "游戏": "#db95d6",
    "java": "#1be745",
    "编程": "#eb333a",
    "博客": "#2e2bd5",
    "steam": "#ba27da",
    "会员账号租聘": "#5986bc",
    "随机": "#fd5b54",
    "生活": "#2a36aa",
    "GPT": "#6aa139",
    "AI": "#a1a116",
    "像素角色": "#49911b",
    "像素": "#492e50",
    "游戏素材": "#d6d033",
    "maven": "#2b9f36",
    "编码": "#a562d3",
    "AI绘画": "#8911c4",
    "H游戏": "#fe2f4c",
    "随机名称生成器": "#52c667",
    "图片处理": "#4d92cb"
}
tagsAll.forEach(item => {
    if (!tagColor[item.value]) {
        tagColor[item.value] = color16()
    }
})

if (window.location.href.includes("5173")) {
    await navigator.clipboard.writeText(JSON.stringify(tagColor));
}

export {tagsAll, tagColor}
