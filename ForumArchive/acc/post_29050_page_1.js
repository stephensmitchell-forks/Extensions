[{"Owner":"babaorhum","Date":"2017-03-14T08:21:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello every one_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks you fr your help_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttrying to import a mesh from blender to my scene but failed...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s my code _dd_    \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n    var createScene _eq_ function() {\n\n        // This creates a basic Babylon Scene object (non-mesh)\n        var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n      \n        // The first parameter can be used to specify which mesh to import. Here we import all meshes\n        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_scenes/_qt__co_ _qt_untitled.babylon_qt__co_ scene_co_ function (newMeshes) {\n            // Set the target of the camera to the first imported mesh\n            camera.target _eq_ newMeshes[0]_sm_\n        })_sm_\n\n                scene.registerBeforeRender(animate)_sm_\n\n        var LinesRed _eq_ BABYLON.Mesh.CreateLines(_qt_LinesRed_qt__co_ [\n            new BABYLON.Vector3(boxRed.position.x_co_ boxRed.position.y_co_ boxRed.position.z)_co_\n            new BABYLON.Vector3(planeRed.position.x_co_ planeRed.position.y_co_ planeRed.position.z)_co_\n        ]_co_ scene)_sm_\n\n        // Our built-in _t_ground_t_ shape. Params_dd_ name_co_ width_co_ depth_co_ subdivs_co_ scene\n        var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 15_co_ 15_co_ 5_co_ scene)_sm_\n\n        return scene_sm_\n\n    }_sm_\n\n    var scene _eq_ createScene()_sm_\n\n    engine.runRenderLoop(function() {\n        scene.render()_sm_\n    })_sm_\n\n    // Resize\n    window.addEventListener(_qt_resize_qt__co_ function() {\n        engine.resize()_sm_\n    })_sm_\n\n\n})_sm_\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAt first I kept my previous light_co_ camera and so on but nothing showed up\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI used the importmesh from teh playground_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit appears on sandbox\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo I have to delete the camera_co_ light from blender and keep it on my code because i only want the mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the browser console\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you all\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12017_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58c7a7c73cebf_Sanstitre.jpg.cba7f5c6f26739fe9c986a1761d529b1.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Sans titre.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12017_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58c7a7c75bf4a_Sanstitre.thumb.jpg.0dc78b6ef9d5df39cce69539c3b75895.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-14T08:52:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt would be nice if you could put your code in the tag bbcode made for that. it makes it difficult to read as it is. I personally not even look at the code when it_t_s like that. But I say this to you. You will probably have more help._lt_br /_gt_\n\treproduce your code on the playground would be even better. I wouldn_t_t say the title of the topic _qt_ImportMesh ..._qt_ _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  We do not know what the problem with a single word.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babaorhum","Date":"2017-03-14T09:21:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Dad72_co_ Thx for your advice\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI edited the topic but regarding the playgroung the skull example works fine so how could I make myself understood?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-14T09:29:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour code is ok_co_ it should work. but you use your code locally_co_ with C_dd_ / ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou must use a local web server. for http_dd_ // in place of C_dd_ / ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust look at the error of your console. it explicitly states.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babaorhum","Date":"2017-03-14T09:43:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the reply_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy cannot I do it it locally as i did with my previous babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I must have to get my hands in visualstudio?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-14T09:54:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo you can use a local web server as EasyPHP or WAMP server for example. These are servers to create local web page (that integrate apache).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy like this ? ImportMesh uses XmlHttpRequest (XHR) to load a file so you have to go through a web server for this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-03-14T15:41:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tActually_co_ using a relative path to the html is the way to go.  Using this_co_ you can use both Firefox &amp_sm_ Edge without a server.  Just double click the html file.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]