import {css} from 'styled-components'
import {palette} from 'styled-theme'

export const ctaGradient = css`
  background: ${palette('main', 0)};
  background: -moz-linear-gradient(top, ${palette('main', 0)} 0%, ${palette('main', 1)} 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, ${palette('main', 0)}), color-stop(100%, ${palette('main', 1)}));
  background: -webkit-linear-gradient(top, ${palette('main', 0)} 0%, ${palette('main', 1)} 100%);
  background: -o-linear-gradient(top, ${palette('main', 0)} 0%, ${palette('main', 1)} 100%);
  background: -ms-linear-gradient(top, ${palette('main', 0)} 0%, ${palette('main', 1)} 100%);
  background: linear-gradient(to bottom, ${palette('main', 0)} 0%, ${palette('main', 1)} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('main', 0)}', endColorstr='${palette('main', 1)}', GradientType=0 );
`

export const lightGreyGradient = css`
  background: ${palette('grey', 0)};
  background: -moz-linear-gradient(top, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, ${palette('grey', 0)}), color-stop(100%, ${palette('grey', 2)}));
  background: -webkit-linear-gradient(top, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: -o-linear-gradient(top, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: -ms-linear-gradient(top, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: linear-gradient(to bottom, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('grey', 0)}', endColorstr='${palette('grey', 2)}', GradientType=0 );
`

export const ctaCircularGradient = css`
  background: ${palette('main', 0)};
  background: -moz-radial-gradient(center, ellipse cover, ${palette('main', 0)} 0%, ${palette('main', 0)} 59%, ${palette('main', 1)} 65%, ${palette('main', 1)} 72%, ${palette('main', 1)} 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, ${palette('main', 0)}), color-stop(59%, ${palette('main', 0)}), color-stop(65%, ${palette('main', 1)}), color-stop(72%, ${palette('main', 1)}), color-stop(100%, ${palette('main', 1)}));
  background: -webkit-radial-gradient(center, ellipse cover, ${palette('main', 0)} 0%, ${palette('main', 0)} 59%, ${palette('main', 1)} 65%, ${palette('main', 1)} 72%, ${palette('main', 1)} 100%);
  background: -o-radial-gradient(center, ellipse cover, ${palette('main', 0)} 0%, ${palette('main', 0)} 59%, ${palette('main', 1)} 65%, ${palette('main', 1)} 72%, ${palette('main', 1)} 100%);
  background: -ms-radial-gradient(center, ellipse cover, ${palette('main', 0)} 0%, ${palette('main', 0)} 59%, ${palette('main', 1)} 65%, ${palette('main', 1)} 72%, ${palette('main', 1)} 100%);
  background: radial-gradient(ellipse at center, ${palette('main', 0)} 0%, ${palette('main', 0)} 59%, ${palette('main', 1)} 65%, ${palette('main', 1)} 72%, ${palette('main', 1)} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('main', 0)}', endColorstr='${palette('main', 1)}', GradientType=1 );
`

export const lightGreyCircularGradient = css`
  background: ${palette('grey', 0)};
  background: -moz-radial-gradient(center, ellipse cover, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, ${palette('grey', 0)}), color-stop(100%, ${palette('grey', 2)}));
  background: -webkit-radial-gradient(center, ellipse cover, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: -o-radial-gradient(center, ellipse cover, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: -ms-radial-gradient(center, ellipse cover, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  background: radial-gradient(ellipse at center, ${palette('grey', 0)} 0%, ${palette('grey', 2)} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('grey', 0)}', endColorstr='${palette('grey', 2)}', GradientType=1 );
`

export const playPageGradient = css`
  background: ${palette('main', 2)};
  background: -moz-linear-gradient(top, ${palette('main', 2)} 0%, ${palette('main', 0)} 17%, ${palette('main', 0)} 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, ${palette('main', 2)}), color-stop(17%, ${palette('main', 0)}), color-stop(100%, ${palette('main', 0)}));
  background: -webkit-linear-gradient(top, ${palette('main', 2)} 0%, ${palette('main', 0)} 17%, ${palette('main', 0)} 100%);
  background: -o-linear-gradient(top, ${palette('main', 2)} 0%, ${palette('main', 0)} 17%, ${palette('main', 0)} 100%);
  background: -ms-linear-gradient(top, ${palette('main', 2)} 0%, ${palette('main', 0)} 17%, ${palette('main', 0)} 100%);
  background: linear-gradient(to bottom, ${palette('main', 2)} 0%, ${palette('main', 0)} 17%, ${palette('main', 0)} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${palette('main', 2)}', endColorstr='${palette('main', 0)}', GradientType=0 );
`
