$(document).ready(function(){
    $(".leon_butt").on('click', function(){
        alert("Oh Shit! This is one of Leon's secret sites! He is going to be pissed!!");
    }); 
    
    $('#top_group_pic').click(function(){
        $('#group_pic, #top_group_pic').width("750px");
        $('#top_header').height("300px");
        $('#header_title, #top_logo').hide();
    });   
    
   $('#top_group_pic').mouseleave(function(){
        $('#group_pic, #top_group_pic').width("250px");
        $('#top_header').height("115px");
        $('#header_title, #top_logo').show();
    });

    $('.more_info').slideUp();
    
    $('#pJL').click(function(){
        if($('#profJL').css('display') == 'none'){
            $('#profJL').slideDown();
            $('#pJL > h3').html("Hide Player Profile");
        }else{
            $('#profJL').slideUp();
            $('#pJL > h3').html("Show Player Profile");  
        }
    });
    $('#pAC').click(function(){
        if($('#profAC').css('display') == 'none'){
            $('#profAC').slideDown();
            $('#pAC > h3').html("Hide Player Profile");
        }else{
            $('#profAC').slideUp();
            $('#pAC > h3').html("Show Player Profile");   
        }
        });
    $('#pMM').click(function(){
        if($('#profMM').css('display') == 'none'){
            $('#profMM').slideDown();
            $('#pMM > h3').html("Hide Player Profile");
        }else{
            $('#profMM').slideUp();
            $('#pMM > h3').html("Show Player Profile");   
        }
        });
    $('#pEY').click(function(){
        if($('#profEY').css('display') == 'none'){
            $('#profEY').slideDown();
            $('#pEY > h3').html("Hide Player Profile");
        }else{
            $('#profEY').slideUp();
            $('#pEY > h3').html("Show Player Profile");   
        }
        });
    $('#pEF').click(function(){
        if($('#profEF').css('display') == 'none'){
            $('#profEF').slideDown();
            $('#pEF > h3').html("Hide Player Profile");
        }else{
            $('#profEF').slideUp();
            $('#pEF > h3').html("Show Player Profile");   
        }
        });
    $('#pEE').click(function(){
        if($('#profEE').css('display') == 'none'){
            $('#profEE').slideDown();
            $('#pEE > h3').html("Hide Player Profile");
        }else{
            $('#profEE').slideUp();
            $('#pEE > h3').html("Show Player Profile");   
        }
        });
    $('#pEA').click(function(){
        if($('#profEA').css('display') == 'none'){
            $('#profEA').slideDown();
            $('#pEA > h3').html("Hide Player Profile");
        }else{
            $('#profEA').slideUp();
            $('#pEA > h3').html("Show Player Profile");   
        }
        });
    $('#pJT').click(function(){
        if($('#profJT').css('display') == 'none'){
            $('#profJT').slideDown();
            $('#pJT > h3').html("Hide Player Profile");
        }else{
            $('#profJT').slideUp();
            $('#pJT > h3').html("Show Player Profile");   
        }
        });
    $('#pJH').click(function(){
        if($('#profJH').css('display') == 'none'){
            $('#profJH').slideDown();
            $('#pJH > h3').html("Hide Player Profile");
        }else{
            $('#profJH').slideUp();
            $('#pJH > h3').html("Show Player Profile");   
        }
        });
    $('#pJD').click(function(){
        if($('#profJD').css('display') == 'none'){
            $('#profJD').slideDown();
            $('#pJD > h3').html("Hide Player Profile");
        }else{
            $('#profJD').slideUp();
            $('#pJD > h3').html("Show Player Profile");   
        }
        });
    
    $('.top_links').hover(
        function(){
            $(this).addClass('highlight');
        },
        function(){
            $(this).removeClass('highlight');
    });
    
    
    
    
    
    
});