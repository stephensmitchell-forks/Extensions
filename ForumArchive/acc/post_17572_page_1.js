[{"Owner":"Flomotion","Date":"2015-10-01T20:27:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I made a bezier path for my camera to follow. So I put all points from the CreateCubicBezier into the camera animation. The camera follows the path. But I_t_d also like the camera to ease in and ease out._lt_br_gt__lt_br_gt_Using the easing function eases in and out for every step in the path. But I want the whole path to have a single ease in/ ease out._lt_br_gt__lt_br_gt_For now I used a function I found somewhere on the internet to place the time of the keyframes. (it_t_s sort of an inversed ease in ease out function)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var speedInOut _eq_ function(x) {_lt_br_gt_    return (sinh((x - 0.5) * 5) + sinh(-(x - 0.5)) + (sinh(2.5) + Math.sin(-2.5))) / (sinh(2.5) * 1.82)_sm__lt_br_gt_}_sm__lt_br_gt_// supporting math function (not included in the standard javascript Math object)_lt_br_gt_function sinh(aValue) {_lt_br_gt_  var myTerm1 _eq_ Math.pow(Math.E_co_ aValue)_sm__lt_br_gt_  var myTerm2 _eq_ Math.pow(Math.E_co_ -aValue)_sm__lt_br_gt_  return (myTerm1-myTerm2)/2_sm__lt_br_gt_}_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It works.. but I_t_d like to have a bit more smoothing out of the animation._lt_/p_gt__lt_p_gt_Is there a native way to add an easing function to an animation with multiple keys?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-02T00:50:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow!  Hi again_co_ F!  Good to see you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou seem to be a killer coder_co_ and I am not really qualified to talk_co_ but_co_ take a look at this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#HH1U5%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#HH1U5#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hijacked the framework_t_s Animation._interpolate() into the PG.  It_t_s working.  This function calc_t_s a gradient between each key of the animation. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 29?  You could add a feature here... maybe an _qt_easeEndsOnly_qt_ boolean flag. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen... just before line 30 (or nearby)... add another _lt_strong_gt_IF_lt_/strong_gt_.  In pseudo... IF (easeEndsOnly AND this is the terp between first key and second OR this is the terp between last key and next-to-last key)... then blah blah blah_co_ ELSE no gradient.  Get my drift?   You could add a conditional in there... _lt_strong_gt_if_lt_/strong_gt_ current key is NOT 0 and/or _lt_strong_gt_if_lt_/strong_gt_ next key is NOT last key... then don_t_t install the gradient between these two keys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tterp _eq_ interpolation _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  terpin_t_ time.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s terrible explaining... sorry.  I think you can understand. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAND... your suggestion is darned good IMHO_co_ so... you/we should consider adding the _lt_em_gt_easeEndsOnly_lt_/em_gt_ flag... permanently.  When _lt_em_gt_easeEndsOnly_lt_/em_gt_ is set true... things like easeIN_co_ easeOut and easeInOut... will only graduate (gradiate? heh)... the first and last keys.  _lt_a href_eq__qt_https_dd_//upload.wikimedia.org/wikipedia/commons/4/40/Grader02.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_Gradiator_lt_/a_gt_?!  _lt_img alt_eq__qt__dd_D_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoy_co_ I_t_m goofy tonight. \n_lt_/p_gt_\n\n_lt_p_gt_\n\thmmm...  but what if... a person wants to ease-in across the first 6 keys... then no gradient across 20 keys.... then ease-out across the final 10 keys?  Wow_co_ that would be cool!  Phew.  I_t_m scared.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Ok bye.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Flomotion","Date":"2015-10-02T06:54:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey thanks! Thats a clever way to do it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let me first correct your assumption about me being a killer coder.. I_t_m not _dd_-) That complicated calculation is not mine._lt_/p_gt__lt_p_gt_I_t_m from the 3D animation and motion graphics world. But I also love messing around with code. Used to do that with flash (untill Steve Jobs killed it). But now I discovered BabylonJS and all it_t_s possibilities make me very happy._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I think your solution probably won_t_t work for my animation path. Because it_t_s made up of 40 position points close to eachother to get a nice curve. So the distance between the points is very small and an easing gradient on the last point won_t_t make much of a difference._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Adding a _t_gradiator_t_ function would be a great addition. To be able to set the ease in time in frames and the ease out time in frames._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Another nice addition would be an animation points interpolator. So the points in the animation could be interpolated as a bezier curve._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ alt_eq__qt__dd_rolleyes_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-02T13:37:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yep_co_ I agree with everything you have said_co_ and I understand your situation.  hmm._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You know_co_ though_co_ that you DO have a _lt_em_gt_time-related_lt_/em_gt_ parameter for each key... by using _t_frame_t_.  For example_co_ you could set it so that_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_- it takes 100 frames to get from key #0 to key #1_lt_/p_gt__lt_p_gt_- 95 frames from #1 to #2_lt_/p_gt__lt_p_gt_- 90 frames from #2 to #3_lt_/p_gt__lt_p_gt_- 85 frames from #3 to #4_lt_/p_gt__lt_p_gt_etc.  (speeding-up)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(I bet you know this already - sorry)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This would get you a linear ease-in across many keys_co_ and you could do the inverse for the ease-out.  Not easy_co_ but it can be done._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On the other subject (automatically generating keys that follow a Bezier curve)... I went looking at _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Curve3_qt_ rel_eq__qt_external nofollow_qt__gt_Jerome_t_s BJS implementation of Curve3_lt_/a_gt_.  I think this beast has some abilities that could help in this task.  Given a few parameters_co_ this critter can generate a _qt_list_qt_ of Vector3_t_s... which COULD be used as the key positions of an animation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have never tried this... but it seems like it would be plausible.  Curve3 also works in conjunction with another of Jerome_t_s parametric candies... and that_t_s _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Path3D_qt_ rel_eq__qt_external nofollow_qt__gt_Path3D_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Neither of these things had animation in mind when they were created... but I have a feeling that they could be used for such things. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Interesting thinkings_co_ Flomo!  A whole series of experiments could be done_co_ here... based-upon your good ideas.  _qt_How to properly bastardize a Curve3 object._qt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_   hmm.  And even a little more hmm._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Flomotion","Date":"2015-10-02T17:08:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Haha_co_ nice._lt_/p_gt__lt_p_gt_Your description is exactly what I have done. Using the Curve3 to plot those points into the animation curve._lt_/p_gt__lt_p_gt_Then I thought I could use an ease function to increase/decrease the time for all keys. But the ease function should be reversed. Because when easing out_co_ the time should be longer. And the easing function returns a smaller value. (green curve is the one I_t_m looking for)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//flomotion.nl/speed-ease.jpg_qt_ alt_eq__qt_speed-ease.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s what the ease-in-out function above does (thanks to jeroentbt.. somewhere on the web)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.wolframalpha.com/input/?i_eq_plot%28f%28x%29+%3D+%28sinh%28%28x+-+0.5%29+*+5%29+%2B+sinh%28-%28x+-+0.5%29%29+%2B+%28sinh%282.5%29+%2B+sin%28-2.5%29%29%29+%2F+%28sinh%282.5%29+*+2%29%2C+x+%3D+%5B0%2C+1%5D%29_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.wolframalpha.com/input/?i_eq_plot%28f%28x%29+%3D+%28sinh%28%28x+-+0.5%29+*+5%29+%2B+sinh%28-%28x+-+0.5%29%29+%2B+%28sinh%282.5%29+%2B+sin%28-2.5%29%29%29+%2F+%28sinh%282.5%29+*+2%29%2C+x+%3D+[0%2C+1]%29_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and in action_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/b6L8M/24/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/b6L8M/24/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But that math is too complex for me to change the curve. The code below is what I did.. if anyone is interested. But.. if anyone knows a way how to get the green curve with easier math.. that would be very nice _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_curveKeys _eq_ the array of curve points from Curve3_lt_br_gt_        framestep _eq_ 1/ (curveKeys.length-1)_sm__lt_br_gt_        for (i_eq_0_sm_ i&lt_sm_curveKeys.length_sm_ i++) {_lt_br_gt_            var frameVal _eq_ speedInOut(framestep*i)* traveltime_sm__lt_br_gt_            aniKeys.push({frame_dd_ frameVal_co_ value_dd_ curveKeys_lt_em_gt_})_sm__lt_/em_gt__lt_br_gt__lt_em_gt_        }_lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_var speedInOut _eq_ function(x) {_lt_/em_gt__lt_br_gt__lt_em_gt_    return (sinh((x - 0.5) * 5) + sinh(-(x - 0.5)) + (sinh(2.5) + Math.sin(-2.5))) / (sinh(2.5) * 1.82)_sm__lt_/em_gt__lt_br_gt__lt_em_gt_}_sm__lt_/em_gt__lt_br_gt__lt_em_gt_// supporting math function (not included in the standard javascript Math object)_lt_/em_gt__lt_br_gt__lt_em_gt_function sinh(aValue) {_lt_/em_gt__lt_br_gt__lt_em_gt_  var myTerm1 _eq_ Math.pow(Math.E_co_ aValue)_sm__lt_/em_gt__lt_br_gt__lt_em_gt_  var myTerm2 _eq_ Math.pow(Math.E_co_ -aValue)_sm__lt_/em_gt__lt_br_gt__lt_em_gt_  return (myTerm1-myTerm2)/2_sm__lt_/em_gt__lt_br_gt__lt_em_gt_}_lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_and.. on a personal not_dd_ I think you should be consulted everytime a new function name is introduced into BabylonJS. Bastardizing things or unleashing Gradiators sounds like fun _lt_/em_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-03T13:28:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not a specialist about BJS easing functions so I can_t_t tell anything about them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ if you want to set your camera speed according to the curve itself_co_ it to say the _qt_curviness_qt_ (not sure this word exists) or the distance between successive points_co_ you could then rely on the curve geometry itself._lt_/p_gt__lt_p_gt_Example _dd__lt_/p_gt__lt_p_gt_You could compute the distance between two successive points of the curve and fix your camera speed from this current distance..._lt_/p_gt__lt_p_gt_You could also instanciate a _lt_em_gt_Path3D_lt_/em_gt_ object from your curve_co_ setting the _lt_em_gt_raw_lt_/em_gt_ parameter to true _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2/Path3D_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2/Path3D_lt_/a_gt_ (it seems my documentation about this paramater disaperead somewhere the BJS limbo). You will then have access to each tangent and normals computed on each point_co_ these tangents and normals won_t_t be normalized giving an information on both the curviness and distance of the curve on the current point _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If it_t_s not clear_co_ please use this user function to visualize the path3D_co_ you will understand what I mean _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/UserFunctions/blob/master/showPath3D.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/UserFunctions/blob/master/showPath3D.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_how to _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14965-user-custom-function-showpath3d/?hl_eq_path3d_qt__gt_http_dd_//www.html5gamedevs.com/topic/14965-user-custom-function-showpath3d/?hl_eq_path3d_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]