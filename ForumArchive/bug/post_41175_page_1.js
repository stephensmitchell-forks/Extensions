[{"Owner":"MackeyK24","Date":"2018-11-10T12:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYp _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere seems to be a BUG in the GLTF importers... I have a hierarchy like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Remy-Master (Parent)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- Body (Child)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- Bottoms (Child)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- Eyes (Child)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- Hair (Child)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- Shoes (Child)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- Tops (Child)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--- mixamorig_dd_Hips (Child_co_ Skeleton)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when i look at the scene all the SKINNED MESHES (Body_co_ Bottoms_co_ Eyes_co_ Hair_co_ Shoes_co_ Tops) are DE-PARENTED and in the root of the scene instead of being under Remy-Master.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat must be a BUG... Here is a screen shot of the scene_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20890_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/1706572382_ScreenShot2018-11-10at2_19_38AM.png.2673ae5f0e5be1da0ff9820e4caff8c1.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_931984634_ScreenShot2018-11-10at2_19_38AM.thumb.png.c8b50d6ea42194901b5e614afd74e8aa.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20890_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/931984634_ScreenShot2018-11-10at2_19_38AM.thumb.png.c8b50d6ea42194901b5e614afd74e8aa.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ My GLTF json DOES have the 7 other nodes defined as children (and it works right in other viewers_lt_span class_eq__qt_ipsEmoji_qt__gt_😞_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ _qt_nodes_qt__dd_ [\n    {\n      _qt_children_qt__dd_ [\n        1_co_\n        2_co_\n        3_co_\n        4_co_\n        5_co_\n        72_co_\n        73\n      ]_co_\n      _qt_rotation_qt__dd_ [\n        0.0_co_\n        1.0_co_\n        0.0_co_\n        0.0\n      ]_co_\n      _qt_name_qt__dd_ _qt_Remy-Master_qt__co_\n    }\n]_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-11T02:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ we will need the gltf file to investigate _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-11T06:29:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI imagine it would do the same thing with any Skinned meshes that are children of a master mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut here is my _lt_a href_eq__qt_http_dd_//www.babylontoolkit.com/files/Remy-Master.glb_qt_ rel_eq__qt_external nofollow_qt__gt_Remy-Master_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ Is kinda big... Has a bunch for blendshapes and 17MB worth of textures\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ ... Hey Gary... I finally GOT THE WHOLE GLTF Export Pipeline... Take a look at Remy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1... Picture prefect PBR Material Export\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2... Animations (Including Skeletal Animations)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3... Blendshapes (Including Morph Animations)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4... GLB Binary Containers (Which includes ALL external scene assets)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5... And so much more... Like Navmeshes_co_ Lightmaps_co_ Terrains (Including Splatmaps)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tell you... That took a minute to get right. All the Unity type GLTF exporters (Even the one you made for reference) does not really work right and does not export the all the major stuff... Mainly Skeletal Animations... That was a bitch to get right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-12T15:23:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt__lt_/span_gt_ to investigate\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-12T17:25:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is done intentionally to satisfy the requirements for the glTF spec. See _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins_lt_/a_gt_ (second implementation note).\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_strong style_eq__qt_background-color_dd_transparent_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_600_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_Implementation Note_dd__lt_/strong_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ Client implementations should apply only the transform of the skeleton root node to the skinned mesh while ignoring the transform of the skinned mesh node. In the example below_co_ the translation of _lt_/span_gt__lt_code style_eq__qt_background-color_dd_rgba(27_co_31_co_35_co_.05)_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_13.6px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_margin-bottom_dd_0px_sm_margin-left_dd_0px_sm_margin-right_dd_0px_sm_margin-top_dd_0px_sm_padding-bottom_dd_2.72px_sm_padding-left_dd_5.44px_sm_padding-right_dd_5.44px_sm_padding-top_dd_2.72px_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_node_0_lt_/code_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ and the scale of _lt_/span_gt__lt_code style_eq__qt_background-color_dd_rgba(27_co_31_co_35_co_.05)_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_13.6px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_margin-bottom_dd_0px_sm_margin-left_dd_0px_sm_margin-right_dd_0px_sm_margin-top_dd_0px_sm_padding-bottom_dd_2.72px_sm_padding-left_dd_5.44px_sm_padding-right_dd_5.44px_sm_padding-top_dd_2.72px_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_node_1_lt_/code_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ are applied while the translation of _lt_/span_gt__lt_code style_eq__qt_background-color_dd_rgba(27_co_31_co_35_co_.05)_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_13.6px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_margin-bottom_dd_0px_sm_margin-left_dd_0px_sm_margin-right_dd_0px_sm_margin-top_dd_0px_sm_padding-bottom_dd_2.72px_sm_padding-left_dd_5.44px_sm_padding-right_dd_5.44px_sm_padding-top_dd_2.72px_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_node_3_lt_/code_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ and rotation of _lt_/span_gt__lt_code style_eq__qt_background-color_dd_rgba(27_co_31_co_35_co_.05)_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_13.6px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_margin-bottom_dd_0px_sm_margin-left_dd_0px_sm_margin-right_dd_0px_sm_margin-top_dd_0px_sm_padding-bottom_dd_2.72px_sm_padding-left_dd_5.44px_sm_padding-right_dd_5.44px_sm_padding-top_dd_2.72px_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_node_4_lt_/code_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(106_co_115_co_125)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ are ignored._lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe code is here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/loaders/src/glTF/2.0/babylon.glTFLoader.ts#L564_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/loaders/src/glTF/2.0/babylon.glTFLoader.ts#L564_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this causing a specific problem for you?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-12T17:28:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes... I need to move Remy-Master as the parent .... body_co_ shoes_co_ etc should be children of Remy-Master\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-12T17:29:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234418_qt_ data-ipsquote-contentid_eq__qt_41175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1541917788_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn ‎11‎/‎10‎/‎2018 at 10_dd_29 PM_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_That took a minute to get right. _lt_/span_gt_All the Unity type GLTF exporters (Even the one you made for reference) does not really work right and does not export the all the major stuff... Mainly Skeletal Animations...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSkinning always take a bit to get right. I_t_m glad you figured it out!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-12T17:29:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234552_qt_ data-ipsquote-contentid_eq__qt_41175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542043696_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI need to move Remy-Master as the parent .... body_co_ shoes_co_ etc should be children of Remy-Master\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBut why? Are you searching for them by path or something?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-12T17:34:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI’m using the gltf as a scene file... could have many root transform node... not just a single character model... and yes I get Remy-Master by name and move around using my Third Person Controller ... but in Babylon the body etc are parented to the root Babylon node and not Remy-master or whatever the main character model name is... this one is Called Remy-Master\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-12T18:03:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234555_qt_ data-ipsquote-contentid_eq__qt_41175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542044045_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t26 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI get Remy-Master by name and move around using my Third Person Controller\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe expected behavior in glTF is that transforms (parent and self) of skinned nodes are ignored. If you want to move the skeleton around_co_ you need to move the root of the skeleton hierarchy and not the skinned node. This is the same behavior in Unity.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-12T18:13:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat said_co_ there is a different between Unity/glTF and Babylon in that the skeleton is not part of the node hierarchy in Babylon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-12T22:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmmmm... in that case_co_ how do I move my character around in Babylon \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-12T23:08:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe moving around of nodes and ignoring transforms is just for glTF and for the loader. Once the loading is done_co_ you can move the skinned mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#KDITCT%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#KDITCT#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in your case_co_ since you have a whole scene and multiple roots to move. I don_t_t have a good solution. Can you file an issue for this? I_t_ll think of something.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-13T00:27:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have discussed this with the team and I can make a fix that will create a container transform node that will hold all the skinned meshes with the same glTF skeleton property. Moving this transform node will move all the skinned meshes under it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-13T00:51:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you very much\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-13T01:00:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCreated an issue here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/5502_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/5502_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-13T01:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBtw... the Remy-Master is used for that reason. Why not just use the original parent node. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr better yet _co_ some kind of flag or property to say ... hey _co_ don’t De-parent skinned meshes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-13T01:21:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234617_qt_ data-ipsquote-contentid_eq__qt_41175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542071723_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhy not just use the original parent node. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere can be a non-identity transform on the original parent node which should not be applied to the skinned mesh. If there are meshes attached as children of this node_co_ then I must split the hierarchy as the skinned mesh should not have the transform applied but the child meshes should.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can add a flag_co_ but I rather not have options for how the hierarchy is constructed. It might cause some confusion.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-13T01:23:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe root of these issues is really the glTF spec itself. We can_t_t fix it for 2.0_co_ but we probably will in a future version. See _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/issues/1285_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF/issues/1285._lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Pun not intended _lt_span class_eq__qt_ipsEmoji_qt__gt_😏_lt_/span_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-13T01:56:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKool deal... Whatever you think is best_co_ i trust your judgment _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-13T19:03:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy fix isn_t_t going to work for the Remy model until the `skeleton` property is set to the same root for the whole character. Is that something you can fix?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-13T20:08:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNever mind. I_t_m going to look into a different way to fix your issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-14T00:26:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRemy came from Mixamo... The different prices of the skinned meshes use different parts of the skeleton as it root bone \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-11-14T03:10:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m working on a fix that will make it behave correctly. Should be ready by tomorrow or so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-14T03:16:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Gary _co_ for all your help fixing this issue _lt_span class_eq__qt_ipsEmoji_qt__gt_🤙_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]