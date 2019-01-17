[{"Owner":"shamnas77","Date":"2018-06-13T05:49:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a texture with half red and half blue colors. I would like to show two color selector boxes on the top and let users choose the color for the texture. If the user choose green in the first box the blue color must change to green and the same goes for red color too._lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18713_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/1006350065_images(1).jpeg.8ab4a15454925ded677ac78c41bc1166.jpeg_qt_ alt_eq__qt_1006350065_images(1).jpeg.8ab4a15454925ded677ac78c41bc1166.jpeg_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really dont have the idea to do this. Could someone help me in accomplishing this. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-06-13T05_dd_50_dd_04Z_t_ title_eq__t_06/13/2018 05_dd_50  AM_t_ data-short_eq__t_Jun 13_t__gt_June 13_lt_/time_gt_ by shamnas77_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Images got repeated\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-06-13T08:01:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst_co_ you should work with a non-artifacted -jpg-compression texture _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Then_co_ in my opinion_co_ the simpliest thing will be to separate your object with two different materials_co_ and play with theirs colors._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Other foods for thought_dd_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\t_lt_span_gt_I_t_m not sure if _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HI65FJ%230_qt_ rel_eq__qt_external nofollow_qt__gt_colorCurves_lt_/a_gt_ could help here._lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span_gt_you can force the user to choose between some already existing textures_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span_gt_if you feel OK to generate on the fly an image_co_ you can also try to make _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_postprocesses#color-correction_qt_ rel_eq__qt_external nofollow_qt__gt_custom LUT_lt_/a_gt_ each time the user want to switch colors_lt_/span_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-17T03:00:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi shamnas77_co_ welcome to the forum.  Hello V!nc3r_co_ too.  THIS post... is about V!nc3r_t_s comment _qt__lt_strong_gt__lt_span_gt_if you feel OK to generate on the fly an image_lt_/span_gt__lt_/strong_gt__qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ts77_co_ is your red/blue texture... created for mapping onto a model?  Is that why your diagonal line... is bumpy and not a straight line?  Is this texture specially painted FOR a model?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou CAN use JS to _qt_paint_qt_ your own _qt_dynamic texture_qt_.  It might look similar-to this... when complete_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Anarchist_flag.svg/640px-Anarchist_flag.svg.png_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Anarchist_flag.svg/640px-Anarchist_flag.svg.png_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(pretend the black area... is blue).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe important thing... is that _lt_strong_gt__lt_u_gt_you_lt_/u_gt__lt_/strong_gt_ can draw/create that texture... within a BJS scene... with javascript.  You would not LOAD the texture.  You would paint it.  Would THAT be useful?  Likely_co_ you could not re-create that same bumpy line_co_ with JS math.  But_co_ a perfect diagonal line would be possible_co_ and so would a red-on-the-right_co_ blue-on-the-left pattern... no problem.  Red on top and blue on bottom_co_ even easier... with a math-drawn texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s do some math texture-painting.  Let_t_s tour a playground demo that has much to be learned_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T6PCA%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T6PCA#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI didn_t_t draw a diagonal red/blue texture_co_ but I initially paint a dynamic texture with random numbers/colors.  It would take a little math knowledge... to fill the texture with a diagonal red/blue color pattern_co_ but it CAN be done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 25-46_co_ I create a BJS dynamicTexture_co_ and fill it with random color values.  Initial colors... a quick paint job.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow let_t_s look at the paintIt() function... lines 49-82.  It is also an image painter_co_ with conditionals.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 63?  It is checking for any pixel with a RED value &gt_sm_ 200.  When found_co_ I make the pixel green.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 69?  It is checking for any pixel with a RED value &lt_sm_ 20.  When found_co_ I make the pixel blue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 85-87_co_ I wait for 10 seconds_co_ and then call paintIt()_co_ and you can see the colors change.  Since I was the one who dynamically painted the initial colors_co_ I can change them_co_ without security concerns.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t---------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as I can tell_co_ you cannot load-in a texture to plane.material.diffuseTexture... and then query/test ITS colors... to see which are red and which are blue (like your texture).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems... when a texture is loaded from the web... conText.getImageData(0_co_0_co_ size.width_co_ size.height).data - returns ALL ZEROES.  (security concern in browsers_co_ I suspect)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s test that theory.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T6PCA%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T6PCA#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this playground_co_ line 26 - I load-in our diagonal web-gotten texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTen seconds later... the entire texture paints blue.  This is expected.  Line 71 (formerly line 69) of paintIt() is ALWAYS testing true... for ALL pixels.  There are no red pixels in the buffer_co_ it is _lt_u_gt_all zeroes_lt_/u_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ if _lt_u_gt__lt_strong_gt_YOU_lt_/strong_gt__lt_/u_gt_ paint the red/blue diagonal texture with math_co_ we could easily find the red pixels/blue pixels at ANY time_co_ and could easily change them to other colors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if you LOAD a texture_co_ and try to test/modify ITS colors... that seems to _lt_u_gt_not work so well_lt_/u_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am no pro_co_ and perhaps I have made mistakes_co_ but I thought I should introduce you to BabylonJS dynamic textures_co_ and let you determine if anything is useful_co_ there.  Be well_co_ party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]