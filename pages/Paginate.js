import _ld from 'lodash'

export default const paginate = (items,pageNumber,pageSize) => {
    const startIndex = (pageNumber-1) * pageSize
    return _ld(items).slice(startIndex).take(pageSize).value();
}