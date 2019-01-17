[{"Owner":"DezOnlyOne","Date":"2015-10-30T21:04:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right now I am trying to figure out how to make my character_t_s eyes rotate and orient towards a camera. I am attaching my babylon file to this_co_ but what I am hoping to do is create a lookAt function for the eyes. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there an easy way that I can set the local rotation for the eyes so that they follow the camera_co_ or any object in 3d space? The pivot point of the eyes is in the center of the eyes so they should rotate without a problem. I realize that the idea of the forum is to contribute to the solution as well_co_ but I am a little lost as to where to start. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there some information on the web that can help as well?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I attached the babylon file in case anyone wanted it. _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5461_qt__gt_content.zip_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-30T21:29:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Billboard mode will keep a mesh always pointing at the (free) camera. For example - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OKRRC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OKRRC_lt_/a_gt__lt_/p_gt__lt_p_gt_Play around and see what it means. Can be useful for your eyes-meshes as well_co_ I guess._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-30T22:31:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The .lookAt() method could be an alternative to Billboard mode._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-30T23:28:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The lookAt function seems to work for keeping the eyes rotated. Is there aw way to apply lookAt to its local rotation? They look directly at the camera_co_ but they fly around outside of my characters. skull. Fitting for Halloween I suppose. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_This is the function I am using_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function look(mesh_co_ pos) {    mesh.lookAt(new BABYLON.Vector3(pos.x_co_ pos.y_co_ pos.z)_co_ 0_co_ -Math.PI / 2_co_ 0)_sm_}_sm__lt_/pre_gt__lt_p_gt_Billboard had similar results_co_ but the eyes were facing to the right. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-31T08:20:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can also get the wanted rotation with _lt_i_gt_RotationFromAxis(). _lt_/i_gt_This allows you to compute the needed rotation to apply to something to rotate it up to the target system orientation. This target system can be 3 the axis _dd_ eye-cam / Y /  3rd orthogonal vector\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/How_Rotations_and_Translations_Work_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/How_Rotations_and_Translations_Work &amp_sm_nbsp_sm__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq_&gt_sm_ _qt_generating a rotation from a target system_qt_ part\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tdemo _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VYM1E%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#VYM1E#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-31T08:28:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Maybe try to bake the current transformation before using look at. _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2/Mesh#baketransformintovertices-transform-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2/Mesh#baketransformintovertices-transform-rarr-void_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or maybe setting a pivot matrix to avoid the offset around the pivot point_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2/AbstractMesh#setpivotmatrix-matrix-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2/AbstractMesh#setpivotmatrix-matrix-rarr-void_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]