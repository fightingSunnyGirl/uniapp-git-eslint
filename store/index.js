/** @format */

import testStore from './test'
import userCommonStore from './userCommon'
// store合并
const store = {
    testStore,
    userCommonStore
}
// 导出
export default store
