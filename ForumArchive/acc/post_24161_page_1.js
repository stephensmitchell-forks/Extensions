[{"Owner":"svatopluk","Date":"2016-07-29T20:59:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello. I have the following code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var m _eq_ new BABYLON.Mesh.CreateBox(_t_m_t__co_ 1_co_ scene)_sm_\nm.position _eq_ new BABYLON.Vector3.Zero()_sm_\ncamera.lockedTarget _eq_ m.position_sm_\nvar myAnimation _eq_ new BABYLON.Animation(_qt_anim_qt__co_ _qt_position_qt__co_ 20_co_ BABYLON.Animation.ANIMATIONTYPE_VECTOR3_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\nvar keys _eq_ []_sm_\nkeys.push({\n\tframe_dd_ 0_co_\n\tvalue_dd_ m.position_co_\n})_sm_\nkeys.push({\n\tframe_dd_ 20_co_\n\tvalue_dd_ new BABYLON.Vector3(m.position.x + 10_co_ 0_co_ m.position.z + 10)_co_\n})_sm_\nmyAnimation.setKeys(keys)_sm_\nm.animations.push(myAnimation)_sm_\nscene.beginAnimation(m_co_ 0_co_ 20)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe problem is that the position of mesh is changed but the camera lockedTarget is still at 0_co_0_co_0. I suspect that during the animation the m.position vector is overriden by animation inserting a new Vector3() at the place of m.position. So the camera.lockedTarget is pointing to that old(first) reference of m.position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m I right about this? Is there a way to sidestep this problem?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-30T15:50:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/_qt_ rel_eq__qt__qt__gt_@svatopluk_lt_/a_gt__co_ sorry for the slow replies.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1NE7YH%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1NE7YH#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 32 updates the target every frame.  Maybe not the most elegant fix_co_ but it works.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"svatopluk","Date":"2016-07-30T16:31:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello again. Thanks for the reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just wanted to confirm my assumption. While waiting for an answer I made a solution by making 3 animations for x_co_ y and z.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour suggestion is cleaner_co_ so thanks again.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]