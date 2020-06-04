var bg = chrome.extension.getBackgroundPage();
var old_host = localStorage.getItem("host")?localStorage.getItem("host"):"";
var old_code = localStorage.getItem("code")?localStorage.getItem("code"):"";
$("#host").val(old_host);
$("#code").val(old_code);

var client = $("#client_id").val();
$("#save").click(function(){
    var host =$("#host").val();
    var code = $("#code").val();
    bg.initParam(host,code); // 访问bg的函数,bg的声明周期最长
});
