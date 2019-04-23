const burger = require('remark-burger')
const remove = require('unist-util-remove')

const COMMENT = 'comment'

const setParserPlugins = ({ beginMarker = '//', endMarker = '//' }) => 
[[ burger, { beginMarker, endMarker, pattyName: COMMENT } ]]


const plugin = ({ markdownAST:tree }) => {
  remove(tree, ({ type }) => type === COMMENT)
}

plugin.setParserPlugins = setParserPlugins
module.exports = plugin