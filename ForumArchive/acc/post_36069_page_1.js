[{"Owner":"bpat","Date":"2018-03-02T10:40:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear Community_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn my desktop computer the webVR quality is good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut on my phone (galaxy s8) everything looks like as if the engine was rendering at maximum half the resolution and then scaling the image up. This is also the case with the playground webvr example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis concerns all browsers I tested ( by the way_dd_ only the Samsung Internet App has no issues weirdly enough )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther examples from the web with native webVR don_t_t have this problem and look great on the phone. Is there something I can do about this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks and cheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPatrick\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-03-02T16:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think only Samsung Internet (and Oculus Carmel) are supported for WebVR.  _lt_a href_eq__qt_https_dd_//webvr.info/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//webvr.info/_lt_/a_gt__lt_br /_gt_\n\tIf you want to increase the resolution then you can increase the canvas size.  I don_t_t know if the playground does automatically_co_ but did you try adaptToDeviceRatio (last param)?_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.0/engine#new-engine-classes-3-0-engine-canvas-antialias-options-adapttodeviceratio-_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.0/engine#new-engine-classes-3-0-engine-canvas-antialias-options-adapttodeviceratio-_lt_/a_gt__lt_br /_gt_\n\tie_dd_ new Engine(canvas_co_ true_co_ undefined_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ Just checked on my s8 against the playground.  Try this PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EE38I5%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#EE38I5#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt shows engine.getHardwareScalingLevel() _eq__eq_ 1 (with devicePixelRatios of 1_co_ 2.5 and 3 - I tested on those 3)  and window.devicePixelRatio _eq_ 3 on S8.  I think you need to run this in a PG_co_ but in your own code you can do the new Engine(...) 4th parameter true_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_engine.setHardwareScalingLevel(1.0/window.devicePixelRatio)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEdit #2_dd_ another thing to consider is that your screen resolution is reduced when gear VR starts up.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]