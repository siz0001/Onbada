<template>
  <f7-page name="login">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        로그인
      </f7-nav-title>
    </f7-navbar>
    
    <div>
      <div class="container">
        <div class="row">
          <div class="col s12 m8 offset-m2">
            <div class="login card-panel blue-grey darken-1 white-text center">
              <h3>로그인</h3>
              <form>
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input type="text" id="email" v-model="email">
                  <label for="email">Email</label>
                </div>
                <div class="input-field">
                  <i class="material-icons prefix">lock</i>
                  <input type="password" id="password" v-model="password">
                  <label for="password">Password</label>
                </div>
                <button v-on:click="login" class="btn grey lighten-4 black-text">로그인</button>
                <br>
                <br>
                <button class="btn grey lighten-4 black-text"><img v-bind:src="googlelogo"/>구글 로그인(미구현)</button>
                <br>
                <br>
                <button class="btn grey lighten-4 black-text">페이스북 로그인(미구현)</button>
                <br>
                <br>
                <div class="btn grey lighten-4 black-text">
                  <router-link to="/register" >회원등록</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>




  </f7-page>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
        alert('로그인되었습니다');
        this.$router.push('/');
      },
      err => {
        alert(err.message);
      }
    );
      e.preventDefault();
    }
  }
}
</script>

<style>
</style>
