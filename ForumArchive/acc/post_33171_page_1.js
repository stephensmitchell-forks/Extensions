[{"Owner":"pichou","Date":"2017-09-29T23:55:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI try to optimize one of my scene and to do so I adapt my code to use createInstance instead of clone._lt_br /_gt__lt_br /_gt_\n\tBut as a result my scene (fps) is slower with createInstance than with clone when it should be the opposite right?_lt_br /_gt__lt_br /_gt_\n\tTo sum up my code_co_ here is the steps I follow _dd_ _lt_br /_gt_\n\t- import mesh_lt_br /_gt_\n\t- clone mesh and add material (because one mesh can have 2 different materials)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- create instance mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- add in the scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt the third step_co_ I get a better fps when I use clone instead of createinstance._lt_br /_gt__lt_br /_gt_\n\tDo you have an idea? Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-09-30T00:15:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd to be more specific_co_ my meshes use multiMaterial with two subMaterials.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-09-30T01:55:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWould it be possible to create a repro in the Playground ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-09-30T10:43:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInstances are much better performance-wise_co_ so you must have a bug somewhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at these 2 examples_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2I6IG4%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2I6IG4#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis example uses animated clones_co_ and with 100 clones I get between 50 and 60FPS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2I6IG4%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2I6IG4#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis example uses instances of the same animated model_co_ and with 600 instances_co_ I get mostly a solid 60FPS_co_ with some drops to the heigh 40_t_s_co_ mid 50_t_s.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-09-30T12:02:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOK_co__lt_br /_gt__lt_br /_gt_\n\tIt_t_s weird because I don_t_t have the same result with your playgrounds. I only get around 15 fps with your useinstance example. I use chrome and my computer is an asus Zenbook 3 with a core I7._lt_br /_gt__lt_br /_gt_\n\tAnother thing with my project is that after a few seconds it freeze my tab_co_ I can_t_t refresh or acces to the console when the scene is still rendering correctly (with a bad fps though). So as you say I must have a bug but can_t_t figure out what it is._lt_br /_gt_\n\tI only use around twenty shape in my scene which have diffuse_co_  specular and bump texture and half of them are instance/clone of an other._lt_br /_gt__lt_br /_gt_\n\tWhat do you advise me to test?_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-09-30T13:21:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe best thing to do would be recreating your example in a playground. That way others can help pinpoint the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t15FPS? What about the clone example?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry lowering the number of monsters to something like 50.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-09-30T14:33:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI get 50-60 fps with 100 clone mesh and 60 fps with 100 instance mesh. But 15 fps with 600 instance mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tok I will work on a playground!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-09-30T15:11:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust my 2 cents.  Using an i5_co_ &amp_sm_ a GTX 1050_co_ both ways get me 60 (with intermittant drops when moving camera).  If you have an i7_co_ then this is probably related to your GPU.  Turn on debug on one of those playgrounds.  Go to stats_co_  see if instances are implemented in hardware.  See Below.  If not_co_ your question is answered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/stats.jpg.e8eccdb09fa3b99e3cf343302575c530.jpg_qt_ data-fileid_eq__qt_15051_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15051_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/stats.thumb.jpg.cb03a3e0bf2b0c50efcd5b24df53429d.jpg_qt_ alt_eq__qt_stats.thumb.jpg.cb03a3e0bf2b0c50efcd5b24df53429d.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-09-30T16:21:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAlso_co_ I did a check of _lt_a href_eq__qt_https_dd_//www.asus.com/us/Laptops/ASUS-ZenBook-3-UX390UA/specifications/_qt_ rel_eq__qt_external nofollow_qt__gt_specs _lt_/a_gt_of your ZenBook.  It has no dedicated GPU_co_ but rather an_lt_a href_eq__qt_https_dd_//www.notebookcheck.net/Intel-HD-Graphics-620.172256.0.html_qt_ rel_eq__qt_external nofollow_qt__gt_ Integrated Intel HD Graphics 620_lt_/a_gt_.  Your options become quite limiting_co_ and sounds like your project is just too big for hardware_co_ judging by the freezing.  If you plan on publishing this for others_co_ you could just suffer through_co_ and test occasionally on a machine with an actual GPU.  Most develop on fast GPU machines_co_ and have a mobile or under powered machine as a tester_co_ but you have what you have.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-09-30T16:48:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh I didn_t_t know about the debug console of the playground_co_ very useful. All the extension are put to yes._lt_br /_gt__lt_br /_gt_\n\tOK so you are saying my machine is the problem? I have always notice that it is not very performant with games but not that much!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I will test my project on friends computer to confirm that. I guess I will have to find another computer so that I can develop with correct rendering. What are the other important specifications to look out except the GPU?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-09-30T17:33:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ likely.  In general_co_ it is always good to have more than one device with different performance capabilities though.  Switching up occasionally_co_ helps spot issues earlier in dev cycle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as an ideal graphics dev machine.  An i5 is a good choice_co_ possibly with a higher mhz.  Anything more will create blindspots where you will not notice that you are very CPU bound till later than you would like.  Plus you can save here. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving an M2 socket for a solid state boot drive is a good sign you have a recent motherboard.  I rebuilt my desktop in the last year.  The motherboard has an M2.  I never got the memory drive_co_ as sleep is a good substitute to powering off.  An old motherboard_co_ when it is a new machine is not a good sign.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving 2 sets of sims for memory is good.  Also ensure that both are not being used_co_ so that you can expand memory without throwing away the existing.  2 8gb sims_co_ and I can have an Eclipse IDEwith multiple projects open_co_ multiple browsers with scenes_co_ &amp_sm_ Blender all open_co_ all in memory with ease.  You cannot mix memory sizes_co_ so bigger is better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPower supply is starting to become a non-issue_co_ as GPU_t_s are requiring less &amp_sm_ less power.  The GTX 1050 is not the fastest_co_ but is a short card (2 slots) that needs no supplemental power connection.  If you also plan on playing commercial games as well_co_ you might wish more though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-10-02T12:58:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk I figured out what was my problem!_lt_br /_gt__lt_br /_gt_\n\tWith one mesh I was cloning a lot of other mesh as _qt_tools_qt_ (line_co_ sphere_co_ disc...) which I use for attacks and other animations. I replace those cloning by instance and this is a lot better. I have between 35 and 45 fps even on my _qt_shitty_qt_ computer! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tSorry for the false alert but I am glad I have learn new stuff on babylonjs and performance issues thanks to you @JCPalmer and @Raggar. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-02T13:08:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tShitty computers are the best! It means the game will run on any other computer! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tGlad the problem was solved_co_ thanks for sharing the explanation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-10-02T14:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__co_ this is exactly what I tell myself. It push me to look for optimization as when the scene is too slow_co_ I will be the first to see it and not the players! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]