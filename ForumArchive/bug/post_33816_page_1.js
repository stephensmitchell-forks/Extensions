[{"Owner":"thrice","Date":"2017-11-04T23:03:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/2624_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/2624_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is still an issue for me. Was unable to reproduce on playground_co_ however adding some additional information_co_ maybe someone will have a clue as to what_t_s going on because as of now I can_t_t really use the highlight layer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the scene is first loading up (and my meshes are being created for the first time)_co_ and a highlight layer is created while this is happening_co_ I see a ton of undefined meshes stored in the highlight layer_co_ which I have no idea where they are coming from. 85 to be exact. (note that at no point am I manually adding any meshes to the highlight layer) - The draw calls are now going from 110 to 220_co_ so there are 110ish additional draw calls being added_co_ even though the highlight layer isn_t_t doing anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15549_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fe3d94c6974_Screenshot2017-11-0416_18_46.png.3db14f1c97ced8c1351a49b9035bf7f3.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59fe3d94ea85d_Screenshot2017-11-0416_18_46.thumb.png.c3904d15accb1b19c1e6d3f4cefcb0c3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15549_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fe3d94ea85d_Screenshot2017-11-0416_18_46.thumb.png.c3904d15accb1b19c1e6d3f4cefcb0c3.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese mesh ids_co_ also don_t_t appear to be valid anymore.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15550_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fe3da529649_Screenshot2017-11-0416_21_33.png.6d60c7dd884022166fd5fdc9dbce017e.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59fe3da54f4bb_Screenshot2017-11-0416_21_33.thumb.png.cd691d364c4a0403de3d5dfc346bd29d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15550_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fe3da54f4bb_Screenshot2017-11-0416_21_33.thumb.png.cd691d364c4a0403de3d5dfc346bd29d.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T23:14:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf however_co_ I add the highlight layer after the scene is going_co_ it won_t_t add the initial draw calls initially. - Additionally_co_ the dispose behavior I cited in the issue is still causing it to trigger_co_ however it does seem semi sporadic_co_ i.e. sometimes the first dispose call after adding the highlight layer triggers the additional draw calls_co_ sometimes it takes a couple disposals. -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT the important thing to note about all this is_dd_ As soon as the additional draw calls are triggered by the 1-2 tries of disposing meshes_co_ even though only 1-2 meshes are being disposed_co_ the draw calls are spiking from 110 to 210ish_co_ everytime_co_ consistently (regardless of the number of meshes destroyed). I.E. there are a bunch of invalid mesh references in the above screenshot_co_ but if Iazy load the highlight layer and trigger the issue_co_ it will look fairly correct_co_ though there will still be an entry for the last disposed mesh. Since I am unable to reproduce on playground_co_ please see my console logging of the behavior below_dd_  (the play_game.highlight_manager.rebuildHighlights() method is creating the highlight layer initially).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15551_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fe4976e8be3_Screenshot2017-11-0417_02_37.png.6a0773530e45ca057fb6c44837385f53.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59fe497747d98_Screenshot2017-11-0417_02_37.thumb.png.8b938d0e562322c3da4f449db58b898c.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15551_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fe497747d98_Screenshot2017-11-0417_02_37.thumb.png.8b938d0e562322c3da4f449db58b898c.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso note_co_ clearly I have an issue with the mesh id property on the destroyed mesh_co_ but don_t_t think it_t_s related. Also note_dd_ both meshes I disposed in this session are either instances or clones. The behavior doesn_t_t appear to be specific to one or the other either_co_ just sometimes takes a couple of disposals before I see the increased draw calls\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T23:16:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ [\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-06T02:21:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sorry but I still can not repro the issue locally. You could try placing breakpoints in the highlight layer code to see why it is rendering. or try to isolate the issue from your code so that we can have a smaller repro to work on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-29T21:03:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24959_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/_qt_ rel_eq__qt__qt__gt_@thrice_lt_/a_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tengine.drawCalls was deprecated _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ that_t_s why it returns 0._lt_br /_gt__lt_br /_gt_\n\tthe bug can be seen here_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif ANY mesh is added to the HL layer_sm__lt_br /_gt_\n\tScene starts at 33 drawcalls_co_ doesn_t_t matter if 1_co_ 2 or more meshes are highlighted._lt_br /_gt_\n\tdisposing a mesh(any mesh_co_ with or without HL) drawCalls goes from 33 -&gt_sm_ 31._lt_br /_gt_\n\tdisposing another mesh and it goes 31 -&gt_sm_ 29_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%2393_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#93_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tif NO meshes are added to the HL layer_co_ but HL layer exists_sm__lt_br /_gt_\n\tScene starts at 14 drawcalls._lt_br /_gt_\n\tdisposing a mesh_dd_ drawCalls jumps from 14 -&gt_sm_ 31_lt_br /_gt_\n\tdisposing another mesh and it goes 31 -&gt_sm_ 29 again_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%2392_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#92_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tif NO HL layer exists_co_ issue is gone_sm__lt_br /_gt_\n\tScene starts at 14 drawcalls._lt_br /_gt_\n\tdisposing a mesh_dd_ drawCalls goes from 14 -&gt_sm_ 13_lt_br /_gt_\n\tdisposing another mesh and it goes 13 -&gt_sm_ 12_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%2394_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#94_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tseems like something is happening with the HL layer even if no meshes are added to it ^^\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-29T21:39:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ This is a nice repro. It is fixed and will be deployed shortly_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/3250/files_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/3250/files_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T00:41:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ Thanks for reproducing!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ and thanks for fix\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T14:31:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this issue is larger than just the dispose trigger. I monkey patched your change into my local project and realized_co_ I_t_m now actually seeing the draw call multiplication as soon as I add a mesh to the highlight layer (not disposing any meshes_co_ so that code doesn_t_t get called yet). I_t_ll have to dig into it further tonight or this weekend likely_co_ but - created a brand new sphere at center of my scene and did_co_ _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#303942_sm_font-size_dd_11px_sm__qt__gt_highlight_layer.addMesh(mesh_co_ play_game.BABYLON.Color3.Red())_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm_color_dd_rgb(48_co_57_co_66)_sm__qt__gt_Jumps up from 91 draw calls to 186_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T14:39:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_Now that I_t_m looking at your playground/reading your post closer_co_ it kind of proves my point above. No mesh is being disposed in the first playground_co_ therefore dispose isn_t_t being triggered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems to be happening upon _lt_strong_gt_adding a mesh to the highlight layer_co_ _lt_/strong_gt_so looking at the changed code_co_ I_t_m not sure how that fix would have fixed it_co_ since that code path shouldn_t_t even be getting hit at that point (and that_t_s the same behavior I am seeing in my local project as well)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_b_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__lt_/b_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-30T17:22:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24959_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/_qt_ rel_eq__qt__qt__gt_@thrice_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\ti_t_m sure there are still optimizations to be done_co__lt_br /_gt_\n\tbut after the fix_co__lt_br /_gt_\n\tif no meshes have an active highlight_co_ or the last mesh with a HL is disposed_co__lt_br /_gt_\n\tdrawcalls are correctly reduced. (this was the fix)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tbut if just one mesh has a HL_co_ a drawcall is added for each mesh in the scene_co_ it doesn_t_t matter if it is actively added to the layer or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti believe this is what you are refering to_co_ and due to how the HL layer works_co_ i_t_m not sure there_t_s any quick-fix._lt_br /_gt_\n\tyou can however add your non-HL meshes to the excluded array for now..\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_pre_gt_\n_lt_code_gt_hl.addExcludedMesh(Mesh)_sm__lt_/code_gt__lt_/pre_gt_\n\n\t_lt_p_gt_\n\t\tmaybe _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ has a better answer or solution.\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_br /_gt_\n\t\tSide-note_sm_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tAs mentioned above_co__lt_br /_gt_\n\t\tYou can reduce drawcalls by adding meshes to the excluded array_co__lt_br /_gt_\n\t\tBut_co_ doing so adds two observers to each excluded mesh (before and after render)_co_ those observers first disables then enables the engine stencil buffer for every single excluded mesh.\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\twhich might actually do more harm than just accepting those very quick drawcalls. (profiling needed)_lt_br /_gt__lt_br /_gt_\n\t\tEither way_co_ best of luck with your project _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-30T17:45:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ said_co_ this is by design in the HL. Think is those draw calls are pretty fast cause they are against a smaller render target and do not use the same shader at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut they still imply some gpu work\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]