[{"Owner":"SethRing","Date":"2014-10-21T19:32:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Posting for the first time in a new forum is always slightly scary_co_ but you all seem very kind. Hopefully that holds true  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My question is about Actions and Buttons. I_t_ve been able to create an action based on interaction with a mesh_co_ but I_t_m wondering if there is an easy way to hook an action and a button so that the action triggers on a button push. I_t_m figuring there has to be since _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/809-joshcamas/_qt_ title_eq__qt__qt__gt_joshcamas_lt_/a_gt_ does it in his nifty _lt_a href_eq__qt_http_dd_//skriptforums.com/editor/0.013a/_qt_ rel_eq__qt_external nofollow_qt__gt_SamacEditor_lt_/a_gt_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can someone point me to some documentation on this issue? Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-10-21T22:08:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The actions are triggered in Babylon from a trigger on a 3D object. The shares can not be triggered from a html button. You can optionally create a 3d button that will trigger actions_co_ but if your button is on top of the canvas you can not use the actions._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-21T22:22:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Adding action to a button might be unnessesary._lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_myButton.onclick _eq_ function (btn) {        scene.getMeshById(_qt_mymesh_qt_).visibility _eq_ 0_sm_        scene.beginAnimation(myTarget_co_ 0_co_ 150)_sm_}_lt_/pre_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-22T04:17:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Welcome to the forums!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I do not actually use the action manager_co_ funnily enough. I basically do what Paradine showed - run a function on the _qt_onclick_qt_ event. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can do this in many ways_co_ including_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_HTML_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_runFunction(_t_hello_t_)_qt_&gt_sm_Click Me!&lt_sm_/button&gt_sm__lt_/pre_gt__lt_p_gt_OR_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Javascript_dd_ (Paradine_t_s Method)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var coolButton _eq_ document.getElementById(_qt_sweetButton_qt_)_sm_coolButton.onclick _eq_ function () {    alert(_qt_Chicken Sauce!_qt_)_sm_}_lt_/pre_gt__lt_p_gt_or you can even use jquery. No need for the actionmanager. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SethRing","Date":"2014-10-22T12:39:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you all for your responses!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I must be missing something because I tried the button/function method before my first post and couldn_t_t get it to work. My code is as follows_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_&lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_showTop(_t_T115_t_)_qt_&gt_sm_Round&lt_sm_/button&gt_sm_&lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_showTop(_t_T345_t_)_qt_&gt_sm_Rectangular&lt_sm_/button&gt_sm__lt_/pre_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_script&gt_sm_    if (BABYLON.Engine.isSupported()) {        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_                BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_test.babylon_qt__co_ engine_co_ function (newScene) {          var meshT115 _eq_ newScene.getMeshByName(_qt_T115_qt_).visibility _eq_ 0_sm_          var mesh510 _eq_ newScene.getMeshByName(_qt_510_qt_).visibility _eq_ 0_sm_          var meshT345 _eq_ newScene.getMeshByName(_qt_T345_qt_).visibility _eq_ 1_sm_          var mesh350 _eq_ newScene.getMeshByName(_qt_350_qt_).visibility _eq_ 0_sm_          var myBaseMesh _eq_ newScene.getMeshByName(_qt_510_qt_)_sm_          var materialMyMesh _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ newScene)_sm_          materialMyMesh.diffuseTexture _eq_ new BABYLON.Texture(_qt_assets/images/stain/Natural.jpg_qt__co_ newScene)_sm_          materialMyMesh.specularPower _eq_ 50_sm_          myBaseMesh.material _eq_ materialMyMesh_sm_          var myTopMesh _eq_ newScene.getMeshByName(_qt_T345_qt_)_sm_          var materialMyMesh _eq_ new BABYLON.StandardMaterial(_qt_texture2_qt__co_ newScene)_sm_          materialMyMesh.diffuseTexture _eq_ new BABYLON.Texture(_qt_assets/images/stain/Natural.jpg_qt__co_ newScene)_sm_          materialMyMesh.specularPower _eq_ 50_sm_          myTopMesh.material _eq_ materialMyMesh_sm_            // Wait for textures and shaders to be ready            newScene.executeWhenReady(function () {                // Attach camera to canvas inputs                var myCamera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ 1_co_ 0.8_co_ 5_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ newScene)_sm_                var light0 _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(.1_co_ .1_co_ .1)_co_ newScene)_sm_                light0.diffuse _eq_ new BABYLON.Color3(.1_co_ .1_co_ .1)_sm_                light0.specular _eq_ new BABYLON.Color3(.1_co_ .1_co_ .1)_sm_                light0.groundColor _eq_ new BABYLON.Color3(.5_co_ .5_co_ .5)_sm_                newScene.activeCamera _eq_ myCamera_sm_                newScene.activeCamera.attachControl(canvas)_sm_                // Once the scene is loaded_co_ just register a render loop to render it                engine.runRenderLoop(function() {                    newScene.render()_sm_                })_sm_            })_sm_        }_co_ function (progress) {            // To do_dd_ give progress feedback to user        })_sm_    }      function showTop(x) {    newScene.getMeshById(_qt_myTopMesh_qt_).visibility _eq_ 0_sm_    newScene.getMeshById(x).visibility _eq_ 1_sm_  }&lt_sm_/script&gt_sm_ _lt_/pre_gt__lt_p_gt_I manually grab my 4 meshes and set their visibility (hiding all but T345). I then try to call my showTop() function to hide the current top mesh (myTopMesh) and display the submitted mesh._lt_br_gt__lt_br_gt_What am I missing?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-22T13:23:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Newscene is out of scope problem from first glance view? Or you call it before scene is ready_co_ might also come up as a problem._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SethRing","Date":"2014-10-22T13:45:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_is there a way to call newScene from outside BABYLON.SceneLoader.Load()? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or do I need to recreate the scene with each onclick event?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-22T14:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_engine.scenes[] contains all scenes that are linked to it someway._lt_br_gt_But only function that is called each frame is _lt_span_gt_engine_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_runRenderLoop_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_()_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_{_lt_/span_gt__lt_span_gt_ newScene_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_render_lt_/span_gt__lt_span_gt_()_sm__lt_/span_gt__lt_span_gt_ })_sm__lt_/span_gt__lt_br_gt_others like loading functions are called only once._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-10-22T16:21:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can create a global variable_dd_  _lt_strong_gt_var myNewScene _eq_ null_sm__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt__lt_span_gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_SceneLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Load_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt_test.babylon_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ engine_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_function_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_newScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_{_lt_/span_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_    myNewScene  _eq_ newScene_sm__lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_    ---_lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Error_lt_/strong_gt__dd_ _lt_/p_gt__lt_p_gt__lt_strike_gt_and use it in your function signature showTop_dd_ _lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strike_gt__lt_strong_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_function_lt_/span_gt__lt_span_gt_ showTop_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_x_co_ myScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_{_lt_/span_gt__lt_/strong_gt__lt_/strike_gt__lt_/p_gt__lt_p_gt__lt_strike_gt__lt_strong_gt__lt_span_gt_    myScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_getMeshById_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt_myTopMesh_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)._lt_/span_gt__lt_span_gt_visibility _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__eq__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_102_co_102)_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__sm__lt_/span_gt__lt_br_gt__lt_span_gt_    myScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_getMeshById_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_x_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)._lt_/span_gt__lt_span_gt_visibility _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__eq__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_102_co_102)_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__sm__lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_}_lt_/span_gt__lt_/strong_gt__lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strike_gt__lt_strong_gt_&lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_showTop(_t_T115_t__co_ myNewScene)_qt_&gt_sm_Round&lt_sm_/button&gt_sm__lt_/strong_gt__lt_/strike_gt__lt_/p_gt__lt_p_gt__lt_strike_gt__lt_strong_gt_..._lt_/strong_gt__lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_see fixed bottom_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SethRing","Date":"2014-10-22T17:43:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried adding the global but I get the following error_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Uncaught TypeError_dd_ undefined is not a function showTop onclick_lt_/pre_gt__lt_p_gt_I feel like I_t_m missing something really simple. With how easy babylon.js has been to use so far I can_t_t believe that there isn_t_t a simple solution to this that I_t_m just not getting._lt_br_gt__lt_br_gt_Thanks for all your help so far._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-10-22T18:36:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Try to use the global variable directly once assign rather than using it in the signature._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_ it was a error to use myNewScene it in the signature. Sorry._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_br_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_br_gt_\nvar myNewScene _eq_ null_sm__lt_br_gt__lt_br_gt_\nBABYLON.SceneLoader.Load(_qt__qt__co_ _qt_test.babylon_qt__co_ engine_co_ function (newScene) {_lt_br_gt_\n    myNewScene  _eq_ newScene_sm__lt_br_gt_\n    ---_lt_br_gt__lt_br_gt_\nfunction showTop(x) {_lt_br_gt_\n    myNewScene.getMeshById(_qt_myTopMesh_qt_).visibility _eq_ 0_sm__lt_br_gt_\n    myNewScene .getMeshById(x).visibility _eq_ 1_sm__lt_br_gt_\n}_lt_br_gt__lt_br_gt_\n&lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_showTop(_t_T115_t_)_qt_&gt_sm_Round&lt_sm_/button&gt_sm__lt_br_gt__lt_br_gt__lt_/pre_gt__lt_br_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-10-22T21:10:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi.  In certain circumstances_co_ putting _t_window_t_ in front.... brings things back in scope.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tie. \n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.showTop _eq_ function(x) { ... }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   or\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction window.showTop(x) { ... }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*  Deltakosh and Dad72 taught me about named functions and anonymous functions... here_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/page-17#entry46784_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/page-17#entry46784_lt_/a_gt_  (and the post after that one_co_ too).  Maybe something there can help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe dynamic html _t_hide editor_t_ and _t_show editor_t_ buttons here... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#YIT1S_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#YIT1S_lt_/a_gt_ ...use functions like that (way at the bottom).  Something similar might work for you_co_ too.  It_t_s not necessarily the best practice_co_ because it puts the functions on the window object_co_ which is global_co_ so it can collide with other browser functions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_seth ring_qt_ as in Jane Robert_t_s _qt_Seth_qt_?  I_t_m a big fan.  Maybe we_t_ll talk some more_co_ later_co_ in the back channels.  Feel free to PM me about it_co_ if you want to.  Rumor has it that we create our own (virtual) reality.  _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  (a good framework helps)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-10-22T21:38:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think this is time to bring up that I added an_lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_ append()_lt_/span_gt_ method to _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_SceneLoader_lt_/span_gt_ a while back.  The purpose then was for ease of loading more than one .babylon_co_ and not just meshes.  With _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_append()_lt_/span_gt__co_ you pass the scene_co_ so it is already instanced by you.  Slightly more elegant than putting a copy out to a _qt_reference global_qt_ in a loader call back.  see _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/8346-does-sceneloaderimportmesh-import-lights-and-cameras/_qt__gt_http_dd_//www.html5gamedevs.com/topic/8346-does-sceneloaderimportmesh-import-lights-and-cameras/_lt_/a_gt_ for more_co_ start page 2 I think._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-23T09:38:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I usually create the button itself when babylon is supported and show it only when scene is loaded. If the button is used only with babylon._lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (BABYLON.Engine.isSupported()) {      var btnLegend _eq_ document.createElement(_qt_button_qt_)_sm_      btnLegend.id _eq_ _qt_showLegend_qt__sm_      btnLegend.textContent _eq_ _qt_Legend_qt__sm_      btnLegend.hidden _eq_ true_sm_      document.getElementById(_qt_someDivId_qt_).appendChild(btnLegend)_sm_      //.....      var scene _eq_ createScene()_sm_      var executedWhenReady _eq_ function (){           btnLegend.onclick _eq_ function (btn) {                 //DoSth           }_sm_           btnLegend.hidden _eq_ false_sm_      }_sm_      scene.executeWhenReady(executedWhenReady)_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SethRing","Date":"2014-10-23T17:56:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So up until this point I have been putting my buttons outside the canvas. I_t_m guessing that is a problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe I need to back up. Anyone have any good resources on creating a 2d layer on top of my canvas?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_**EDIT**_lt_/p_gt__lt_p_gt_ Oh_co_ and _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/5733-wingnut/_qt_ title_eq__qt__qt__gt_Wingnut_lt_/a_gt__co_ its just my name _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xeonzinc","Date":"2014-10-23T18:37:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can create a 2D canvas on top of your babylon canvas quite easily. I currently have canvas buttons &amp_sm_ text input working very nicely._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/9772-2d-ui-overlay/_qt__gt_http_dd_//www.html5gamedevs.com/topic/9772-2d-ui-overlay/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Alternatively I belive you can just position your DOM buttons over the babylon canvas with CSS_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SethRing","Date":"2014-10-23T18:49:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Xeonzinc_co_ I_t_ve been trying to do the whole DOM button thing but I_t_m apparently not smart enough to figure it out. Anyone feel like taking a look at my code?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_&lt_sm_!DOCTYPE html&gt_sm_&lt_sm_html xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm_&lt_sm_head&gt_sm_    &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_/&gt_sm_    &lt_sm_title&gt_sm_Babylon - Basic scene&lt_sm_/title&gt_sm_    &lt_sm_link rel_eq__qt_stylesheet_qt_ type_eq__qt_text/css_qt_ href_eq__qt_assets/css/style.css_qt_&gt_sm_    &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_//use.typekit.net/ilr4lzl.js_qt_&gt_sm_&lt_sm_/script&gt_sm_    &lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm_try{Typekit.load()_sm_}catch(e){}&lt_sm_/script&gt_sm_    &lt_sm_script src_eq__qt_assets/js/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_    &lt_sm_script src_eq__qt_assets/js/hand-1.3.8.js_qt_&gt_sm_&lt_sm_/script&gt_sm_    &lt_sm_script src_eq__qt_assets/js/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_  &lt_sm_!-- optional physics engine --&gt_sm_&lt_sm_/head&gt_sm_&lt_sm_body&gt_sm_\t&lt_sm_div id_eq__qt_container_qt_&gt_sm_\t\t&lt_sm_!-- Page Content --&gt_sm_\t\t&lt_sm_div id_eq__qt_content_qt_&gt_sm_      &lt_sm_div id_eq__qt_tableBuilder_qt_&gt_sm_        &lt_sm_div id_eq__t_cssmenu_t_&gt_sm_          &lt_sm_ul id_eq__qt_tops_qt_&gt_sm_            &lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_showTop(_t_T115_t_)_qt_&gt_sm_Round&lt_sm_/button&gt_sm_            &lt_sm_button type_eq__qt_button_qt_ onclick_eq__qt_showTop(_t_T345_t_)_qt_&gt_sm_Rectangular&lt_sm_/button&gt_sm_          &lt_sm_/ul&gt_sm_        &lt_sm_/div&gt_sm_\t\t\t  &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_      &lt_sm_/div&gt_sm_    &lt_sm_/div&gt_sm_  &lt_sm_/div&gt_sm_  &lt_sm_script&gt_sm_    if (BABYLON.Engine.isSupported()) {      var myNewScene _eq_ null_sm_      var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_      var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_            BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_test.babylon_qt__co_ engine_co_ function (newScene) {        myNewScene _eq_ newScene_sm_        var meshT115 _eq_ newScene.getMeshByName(_qt_T115_qt_).visibility _eq_ 0_sm_        var mesh510 _eq_ newScene.getMeshByName(_qt_510_qt_).visibility _eq_ 1_sm_        var meshT345 _eq_ newScene.getMeshByName(_qt_T345_qt_).visibility _eq_ 1_sm_        var mesh350 _eq_ newScene.getMeshByName(_qt_350_qt_).visibility _eq_ 0_sm_        var myBaseMesh _eq_ newScene.getMeshByName(_qt_510_qt_)_sm_        var materialMyMesh _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ newScene)_sm_        materialMyMesh.diffuseTexture _eq_ new BABYLON.Texture(_qt_assets/images/stain/Natural.jpg_qt__co_ newScene)_sm_        materialMyMesh.specularPower _eq_ 50_sm_        myBaseMesh.material _eq_ materialMyMesh_sm_        var myTopMesh _eq_ newScene.getMeshByName(_qt_T345_qt_)_sm_        var materialMyMesh _eq_ new BABYLON.StandardMaterial(_qt_texture2_qt__co_ newScene)_sm_        materialMyMesh.diffuseTexture _eq_ new BABYLON.Texture(_qt_assets/images/stain/Natural.jpg_qt__co_ newScene)_sm_        materialMyMesh.specularPower _eq_ 50_sm_        myTopMesh.material _eq_ materialMyMesh_sm_        // Wait for textures and shaders to be ready        newScene.executeWhenReady(function () {          // Attach camera to canvas inputs          var myCamera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ 1.2_co_ 1.2_co_ 5_co_ new BABYLON.Vector3(0_co_ 0.1_co_ 0.1)_co_ newScene)_sm_            var light0 _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(0_co_ 50_co_ 0)_co_ newScene)_sm_          light0.diffuse _eq_ new BABYLON.Color3(.2_co_ .2_co_ .2)_sm_          light0.groundColor _eq_ new BABYLON.Color3(.5_co_ .5_co_ .5)_sm_          newScene.activeCamera _eq_ myCamera_sm_          newScene.activeCamera.attachControl(canvas)_sm_          // Once the scene is loaded_co_ just register a render loop to render it          engine.runRenderLoop(function() {              newScene.render()_sm_          })_sm_        })_sm_      }_co_ function (progress) {          // To do_dd_ give progress feedback to user      })_sm_    }    function showTop (x) {        myNewScene.getMeshById(_qt_myTopMesh_qt_).visibility _eq_ 0_sm_        myNewScene.getMeshById(x).visibility _eq_ 1_sm_    }    &lt_sm_/script&gt_sm_&lt_sm_/body&gt_sm_&lt_sm_/html&gt_sm__lt_/pre_gt__lt_p_gt_So far I_t_ve gotten it to load_co_ display my scene and then do nothing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Each time I hit a button it gives me that _qt_Uncaught TypeError_dd_ undefined is not a function_qt_ error on line 83. Which confuses me since I don_t_t understand why the browser thinks _qt_myNewScene.getMeshById(_qt_myTopMesh_qt_).visibility _eq_ 0_sm__qt_ should be a function..._lt_br_gt__lt_br_gt_Sorry for the totally beginner questions._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-10-24T23:56:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No need to apologize at all_co_ Sethring.  We enjoy having you with us_co_ no matter what your skill levels_co_ and don_t_t sell yourself short.  Your code is looking pretty good.  Do you see how function showTop is sort of isolated from the other code?  Even though it is inside the same script element as the..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (BABYLON.Engine.isSupported()) { ... }_lt_/pre_gt__lt_p_gt_...it is not within its braces.  And inside its braces is where you did..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_myNewScene _eq_ newScene_sm__lt_/pre_gt__lt_p_gt_Just maybe...  _t_myNewScene_t_ is _t_undefined_t_ as far as function showTop is concerned.  If you add..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_alert(myNewScene)_sm__lt_/pre_gt__lt_p_gt_...as the first line of the showTop function_co_ and run it... (and click your showTop button)... I bet the alert would report _t_undefined_t_ or maybe a giant nothing.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not a very good JS coder... but maybe... maybe... if you moved this line..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myNewScene _eq_ null_sm__lt_/pre_gt__lt_p_gt_...one line higher (above the _t_if_t_ line)_co_ then maybe your new alert would start reporting _t_object_t_ (a good thing).  With this move_co_ maybe myNewScene would become more global (maybe)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And if THAT doesn_t_t work_co_ I have another idea.  Maybe make THIS line..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myNewScene _eq_ engine.scenes[0]_sm__lt_/pre_gt__lt_p_gt_...be the first line of showTop function.  We will make myNewScene become _t_defined_t_ (for showTop) even if we have to _t_lookup_t_ the scene via the global _t_engine_t_ object (even if it kills us).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s a couple things that you can try.  No promises.  The showTop function looks mighty lonely and isolated.  Maybe it hasn_t_t heard the news about myNewScene getting defined.  Once you put that alert line as the first line of showTop function_co_ you will know the facts about that. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_alert() and console.log() are our friends.  They can report _t_the situation_t_ at various places in the code.  But you know all that_co_ already.   Good luck!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-10-25T10:09:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try this directly as you suggest Wingnut. _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_This way has a fail-safe_lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_function showTop (x) {    myNewScene _eq_ myNewScene || engine.scenes[0]_sm_ //myNewScene be assigned by the variable already assigned or is going search of scene in the engine.    myNewScene.getMeshById(_qt_myTopMesh_qt_).visibility _eq_ 0_sm_    myNewScene.getMeshById(x).visibility _eq_ 1_sm_} _lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-11-03T15:11:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_See your posting of approaching this in a different way.  Thought I would give an example of SceneLoader.Append.  Note that scene is at script tag scope.  It is assigned directly by a call to the constructor.  Your code in showTop() may not work_co_ but maybe you need to break up your getMesh call into a separate line from assigning visibility_co_ to make sure it is returning a mesh first._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var scene_sm_if (BABYLON.Engine.isSupported()) {    var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_    scene _eq_ new BABYLON.Scene(engine)_sm_    BABYLON.SceneLoader.Append(_qt__qt__co_ _qt_test.babylon_qt__co_ scene_co_ function (newScene){ ... })_sm_}function showTop(x) {  scene.getMeshById(x).visibility _eq_ true_sm_  }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]