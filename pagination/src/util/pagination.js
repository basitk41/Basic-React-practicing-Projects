import _ from 'lodash';
export function paginate(teachers,page,pageSize){
    const startIndex = (page - 1)*pageSize;
   return _(teachers).slice(startIndex).take(pageSize).value();
}