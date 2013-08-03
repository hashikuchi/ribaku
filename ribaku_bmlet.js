script:function loadScript(scriptURL){
    var scriptElem = document.createElement('SCRIPT');
    scriptElem.setAttribute('language','JavaScript');
    scriptElem.setAttribute('src','scriptURL');
    document.body.appendChild(scriptElem);
}
loadScript('http://code.jquery.com/jquery-1.10.2.min.js');
