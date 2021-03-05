pages = 1;
i=0;
//imageWidth = $( window ).width() - 100;
imageWidth = 1000;

if(imageWidth > 1500){
	imageWidth = 1500
}

min_show=1;		
max_show=10;
showText="";

    Image_List_Page = Math.ceil((Image_List.length -1)/max_show); //取最大Page number;
    
    function show_Image(){
        min = (pages-1)*max_show + min_show; // 起始圖片編號
        max = pages * max_show;
        showText = "";
        for( i = min  ; i <= max ; i++ ){
        	if(i < Image_List.length){
        		if(i % max_show != 0){
        			if(imageWidth != 100){
        				showText +=  "<div id='read_online_image_" + i + "' style='max-width:"+ imageWidth +"px;margin: 0 auto;' ><img class='online_read_image' src=\"" + Image_List[i] + "\" alt='' style='border:1px solid #c7eff0;padding:2px;max-width:100%;display:inline;'></div>";
						showText += "<br/>";
						showText += "<br/>";
					}else{
        				showText +=  "<div id='read_online_image_" + i + "' style='max-width:"+ imageWidth +"%;margin: 0 auto;'><img class='online_read_image' src=\"" + Image_List[i] + "\" alt='' style='border:1px solid #c7eff0;padding:2px;max-width:100%;display:inline;'></div>";
						showText += "<br/>";
						showText += "<br/>";
					}

        		}else{
                    //gotoPage((pages + 1))
                    pages =  parseInt(pages);
                    if(imageWidth != 100){
                    	showText +=  "<div id='read_online_image_" + i + "' style='max-width:"+ imageWidth +"px;margin: 0 auto;' ><a onclick='gotoPage("+(pages + 1)+")' ><img class='online_read_image' src=\"" + Image_List[i] + "\" alt='' style='border:1px solid #c7eff0;padding:2px;max-width:100%;display:inline;'></a></div>";
						showText += "<br/>";
						showText += "<br/>";
					}else{
                    	showText +=  "<div id='read_online_image_" + i + "' style='max-width:"+ imageWidth +"%;margin: 0 auto;' ><a onclick='gotoPage("+(pages + 1)+")' ><img class='online_read_image' src=\"" + Image_List[i] + "\" alt='' style='border:1px solid #c7eff0;padding:2px;max-width:100%;display:inline;'></a></div>";
						showText += "<br/>";
						showText += "<br/>";
					}
                }
            }
        }
        /*
        showText += "圖片緩存 <br/>";
        startTempImage =(pages-1)*max_show + min_show + max_show;
        endTempImage = pages * max_show + max_show;
        for(i = startTempImage ; i <=  endTempImage ;i++){
        	if(i < Image_List.length){
        		showText +=  "<img src='" + Image_List[i] + "' alt='' style='border:1px solid #c7eff0;padding:2px;height:50px;'>";
        	}
        }
		*/
		$('#show_image_area').html(showText);
		

    }
    
    function show_host(){
    	showText="";
    	showText += "<ul class='pagination' style='width: auto;margin: 0px 0px'>";

    	if(comic_image_host_status['dls']){
    		if(host_id == 'dls')
    			showText +=  "<li class='active'><a href=\"readOnline.php?ID="+ postID + "&host_id=dls \">圖片分流空間(DS)</a></li>";
    		else
    			showText +=  "<li><a href=\"readOnline.php?ID="+ postID + "&host_id=dls \">圖片分流空間(DS)</a></li>";

    	}

    	if(comic_image_host_status[0]){
    		if(host_id == 0)
    			showText +=  "<li class='active'><a href=\"readOnline.php?ID="+ postID + "&host_id=0 \">圖片分流空間A</a></li>";
    		else
    			showText +=  "<li><a href=\"readOnline.php?ID="+ postID + "&host_id=0 \">圖片分流空間A</a></li>";

    	}
    	if(comic_image_host_status[1]){
    		if(host_id ==1)
    			showText +=  "<li class='active'><a href=\"readOnline.php?ID="+ postID + "&host_id=1 \">圖片分流空間B</a></li>";
    		else
    			showText +=  "<li><a href=\"readOnline.php?ID="+ postID + "&host_id=1 \">圖片分流空間B</a></li>";
    	}
    	if(comic_image_host_status[2]){
    		if(host_id ==2)
    			showText +=  "<li class='active'><a href=\"readOnline.php?ID="+ postID + "&host_id=2 \">圖片分流空間C</a></li>";
    		else
    			showText +=  "<li><a href=\"readOnline.php?ID="+ postID + "&host_id=2 \">圖片分流空間C</a></li>";
    	}
    	if(comic_image_host_status[3]){
    		if(host_id ==3)
    			showText +=  "<li class='active'><a href=\"readOnline.php?ID="+ postID + "&host_id=3 \">圖片分流空間D</a></li>";
    		else
    			showText +=  "<li><a href=\"readOnline.php?ID="+ postID + "&host_id=3 \">圖片分流空間D</a></li>";
    	}
    	showText += '</ul>';
    	$('#image_host1').html(showText);
    }
    
    function show_pages(){
    	showText="";
    	i=0;
    	showText += "<ul class='pagination' style='width: auto;margin: 0px 0px'>";
    	for(i=0 ; i< Image_List_Page ;i++){
    		if((i+1) != pages){
    			showText += "<li><span onclick='gotoPage(" + (i+1) + ");'> "+ (i+1) +" </span></li>";
            	//showText +=  "<a href=\"readOnline.php?ID="+ postID + "&page="+ (i+1) + "&host_id=" + host_id + "\">"+(i+1)+"</a> ";
            }else{
            	//當前頁 button 不能按
            	showText += "<li class='active'><span onclick='gotoPage(" + (i+1) + ");'> "+ (i+1) +" </span></li>";
            }
        }
        showText += "</ul>";
        $('#page_num1').html(showText);
        $('#page_num2').html(showText);

        //for modile

        showText="";
        i=0;
        showText += '<div class="form-group"><label style="color:#BBB">頁數 : </label><select class="form-control" onchange="gotoPage(value)" style="text-align:center;" >';
        for(i=0 ; i< Image_List_Page ;i++){
        	if((i+1) != pages){
        		showText += "<option value='" + (i+1) + "'> "+ (i+1) +" </option>";
            	//showText +=  "<a href=\"readOnline.php?ID="+ postID + "&page="+ (i+1) + "&host_id=" + host_id + "\">"+(i+1)+"</a> ";
            }else{
            	// Selected
            	showText += "<option value='" + (i+1) + "' selected> "+ (i+1) +" </option>";
            }
        }
        showText += "</select></div>";

        $('div[data-custom="page_num_mobile"]').html(showText);
        
    }

    function change_image_width_button(){
    	showText="";
    	showText += "圖片大小 :";
    	showText += "<div class='btn-group'>";
    	if(imageWidth != 500){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='500' onclick='changeImageWidth(500);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='500' onclick='changeImageWidth(500);'>";
    	}
    	if(imageWidth != 600){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='600' onclick='changeImageWidth(600);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='600' onclick='changeImageWidth(600);'>";
    	}
    	if(imageWidth != 700){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='700' onclick='changeImageWidth(700);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='700' onclick='changeImageWidth(700);'>";
    	}
    	if(imageWidth != 800){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='800' onclick='changeImageWidth(800);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='800' onclick='changeImageWidth(800);'>";
    	}
    	if(imageWidth != 900){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='900' onclick='changeImageWidth(900);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='900' onclick='changeImageWidth(900);'>";
    	}
    	if(imageWidth != 1000){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='1000' onclick='changeImageWidth(1000);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='1000' onclick='changeImageWidth(1000);'>";
    	}
    	if(imageWidth != 1100){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='1100' onclick='changeImageWidth(1100);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='1100' onclick='changeImageWidth(1100);'>";
    	}
    	if(imageWidth != 1200){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='1200' onclick='changeImageWidth(1200);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='1200' onclick='changeImageWidth(1200);'>";
    	}
    	if(imageWidth != 1300){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='1300' onclick='changeImageWidth(1300);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='1300' onclick='changeImageWidth(1300);'>";
    	}
    	if(imageWidth != 1400){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='1400' onclick='changeImageWidth(1400);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='1400' onclick='changeImageWidth(1400);'>";
    	}
    	if(imageWidth != 1500){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='1500' onclick='changeImageWidth(1500);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='1500' onclick='changeImageWidth(1500);'>";
    	}
    	if(imageWidth != 100){
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-success btn-md' value='100%' onclick='changeImageWidth(100);'>";
    	}else{
    		showText += "<input type='button' name='changeImageWidth' class='btn btn-info btn-md' value='100%' onclick='changeImageWidth(100);'>";
    	}
    	showText += "</div>";
    	$('#image_width1').html(showText);
    	$('#image_width2').html(showText);

    	showText="";
    	i=0;
    	var image_width_array = Array();
    	var image_width_array = [
    	500,600,700,800,900,1000,1100,1200,1300,1400,1500,100
    	];
    	showText += '<div class="form-group"><label style="color:#BBB">圖片大小 : </label><select class="form-control" onchange="changeImageWidth(value)" style="text-align:center;" >';

    	for(var i = 0 ; i < image_width_array.length ; i++){

    		if(image_width_array[i] != 100){
    			if(image_width_array[i].toString() ===  imageWidth){
    				showText += "<option value='" + image_width_array[i] + "' selected> "+ image_width_array[i] +" </option>";
    			}else{
    				showText += "<option value='" + image_width_array[i] + "'> "+ image_width_array[i] +" </option>";
    			}
    		}else{
    			if(image_width_array[i].toString() ===  imageWidth){
    				showText += "<option value='" + image_width_array[i] + "' selected> "+ image_width_array[i] +"%</option>";

    			}else{
    				showText += "<option value='" + image_width_array[i] + "'> "+ image_width_array[i] +"%</option>";

    			}
    			
    		}

    	}

    	showText += "</select></div>";




    	showText += "圖片大小 :";
    	showText += "<div class='btn-group btn-group-justified'>";

    	showText += "</div>";
    	$('div[data-custom="image_width_mobile"]').html(showText);

    }

    function changeImageWidth(ID){
    	imageWidth = ID ; 
    	show_Image();
        change_image_width_button();
    }
    
    function showPageButton(){
    	showText = "";
    	showText += "<div class='btn-group'>";
    	showText += "<input type='button' class='btn btn-info btn-md' name='nextPage' value='首頁'  onclick='gotoBeginningPage();'>";
    	showText += "<input type='button' class='btn btn-info btn-md' name='nextPage' value='上一頁'  onclick='goPrePage();'>";
    	showText += "<input type='button' class='btn btn-info btn-md' name='nextPage' value='下一頁'  onclick='goNextPage();'>";
    	showText += "<input type='button' class='btn btn-info btn-md' name='nextPage' value='尾頁'  onclick='gotoEndingPage();'>";
    	showText += "</div>";
    	$('#next_page_btn_area').html(showText);
    	$('#next_page_btn_area2').html(showText);

    	showText = "";
    	showText += "<div class='btn-group btn-group-justified'>";
    	//showText += "<input type='button' class='btn btn-info btn-block' name='nextPage' value='首頁'  onclick='gotoBeginningPage();'>";
    	showText += "<div class='btn-group'><input type='button' class='btn btn-info' name='nextPage' value='上一頁'  onclick='goPrePage();'></div>";
    	showText += "<div class='btn-group'><input type='button' class='btn btn-info' name='nextPage' value='下一頁'  onclick='goNextPage();'></div>";
    	//showText += "<input type='button' class='btn btn-info btn-block' name='nextPage' value='尾頁'  onclick='gotoEndingPage();'>";
    	showText += "</div>";
    	$('div[data-custom="next_page_btn_area"]').html(showText);
    }
    
    function goPrePage(){
    	if(pages > 1 ){
    		pages--;
    		gotoPage(pages);
    	}else{
    		//alert("這是首頁!!");
    	}
    }
    
    function goNextPage(){
    	if(pages < Image_List_Page){
    		pages++;
    		gotoPage(pages);
    	}else{
    		//alert("這是尾頁!!");
    	}
    }
    
    function gotoPage(pageNum){
    	if((pageNum <= Image_List_Page)&&(pageNum > 0)){
             pages = pageNum;
             show_pages();
             show_Image();
             gotoTopOfThePage();
            
        }else{
        	alert("Error Page!");
        }
    }
    
