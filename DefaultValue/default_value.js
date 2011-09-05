jQuery.fn.DefaultValue = function(){
    return this.each(function(){
        var flied=this, value=this.value=this.title;
        $(this).focus(function(){
            (flied.value==value||flied.value=='')?flied.value='':''
            }).blur(function(){
            (flied.value==value||flied.value=='')?flied.value=value:''
            }).parents("form").each(function(){
            $(this).submit(function(){
                (flied.value==value)?flied.value='':''
                });
        });
    });
};