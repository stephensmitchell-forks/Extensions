[{"Owner":"BlackMojito","Date":"2018-03-18T10:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am new to the world of Web. And I am just curious if it is possible to load a texture inside a worker? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-19T15:35:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately the web workers cannot reach DOM or webgl content_dd_(\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can process data or texture content (as a byte array) but you cannot deal with the textures directly\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-20T18:27:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDepends on what you mean by load a texture inside a worker._lt_br /_gt_\n\t_lt_br /_gt_\n\tDo you want to obtain the data with the web worker then pass that back to the DOM_co_ if so you can do it as an array like delta mentioned. _lt_br /_gt_\n\t_lt_br /_gt_\n\tIf you are new to web conventions you should stay clear of webworkers for now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]