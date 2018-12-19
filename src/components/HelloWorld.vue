<template>
  <div>Man wtf - wat</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      messages: state => state.messages.all
    }),
    ...mapGetters('messages', {
      count: 'count'
    })
  },
  methods: {
    // TODO next
  },
  created() {
    this.$store.dispatch("messages/loadMessages");
  }
};
</script>