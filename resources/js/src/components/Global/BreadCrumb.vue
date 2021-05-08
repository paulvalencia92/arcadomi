<template>
  <div class="d-flex align-items-center">
    <h4 class="mb-0 p-3 ml-2">{{ page.name }}</h4>
    <b-breadcrumb :items="page.breadCrumb" class="bg-transparent mb-0 mt-1"/>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'BreadCrumb',
  watch: {
    $route(to, from) {
      this.checkRoute()
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      page: 'Setting/activePage',
      navList: 'Setting/globalSearchState',
      bookmark: 'Setting/bookmarkState'
    })
  },
  data() {
    return {
      bookmarkSearch: '',
      currentRoute: {},
      selectedBookmark: false
    }
  },
  methods: {
    ...mapActions({
      addToBookmarkState: 'Setting/addBookmarkAction',
      removeToBookmarkState: 'Setting/removeBookmarkAction'
    }),
    removeToBookmark(item) {
      this.removeToBookmarkState(item)
      this.selectedBookmark = false
    },
    addToBookmark(item) {
      this.addToBookmarkState(item)
      this.selectedBookmark = true
    },
    checkRoute() {
      this.currentRoute = this.navList.find(item => item.link.name === this.$route.name)
      const book = this.bookmark.find(item => item.link.name === this.$route.name)
      if (book !== undefined) {
        this.selectedBookmark = true
      } else {
        this.selectedBookmark = false
      }
    }
  }
}
</script>
