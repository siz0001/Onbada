<template>
  <f7-panel left :reveal="isiOS" :effect="panelEffect">
    <f7-navbar id="left-main-navbar" title="메뉴"></f7-navbar>
    <!-- force page background color to white if on iOS -->
    <f7-page :style="pageStyle">
      <f7-block-title>Links</f7-block-title>
      <f7-list>
        <f7-list-item
          link="/"
          title="홈"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          link="/login/"
          title="로그인"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          link="/services/"
          title="회원등록"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          link="/aa/"
          title="로그아웃"
          link-view="#main-view"
          panel-close
          reload-all
        />
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>
export default {
  name: 'LeftPanel',
  data() {
    return {
      isMaterial: window.isMaterial,
      isiOS: window.isiOS
    };
  },
  computed: {
    pageStyle() {
      return this.isiOS ? 'background-color: white;' : '';
    },
    panelEffect() {
      return this.isiOS ? 'reveal' : 'cover';
    }
  }
};
</script>

<style scoped>
.panel-left .page {
  margin-top: 44px;
  padding-bottom: 44px;
}
@media (min-width: 960px) {
  .panel.panel-left {
    border-right: 1px solid #b2b2b2;
  }
}
#left-main-navbar{
  background: #77a88d
}
</style>
