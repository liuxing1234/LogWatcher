var host = localStorage.getItem("host")?localStorage.getItem("host"):"ws://192.168.0.86:4000";
var code = localStorage.getItem("code")?localStorage.getItem("code"):123456;
var ws = new WebSocket(host);

ws.onopen = function()
{
    var obj= {"code":code,"data":"connect","tag":"demo"}
    var str = JSON.stringify(obj);
    ws.send(str);
};

ws.onmessage = function (evt)
{
    var input = eval('(' + evt.data + ')');
    renderJson(input)
};

ws.onclose = function()
{

};

function renderJson(json) {
    var options = {
        collapsed: false,
        rootCollapsable: true,
        withQuotes: true,
        withLinks: false
    };

    $('#json-renderer').jsonViewer(json, options);
}


$('#clean').click(function(){
    $('#json-renderer').html("");
});
