[{"Owner":"aWeirdo","Date":"2016-10-28T15:01:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey all_co__lt_br /_gt__lt_br /_gt_\n\tI was wondering if anyone knows any good ways of simulating a far away horizon?_lt_br /_gt__lt_br /_gt_\n\tWith a completely flat ground mesh with 2 subdivisions_co_ it isn_t_t really a problem_co_ since you can just scale it to 1000 x &amp_sm_ z without much performance impact._lt_br /_gt__lt_br /_gt_\n\tBut when you need to add smooth height differences in the ground mesh to simulate a real area of ground_co__lt_br /_gt_\n\tyou_t_ll need a massive increase in indices in the ground mesh_co__lt_br /_gt__lt_br /_gt_\n\tProtentially creating a huge performance impact on low-end devices._lt_br /_gt__lt_br /_gt_\n\tExample_sm_ _lt_br /_gt_\n\t//1000 x 1000 ground_co_ un-comment _qt_subdivisions _eq_ scale_sm__qt_ at top of code section_co_ and it jumps from 24 indices_co_ to 6million_co_ and even at that point_co_ any height differences applied will not be super smooth._lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BXWQM%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BXWQM#0_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-28T15:52:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a scene in dev where the camera moves a lot.  I found using 2 meshes worked well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst mesh is the mountains.  It is irregular shaped.  The 2nd is a circle plane (built in blender_co_ 32 verts).  You will never see _qt_the corner_qt_ on a circle_co_ so it does not need to be that big_co_ vertex wise. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI make the mountains mesh go through the circle plane very slightly_co_ but in your case I would put the smaller terrain-ed mesh just slightly above the circle plane.  Hopefully_co_ you will not be able to tell.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2016-10-28T16:56:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you use a skybox you must _qt_paint_qt_ the distance blur directly on it_co_ and use fog to _qt_merge_qt_  the color !_lt_br /_gt_\n\tOtherwise the lensRenderingPipeline can add depth of field but is really power demanding ..._lt_br /_gt_\n\tI_t_m investigating into making a nice _qt_horizon_qt_ too right now _dd_-)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-10-28T17:11:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAppreciate the responses guys _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ _lt_br /_gt_\n\tVery interesting approach_co_ i_t_ll definitely look into that._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17254-meteoritool/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17254_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17254-meteoritool/_qt_ rel_eq__qt__qt__gt_@meteoritool_lt_/a_gt_ _lt_br /_gt_\n\tI_t_m not using any fog for this specific scene_co_ the plan atm_co_ is to add far away mountains and stuff on a skybox_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut i need the actual ground mesh to look and feel like it_t_s going on forever_co_ _lt_br /_gt_\n\t(Simular to the middle part of this picture)_lt_br /_gt__lt_img alt_eq__qt_salt_desert-t2.jpg_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//hd.wallpaperswide.com/thumbs/salt_desert-t2.jpg_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-28T18:20:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can build your plane directly in BJS (just set the _lt_em_gt_tesselation_lt_/em_gt_ parameter to 32 if you want only 32 vertices) _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#disc_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#disc_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou could also build some immutable SPS to depict the mountains (or anything else in the distance) with just few vertices _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#create-an-immutable-sps_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#create-an-immutable-sps_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor unless what you have in the distance _lt_em_gt_stays_lt_/em_gt_ in the distance far away_co_ maybe you don_t_t really 3D for this and some sprites or textured billboarded planes could do the job \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]