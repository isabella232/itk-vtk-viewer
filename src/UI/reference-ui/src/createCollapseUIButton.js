import style from './ItkVtkViewer.module.css'

import { toggleIconDataUri } from 'itk-viewer-icons'
import applyContrastSensitiveStyleToElement from './applyContrastSensitiveStyleToElement'
import toggleUICollapsed from './toggleUICollapsed'

function createCollapseUIButton(context) {
  const collapseUIButton = document.createElement('div')
  collapseUIButton.className = `${style.collapseUIButton}`
  applyContrastSensitiveStyleToElement(
    context,
    'invertibleButton',
    collapseUIButton
  )

  collapseUIButton.id = `${context.id}-collapseUIButton`
  collapseUIButton.innerHTML = `<img src="${toggleIconDataUri}" alt="toggle"/>`

  toggleUICollapsed(context)

  collapseUIButton.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()
    context.service.send('TOGGLE_UI_COLLAPSED')
  })

  context.main.collapseUIButton = collapseUIButton
  context.uiContainer.appendChild(collapseUIButton)
}

export default createCollapseUIButton
