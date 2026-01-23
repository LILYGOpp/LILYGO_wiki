


(function() {{
  var wrapper = document.getElementById("comments-container");
  if(!wrapper){
    return;
  }
  // render
  var config = {"clientID": "Ov23liQXkB1pa7CIP1bd", "clientSecret": "3c55599fdff050063dddb3e4708a53cee6d4d77a", "repo": "LILYGO_wiki", "owner": "Xinyuan-LilyGO", "admin": ["puboy7"], "language": "en", "adminAutoCreate": false};
  var html = document.getElementsByTagName("html")[0];
  var id = html.id;
  if(id){
    config["id"] = id;
  }else{
    config["id"] = location.pathname;
  }
  if(!("idFrom" in config)){
    config["idFrom"] = "title";
  }
  // get attr from html attr set in md metadata
  for (var i=0;i<html.attributes.length;i++){
    var v = html.attributes[i];
    if(v.name.startsWith("gitalk-")){
      var configName = v.name.substr(7)
      if(configName in ["number", "perPage"]){
        config[configName] = parseInt(v.value);
      }else{
        config[configName] = v.value;
      }
    }
  }
  var gitalk = new Gitalk(config);
  gitalk.render("comments-container");
  
}})();

