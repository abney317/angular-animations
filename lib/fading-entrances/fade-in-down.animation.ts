import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const fadeInDown = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 0, transform: 'translate3d(0, -100%, 0)', easing: 'ease', offset: 0  }),
      style({opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeInDownAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeInDown', [
    transition(
      '0 <=> 1',
      [
          useAnimation(fadeInDown, {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION,
              delay: (options && options.delay) || 0
            }
          }),
      ]
    )
  ]);
}