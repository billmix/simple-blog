import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function generateExcerpt(params, namedArgs) {
  let contentLength = namedArgs.content.length;
  let content = namedArgs.content;
  let excerptLimit = namedArgs.excerptLimit;

  String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (content.length > n) ? content.substr(0, n-1) : this;
      };

if (contentLength > excerptLimit) {
    let excerpt = content.trunc(excerptLimit);
    let formatted = excerpt.replace(/#/g, '');
    let sanitizedString = Ember.Handlebars.Utils.escapeExpression(formatted);
    return htmlSafe(`${sanitizedString}&hellip;`);
  }else{
    return content;
  }
}

export default helper(generateExcerpt);
