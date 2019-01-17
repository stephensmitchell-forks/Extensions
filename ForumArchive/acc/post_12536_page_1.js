[{"Owner":"jerome","Date":"2015-02-16T17:07:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a way to plot just a simple point in space (independant from size_co_ cam distance_co_ etc_co_ so not a solid mesh) like we can do for lines with _lt_em_gt_createLines()_lt_/em_gt_ ?_lt_/p_gt__lt_p_gt_This would be very convinient for all plotting needs (maths rendering_co_ geometries_co_ etc)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just couldn_t_t find it... couldn_t_t find it in threejs either _dd_ seems to be a weird thing to implement. Something to do with gl_point maybe ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-16T17:12:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A single point in space_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var point _eq_ new BABYLON.Mesh(_qt_point_qt__co_ scene)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-16T17:36:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_is this enough to render it ? not sure ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-16T17:49:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This creates a point_co_ but it is not visible. but you can position it in space_lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var point _eq_ new BABYLON.Mesh(_qt_point_qt__co_ scene)_sm_point.position _eq_ new BABYLON.Vector3(1_co_ 5_co_ 1)_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-16T19:28:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_really ? _lt_/p_gt__lt_p_gt_Ok_co_ I_t_ll test it ASAP_lt_/p_gt__lt_p_gt_thank you  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-16T20:28:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you mean gl_Point_co_ I think you should add a vertex to your mesh to have a point. If not_co_ the mesh will work as an empty mesh. Am I wrong ?_lt_/p_gt__lt_p_gt_If I_t_m not_co_ you can use a mesh with several points and render it using _qt_point clouds_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you use a mesh per point_co_ take care about draw calls !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-02-16T22:40:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you provide a specific example or brief explanation as to how you wish to reference this point (position?)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-17T01:51:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I suggest using either particles or mesh.material.pointsCloud _eq_ true_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-17T08:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I didn_t_t express well._lt_/p_gt__lt_p_gt_When you use _lt_em_gt_createLines()_lt_/em_gt__lt_em_gt__co_ _lt_/em_gt_you get only one mesh with many vertices._lt_/p_gt__lt_p_gt_The mesh is rendered according a color. There is no need for materials._lt_/p_gt__lt_p_gt_Moreover it is ever rendered with a series of lines of one pixel width whatever the distance from the cam. This is particuliarly convinient for math curves plotting because the rendering keeps the same wether you are close or far from the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wonder if the same thing could be done with only points instead of lines._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I use a new Mesh per point_co_ it is overkill and would probably choke the draw call process. This is not the same than a single mesh containing many points._lt_/p_gt__lt_p_gt_Btw_co_ I don_t_t think adding a vertex will change anything. Indices will be required too._lt_/p_gt__lt_p_gt_Maybe by giving the mesh many vertices and indices so as triangles (faces) are each only one point ? I guess it won_t_t work. (yes_co_ I meant gl_Point _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ instead)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What if I use particles ?_lt_/p_gt__lt_p_gt_Are un-textured particles such kind of wanted points (ever one pixel witdth) ?_lt_/p_gt__lt_p_gt_Can we just have un-textured particles ? If a texture is needed_co_ we face again the permanent one-pixel size problematic (I want the size ever the same_co_ like for _lt_em_gt_createLines_lt_/em_gt_)._lt_/p_gt__lt_p_gt_I don_t_t know the pointsCloud property. Need to have a look._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The thing I was looking for was something like _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_createPoints(name_co_ array_co_ scene)_sm__lt_/pre_gt__lt_p_gt_array _dd_ an array of vector3_lt_/p_gt__lt_p_gt_result _eq_ a single mesh_lt_/p_gt__lt_p_gt_render _eq_ the point (pixel) at each array vector3 coordinate_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-17T19:29:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think that you can find some ideas here _dd_ _lt_a href_eq__qt_https_dd_//www.opengl.org/wiki/Vertex_Rendering_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.opengl.org/wiki/Vertex_Rendering_lt_/a_gt__lt_/p_gt__lt_p_gt_Are you sure that mesh indices is a must ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-17T19:32:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you_lt_/p_gt__lt_p_gt_huu_co_ I_t_m sure about nothing at all  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-21T06:42:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do BJS particles rely on gl_Point ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-21T14:21:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use the PointCloud rendering mode of a material to draw points in space._lt_/p_gt__lt_p_gt_Do that using the pointCloud setter of the material (exactly like wireframe mode) or by changing the fill mode of the material to BABYLON.Material.PointFillMode ( which is exactly what the setter is doing)._lt_/p_gt__lt_p_gt_With a carefully plotted mesh you can actually create rather nice effects _dd_-) change the positions to the ones you want and you can create a graph. I haven_t_t tested_co_ but the material class has also a pointSize variable which is referenced in the default shader. So I assume that using this variable you will be able to change the size of the displayed points._lt_/p_gt__lt_p_gt_Using one single mesh for that will also save draw calls._lt_/p_gt__lt_p_gt_And yes_co_ eventually it is using gl.POINT (search the engine class for the function _qt_drawPointClouds_qt_)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]