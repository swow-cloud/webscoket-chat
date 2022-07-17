<template>
  <div id="layout" class="theme-cyan">
    <div class="authentication">
      <div class="container d-flex flex-column">
        <div class="row align-items-center justify-content-center no-gutters min-vh-100">
          <div class="col-12 col-md-7 col-lg-5 col-xl-4 py-md-11">
            <div class="card border-0 shadow-sm">
              <div class="card-body">

                <h3 class="text-center">登录</h3>

                <p class="text-center mb-6">Make it simple, but significant</p>

                <form class="mb-4 mt-5">

                  <div class="input-group mb-2">
                    <input type="email" v-model="form.email" class="form-control form-control-lg" placeholder="请输入你的邮箱">
                  </div>

                  <div class="input-group mb-4">
                    <input type="password" v-model="form.password" class="form-control form-control-lg" placeholder="请输入你的密码">
                  </div>
                  <div class="form-group d-flex justify-content-between">
                    <label class="c_checkbox">
                      <input type="checkbox">
                      <span class="ms-2 todo_name">记住我</span>
                      <span class="checkmark"></span>
                    </label>
                    <a class="link" href="#">重制密码</a>
                  </div>

                  <div class="text-center mt-5">
                    <a class="btn btn-lg btn-primary" title="" @click="login">登录</a>
                  </div>
                </form>

                <p class="text-center mb-0">还没有账号,点击
                  <router-link :to="{name:'register'}" class="link">注册</router-link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div class="signin-img d-none d-lg-block text-center">
            <img src="../assets/img/auth-img.svg" alt="Sign In Image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";

/**
 * TODO 2022-07-11
 */
export default {
  name: "LoginView",
  components: {},
  data: function () {
    return {
      form: {
        password: '',
        email: ''
      }
    }
  },
  methods: {
    login() {
      if (this.form.email.length === 0) {
        this.$swal({
          icon: 'error',
          text: '邮箱不能为空!',
        })
        return;
      }

      if (this.form.email.length >= 1) {
        let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if (!reg.test(this.form.email)) {
          this.$swal({
            icon: 'error',
            text: '邮箱格式不正确!',
          })
          return;
        }
      }

      if (this.form.password.length === 0) {
        this.$swal({
          icon: 'error',
          text: '密码不能为空!',
        })
        return;
      }

      api.post('sys/user/login', this.form).then(res => {
        if (res.data.code === 0) {
          if (res.data.data.token){
            localStorage.setItem('token', res.data.data.token)
            this.$router.push({
              path: '/'
            })
            return
          }
        } else {
          this.$swal({
            icon: "error",
            text: res.data.message
          })
        }
      });

    }

  }
}
</script>