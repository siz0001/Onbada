
<template>
  <div id="fishboard">
    <div class="list">
        <ul>
          <li>
            <!-- fish.id를 나중에는 push.id로 받는 방식으로 바꾸기 -->
            <f7-link v-for="fish in fishs" v-bind:key="fish.id" class="collection-item" v-bind:to="{name:'view-fish', params: { fish_id: fish.fish_id }}">
            <div class="chip">{{fish.size}}</div>
            {{fish.fish_id}}:{{fish.name}}
          </f7-link>
          </li>
        </ul>
    </div>

    <!-- cordova camera-->
    <div id="addicon" class="indicators">
      <div v-for="(pluginTest, plugin) in plugins" :class="{ ok: pluginEnabled(plugin) }" @click="pluginTest">
        <img :src="images.icon" width="80" height="80">     
      </div>
    </div>
    <!-- cordova camera-->

     

  </div>

</template>

<script>
  import Vue from 'vue'

  import db from './firebaseInit'
  export default  {
    name:'fishboard',

    data(){
      return{
        fishs: [],        
        cordova: Vue.cordova,
        plugins: {
          'cordova-plugin-camera': function () {
            if (!Vue.cordova.camera) {
              window.alert('Vue.cordova.camera not found !')
              return
            }
            Vue.cordova.camera.getPicture((imageURI) => {
              window.alert('Photo URI : ' + imageURI)
            }, (message) => {
              window.alert('FAILED : ' + message)
            }, {
              quality: 50,
              destinationType: Vue.cordova.camera.DestinationType.FILE_URI
            })
          }
        },
        images: {
                icon: require('./assets/icon.png')
        }
      }
    },
    created(){
      db.collection('fishs').orderBy('size').get().then
      (querySnapshot =>{
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'fish_id': doc.data().fish_id,
            'name': doc.data().name,
            'size': doc.data().size,
            'position': doc.data().position
          }
          this.fishs.push(data)
        })
      })
    },
    methods: {
      pluginEnabled: function (pluginName) {
        return this.cordova.plugins.indexOf(pluginName) !== -1
      }
    }
  }

</script>

<style media="screen">


#addicon {
  position: absolute;
  bottom: 30px;
  width: 100%;
  left: 0;
  text-align: center;

}

  .size-70 { font-size: 70px }
</style>
