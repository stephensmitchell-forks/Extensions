[{"Owner":"Dud","Date":"2014-11-23T20:52:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am trying to find the intersection of a ray with a height map in order to be able to place point sprites at various locations on my height map.  I have read the various forum postings on the subject and I believe I have everything set up correctly.  My heightmap is 100x100 with 50 subdivisions and is called _qt_ground_qt_.  When I call scene.pickWithRay in the function below I *do* hit the ground and I do have a pickInfo object - however the  pickInfo.pickedPoint object is always null.  Have I made a mistake somewhere?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Map.prototype.createPointSprite _eq_ function (scene_co_ spriteManager_co_ name_co_ x_co_ z) {                       var spritePosition _eq_ new BABYLON.Vector3(0_co_ 10_co_ 0)_sm_            //Shoot a ray to get height of map at required sprite position            var ray _eq_ new BABYLON.Ray(spritePosition_co_ new BABYLON.Vector3(0_co_ -1_co_ 0))_sm_            var pickInfo _eq_ scene.pickWithRay(ray_co_ function (item) {                if (item.id _eq__eq_ _qt_ground_qt_)                     return true_sm_            })_sm_                        //Only place a point sprite if our ray hit the ground            if (pickInfo !_eq_ null &amp_sm_&amp_sm_ pickInfo.pickedPoint !_eq_ null) {                var sprite _eq_ new BABYLON.Sprite(name_co_ spriteManager)_sm_                spritePosition.y _eq_ pickInfo.pickedPoint.y_sm_                sprite.position _eq_ spritePosition_sm_            }                    }_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dud","Date":"2014-11-24T13:24:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think I_t_ve realised the problem - the method above is fine_co_ but I need to ensure that the the _qt_ground_qt_ mesh is ready before by checking mesh.isReady() before using the above function._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carlos R","Date":"2014-11-24T16:31:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ the problem was solved here_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2248-retrieve-heightmap-altitude/_qt__gt_http_dd_//www.html5gamedevs.com/topic/2248-retrieve-heightmap-altitude/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]