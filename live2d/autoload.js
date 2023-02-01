const live2d_path = "/live2d/";

let waifu = document.createElement("waifu");

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;		

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		else if (type === "waifu"){
			tag = document.getElementById("body-warp");
			tag.appendChild(waifu);
			waifu.append('<div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div>');
			
		}
		if (type === "json") {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

try {
	Promise.all([
	loadExternalResource("/live2d/waifu.css",css),
	loadExternalResource("waifu",waifu),
	loadExternalResource("/live2d/waifu-tips.js",js),
	loadExternalResource("/live2d/live2d.js",js),
	loadExternalResource("/live2d/waifu-tips.json",json),
	loadExternalResource("/live2d/model/static-api-file.json",json)
	]).then
  /*   $("<link>").attr({href: live2d_path+"waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head'); */
/*     $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
 */    $.ajax({url: live2d_path+"waifu-tips.js", dataType:"script", cache: true, success: function() {
        $.ajax({url: live2d_path+"live2d.js", dataType:"script", cache: true, success: function() {
            /* 可直接修改部分参数 */
            live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
            live2d_settings['modelId'] = 0;                  // 默认模型 ID
            live2d_settings['modelTexturesId'] = 147;          // 默认材质 ID
            live2d_settings['modelStorage'] = false;         // 不储存模型 ID
            /* 在 initModel 前添加 */
            initModel("/live2d/waifu-tips.json");
        }});
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }
