<template>
  <div>
      <el-container>
  <el-header>
    <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA3lBMVEVDuIVNaowvhF7///82SV5DuoNDuYRNZ4xNZoxOZIxCvYRDuYdKtYv9//9LeYtFqIdNbYxHnYgtQVdKhYpCsIROYo1JkYk1SV4viWE7onVEroY0l2w0lGpJjIlGt4cvjWRImIgzs38zQVxLf4qn1MLl9O50folGo4dBq35Mdos/rn49png4nXHJ6dxPWmgsO1RCkXrX2t0XMEstSVl+iJE6em8iOU6CxamiqbAyYGLY7ORet5PIzdAtUFi33s5lcX09hXSXzbaNlJw2b2i2ur86XWXGys7j6ep0v6BYtI3KGdIyAAAIuElEQVR4nN2dfXfTNhSHxRxrWxyvW5bNadqlJKPQpWkDAdJCodACpf3+X2iS4xfZkhOnvtK95vljO1CfnNOHa1m/K8lhPznlaBZwzmLS/7vC/+fnJw1hLlUNT4JckmNXfPBrU1dOZe0HXKrCkeX/2biwHMqaj4Uo3+euLa3ho+aF5UzWoRysfAxNa7q/NS8sR7LkYMV9H08W3wMoLDeyxGDlx6DJAiksF7IOxGCVgOWK/wFRWPZlHQ0ChjhWrfF/h3BlW9bwVM4VsGUBFZZlWfMxwx2rElkwhWVV1gELkC2t8f/+hbosOVjRgEM8Ca3KOpVzULTHnwpYYdmSJbKNHKqwBysJRIK2KetwHDgPypVAJGh7suJGDBlZgIUFL2t4KrMN5nS9SBeusMBlzeOeFR1ZfO8vMFfAsuRgRcRSAkyCtiBrOAtk04qSLJjWjAVZ+0EQZxtKsvz/AF3ByTpgTNYVlbFqDVSChpV1OCPQiNHpAiVoSFnDmawoerKACwtE1v6YU2jE6HCoUAgm6yCg0l0oA5eggWQdDSgN6EXAWjMwskQMJFtXEJsbIGXJ9fiAqi7IBN1c1nqJC9tJJYCtmcayjmYyBtKVxQeACbqZrOGpjDaUZYEm6Eay1o0Yyq5gE3QDWYdjYn0YAzYK6xGyjk4CWp0FE1YKa2dZsmvMifVhDABtbmgmax7PqigPVjHQCfoxsg7HAXFLCcCtmUfIihsxBHsLOv5T4AS9s6x0+x62iRqAJ+gdZYlsg62gNuCtmd1kycEKW0F9oHt+O8kangS0Frg2YyFB15d1KrNNK8aqGAutmdqy5mNOP9yo2CusbbLkejz9+boKH8G3ZmrJGp6s15jbJMtKgq4haz/wGfJu/52xk6C3yjoYk1xk3oLNwqqUJbvGrD2PwBRLCXqjrPX2vXZkmwKWEvQmWXOqy1vbsFtYJllysGopdgtLl3U0a8+jr4y1BF0h64Te7r362GrNmGXNA97aW9B+YRVkyfV47F+4AXxsubAUWWJm1cK5goLFBF2WdRqwoEWNGB0bmxvMsua4b12AAPLcySZZhyxuxGD/uo0APXdSLStrxGD/vo2wmqAzWXkjBvv3bYLV1kwmKwjaPljFwJ47qZKFtcjMWX5+k+eULjJi+jS7CTqXZdlKBb2BQi+jECCC/O/Vq0f6p1lO0KksHILJmRcmeN75YjrtxyxeKmXOXy76CYtzT7K+/mxS/jg3hSXHLJQ0yHuhl/Fq2Ul53cuv6b3uRMlfL1/lV4c9/WZwUlhP0PaxT555ua43/U4USTHR9G1mInjbTxX23+SuvGdaYVlP0Niy+OxYKZaV8BTLivqj9J2Ao0WUFtZKKcPjmf5hblxhjVmCyYVSLZeL1EvnXfJvF7ybZq4ulUsv0AoLURafvFduxGzQ6kxfdMVPg+6LaSeprKijuHqvj+72EzS+LH6lOPiwzO65j2P50/HHZBjrRMsPyoVX2gfZb83gyxI34rUi4VM2mk8/y/dzfp5Giaz+J+Wya8TCQpXFB9ltGHrfl2llRdHA56P4+RiP+cvvypNgoH1K919XhYUqi01ulFHrNi+tL5x/mWbThlulsG70wnKRoCnIYur0wVtlD8T+3l7mKipOG7T5qIvWDA1Z/F6R9TW7EaffvmUPx9VX5ZJ7Lcm6LCxsWSIipqNR6J1npZUTnSuuziZ6YbkJOhRklSOibqsQCh+0hQJHCZqGLBkR00E+lBGxRP95/rw0hEK3hYUuqzDGf1+VS2ulTBuO9bci2Dp3QlUWK0TEVcnVpTK3uND7lLY3N5CTJSJiTml078hxP+H9RGuPOEvQVGQFMiJmRu6WqqzlXSpL/PeK670kt4VFQVZFRIxDYZhV1vVEkwX/ShDyshgb5EpERMxayZ1yKCy5cpigqchihYgYKhFxcauM7noodNiaoSSLT9QOcz+prKgf5rKOdVcWDzSRlsUKEXE92YpEKMzvznt9QcdlgiYkS9yIZ4qt87iN1T9XbsIzfZHCaYImJct/UGTFETESoTCXNSJRWERkxREx43lfDYWeMRTyF+4Li4osuYqYTx9WUbRUOs6hYWu+2wRNSxbzL5S77nKhrBSG3oV+udvWDDFZvFuIiFGk/EGEQu16O++aaYksoUtdRby7U/5wpd+ErhM0OVkiIipd0xx9pZA529xAVhYbGF0ZVgqxCouOLBaIiGjgRm9j8YH7KRYxWaVVxATTBiP3CZqgLBERtTvxXr/KfWuGpKxCRKyeNmAVFi1Z7MEr1FYYPujnH0G+ivYHkMULG029OBRqsjASNEVZ5TE+nOlHBDBaM0RlFTaaypVCTRZiYVGTpawihmJ09/UDKigJmqgspkTEK8MLUVFaM1RlKauI14ZpA2phkZPF/FG6CD0yfKUr1FfR/iCyeBoRbyb6a16wEjRVWSJQxx3m45npnAzek5CmLObHEfHCcGQUubAoyoo3moppg/4DtARNVxbjIiI+GA7Y4iVoyrIm19f6vmSMzQ0tkMVYz/Taa4fnTloly3TK3cUrQVopy4SPmKDbJguzNdM6WV0XrwT5QWThJuiWycLZ3FACW0JNSBRWW2QhbW4ogS2hHtgJOgFbQ03Qp1gx2BZq4fzcSQXYHuqA3ppJwRZRB/TWTAq2iBrgt2ZSsE3UAHMNugi2ie1QSNAJ2Cq2Q6ew6MtCOXdSAbaLraBubiiB7WIbNBJ0AraMbZBozaRgy9iC41eCbAHbxjbIPAkl2DI2Q6Q1k4KtYwukCou2LDIJOgHbxyboJOgEbCGbcPB9J7uBLWQDiOdOKsA2sgECmxtKYBuphlBrJgVbSTWEWjMp2EoqIZWgE7CdVEIqQSdgO6mCYmHRlUWwsKjKIpagE7CtVEHuSSjBlmKGZmHRlMUHJF3RlEWtNZOC7cUEudZMCrYYE1QLi6IsAudOKsA2Y4BeayYF24wOwdZMCrYaHSdfRfs4sNVokEzQCdhuNEgm6IT/AfCy5FTqAXdwAAAAAElFTkSuQmCC" alt="">
  </el-header>
  <el-main>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
   <el-form-item label="用户密码" prop="password">
    <el-input tpye="password" v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </el-main>
</el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          username: 'hewenqi',
          password: '111111'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
               const _this =this
                this.$axios.post("/login",this.ruleForm).then(res =>{
                const jwt = res.headers['authorization']

                const userInfo =res.data.data
                console.log(userInfo);
                _this.$store.commit("SET_TOKEN",jwt)
                _this.$store.commit("SET_USERINFO",userInfo)             
                console.log(_this.$store.getters.getUser);
                _this.$router.push("/blogs")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: yellow;
    color: yellow;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /*background-color: #E9EEF3;*/
    color:yellow;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
  .logo{
      height: 70%;
    margin-top: 10px;
  }
  
  .demo-ruleForm{
      max-width: 500px;
      margin: 0 auto;
  }
</style>