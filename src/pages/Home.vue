<template>
  <f7-page>
    <f7-navbar id="main-navbar" sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        <span class="size-26">온 바 다</span> <span>&nbsp;&nbsp; </span>
        <i class="icon f7-icons color-yellow size-10">star</i><span> &nbsp;&nbsp; </span>
        <i class="icon f7-icons color-yellow size-17">star</i> <span> &nbsp;&nbsp; </span>
        <i class="icon f7-icons color-yellow">star</i>
      </f7-nav-title>
    </f7-navbar>
    
     <f7-toolbar id="main-tabbar" tabbar labels :bottom-md="!isBottom">
      <f7-link tab-link="#fishboard" tab-link-active text="나눔목록" icon-f7="reload_round"></f7-link>
       <f7-link tab-link="#ranking" text="랭킹" icon-f7="persons"></f7-link>
       <f7-link tab-link="#fishmap" text="지도" icon-f7="compass"></f7-link>
     </f7-toolbar>
     <f7-tabs swipeable>
       <f7-tab id="fishboard" tab-active>
          <fishboard-page />
       </f7-tab>
       <f7-tab id="ranking">
          <ranking-page />
       </f7-tab>
       <f7-tab id="fishmap">
          <fishmap-page />
       </f7-tab>
     </f7-tabs>

    
  </f7-page>
</template>
<script>
import Fishboard from './Fishboard';
import Ranking from './Ranking';
import Fishmap from './Fishmap';

export default {
  name: 'Home',
   components: {
  'fishboard-page': Fishboard,
  'ranking-page': Ranking,
  'fishmap-page': Fishmap
  },
  data() {
    return {
      title: 'Hello World'
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@font-face {
  font-family: 'Hanna';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.eot);
  src: url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.eot?#iefix) format('embedded-opentype'),
       url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.woff2) format('woff2'),
       url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.woff) format('woff'),
       url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.ttf) format('truetype');
}


.size-26 { font-size: 26px }
.size-10 { font-size: 10px }
.size-17 { font-size: 17px }
.size-19 { font-size: 19px }

  #main-navbar {
    background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
    );
    font-family: 'Hanna', sans-serif;
    text-align: center;
  }

  #main-tabbar {
    background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 100%
    
    );
    font-family: 'Hanna', sans-serif;
  }

</style>

