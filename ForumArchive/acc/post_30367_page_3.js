[{"Owner":"Deltakosh","Date":"2017-06-01T21:36:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t3. You have to save it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6. ok\n_lt_/p_gt_\n\n_lt_p_gt_\n\t7. Can you repro in the PG?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-06-01T22:32:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t#7 - I had a bit of trouble with domImage too because new Image() has a naming collision_co_ there is a (global?) alias for DomImage outside of the internal module declaration (_lt_span style_eq__qt_color_dd_#a71d5d_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ DOMImage _lt_/span_gt__lt_span style_eq__qt_color_dd_#a71d5d_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_Image_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt__sm__lt_/span_gt_).  When I moved the GUI code into my project I renamed Image class as ImageControl to avoid the conflict._lt_br /_gt__lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-06-01T22:35:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176661_qt_ data-ipsquote-contentid_eq__qt_30367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496356334_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t#7 - I had a bit of trouble with domImage too because new Image() has a naming collision_co_ there is a (global?) alias for DomImage outside of the internal module declaration (_lt_span style_eq__qt_color_dd_#a71d5d_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ DOMImage _lt_/span_gt__lt_span style_eq__qt_color_dd_#a71d5d_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_Image_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt__sm__lt_/span_gt_).  When I moved the GUI code into my project I renamed Image class as ImageControl to avoid the conflict._lt_br /_gt__lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tUse babylon gui_t_s namespace - new BABYLON.GUI.Image()_co_ there can_t_t possibly be a conflict.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-06-01T22:41:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176651_qt_ data-ipsquote-contentid_eq__qt_30367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496352982_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t7. Can you repro in the PG?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think the image is changed properly_co_ but I_t_m guessing you made domImage only a setter_co_ perhaps add a getter too that returns _domImage?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XCPP9Y%2345_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XCPP9Y#45_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-06-01T22:42:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt_ - I_t_m using ES6_co_ so I can alias the imports.  Is was the code in Image.ts `source` property setter than gave me the issue (_lt_/span_gt__lt_span style_eq__qt_color_dd_#0086b3_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt__domImage_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#a71d5d_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#a71d5d_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#795da3_sm__qt__gt_DOMImage_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_()_sm_).  Anyway_co_ since that is not your issue we can ignore my comment.  Cheers._lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-06-01T23:08:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tActually_co_ I do have an opinion about the class name_co_ while we are on this topic.  I think choosing Image as the name of the class can lead to issues in the future.  If somebody does an ES6 import from babylon GUI like_dd__lt_br /_gt_\n\timport { Image } from _t_/babylonjs/gui_t__lt_br /_gt_\n\tThen they will be unable to create an HtmlImageElement with the typical constructor new Image(height_co_ width).  They would need to alias the import - ie_dd_ import { Image as GuiImage} from _t_babylonjs/gui_t_.  So_co_ I would have to say that I think that class name is maybe not the best choice.  Looks like it required also a global declaration_co_ which could be clobbered.  I have it called ImageControl_co_ so maybe not as good of a name.  It_t_s always hard to name things...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-02T01:58:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNaming is Hard _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt__dd_ I_t_ve added a getter\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-06-02T08:03:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHow can I update the content of an image button?_lt_br /_gt_\n\tOr_co_ how can I get the context of the image?_lt_br /_gt_\n\tI would like to draw an energy level bar_co_ and score_co_ and menu points with pixel font for example. (I can draw pixel fonts to a context_co_ just dont_t_know how to get it)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-02T13:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\timage button uses an image control (button.children[0])\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe image control is this one_dd__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui#image_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui#image_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can set the source to an URL\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tto draw the level bar_co_ I recommend just using a rectangle. Menu points could be drawn with TextBlock\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-06-02T20:47:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ I see a slider to add in BABYLON.GUI. It_t_s awesome. I think it_t_s still in the works_co_ but it_t_s cool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks DK\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-06-02T22:41:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis no longer works_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VAPD0W_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VAPD0W_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-06-03T08:54:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176838_qt_ data-ipsquote-contentid_eq__qt_30367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496443317_qt_ data-ipsquote-userid_eq__qt_8420_qt_ data-ipsquote-username_eq__qt_royibernthal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ royibernthal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis no longer works_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VAPD0W_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VAPD0W_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWorks fine for me.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-06-03T14:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176867_qt_ data-ipsquote-contentid_eq__qt_30367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496480072_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWorks fine for me.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tTry to clear your cache and resize the window_co_ the button should be resized with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_EDIT_dd__lt_/strong_gt_ oops it shouldn_t_t_co_ I mixed the PGs_co_ sorry about that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-03T19:08:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tANd here is the slider _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui#slider_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui#slider_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eugene","Date":"2017-07-02T15:23:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTell me please . I can not import BABYLON.GUI_lt_br /_gt_\n\tImport * as BABYLON from _t_babylonjs_t__sm_ _lt_br /_gt_\n\t_t_Error_t_message_dd__t_Namespace_t_ BABYLON _t_has no exported member_t_ GUI _t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd when I started importing with help_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t/// &lt_sm_Reference path _eq_ _qt_../../../../ node_modules / babylonjs / dist / preview release / gui / babylon.gui.d.ts_qt_ /&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI got an exception_lt_br /_gt_\n\t  Error_dd_ Uncaught (in promise)_dd_ ReferenceError_dd_ BABYLON is not defined\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-07-03T07:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBABYLON.GUI is an extension that must be added separately to babylon\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/gui_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview release/gui_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]