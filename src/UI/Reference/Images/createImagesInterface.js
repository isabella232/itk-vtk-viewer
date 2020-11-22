import style from '../ItkVtkViewer.module.css'

import createComponentSelector from './createComponentSelector'
import createColorRangeInput from './createColorRangeInput'

function createImagesInterface(context) {
  const imagesUIGroup = document.createElement('div')
  imagesUIGroup.setAttribute('class', style.uiGroup)
  context.images.imagesUIGroup = imagesUIGroup

  createComponentSelector(context, imagesUIGroup)
  createColorRangeInput(context, imagesUIGroup)

  context.uiContainer.appendChild(imagesUIGroup)
}

export default createImagesInterface
