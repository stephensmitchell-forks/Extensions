[{"Owner":"Chifret","Date":"2018-04-29T12:17:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi folks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new to BabylonJS and well_co_ also new to 3D...  I_t_m only an Angular developer fascinated by paper game designing and recent web browser capabilities._lt_br /_gt_\n\tSo...  With a small bunch of friends_co_ we_t_re intending to build some kind of MMO-like with off-beat actions.  On our evening post-job time._lt_br /_gt_\n\tBut none of us is from the 3D or game industry_co_ and we_t_re lacking knowledge on that point.  We know it_t_s quite ambitious_co_ we already accepted the fact the project may go wrong on every step..._lt_br /_gt_\n\tThen I_t_m here_co_ to ask some councils_co_ guidance_co_ or orientation to build a capable workflow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome context_lt_br /_gt_\n\tBlender_lt_br /_gt_\n\tHaving a (very) little experience with Blender_co_ we went for it.  The Blender export tool does the job._lt_br /_gt_\n\tCell shading_lt_br /_gt_\n\tWe_t_re using cell shading on the whole scene_co_ applying only an ink effect as texture (black/white gif)_co_ highlighting the contrasts.  The output is really decent at our point of view_co_ and rather costless.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are the point we can_t_t deal with _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Ambient textures_lt_/strong_gt__lt_br /_gt_\n\tStandardMaterial allows an ambiantResource.  CellMaterial does not._lt_br /_gt_\n\tI know we can_t_t have it all_co_ but we_t_re looking for a soft _qt_paper_qt_ effect on every single mesh_co_ which that functionality does superbly.  _lt_br /_gt_\n\tWe can accomplish it by using that effect on the texture itself_co_ but it has then a really higher weight_co_ which is bad._lt_br /_gt_\n\tIt_t_s not a real drama if that could not_co_ but maybe someone has an idea _dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Multi _qt_multiply_qt_ textures_lt_/strong_gt__lt_br /_gt_\n\tAs I said_co_ we_t_re only using an ink layer as texture.  But that_t_s not all._lt_br /_gt_\n\tAlthough we_t_re not planning to use this functionality since the beginning_co_ we would like to allow the possibility to add dye to pieces of stuff.  _lt_br /_gt_\n\tUnder Blender_co_ that_t_s simple _dd_ multiply would allow us to one or two layers UNDER the black ink highlight one.  But it is exported as one texture_co_ resulting in the need of having a high quantity of textures (because having many dye colors) and more heavy (maving 4 colors instead of two).  _lt_br /_gt_\n\tAny ideas how to accomplish that _qt_the good way_qt__co_ keeping on low resource costs ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Pieces of stuff_lt_/strong_gt__lt_br /_gt_\n\tHere it becomes more complex.  Well_co_ for us at least.  It may sounds trivial to someone used to that industry..._lt_br /_gt_\n\tOf course_co_ as in any RPG_co_ we_t_ll have stuff to equip._lt_br /_gt_\n\tEvery piece of stuff should have its own texture_co_ ideally apart from the main mesh._lt_br /_gt_\n\tAnd every piece of stuff should be rigged to the main skeleton_co_ for animation purpose._lt_br /_gt_\n\tWe have absolutely no idea how to have that done from Blender to BabylonJS...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Bone attachment_lt_/strong_gt__lt_br /_gt_\n\tDeeper in the previous point _sm_ weapons and shoulder pads could be totally independent pieces added to a given bone of the main mesh_co_ I suppose that_t_s no big deal._lt_br /_gt_\n\tHowever_co_ we_t_ll have four races of characters_co_ but all of them would have the same body anatomy.  I_t_m thinking of using the same _qt_headless_qt_ body_co_ on which we_t_ll attach a _qt_racial head_qt_._lt_br /_gt_\n\tHow about animations then ?  We_t_ll have to instruct both the body and the head the required animations_co_ right ?_lt_br /_gt_\n\tI think that_t_s nothing infeasible_co_ but we_t_re not far enough at this point to face the fact it is possible or not.  And having a anticipated confirmation of it would save us much time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThat_t_s all I think about at the moment._lt_br /_gt_\n\tThank you all in advance for your guidance !  It will be much welcome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChifret\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-29T16:45:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I guess you are on the wrong sub forum as this one is dedicated to announce released projects_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI  moved it for you_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-29T16:53:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRegarding your cell material_dd_ I think the best way will be to start from the cell shader and add the features you want. Perhaps people here may want to help\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti recommend reading this in the meantime_dd_ _lt_a href_eq__qt_https_dd_//www.eternalcoding.com/?p_eq_113_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.eternalcoding.com/?p_eq_113_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor equipment_co_ you can use the attachToBone api_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#11BH6Z#18_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#11BH6Z#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Chifret","Date":"2018-05-12T12:13:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAye_co_ sorry for the wrong place!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI currently use the CellMaterial as it is_co_ having too little time to go deep into shaders (despite the fact I fint that quite attracting_sm_ priorities are elsewhere).  As it match the requirements perfectly_co_ too bad for the cherry on the top (the ambiantResource that comes from StandardMaterial).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI already gave a look to the attachToBone_co_ but I_t_m feeling insecure about items that could deform _qt_with_qt_ the base body (such as pants_co_ let_t_s say). _lt_br /_gt_\n\tI later thought about storing them into the base body_co_ and juste _qt_activating_qt_ them when needed_co_ but I don_t_t know if that_t_s a good idea/practice._lt_br /_gt_\n\tThat may sound stupid I know_co_ but I don_t_t know nothing at all about a regular workflow _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for the help_co_ much appreciated !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-14T16:27:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWith pleasure _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]