function $(id){
	return document.getElementById(id);
}
/**
 * 事件监听
 * @param {[type]}   obj      [description]
 * @param {[type]}   type     [description]
 * @param {Function} callback [description]
 */
function addEvent(obj,type,callback){
	if(obj.addEventListener){
		obj.addEventListener(type,callback);
	}else{
		obj.attachEvent('on' + type,callback);
	}
}
/**
 * 移除事件监听
 * @param  {[type]}   obj      [description]
 * @param  {[type]}   type     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function removeEvent(obj,type,callback){
	if(obj.removeEventListener){
		obj.removeEvent hListener(type,callback);
	}else{
		obj.detachEvent('on'+type,callback);
	}
}
/**
 * 禁止事件冒泡
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function stopBubble(event) {
	if(window.event){
		window.event.cancelBubble = true;
	}else{
		event.stopPropagation();
	}
}
/**
 * 阻止默认行为
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function preventDefault(event){
	if(window.event){
		window.event.returnValue = false;
	}else{
		event.preventDefault();
	}
}