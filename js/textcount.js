$(document).ready(function(){
    $.fn.equivalent = function (){
        var $blocks = $(this), //Р·Р°РїРёС€РµРј Р·РЅР°С‡РµРЅРёРµ jQuery РІС‹Р±РѕСЂРєРё Рє РєРѕС‚РѕСЂРѕР№ Р±СѓРґРµС‚ РїСЂРёРјРµРЅРµРЅР° СЌС‚Р° С„СѓРЅРєС†РёСЏ
            maxH    = $blocks.eq(0).height(); //РїСЂРёРјРµРј Р·Р° РјР°РєСЃРёРјР°Р»СЊРЅСѓСЋ РІС‹СЃРѕС‚Сѓ - РІС‹СЃРѕС‚Сѓ РїРµСЂРІРѕРіРѕ Р±Р»РѕРєР° РІ РІС‹Р±РѕСЂРєРµ

        $blocks.each(function(){
            //РґРµР»Р°РµРј СЃСЂР°РІРЅРµРЅРёРµ РІС‹СЃРѕС‚С‹ РєР°Р¶РґРѕРіРѕ Р±Р»РѕРєР° СЃ РјР°РєСЃРёРјР°Р»СЊРЅРѕР№
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
            /*
            Р­С‚РѕС‚ Р±Р»РѕРє РјРѕР¶РЅРѕ Р·Р°РїРёСЃР°С‚СЊ С‚Р°Рє:
            if ( $(this).height() > maxH ) {
                maxH = $(this).height();
            }
            */
        });

        $blocks.height(maxH); //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј РЅР°Р№РґРµРЅРЅРѕРµ РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ РІС‹СЃРѕС‚С‹ РґР»СЏ РєР°Р¶РґРѕРіРѕ Р±Р»РѕРєР° jQuery РІС‹Р±РѕСЂРєРё
    }

    //РїСЂРёРјРµРЅСЏРµРј РЅР°С€Сѓ С„СѓРЅРєС†РёСЋ РІ СЌР»РµРјРµРЅС‚Р°Рј jQuery РІС‹Р±РѕСЂРєРё - $('.nav')
    $('.gidskill').equivalent();
    $('.title_of_ex').equivalent();
    
   
  	$('.podcast_content').equivalent();
 
});

(function($){
	$.fn.jTruncate = function(options) {
	   
		var defaults = {
			length: 300,
			minTrail: 20,
			moreText: "",
			lessText: "",
			ellipsisText: "...",
			moreAni: "",
			lessAni: ""
		};
		
		var options = $.extend(defaults, options);
	   
		return this.each(function() {
			obj = $(this);
			var body = obj.html();
			
			if(body.length > options.length + options.minTrail) {
				var splitLocation = body.indexOf(' ', options.length);
				if(splitLocation != -1) {
					// truncate tip
					var splitLocation = body.indexOf(' ', options.length);
					var str1 = body.substring(0, splitLocation);
					var str2 = body.substring(splitLocation, body.length - 1);
					obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText + 
						'</span>' + '<span class="truncate_more">' + str2 + '</span>');
					obj.find('.truncate_more').css("display", "none");
					
					// insert more link
					obj.append(
						'<div class="clearboth">' +
							'<a href="/" class="truncate_more_linkk">' + options.moreText + '</a>' +
						'</div>'
					);

					// set onclick event for more/less link
					var moreLink = $('.truncate_more_link', obj);
					var moreContent = $('.truncate_more', obj);
					var ellipsis = $('.truncate_ellipsis', obj);
					moreLink.click(function() {
						if(moreLink.text() == options.moreText) {
							moreContent.show(options.moreAni);
							moreLink.text(options.lessText);
							ellipsis.css("display", "none");
						} else {
							moreContent.hide(options.lessAni);
							moreLink.text(options.moreText);
							ellipsis.css("display", "inline");
						}
						return false;
				  	});
				}
			} // end if
			
		});
	};
})(jQuery);
