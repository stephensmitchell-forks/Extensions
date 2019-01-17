[{"Owner":"aWeirdo","Date":"2016-09-15T18:08:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti_t_m trying to simulate a view-range of some meshes by adding a light to them and light up the ground up around them. (Think RTS style _qt_Fog of war_qt_)_lt_br /_gt_\n\tthe problem i_t_m facing is that the lights doesn_t_t blend when overlapping_co_ the overlapping area is instead increased in intensity._lt_br /_gt_\n\twhich then means that if several meshes are close to each other the ground gets really bright and produces an unwanted white effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a look at this PG which simulates the effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WARHD%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WARHD#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny thoughts on the area?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-09-16T12:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI never used yet in BJS_co_ but i think you can try to setup your scene with PBR _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/overviews/Physically_Based_Rendering_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/overviews/Physically_Based_Rendering_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-16T17:41:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen two lights are lighting a mesh_co_ the mesh will receive twice the intensity (because two lights_dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I understand correctly_co_ you want the mesh to receive half of each light intensity?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-09-16T18:21:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ exactly _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand if three lights_co_ 1/3 of the intensity of each light_co_ etc_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthus avoiding a bright/intensified area when/where lights are overlapping each other.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-09-17T12:25:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_i think this is right result_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WARHD%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WARHD#5_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_when you look that with natural texture that is write_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_but if you wanna correct i thing you most be normalize last result of Light_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_vec4 final _eq_ normalize(light1+light2+light3)_sm_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WARHD%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WARHD#10_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WARHD%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WARHD#9_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-09-17T15:08:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ the problem with the first pg is that while it looks okay with 2 lights_co_ if you add more lights which overlaps_co_ at some point the ground will start turning white.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe shader solution looks nice_co_ but i don_t_t know much about shaders_co_ can you dynamicly add/remove lights on the go? Aswell as apply changes?(increase/decrease range_co_ etc)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-09-17T15:14:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\taWeirdo _dd_ if you wanna use shade you most try it first with some sample if you search shaderBuilder you can find a lot of sample\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut for this example make playground and explain what you want i help you to make that in short time and explain what i do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-10T10:49:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDusting off this old thread _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tI_t_ve finally got some time to come back to this topic_co_ so if your offer still stands i sure could some some help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe basic idea was to attach lights to meshes_co__lt_br /_gt_\n\tso as those meshes (player units) move around_co_ their view-range is lit up_co_ (other meshes_co_ e.g_co_ the ground_co_ tree_t_s_co_ buildings and so fourth.)_lt_br /_gt_\n\tkinda like a fog of war where everything out of view-range is blacked out / darkend.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand being able to add/remove specific lights @ run-time_co_ e.g. when adding / disposing meshes on the go.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-06-10T10:53:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WARHD%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WARHD#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe can make it with CustomMaterial too  (for BJS V3) i think that can be better wait for me 4 of 5 hours \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-10T12:25:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti spend the last few hours looking around the babylon engine code that _qt_talks_qt_ with webGL_lt_br /_gt_\n\tin the hopes of being able to change the way lights are being applied or atleast set some kind of _qt_max intensity_qt__co_ but it all just looks like some kind of dark magic _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ very confusing to me atleast.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do have a few concerns about applying light directly to materials_co__lt_br /_gt_\n\tlike handling other meshes_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WARHD%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WARHD#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twould we need to create a new ShaderMaterial or CustomMaterial for each other mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tAlso_co_ i fould this fog of war shader which is almost exactly what i_t_m looking for_co_ but it_t_s writen in unity shader.\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/yzcfTb9e0lo?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// FogOfWar shader\n// Copyright (C) 2013 Sergey Taraban &lt_sm_http_dd_//staraban.com&gt_sm_\n//\n// Permission is hereby granted_co_ free of charge_co_ to any person obtaining a copy of this software and associated documentation files (the _qt_Software_qt_)_co_ to deal in the Software without restriction_co_ including without limitation the rights to use_co_ copy_co_ modify_co_ merge_co_ publish_co_ distribute_co_ sublicense_co_ and/or sell copies of the Software_co_ and to permit persons to whom the Software is furnished to do so_co_ subject to the following conditions_dd_\n// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n// THE SOFTWARE IS PROVIDED _qt_AS IS_qt__co_ WITHOUT WARRANTY OF ANY KIND_co_ EXPRESS OR IMPLIED_co_ INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY_co_ FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM_co_ DAMAGES OR OTHER LIABILITY_co_ WHETHER IN AN ACTION OF CONTRACT_co_ TORT OR OTHERWISE_co_ ARISING FROM_co_ OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n//\n\nShader _qt_Custom/FogOfWar_qt_ {\nProperties {\n    _Color (_qt_Main Color_qt__co_ Color) _eq_ (1_co_1_co_1_co_1)\n    _MainTex (_qt_Base (RGB) Trans (A)_qt__co_ 2D) _eq_ _qt_white_qt_ {}\n    _FogRadius (_qt_FogRadius_qt__co_ Float) _eq_ 1.0\n    _FogMaxRadius(_qt_FogMaxRadius_qt__co_ Float) _eq_ 0.5\n    _Player1_Pos (_qt__Player1_Pos_qt__co_ Vector) _eq_ (0_co_0_co_0_co_1)\n    _Player2_Pos (_qt__Player2_Pos_qt__co_ Vector) _eq_ (0_co_0_co_0_co_1)\n    _Player3_Pos (_qt__Player3_Pos_qt__co_ Vector) _eq_ (0_co_0_co_0_co_1)\n}\n\nSubShader {\n    Tags {_qt_Queue_qt__eq__qt_Transparent_qt_ _qt_IgnoreProjector_qt__eq__qt_True_qt_ _qt_RenderType_qt__eq__qt_Transparent_qt_}\n    LOD 200\n    Blend SrcAlpha OneMinusSrcAlpha\n    Cull Off\n\n    CGPROGRAM\n    #pragma surface surf Lambert vertex_dd_vert\n\n    sampler2D _MainTex_sm_\n    fixed4     _Color_sm_\n    float     _FogRadius_sm_\n    float     _FogMaxRadius_sm_\n    float4     _Player1_Pos_sm_\n    float4     _Player2_Pos_sm_\n    float4     _Player3_Pos_sm_\n\n    struct Input {\n        float2 uv_MainTex_sm_\n        float2 location_sm_\n    }_sm_\n\n    float powerForPos(float4 pos_co_ float2 nearVertex)_sm_\n\n    void vert(inout appdata_full vertexData_co_ out Input outData) {\n        float4 pos _eq_ mul(UNITY_MATRIX_MVP_co_ vertexData.vertex)_sm_\n        float4 posWorld _eq_ mul(_Object2World_co_ vertexData.vertex)_sm_\n        outData.uv_MainTex _eq_ vertexData.texcoord_sm_\n        outData.location _eq_ posWorld.xz_sm_\n    }\n\n    void surf (Input IN_co_ inout SurfaceOutput o) {\n        fixed4 baseColor _eq_ tex2D(_MainTex_co_ IN.uv_MainTex) * _Color_sm_\n\n        float alpha _eq_ (1.0 - (baseColor.a + powerForPos(_Player1_Pos_co_ IN.location) + powerForPos(_Player2_Pos_co_ IN.location) + powerForPos(_Player3_Pos_co_ IN.location)))_sm_\n\n        o.Albedo _eq_ baseColor.rgb_sm_\n        o.Alpha _eq_ alpha_sm_\n    }\n\n    //return 0 if (pos - nearVertex) &gt_sm_ _FogRadius\n    float powerForPos(float4 pos_co_ float2 nearVertex) {\n        float atten _eq_ clamp(_FogRadius - length(pos.xz - nearVertex.xy)_co_ 0.0_co_ _FogRadius)_sm_\n\n        return (1.0/_FogMaxRadius)*atten/_FogRadius_sm_\n    }\n\n    ENDCG\n}\n\nFallback _qt_Transparent/VertexLit_qt_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMesh / player class_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_using UnityEngine_sm_\nusing System.Collections_sm_\n\npublic class FogOfWarPlayer _dd_ MonoBehaviour {\n\n\tpublic Transform FogOfWarPlane_sm_\n\tpublic int Number _eq_ 1_sm_\n\n\t// Use this for initialization\n\tvoid Start () {\n\n\t}\n\n\t// Update is called once per frame\n\tvoid Update () {\n\t\tVector3 screenPos _eq_ Camera.mainCamera.WorldToScreenPoint(transform.position)_sm_\n\t\tRay rayToPlayerPos _eq_ Camera.mainCamera.ScreenPointToRay(screenPos)_sm_\n\t\tint layermask _eq_ (int)(1&lt_sm_&lt_sm_8)_sm_\n\t\tRaycastHit hit_sm_\n\t\tif(Physics.Raycast(rayToPlayerPos_co_ out hit_co_ 1000_co_ layermask)) {\n\t\t\tFogOfWarPlane.GetComponent&lt_sm_Renderer&gt_sm_().material.SetVector(_qt__Player_qt_ + Number.ToString() +_qt__Pos_qt__co_ hit.point)_sm_\n\t\t}\n\t}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-06-11T08:11:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou wanna light on camera position?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ILYHF7%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ILYHF7#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-11T14:21:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ nice PG!_lt_br /_gt__lt_br /_gt_\n\tThat is roughly what i_t_m looking to do_co_ but in a almost top-down view and multiple lights_co__lt_br /_gt__lt_br /_gt_\n\tKind of like this image_co_ (except the black areas will be lit with a low intensity ambient light_co_ so it looks dark like the left top corner of the image)._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_fow_cliff_problem.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//bccasteel.files.wordpress.com/2015/01/fow_cliff_problem.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-12T07:52:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m getting a headache from all this _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tHaving serious thoughts about just doing it with sprites and sprite.color modifications for now.. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn the plus side_lt_br /_gt_\n\tit_t_s SO much easier to work with_co_ _lt_br /_gt_\n\tand it_t_s lightweight with a very big L.._lt_br /_gt_\n\teasy to add 3 layers instead of just the last two (black/unexplored_co_ dark-transparent/explored and full color/in active view range)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe con being that it looks so.. 90_t_s _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_13345_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/SpriteTerrain_FogOfWar_Test.png.53a0c4f0f670acc860fd92ed70c51099.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_SpriteTerrain_FogOfWar_Test.thumb.png.d333ba676dcd96639cae0a813640216f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13345_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/SpriteTerrain_FogOfWar_Test.thumb.png.d333ba676dcd96639cae0a813640216f.png_qt_ /_gt__lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-13T06:03:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnother attempt i_t_ve been working on_co_ a transparent plane being rendered above the game ground_co_  (only works from a bird-view setup)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand modifying the texture context around specified meshes.. still needs some work_co_ like an offset so the meshes always appears centered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tas canvas function setContext is not yet supported by any browsers_co_ i_t_m a bit unsure if and how easy it will be to also support blacked out / unexplorered areas like the previous post_co_ but thats not a big concern anyways.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit looks better than the 90_t_s version above_co_ (unless making a retro-style game ofcourse) and it runs surprisingly fast as there_t_s no image textures involved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_13367_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/Overlay_plane_with_textureModification_FogOfWar_Test.png.a4bd9c634d6c6de923fcda92451e2b4b.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Overlay_plane_with_textureModification_FogOfWar_Test.thumb.png.293fa11401dcbe2f67359b03d96732bd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13367_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/Overlay_plane_with_textureModification_FogOfWar_Test.thumb.png.293fa11401dcbe2f67359b03d96732bd.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]