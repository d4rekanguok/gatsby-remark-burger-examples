const burger = require('remark-burger')
const visit = require('unist-util-visit')

const SPOILER = 'spoiler'

const setParserPlugins = ({ beginMarker = '[[', endMarker = ']]' }) => 
[[ burger, { beginMarker, endMarker, pattyName: SPOILER } ]]


const plugin = ({ markdownAST:tree }) => {
  visit(tree, SPOILER, node => {
    const { type, data } = node
    if (type !== SPOILER) return
    node.type = `html`
    node.value = `<span 
      class="spoiler" 
      style="padding: 0.125rem 0.25rem; background: #000; color: #000; border-radius: 0.125rem;">
        ${data.content}
      </span>`
  })
}

plugin.setParserPlugins = setParserPlugins
module.exports = plugin