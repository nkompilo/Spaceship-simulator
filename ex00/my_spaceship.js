function my_spaceship(param){
 var dir = ("up");
 var result = ""; 
 var x = 0;
 var y = 0;  
 for (i=0; i<param.length; i++){
      if (param[i]=='A'){

         if (dir=="up"){
        y--
    }
    else if (dir=="down"){
        y++
    }
    else if (dir=="right"){
        x++
    }
    else if (dir=="left"){
        x--
    }
}
 else if (param[i]=='R'){
    if(dir=='up'){
         dir='right';
    }
    else if(dir=="down"){
        dir="left"
    }
    else if(dir=="left"){
        dir="up"
    }
    else if(dir=="right"){
        dir="down"
    }
}
else if (param[i]=='L'){
    if(dir=="up"){
        dir="left"
    }
    else if(dir=="down"){
        dir="right"
    }
    else if(dir=="left"){
        dir="down"
    }
    else if(dir=="right"){
        dir="up"
    }
};
};
return result = `{x: ${x}, y: ${y}, direction: '${dir}'}`;
};