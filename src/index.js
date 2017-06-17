/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-06-17T21:25:28+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: index.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-06-17T21:31:54+08:00
 * @License: MIT
 * @Copyright: 2017
 */

import hljsLangs from './lang.hljs.js'
import hljs from './async.hljs.js'

hljs.hljsBlock = function (dom, lang) {
    if (hljs.getLanguage(lang)) {
        hljs.highlightBlock(dom);
    } else if (hljsLangs[lang]) {
        var fuc_name = 'this.hljs_' + hljsLangs[lang];
        var fuc_hljs = eval(fuc_name);
        fuc_hljs(dom);
    }
}

export default hljs
