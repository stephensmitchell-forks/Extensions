[{"Owner":"V!nc3r","Date":"2018-02-25T14:04:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve started to try playing with _lt_a href_eq__qt_https_dd_//www.nothing-is-3d.com/data/medias/folio/3drealtime/cornellBox/_qt_ rel_eq__qt_external nofollow_qt__gt_custom loading screen_lt_/a_gt_ (it_t_s fun)_co_ and I have a little idea_dd_ show in wireframe mode the scene while loading. This can lead to a cool effect I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut is it even possible? Because for now if I well understand_co_ the engine show the first render of the scene only when all assets are loaded (that_t_s make sense _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_)_co_ but is it possible to tell it to show while _qt_building_qt_ the meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Sorry I don_t_t know how to reproduce a loading screen in the playground to play around)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-02-25T21:37:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMany people do not include a renderloop until the scene is ready.  That is the first thing to undo.  You might also have to set some switch to say to load things incrementally so they get shown as loaded.  I do not use a .babylon_co_ but I seem to remember this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhether it will look cool or not I do not know.  A while back_co_ I was loading busts using inline code.  The textures were still being loaded async though.  I would get eyeballs flashing &amp_sm_ then teeth_co_ before the larger body texture surrounded them.  It looked super disturbing.  This is one of the reason I started making grand entrances like poof &amp_sm_ teleport to control things.  This does answer your question_co_ is it even possible _qt_Yes_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as grid material_co_ even if you set grid on for a mesh/material_co_ as long as the material was not ready_co_ I think the mesh is not going to show.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-02-26T08:39:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk I see. If I want to test this thing_co_ I have to find how to make a scene.render() inside the sceneLoader.Append onProgress. And yes_co_ maybe the blinking thing could be finally annoying...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSounds too hard to do_co_ compare to the likely visual-failure-effect. _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]