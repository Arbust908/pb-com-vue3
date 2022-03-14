export const state = () => ({
  print_mode: false,
  //   hamburger_opened: false,
})

export const getters = {
  //   isAuthenticated: (state) => state.auth.loggedIn,
  //   loggedInUser: (state) => state.auth.user,
  //   contactsAll: (state) => state.contacts.all,
  //   groupsAll: (state) => state.groups.all,
  //   menuOpened: (state) => state.user_nav_opened,
  //   hamburgerOpened: (state) => state.hamburger_opened,
}

export const actions = {
  setPrintMode(context, payload) {
    context.commit('SET_PRINTMODE', payload)
  },
  activatePrintMode(context) {
    context.commit('SET_PRINTMODE', true)
  },
  deactivatePrintMode(context) {
    context.commit('SET_PRINTMODE', false)
  },
  //   hamburgerToggle(context, payload) {
  //     context.commit('HAMBURGER_OPEN_TOGGLE', payload)
  //   },
}

export const mutations = {
  SET_PRINTMODE(state, payload) {
    state.print_mode = payload
  },
  //   HAMBURGER_OPEN_TOGGLE(state, payload) {
  //     state.hamburger_opened = payload
  //   },
}
