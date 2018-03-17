import Css from '../../utils/css'

let obj = {'x':2,'scale':0.7,'width':'20%'};
Css.smartCss('body',obj,'%')
Css.smartStyle(document.getElementsByTagName('body')[0],{'width':800})
Css.smartCssAnimation('bound',[{'height':20},{'height':0},{'height':'100%'}])