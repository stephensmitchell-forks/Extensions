[{"Owner":"jerome","Date":"2015-10-07T12:39:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I start a new topic here from this last post from Fenomas _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/17550-framerate-issues-at-144hz/?p_eq_99321_qt__gt_http_dd_//www.html5gamedevs.com/topic/17550-framerate-issues-at-144hz/?p_eq_99321_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The goal is study how to deal with a constant logic loop (what manages_co_ say_co_ physics_co_ IA_co_ external data processing_co_ etc) besides the BJS render loop (_lt_em_gt_registerBeforeRender_lt_/em_gt_) in term of duration and_co_ if we can_co_ in term of performance._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Remember the algorithm proposal of Fenomas _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var tick_time _eq_ 40 // desired ms between ticks.. 40 would be for 25 ticks/secondfunction RAF() {  var now _eq_ performance.now()  var dt _eq_ now - _last  _last _eq_ now  if (game_paused) { return }  accumulator +_eq_ dt  if (accumulator &gt_sm_ tick_time) {    accumulator -_eq_ tick_time    game.tick(tick_time)    last_tick _eq_ now  }  var time_since_tick _eq_ now - last_tick  game.render(time_since_tick)  requestAnimationFrame(RAF)}_lt_/pre_gt__lt_p_gt_So please_co_ consider this example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2398_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#98_lt_/a_gt__lt_/p_gt__lt_p_gt_As you can see at lines 36-38_co_ I create a SPS into which I add 500 cubes_co_ 500 tetrahedrons and 200 torus knots._lt_/p_gt__lt_p_gt_This example runs for now at 60 fps in my Chrome browser._lt_/p_gt__lt_p_gt_Set your own right value_co_ say_co_ to the number of torus knots because they generate the more vertices_co_ to get 60 fps also._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now have a look from the line 79 _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_      var tick _eq_ function (tick_time) {          PS.setParticles()_sm_      }_sm_      var tick_time _eq_ 40_sm_      var now _eq_ Date.now()_sm_      var last _eq_ Date.now()_sm_      var dt _eq_ 0_sm_      var accumulator _eq_ 0_sm_      var last_tick _eq_ 0_sm_       // animation      //setInterval(function() { tick()_sm_ }_co_ tick_time)_sm_      scene.registerBeforeRender(function () {          now _eq_ Date.now()_sm_          dt _eq_ now - last_sm_          last _eq_ now_sm_          accumulator +_eq_ dt_sm_          if (accumulator &gt_sm_ tick_time) {              accumulator -_eq_ tick_time_sm_              //tick(tick_time)_sm_          }          //tick()_sm_          pl.position _eq_ camera.position_sm_          mesh.rotation.y +_eq_ 0.001_sm_      })_sm__lt_/pre_gt__lt_p_gt_I just tried to re-implement the Fenomas solution _dd_ the _lt_em_gt_tick()_lt_/em_gt_ function here just call the _lt_em_gt_SPS.setParticles()_lt_/em_gt_ which recomputes all the vertex positions (70800 vertices for a single mesh for my 1200 solids) and recompute all the normals._lt_/p_gt__lt_p_gt__lt_em_gt_SPS.setParticles()_lt_/em_gt_ will just call _lt_em_gt_SPS.updateParticles()_lt_/em_gt_ for each particle and_co_ in my example_co_ will rotate each particle around an axis particle - SPS center._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For now_co_ all the _lt_em_gt_tick()_lt_/em_gt_ calls are commented_co_ so nothing happens_co_ the whole mesh just slowly rotates._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We are about to compare three implementations _dd__lt_/p_gt__lt_ol_gt__lt_li_gt__lt_em_gt_tick()_lt_/em_gt_ called directly in the render loop as usual_lt_/li_gt_\t_lt_li_gt__lt_em_gt_tick()_lt_/em_gt_ called from the render loop but only at a fixed given frequency_co_ here every 40 ms_lt_/li_gt_\t_lt_li_gt__lt_em_gt_tick() _lt_/em_gt_called outside the render loop_co_ from a js setInterval_co_ every 40 ms_lt_/li_gt__lt_/ol_gt__lt_p_gt_As I don_t_t pass to _lt_em_gt_tick()_lt_/em_gt_ the _lt_em_gt_tick_time_lt_/em_gt_ parameter like Fenomas did in his own example_co_ the _lt_em_gt_updateParticle()_lt_/em_gt_ won_t_t take into account the different delay between two consecutive calls_co_ so the particles might rotate at different speed from an example to another one._lt_/p_gt__lt_p_gt_I know that is justly the reason why we should use a decoupled logic loop_co_ but I just want to compare the performances here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So don_t_t mind about the particle rotation_co_ don_t_t change your screen size and _lt_/p_gt__lt_p_gt_let_t_s start _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#1 _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2399_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#99_lt_/a_gt_  directly in the render loop _dd_ average 55 fps_co_ quite constant_lt_/p_gt__lt_p_gt_#2 _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%23100_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#100_lt_/a_gt_ at _lt_em_gt_tick_time_lt_/em_gt_ from the render loop _dd_ average 48 fps_co_ quite constant_lt_/p_gt__lt_p_gt_#3 _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%23101_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#101_lt_/a_gt_ only with _lt_em_gt_setInterval_lt_/em_gt_ clocked at_lt_em_gt_ tick_time_lt_/em_gt__co_ outside the render loop _dd_ average 55 fps_co_ but with much variability from 51 to 60 fps_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unless I made some mistake_co_ it seems really weird that #2 is the slowest while I expected it to be the fastest._lt_/p_gt__lt_p_gt_It_t_s weird also that #1 is as fast as #3 because the _lt_em_gt_tick()_lt_/em_gt_ is then called every _lt_em_gt_registerBeforeRender_lt_/em_gt_ call ... unless it_t_s a coincidence and my tick lasts enough to delay _lt_em_gt_registerBeforeRender _lt_/em_gt_as much as #3 would do._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ this example is not a pure logic loop example as the _lt_em_gt_setParticle()_lt_/em_gt_ function updates the mesh vertices_co_ it is to say that it accesses to the BJS core itself_co_ to the WebGL part. Maybe another example_co_ where only_co_ say_co_ coordinates or speeds would have been computed_co_ would have been more pertinent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any thoughts ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-10-07T13:25:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not sure where your results came from_co_ but for me #1 was the slowest - which is expected_co_ since it_t_s doing more work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Incidentally I_t_d avoid trying to measure performance in the playground. There_t_s a ton of unrelated code being run_co_ and e.g. moving the mouse around in the code view has a big impact on performance._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More generally_co_ the point of the loop I suggested was to decouple the logic updates from the renders without breaking physics and without creating jitter (i.e. temporal aliasing). It_t_s not a performance hack_co_ and I don_t_t think it_t_s likely to affect performance much._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-07T13:37:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wouldn_t_t you want to use the web workers api for something like this?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-07T13:39:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You should set the accumulator to 0 after each tick or eventually you will always be ticking.  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-07T13:56:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@adam _dd_ the tick_time value is subtracted from the accumulator each tick_lt_/p_gt__lt_p_gt_yep_co_ webworkers would be nice here_co_ but as I set a BJS object_co_ it_t_s not easy to do... would be better with just a real logic process_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@fenomas _dd_ I agree about the interest of loose coupling the logic and the renders more than a hack about performance. I know this._lt_/p_gt__lt_p_gt_I just wanted to test how the performance would be affected in an almost stressed case (before applying the tick)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You are right about the PG side effects that I just forgot._lt_/p_gt__lt_p_gt_So same local tests (a little bigger window size than before) _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_# 1 _dd_ 60 fps_lt_/p_gt__lt_p_gt_# 2_dd_  50-52 fps_lt_/p_gt__lt_p_gt_# 3 _dd_ 59-60 fps_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#2 still slower_co_ I don_t_t get why ... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_angry.png_qt_ alt_eq__qt__dd_angry_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did the measures with Chrome either with the BJS debug layer_co_ either with the browser internal fps display (and no debug layer)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-07T14:06:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99829_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1444226160_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_@adam _dd_ the tick_time value is subtracted from the accumulator each tick_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The accumulator is greater than tick_time.  If you are just subtracting tick_time from accumulator_co_ eventually accumulator is always going to be greater than tick_time._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-07T14:42:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ooops you are right_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_however_co_ resetting the accumulator to zero doesn_t_t change my former local results._lt_/p_gt__lt_p_gt_I don_t_t get why the implementation I expect to be the fastest is the slowest here _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-07T15:01:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not seeing that much of difference between the 3 in Chrome._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-10-07T17:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99826_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_adam_qt_ data-cite_eq__qt_adam_qt_ data-ipsquote-timestamp_eq__qt_1444225079_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Wouldn_t_t you want to use the web workers api for something like this?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Web workers don_t_t share memory with the main thread_co_ so using them only makes sense if a tick would take longer than the overhead of copying stuff back and forth._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99827_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_adam_qt_ data-cite_eq__qt_adam_qt_ data-ipsquote-timestamp_eq__qt_1444225195_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_You should set the accumulator to 0 after each tick or eventually you will always be ticking.  _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you check you_t_ll see that_t_s not the case._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99829_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1444226160_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_#2 still slower_co_ I don_t_t get why ... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_angry.png_qt_ alt_eq__qt__dd_angry_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did the measures with Chrome either with the BJS debug layer_co_ either with the browser internal fps display (and no debug layer)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s not slower for me_co_ so I can_t_t help. My only advice is_dd_ don_t_t look at FPS counters_co_ profile!. Chrome has incredible developer tools - you can run a profile and see precisely which functions are taking up time. There_t_s no need to guess what_t_s going on (and indeed_co_ modern JS VMs make that impossible anyway)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-07T17:49:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99855_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_fenomas_qt_ data-cite_eq__qt_fenomas_qt_ data-ipsquote-timestamp_eq__qt_1444238676_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_If you check you_t_ll see that_t_s not the case._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m embarrassed to admit that I did and it eventually ticked on every frame.  Anyway_co_ this is not helping Jerome._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-07T21:01:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I just re-tried at home with my old laptop_co_ editor hidden_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#1 and #2 are quite the same at 28 fps_lt_/p_gt__lt_p_gt_#3 is really faster at 39 fps_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CtlAltDel","Date":"2015-10-07T22:10:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I suggest completely controlling your render from your main loop_co_ and not try to hack this around the existing babylong (pre)render stuff._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So just call the approriate functions at the correct time from your own mainloop._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_An implementation of such a mainloop_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/IceCreamYou/MainLoop.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/IceCreamYou/MainLoop.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And reading material on the whole deal_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//gafferongames.com/game-physics/fix-your-timestep/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//gafferongames.com/game-physics/fix-your-timestep/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let babylon be the renderer and not dictate everything else_co_ unless they have a proper mainloop_co_ then I said nothing but the above article is still great reading material _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-10-07T22:40:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you look at the last one that has the better framerate you should see that the cubes are rotating slower.  That tells me that the other examples are calling the tick function more_co_ which would account for the lower fps._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-10-08T03:57:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99857_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_adam_qt_ data-cite_eq__qt_adam_qt_ data-ipsquote-timestamp_eq__qt_1444240176_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_m embarrassed to admit that I did and it eventually ticked on every frame.  Anyway_co_ this is not helping Jerome._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Each frame it adds _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_dt_lt_/span_gt_ to the accumulator and subtracts at most _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_tick_rate_lt_/span_gt__co_ so the only way it_t_ll fire every frame is if _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_(dt &gt_sm__eq_ tick_rate)_lt_/span_gt_. If that_t_s the case_co_ then you_t_re rendering slower than your desired tick rate_co_ so there_t_s no point in separating the loops in the first place!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99892_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1444251688_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_#1 and #2 are quite the same at 28 fps_lt_/p_gt__lt_p_gt_#3 is really faster at 39 fps_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You_t_re comparing the framerates of code that does quite different amounts of work. Why not make a counter that runs for 10-20s and counts how many ticks/renders occur? The whole point of loops like this is to have logic and rendering run at consistent_co_ but separate rates_co_ so why not measure whether they_t_re achieving that?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99904_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17710_qt_ data-ipsquote-username_eq__qt_CtlAltDel_qt_ data-cite_eq__qt_CtlAltDel_qt_ data-ipsquote-timestamp_eq__qt_1444255844_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_So just call the approriate functions at the correct time from your own mainloop._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And reading material on the whole deal_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//gafferongames.com/game-physics/fix-your-timestep/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//gafferongames.com/game-physics/fix-your-timestep/_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s basically what I suggested in the previous thread.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  This thread is Jerome_t_s reply._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-08T07:17:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ I know that the goal is to have both loops (rendering and logic) at their own consistent rate._lt_/p_gt__lt_p_gt_And I read the linked article also. And I like your algo proposal._lt_/p_gt__lt_p_gt_And I_t_m convinced since ever that this is right way to do_co_ whatever the choice of the implementation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s why I didn_t_t focus on the fact the logic loop is really triggered at the right frequency or not_co_ but about how it would impact the performance in a real stressed case._lt_/p_gt__lt_p_gt_The main error I did in my example is that my logic loop is not a _qt_pure_qt_ logic loop as it calls _lt_em_gt_updateVerticesData_lt_/em_gt_ somewhere_co_ it is too say that it interferes with something related to the rendering_co_ at least with the WebGL buffers._lt_/p_gt__lt_p_gt_So my example is really not pertinent to illustrate this loop decoupling._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Imho_co_ it remains important to focus on the real FPS_co_ the one the user can see and feel. If I would implement a logic_co_ decoupled or not_co_ consistent or not_co_ making my application to lag or to become to slow to be used_co_ I wouldn_t_t have do the job. This is the reason why I wanted to compare the different FPS_co_ those seen thy the end-user._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However I might have done something wrong in my implementation of your algo because it is the slowest on each on my tests_co_ while it is expected to be the fastest on the paper._lt_/p_gt__lt_p_gt_Maybe I might not have coded it within _lt_em_gt_registerBeforeRender_lt_/em_gt_ but somewhere else ? in _lt_em_gt_engine.runRenderLoop()_lt_/em_gt_ ? no idea about what went wrong here ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This error apart_co_ the _lt_em_gt_setInterval_lt_/em_gt_ solution is quite good in most cases (this one wasn_t_t described in the article because it is specific to javascript)_co_ though it has a default _dd__lt_/p_gt__lt_p_gt_when the user hides (changing tab_co_ minimizing the browser_co_ etc) the window running _lt_em_gt_requestAnimationFrame_lt_/em_gt__co_ this method isn_t_t called any longer by the browser while the _lt_em_gt_setInterval_lt_/em_gt_ keeps on being called at its own frequency._lt_/p_gt__lt_p_gt_This means the logic keeps on going since the rendering is stopped _dd_ imagine the logic computes the mesh positions for instance ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-10-08T10:49:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To add my useless two cents_dd_ I never use _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_registerBeforeRender_lt_/span_gt__co_ if I need to do something directly linked to the engine running rate_co_ I always do that directly in runRenderLoop (although it_t_s not based on any benchmark_co_ just pure intuition _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt_ )_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-10-08T13:22:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jerome_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think of it this way. There are two cases to consider_dd__lt_/p_gt__lt_ol_gt__lt_li_gt_When things are unstressed_co_ we want _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_render_lt_/span_gt_ to be called as often as possible (at the RAF rate)_co_ and we want _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_tick_lt_/span_gt_ to be called at a consistent_co_ defined rate._lt_/li_gt_\t_lt_li_gt_When things are overstressed_co_ we want to call _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_tick_lt_/span_gt_ as close as possible to the desired rate_co_ and we want to call _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_render_lt_/span_gt_ at least once per tick._lt_/li_gt__lt_/ol_gt__lt_p_gt_The accumulator loop I suggested is just meant to meet those two goals. The accumulator is for accuracy over the long run - setInterval will be slightly slower due to how it works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now for performance. If things are stressed - meaning render and tick are too slow to call both as often as we_t_d like - then the best we can do for goal (2) is to simply alternate between _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_render_lt_/span_gt_ and _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_tick_lt_/span_gt_ as fast as possible. In that case_co_ the only real way to optimize performance is to minimize idle time (when the browser is just waiting for the next RAF or interval). I suspect that the best way to do this will vary with browser/version/OS. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For real-world content_co_ in my game I find that for very heavy stress_co_ idle time goes to zero_co_ so there_t_s not much to optimize. But with lighter stress_co_ the visible FPS will go below 60 even though there is still idle time_co_ so probably it could be a little better. I suspect that the best thing might be to have a _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_setInterval(0)_lt_/span_gt_ loop with an accumulator to decide when to call a tick_co_ just to avoid having the browser idle. But I haven_t_t tested with real content._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-08T13:37:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_really smart explanation _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_thank you !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]