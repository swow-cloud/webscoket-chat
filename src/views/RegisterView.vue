<template>
  <!DOCTYPE html>
  <html lang="en">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Responsive Bootstrap 4 and web Application ui kit.">
  <title>注册</title>

  <body>

  <div id="layout" class="theme-cyan">
    <div class="authentication">
      <div class="container d-flex flex-column">
        <div class="row align-items-center justify-content-center no-gutters min-vh-100">
          <div class="col-12 col-md-7 col-lg-5 col-xl-4 py-md-11">
            <div class="card border-0 shadow-sm">
              <div class="card-body">

                <h3 class="text-center">注册</h3>

                <p class="text-center mb-6">创建你的账户</p>

                <form class="mb-4 mt-5">

                  <div class="input-group mb-2">
                    <input v-model="form.username" type="text" class="form-control form-control-lg"
                           placeholder="请输入您的名字">
                  </div>

                  <div class="input-group mb-2">
                    <input v-model="form.email" type="email" class="form-control form-control-lg"
                           placeholder="请输入您的邮箱">
                  </div>

                  <div class="input-group mb-4">
                    <input v-model="form.password" type="password" class="form-control form-control-lg"
                           placeholder="请确认您的密码">
                  </div>

                  <div class="text-center mt-5">
                    <a class="btn btn-lg btn-primary" @click="register">注册</a>
                  </div>
                </form>
                <p class="text-center mb-0">已有账户?
                  <router-link :to="{ name: 'login'}" class="link">登录.</router-link>
                </p>

                <div class="mt-4 d-grid gap-1">
                  <button type="button" class="btn btn-block btn-outline-google">Signup with QQ
                  </button>
                  <button type="button" class="btn btn-block btn-outline-facebook">Signup with Weixin
                  </button>
                </div>
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

  </body>
  </html>

</template>

<script>
import api from '@/api/api'

/**
 * 2022-07-12
 */
export default {
  name: "RegisterView",
  data: function () {
    return {
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    register() {
      if (this.form.username.length === 0) {
        this.$swal({
          icon: 'error',
          text: '用户名称不能为空',
        })
        return;
      }

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

      api.post('sys/user/register', this.form).then(res => {
        if (res.data.code === 0) {
          let timerInterval
          this.$swal({
            icon: 'success',
            html: '账号注册成功,页面将在<b></b>ms关闭',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              this.$swal.showLoading()
              const b = this.$swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = this.$swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
              this.$router.push({
                path: 'login'
              })
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === this.$swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          });
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

<style scoped>
@import '../assets/fonts/material-design-iconic-font.min.css';
@import '../assets/css/style.min.css';
</style>