<?php
include(_cmsDOCROOT.$cfg['folder']['theme']."/".$cfg['theme']."/theme.config.inc.php");


htmlHeadJS($cfg['folder']['js']."/jquery.latest.min.js");
htmlHeadJS($cfg['folder']['js']."/jquery.url.js");

htmlHeadCSS($cfg['folder']['js'].'/bootstrap/dist/css/bootstrap.min.css');
htmlHeadCSS($cfg['folder']['js'].'/bootstrap/assets/css/ie10-viewport-bug-workaround.css');
htmlHeadCSS($cfg['folder']['js'].'/WOW/css/libs/animate.css'); 
htmlHeadJS($cfg['folder']['js'].'/bootstrap/dist/js/bootstrap.min.js');
htmlHeadJS($cfg['folder']['js'].'/bootstrap/assets/js/ie10-viewport-bug-workaround.js');

htmlHeadCSS($cfg['folder']['js']."/font-awesome-4.7.0/css/font-awesome.min.css");
htmlHeadJS($cfg['folder']['theme']."/".$cfg['theme']."/js/theme-script.js");

htmlHeadCSS($cfg['folder']['theme']."/".$cfg['theme']."/owl/owl.carousel.min.css");
htmlHeadJS($cfg['folder']['theme']."/".$cfg['theme']."/owl/owl.carousel.js");
htmlHeadJS($cfg['folder']['theme']."/".$cfg['theme']."/owl/owl.carousel.min.js");
htmlHeadCSS($cfg['folder']['theme']."/".$cfg['theme']."/owl/owl.carousel.css");

htmlHeadJS($cfg['folder']['theme']."/".$cfg['theme']."/swiper/swiper.min.js");
htmlHeadCSS($cfg['folder']['theme']."/".$cfg['theme']."/swiper/swiper.css");

htmlHeadJS($cfg['folder']['theme']."/".$cfg['theme']."/wowanimated/wow.js");
htmlHeadJS($cfg['folder']['theme']."/".$cfg['theme']."/wowanimated/wow.min.js");



$theme['html'] = "
<body>
<div id='theme' class='webpage-".@$_GET[_cmsCommonView]."'>
<div id='theme-frame' class='themetbl themetblwidth themetblheight'>
	
	<div class='themetblrow'>
	<div id='theme-header' class='themetblcell'>
	<div id='theme-header-content'  style='background:url($theme[header]) top left no-repeat;'>
	<div id='theme-lang'>$theme[lang]</div>
	<div id='theme-header-logo'>[FUNC:subcontent]pageid=logo;[/FUNC]</div>
	<div id='theme-header-link'>".$theme['header-link']."</div>
	</div></div>
	</div>
	
	<div class='themetblrow'>
	            <div id='divHeader-menu' class='themetblcell'>
                <div class='wrapper'>
                    <button id='btnMenu' class='d-flex align-center justify-content-between w-100'>
                        <div class='text'>Menu</div>
                        <div class='icon'>
                            <i class='fas fa-bars'></i>
                        </div>
                    </button>
                    <div id='css-container'>
                        <div id='css-wrapper'>
                            ".$theme['menu']."
                        </div>
                    </div>
                </div>
            </div>
	</div>

	<div class='themetblrow'>
	<div id='theme-container' class='themetblcell'>
	
		<div id='theme-title'>".$theme['title']."</div>
		<div id='theme-content'>".$theme['body']."</div>

	</div>
	</div>

	<div class='themetblrow'>
	<div id='theme-footer' class='themetblcell'>[FUNC:subcontent]pageid=footer;[/FUNC]</div>
	</div>
	
</div>
</div>
</body>";


$theme['pop_html']="
<body>
<section>
<div id='title'>".$theme['title']."</div>
<div id='content'>".$theme['body']."</div>
</section>
</body>";


$theme['page404_html']="
<body id='page404'>
<div id='frame-page404'>
<div id='frame-page404-container'>
<div id='title'>".$theme['title']."</div>
<div id='content'>".$theme['body']."</div>
</div>
</div>
</body>";


if(isset($Xcfg['theme_layout'])===true) $theme['html']=$theme['pop_html'];

?>