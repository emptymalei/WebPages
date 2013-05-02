
/*
function doPreview() {
  document.getElementById('preview').innerHTML = document.getElementById("editorBlockValue").value;
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"preview"]);
  keepBottom();
};

window.onload = doPreview;


var codearea = document.getElementById("codearea");
codearea.onkeyup = doPreview;


function keepBottom()
{
var e=document.getElementById("preview")
e.scrollTop=e.scrollHeight;
}


$(document).ready(function(){
	$(head).append('<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ["$","$"], ["\\(","\\)"], ["[;", ";]"] ],
      processEscapes: true  
    }
  });
</script>');
});
*/

$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});


$(document).ready(function() {
	$("#blockWindow").append("<div id=\"eqnHelper\"><p>This is a paragraph.</p><p>This is another paragraph.</p><ol><li>List item 1</li><li>List item 2</li><li>List item 3</li></ol><button id=\"btn1\">添加文本</button><button id=\"btn2\">添加列表项</button></div>");
});
