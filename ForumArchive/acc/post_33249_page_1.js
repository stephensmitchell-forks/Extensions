[{"Owner":"dbawel","Date":"2017-10-04T22:18:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a form built using PHP_co_ and need to pass the text input value to an external .js file. Here is the PHP code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  &lt_sm_?php_lt_br /_gt__lt_strong_gt_  $brsh_size _eq_ 1_sm__lt_/strong_gt__lt_br /_gt_\n\t  ?&gt_sm__lt_br /_gt_\n\t&lt_sm_span&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_div&gt_sm_&lt_sm_span&gt_sm_&lt_sm_center&gt_sm_&lt_sm_input class _eq_ _t_sp-flat_t_ type_eq__qt_color_qt_ id_eq__qt_picker_qt_ value_eq__qt_#000_qt_ act_eq__qt_get-color_qt_ /&gt_sm_&lt_sm_/center&gt_sm_&lt_sm_/div&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_&lt_sm_center class_eq__t_font-brush_t_&gt_sm_Brush Size_dd_&lt_sm_/a&gt_sm_&lt_sm_input type_eq__qt_text_qt_ size_eq__qt_3_qt_ maxlength_eq__qt_3_qt_ id_eq__qt_br_size_qt_ act_eq__qt_get-brushsize_qt_ value_eq__qt_&lt_sm_?php echo $brsh_size_sm_?&gt_sm__qt_&gt_sm_&lt_sm_/div&gt_sm_&lt_sm_/center&gt_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t&lt_sm_/span&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a case is an external .js file where the case is called correctly_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                                               _lt_strong_gt_ case _t_get-brushsize_t__dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                                                //var myPhpValue _eq_ $(_qt_#brsh_size_qt_).val()_sm__lt_br /_gt_\n\t                                                //console.log(myPhpValue)_sm__lt_br /_gt_\n\t                                                _lt_br /_gt_\n\t//var brush_size_i _eq_ document.getElementById(_qt_br_size_qt_).value_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//console.log(_qt_brush size is _qt_ + brush_size_i)_sm_                                                     _lt_br /_gt_\n\t                                                        _lt_br /_gt_\n\t                                                _lt_strong_gt_break_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI left some of my trial code for reference_co_ but please ignore as I_t_ve gotten much farther with this - but run into issues.  I_t_ve tried every method on stack overflow and other sites_co_ and am unable to _t__GET_t_ the value of the PHP variable (not my first choice) but preferably the text input from the input _t_id_t_. Any help is appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-04T23:11:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tjust fire a function that grabs the value from where you need and passes it to what ever function you need._lt_br /_gt_\n\tIf you are using my _qt_act_qt_ bindings from the system I helped you with its super easy._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tIll call you tonight when I get off work. I got you fam ^_^.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-10-04T23:43:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you should seperate PHP and Javascript whenever possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you change your Javascript files extension to .php_co_ the following does_co_ however_co_ seem to work for me (In FF at least)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tindex.php\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n$value _eq_ _qt__t_With more PHP?_t__qt__sm_\n?&gt_sm_\n\n&lt_sm_html&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_js.php_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm_\n\n&lt_sm_body&gt_sm_\n&lt_sm_script&gt_sm_\n    console.log(jsval + _qt_ in a Javascript Variable?..._qt_ + &lt_sm_?php echo $value_sm_?&gt_sm_)_sm_  \n&lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_    \n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tjs.php\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n$jsval _eq_ json_encode(_t_PHP Value_t_)_sm_\n?&gt_sm_\n\nvar jsval _eq_ &lt_sm_?php echo $jsval_sm_?&gt_sm__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOutputs _qt_PHP Value in a Javascript Variable?...With more PHP?_qt_ to the console.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIntegers don_t_t seem to need json encoding_co_ but strings do. Haven_t_t tried floats.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-10-05T06:30:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI prefer to do that like this_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\n$jsval _eq_ json_encode(_t_PHP Value_t_)_sm_\n?&gt_sm_\n\nvar jsval _eq_ _t_&lt_sm_?php echo $jsval_sm_?&gt_sm__t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think about _t_ _t_ between php code in js_co_ because in case of null value of  php variable js will terminate due to syntax error_sm_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-05T17:05:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI got him on track last night_co_ this is _qt_solved_qt_...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-10-05T17:45:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_191009_qt_ data-ipsquote-contentid_eq__qt_33249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1507223112_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t38 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI got him on track last night_co_ this is _qt_solved_qt_...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhich solution did he choose? AJAX or something?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-05T18:10:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCorrect file structure.  He is not using a standard set up_co_ I know because I designed the system for him ^_^... but basically an event system with custom callbacks that has the value passed through the event.  Pretty much could not do what he was doing because context was being pulled by AJAX post page propagation.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var self _eq_ this_sm_\n        this.BINDINGS _eq_ {\n                MOUSEDOWN_dd_ function(e) {\n                      ...\n                }_co_\n                MOUSEUP_dd_ function(e) {\n                    ...\n                }_co_\n                CHANGE_dd_ function(e) {\n                        var _act _eq_ (e.target).getAttribute(_t_change-act_t_)_sm_\n                        if (_act) {\n                                e.preventDefault()_sm_\n                        }\n                        console.log(_act)_sm_\n                        self.ACTS(e_co_ _act)_sm_\n                        return\n                }\n        }_sm_\n\n        document.addEventListener(_qt_change_qt__co_ this.BINDINGS.CHANGE_co_ false)_sm_\n        document.addEventListener(_qt_mousedown_qt__co_ this.BINDINGS.MOUSEDOWN_co_ false)_sm_\n        document.addEventListener(_qt_mouseup_qt__co_ this.BINDINGS.MOUSEUP_co_ false)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthis prolly does not make much sense unless you see the whole object and  I excluded script hence the _t_..._t_ but yeah its an interesting structure for dynamic content.  Might have to write up a tutorial at some point showing this kind of structure at work because its super powerful.  Id post more but out of respect for Daves projects I cant._lt_br /_gt__lt_br /_gt_\n\tBut for anyone wondering on how to pass JS vars to PHP_co_ yeah a xhr request with a _POST is ideal.  But PHP to JS is different_co_ and it was not really PHP to JS_co_  it was HTML to JS in this instance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-10-06T21:43:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ is correct in his last post_co_ and I personally would be using Ajax to _Post the variable - or echo the PHP variable in javascript text which is very straight forward_sm_ and there are many examples on the Stack Overflow forum with jsfiddle code examples for this and other methods - depending on your needs. In the script example above_co_ I was passing an event to a specific case incorrectly_sm_ whereas he added a _lt_strong_gt__t_CHANGE_dd__t_ _lt_/strong_gt_function which allows me to change values when passing the event to specific cases - however_co_ it_t_s no obvious in the example above as there_t_s more to the code which would require far more than a single post to expand upon. It_t_s also a very different approach architecturally than what most Developers would choose for what is generally required to simply pass variables between JS and PHP.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy issue was that I didn_t_t fully understand that I wasn_t_t passing the correct event at the correct time within the code that _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ initially set up for me governing how variables and functions are called and passed within the app until I got too frustrated on my own and contacted him directly - which he then solved in about  about 20 minutes following my wasting 2 days of my time prior. After working on several projects with him_co_ I find he is always at least 10 steps ahead of me when it comes to solving coding issues. If anyone else is truly having issues passing variables between JS and PHP_co_  then create a post and I can point you to a few simple examples of what is normally used as methods in passing variables between PHP and Javascript - which actually wasn_t_t my problem - but valuable to know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise_co_ I_t_m back on track and moving quickly through building the UI which is built in HTML and CSS primarily using PHP - with Javascript to handle most of the dynamic functions within the app. I would have to say that whenever I need serious help_co_ it_t_s been well worth hiring _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ to handle much of the _qt_heavy lifting_qt_ when it comes to finding solutions to unique problems in games and apps - worth every penny I_t_ve ever spent bringing him into a project. I know this sounds like an ad for hiring him_co_ but it actually is - as I_t_d have developed a far different and less efficient architecture on two different projects recently - as he saved my ass on both building something I could work with and easily expand_co_ once I could mentally grasp what he_t_d built.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise_co_ the process in working to find solutions on my own has schooled me and made me a far better developer_co_ so I owe him a great deal for building the elements and leaving me to finish the work - as he was busy on other projects. And now I can assist other developers in areas which I had absolutely no clue - and am thinking way out of the box to solve many problems by anticipating functionality far in advance. So I_t_ll mark this question as solved_co_ however_co_ if anyone needs help with PHP and JS_co_ I_t_m happy to say I can now assist in most areas. Create a new post if there is still an issue for other developers on this forum_co_ and I_t_m certainly happy to help with what I_t_ve recently learned the hard way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]