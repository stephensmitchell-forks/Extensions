[{"Owner":"The Leftover","Date":"2018-06-06T18:56:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen I create a hexagonal prism for SPS_co_ it does not seem to recognize the rotation.  I have been rotating the particles en masse after creation_co_ but I gotta believe I am just doing it wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#YI6D05%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#YI6D05#2_lt_/a_gt_       The _qt_shapes_qt_ have no color.  The particles are colored.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo save memory_co_ I must have _qt_updatable_qt_ set to false.  This makes my work-around harder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdvice requested.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-06T20:15:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you tell more what is wrong here - _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#YI6D05%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#YI6D05#3_lt_/a_gt_ ? Which prism should be rotated_co_ but is not?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-06-06T20:24:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe solid particles are built from their model in its local space. It is to say that whatever the transformations applied to the model (translation_co_ rotation_co_ scaling_co_ pivot)_co_ they aren_t_t used by the solid particles.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can either _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- rotate then the particles according to your needs (at construction time with the position function or at any time with an updatable SPS)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- rotate the model_co_ bake it_co_ then build the particles from the rotated baked model _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/baking_transformations_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/baking_transformations_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- both _lt_span class_eq__qt_ipsEmoji_qt__gt_😄_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Leftover","Date":"2018-06-06T20:27:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you both.  Please standby.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Leftover","Date":"2018-06-06T21:21:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you.  _qt_Baking_qt_ was the best approach for me.  Glad I asked.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]