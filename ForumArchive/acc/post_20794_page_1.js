[{"Owner":"simon_bg","Date":"2016-02-26T10:28:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a tube mesh_co_ created with an array of Vector3 points. I update this tube mesh adding new points to the path_co_ but for some reason it_t_s giving me errors like_lt_br_gt_\n\tUncaught TypeError_dd_ Cannot set property _t_0_t_ of null_lt_br_gt_\n\tUncaught TypeError_dd_ Cannot set property _t_x_t_ of undefined_lt_br_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#85J9N%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#85J9N#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat am I doing wrong?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-26T12:59:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou just can_t_t add or remove points from the path when updating_co_ you can only move the existing points _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#what-is-morphing_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#what-is-morphing_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"simon_bg","Date":"2016-02-26T13:20:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks jerome!_lt_br_gt_\n\t _lt_br_gt_\n\tFrom this documentation _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tube_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tube_lt_/a_gt_ I kinda assumed it could be done. _lt_br_gt_\n\tI think the reminder _qt__lt_em style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_Roboto_sm_font-size_dd_medium_sm_font-variant_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_ only points positions can change in the path_co_ not the number of points. _lt_/em_gt__qt_ is missing here_co_ otherwise it can be confusing._lt_br_gt__lt_br_gt_\n\tCheers!_lt_br_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]