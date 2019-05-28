import router from './router'
import store from './store'
import User from './model/user'
import Person from './assets/js/person'
let persons : Person[] = require('./assets/js/persons').persons //
// const whiteList = ['/login',
//   '/'
// ] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // console.log(store.getters.user)
  // console.log(store.getters.user.id)
  if (!store.getters.user.id) {
    // console.log('id', store.getters.user)
    var date = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/[T:-]/g, '').replace(/\.[\d]{3}Z/, '')
    var index = Math.floor(Math.random() * persons.length)
    var user = new User(date.substring(2) + index, persons[index].name, persons[index].avatar, '男')
    store.commit('initUserInfo', user)

    next()
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next()
    // } else {
    //   next('/')
    // }
  } else {
    next()
  }
})