function gotoBeginningPage(){
	gotoPage(1);
}

function gotoEndingPage(){
	gotoPage(Image_List_Page);
}

function gotoTopOfThePage(){
        var ele = document.getElementById('Big_Image');
        window.scrollTo(ele.offsetLeft,ele.offsetTop);
        //$('#div_' + page_num1)[0].scrollIntoView( true );
    }
    
    function showChangeBackgroundColor(){
    	showText = "";
    	showText += "<div class='btn-group'>";
    	showText += "<input type='button' class='btn btn-info' name='nextPage' value='背景色(黑)'  onclick='changeBackgroundColorBlack();'>"; 
    	showText += "<input type='button' class='btn btn-info' name='nextPage' value='背景色(白)'  onclick='changeBackgroundColorWhite();'>"; 
    	showText += "</div>";

    	$('#change_Background_color_area').html(showText);
    	$('#change_Background_color_area2').html(showText);
    }
    
    function changeBackgroundColorBlack(){
    	$("body").css("background-color", "#000000");
    	$("body").css("color", "#888888");
    }; 
    
    function changeBackgroundColorWhite(){
    	$("body").css("background-color", "#ffffff");
    	$("body").css("color", "#000000");
    };

    $(function(){
    	$('html').keydown(function(e){
        //console.log(e.keyCode);
        if(e.keyCode == 37){
        	goPrePage();
        }else if(e.keyCode == 39){
        	goNextPage();
        }
    });
    });


	$('#ContrastSlider').on('input', function () {
		//$(this).trigger('change');
		$('#ContrastSliderValue').html( $(this).val() );
		
		filter_text = ' invert(0) ';
		
		filter_text += ' brightness(' + $('#BrightnessSlider').val() + '%) ';
		filter_text += ' contrast(' + $(this).val() + '%) ';
		filter_text += ' blur(0px) ';
		filter_text += ' drop-shadow( 1px 1px 4px rgb(130, 130, 133)) ';
		
		$('.changeContrastAndBrightnessBtn').each(function( index ) {
				$(this).removeClass('btn-success');
				$(this).addClass('btn-primary');
		})

		
		$('.online_read_image').css('-webkit-filter' , filter_text );
		$('.online_read_image').css('filter' , filter_text );
	});
	$('#BrightnessSlider').on('input', function () {
		//$(this).trigger('change');
		$('#BrightnessSliderValue').html( $(this).val() );
		
		filter_text = ' invert(0) ';
		
		filter_text += ' brightness(' + $(this).val() + '%) ';
		filter_text += ' contrast(' + $('#ContrastSlider').val() + '%) ';
		filter_text += ' blur(0px) ';
		filter_text += ' drop-shadow( 1px 1px 4px rgb(130, 130, 133)) ';
		
		$('.online_read_image').css('-webkit-filter' , filter_text );
		$('.online_read_image').css('filter' , filter_text );
		
		$('.changeContrastAndBrightnessBtn').each(function( index ) {
				$(this).removeClass('btn-success');
				$(this).addClass('btn-primary');
		})

	});


		function changeContrastAndBrightness(a,c,b){
			
			
			
			filter_text = ' invert(0) ';
			filter_text += ' brightness(' + b + '%) ';
			filter_text += ' contrast(' + c + '%) ';
			filter_text += ' blur(0px) ';
			filter_text += ' drop-shadow( 1px 1px 4px rgb(130, 130, 133)) ';
			
			//$('.online_read_image').css('-webkit-filter' , ' brightness(' + b + '%) contrast(' + c + '%)  drop-shadow( 1px 1px 4px rgb(130, 130, 133) ) blur(0px) invert(0) '  );
			$('.online_read_image').css('-webkit-filter' , filter_text );
			$('.online_read_image').css('filter' , filter_text );
			
			$('#ContrastSlider').val(c);
			$('#ContrastSliderValue').html( c );
			$('#BrightnessSlider').val(b);
			$('#BrightnessSliderValue').html( b );
			
			$('.changeContrastAndBrightnessBtn').each(function( index ) {
				//console.log(a);
				if( $(this).is($(a)) ){
					//console.log('A');
					$(a).removeClass('btn-primary');
					$(a).addClass('btn-success');
				}else{
					//console.log('B');
					$(this).removeClass('btn-success');
					$(this).addClass('btn-primary');
					
				}
					
			})
			
		}

	function imageSetting(){
    
		$('#w').window({
			title:'色彩設定(推薦不清晰掃圖本使用)',
			closed:false,
			shadow:false,
			inline:true,
			draggable:false,
			minimizable:false,
			maximizable:false,
			collapsible:false,
			
	
			
			}).window('window').css({
			position:'fixed',
			top:'auto',
			bottom: '50px',
			}
		);
		
	}

    try
    {
    show_Image();
    show_pages();
    //show_host();
    change_image_width_button();
    showChangeBackgroundColor();
    showPageButton();
    changeBackgroundColorBlack();
}
catch(err)
{
	txt="There was an error on this page.\n\n";
	txt+="Error description: " + err.message + "\n\n";
	txt+="Click OK to continue.\n\n";
	alert(txt);
}