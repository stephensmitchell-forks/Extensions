[{"Owner":"Jan-Bart","Date":"2018-06-20T15:06:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m a newbie_co_ so maybe this is a rather silly question_co_ but as I was playing with the _qt_Simple Car Following Path_qt_ gamelet on _lt_a href_eq__qt_https_dd_//babylonjsguide.github.io/gamelets/Car_Path_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//babylonjsguide.github.io/gamelets/Car_Path _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering if it_t_s possible to speed up (or slow down) the car without changing the framerate. (eg everything would slow down/speed up)_lt_br /_gt_\n\tIf it_t_s possible_co_ how should I do it? Or is this not the best way to animate a car on a path?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-06-20T16:47:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ will be pretty happy to help knowing you are reading his great tutorials serie _lt_span_gt__lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-06-20T17:17:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31919-jan-bart/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31919_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31919-jan-bart/_qt_ rel_eq__qt__qt__gt_@Jan-Bart_lt_/a_gt_ and welcome to the forum from me. Tweaked the PG a bit. Slowed down the car by increasing the number of points along the curve (line 84) this will determine the minimum possible speed. So if you want to stop the car you would need to stop the animation. You can then increase the speed of the car by_co_ in the animation_co_ jumping to points further ahead (use of var speed) You could control the value of speed if you want to with key presses. Note speed has minimum value of 1 and must be an integer. More accurately k must be an integer so you could use k _eq_ Math.round(i + speed).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YD970%2345_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YD970#45_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this gives you somewhere to go. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Jan-Bart","Date":"2018-06-20T17:33:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ _co_ thanks for answering my question and your tutorial serie_co_ it_t_s really helping me getting to know Babylon._lt_br /_gt_\n\tBy PG you_t_re referencing to the Playground I suppose? (yeah_co_ newbie...) and more specificly this one? _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/indexStable.html#1YD970%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/indexStable.html#1YD970#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_sm_ is it correct that if you stop the animation all other moving things (eg other cars) would stop at the same time?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI get what you mean by skipping points further ahead and will try this asap\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-06-20T18:17:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31919-jan-bart/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31919_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31919-jan-bart/_qt_ rel_eq__qt__qt__gt_@Jan-Bart_lt_/a_gt_ apologies forgot to post tweaked PG _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YD970%2345_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YD970#45_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-06-20T18:22:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_218868_qt_ data-ipsquote-contentid_eq__qt_38354_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529516008_qt_ data-ipsquote-userid_eq__qt_31919_qt_ data-ipsquote-username_eq__qt_Jan-Bart_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t49 minutes ago_co_ Jan-Bart said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAlso_sm_ is it correct that if you stop the animation all other moving things (eg other cars) would stop at the same time?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo. Within scene.registerAfterRender loop use an _t_if_t_ statement to move car if not stopped and keep any other animations running\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.registerAfterRender(function()) {\n    if(car not stopped) {\n       move car\n    }\n    do other animations\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Jan-Bart","Date":"2018-06-20T18:26:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s exactly what I was looking for. Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]