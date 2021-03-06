import inlineSvg from 'rollup-plugin-inline-svg'

export default {
  entry: 'src/input.js',
  dest: 'dist/output.js',
  plugins: [
    inlineSvg({
      // Removes specified tags and its children. You can specify tags by setting removingTags query array.
      // default: false
      removeTags: false,
  
      // warning: this won't work unless you specify removeTags: true
      // default: ['title', 'desc', 'defs', 'style']
      removingTags: ['title', 'desc', 'defs', 'style'],
     
      // warns about present tags, ex: ['desc', 'defs', 'style']
      // default: []
      warnTags: [], 
 
      // Removes `width` and `height` attributes from <svg>.
      // default: true
      removeSVGTagAttrs: false,
  
      // Removes attributes from inside the <svg>.
      // default: []
      removingTagAttrs: [],
  
      // Warns to console about attributes from inside the <svg>.
      // default: []
      warnTagAttrs: []
    })
  ]
}