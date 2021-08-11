import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [{
        blogTitile: 'Blog Card #1',
        blogCoverPhoto: 'stock-1',
        blogDate: 'May1 ,2021'
      },
      {
        blogTitile: 'Blog Card #2',
        blogCoverPhoto: 'stock-2',
        blogDate: 'May1 ,2021'
      },
      {
        blogTitile: 'Blog Card #3',
        blogCoverPhoto: 'stock-3',
        blogDate: 'May1 ,2021'
      },
      {
        blogTitile: 'Blog Card #4',
        blogCoverPhoto: 'stock-4',
        blogDate: 'May1 ,2021'
      }
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null
  },
  mutations: {
    TOGGLE_EDIT_POST(state, payload) {
      state.editPost = payload;
    },

    UPDATE_USER(state, payload) {
      state.user = payload;
    },

    SET_PROFILE_INFO(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
      state.profileFirstName = payload.data().firstName;
      state.profileLastName = payload.data().lastName;
      state.profileUsername = payload.data().username;
    },

    SET_PROFILE_INITIALS(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },

    CHANGE_FIRSTNAME(state, payload) {
      state.profileFirstName = payload
    },

    CHANGE_LASTNAME(state, payload) {
      state.profileLastName = payload
    },

    CHANGE_USERNAME(state, payload) {
      state.profileUsername = payload
    }

  },
  actions: {
    async getCurrentUser({
      commit
    }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit('SET_PROFILE_INFO', dbResults);
      commit('SET_PROFILE_INITIALS');
    },
    async updateUserSettings({
      commit,
      state
    }) {
      const dataBase = await db.collection("users").doc(state.profileId)
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername
      })

      commit('SET_PROFILE_INITIALS');
    }
  },
  modules: {}
})